import React, { useState, useEffect } from "react";
import AuthService from "../core/service/AuthService";
import UserService from "../core/service/UserService";
import { type ILoginPayload, type IRegisterPayload, type IUser } from "../core/utils/interface";

export const AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuth, setIsAuthenticated] = useState<boolean>(false);
  const [session] = useState<string | null>(localStorage.getItem("token"));
  const { getCurrentUser } = UserService();
  const authService = AuthService();

  useEffect(() => {
    if (session != null) {
      void getCurrentUser().then((user) => {
        if (user != null) {
          setCurrentUser({
            email: user.email,
            id: user.id,
            username: user.username,
            links: user.links,
          });
        }
      });
    }
  }, [session]);

  const signin = async (userPayload: ILoginPayload, callback: VoidFunction): Promise<void> => {
    const user = await authService.signIn(userPayload, () => {
      console.log("signin successful");
      callback();
    });

    setIsAuthenticated(true);
    setCurrentUser(user as IUser);
  };

  const register = async (userPayload: IRegisterPayload, callback: VoidFunction): Promise<void> => {
    const u = await authService.register(userPayload, () => {
      console.log("test register successful");
      callback();
    });
    setIsAuthenticated(true);
    setCurrentUser(u as IUser);
  };

  const signout = (callback: VoidFunction): void => {
    authService.signOut(() => {
      setIsAuthenticated(false);
      setUser(null);
      callback();
    });
  };

  const setCurrentUser = (user: IUser): void => {
    setUser(user);
    setIsAuthenticated(true);
  };

  const value = { user, signin, signout, isAuth, setCurrentUser, register };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export interface AuthContextType {
  user: IUser | null;
  isAuth: boolean;
  signin: (payload: ILoginPayload, callback: VoidFunction) => void;
  register: (payload: IRegisterPayload, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
  setCurrentUser: (user: IUser) => void;
}
export default AuthProvider;
