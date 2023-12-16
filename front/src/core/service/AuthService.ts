import { supabase } from "@/config/supabase.config";
import { API_URL } from "../utils/constante";
import { type ApiUserDataToken, type ILoginPayload, type IRegisterPayload, type IUser } from "../utils/interface";
import axiosInstance from "./ApiInterceptor";

const AuthService = (): IAuthService => {
  return {
    async signIn(payload: ILoginPayload, callback: VoidFunction): Promise<IUser | null> {
      return await axiosInstance.post<ApiUserDataToken, { data: ApiUserDataToken }>(`${API_URL}/auth/login`, payload).then(
        (res) => {
          const dataTokenUser = res.data;
          const token = dataTokenUser.accessToken;
          const user: IUser = {
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
        }
      );
    },
    async register(payload: IRegisterPayload, callback: VoidFunction): /* Promise<IUser | null> */ Promise<any> {
      const { data, error } = await supabase.auth.signUp({
        email: payload.email,
        password: payload.password,
        options: { emailRedirectTo: "https://localhost:5173/home" },
      });

      // return await axiosInstance
      //   .post<ApiUserDataToken, { data: ApiUserDataToken }>(`${API_URL}/auth/signup`, payload)
      //   .then(
      //     (res) => {
      //       const registerUser = res.data;
      //       const user: IUser = {
      //         email: registerUser.email,
      //         id: registerUser.id,
      //         username: registerUser.username,
      //         links: registerUser.sites,
      //       };
      //       void this.signIn({ username: payload.username, password: payload.password }, () => {
      //         console.log("good signin");
      //       });
      //       return user;
      //     },
      //     (err: string) => {
      //       throw new Error(`Erreur lors de la connexion { err : ${err}}`);
      //     }
      //   )
      //   .catch(() => {
      //     throw new Error("Erreur lors de la connexion");
      //   });
    },
    async signOut(): Promise<void> {
      const { error } = await supabase.auth.signOut();
    },
  };
};

interface IAuthService {
  signIn: (payload: ILoginPayload, callback: VoidFunction) => Promise<IUser | null>;
  register: (payload: IRegisterPayload, callback: VoidFunction) => Promise<IUser | null>;
  signOut: (callback: VoidFunction) => Promise<void>;
}

export default AuthService;
