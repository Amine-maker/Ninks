import React, { useState, useEffect } from "react";
import AuthService from "@service/AuthService";
import UserService from "@service/UserService";
import { type ILoginPayload, type IRegisterPayload, type UiUser } from "../core/utils/interface.ui";

export const AuthContext = React.createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [user, setUser] = useState<UiUser | null>(null);
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
    setCurrentUser(user as UiUser);
  };

  const register = async (userPayload: IRegisterPayload, callback: VoidFunction): Promise<void> => {
    const u = await authService.register(userPayload, () => {
      console.log("test register successful");
      callback();
    });
    setIsAuthenticated(true);
    setCurrentUser(u as UiUser);
  };

  const signout = async (callback: VoidFunction): Promise<void> => {
    await authService.signOut(() => {
      setIsAuthenticated(false);
      setUser(null);
      callback();
    });
  };

  const setCurrentUser = (user: UiUser): void => {
    setUser(user);
    setIsAuthenticated(true);
  };

  const value = { user, signin, signout, isAuth, setCurrentUser, register };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export interface AuthContextType {
  user: UiUser | null;
  isAuth: boolean;
  signin: (payload: ILoginPayload, callback: VoidFunction) => void;
  register: (payload: IRegisterPayload, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
  setCurrentUser: (user: UiUser) => void;
}
export default AuthProvider;
