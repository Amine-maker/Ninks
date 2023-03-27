import { type Role } from "./enum";

export interface ILoginPayload {
  username: string;
  password: string;
}

export interface IUser {
  id: string;
  username: string;
  email: string;
  roles: string[];
  sites: Link[];
}

export interface Link {
  id: string;
  name: string;
  type: string;
  pattern?: Pattern;
  userId: string;
}

export type Pattern = "";

export interface ApiUserDataToken {
  accessToken: string;
  id: string;
  roles: string[];
  tokenType: string;
  username: string;
  email: string;
  sites: Link[];
}

export interface ApiUser extends Omit<IUser, "roles"> {
  authorities: Array<{ authority: string }>;
}

export interface UiRenderIf {
  children: any;
  isTrue: boolean;
}

export interface IRegisterPayload {
  email: string;
  password: string;
  username: string;
  roles?: Role[];
}

export interface ILinks {
  to: string;
  hidden: boolean;
  displayName: string;
  selected: boolean;
  icon?: any;
}

export interface ICustomEventData {
  x: number;
  y?: number;
}
