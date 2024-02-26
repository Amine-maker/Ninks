import { supabase } from "@/config/supabase.config";
import { API_URL } from "../utils/constante";
import {
  type ApiUserDataToken,
  type ILoginPayload,
  type IRegisterPayload,
  type UiUser,
} from "../utils/interface.ui";
import axiosInstance from "./ApiInterceptor";

const AuthService = (): IAuthService => {
  return {
    async signIn(payload: ILoginPayload, callback: VoidFunction): Promise<UiUser | null> {
      return await axiosInstance
        .post<ApiUserDataToken, { data: ApiUserDataToken }>(`${API_URL}/auth/login`, payload)
        .then(
          (res) => {
            const dataTokenUser = res.data;
            const token = dataTokenUser.accessToken;
            const user: UiUser = {
              email: dataTokenUser.email,
              id: dataTokenUser.id,
              username: dataTokenUser.username,
              links: dataTokenUser.sites,
            };
            localStorage.setItem("token", token);
            callback();
            return user;
          },
          (err: string) => {
            throw new Error(`Erreur lors de la connexion {${err}}`);
          },
        );
    },
    async register(
      payload: IRegisterPayload,
      callback: VoidFunction,
    ): /* Promise<IUser | null> */ Promise<any> {
      const { data, error } = await supabase.auth.signUp({
        email: payload.email,
        password: payload.password,
        options: { emailRedirectTo: "https://localhost:5173/home" },
      });
    },
    async signOut(): Promise<void> {
      const { error } = await supabase.auth.signOut();
    },
  };
};

interface IAuthService {
  signIn: (payload: ILoginPayload, callback: VoidFunction) => Promise<UiUser | null>;
  register: (payload: IRegisterPayload, callback: VoidFunction) => Promise<UiUser | null>;
  signOut: (callback: VoidFunction) => Promise<void>;
}

export default AuthService;
