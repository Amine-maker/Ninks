import { type ErrorResponse } from "@remix-run/router";
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

export interface GridLayoutItem {
  i: number;
  x: number;
  y: number;
  w: number;
  h: number;
  add?: boolean;
  minH: number;
  minW: number;
  maxW: number;
  maxH: number;
}

export interface Link {
  id: string;
  name: string;
  type: string;
  pattern?: LinkPatternName;
  userId: string;
}

export type LinkPatternName = "Instagram" | "Youtube" | "Twitter" | "Stripe" | "Github" | "Paypal" | "Tiktok" | "Dribbble" | "Reddit" | "Facebook" | "LinkedIn" | "Behance" | "Spotify" | "Custom";

export type BgColor = `bg-[#${string}]`;
export type TextColor = `text-[#${string}]`;
export type BorderColor = `border-[#${string}]`;

export interface ApiUserDataToken {
  accessToken: string;
  id: string;
  roles: string[];
  tokenType: string;
  username: string;
  email: string;
  sites: Link[];
}

export interface GenericError {
  status: string;
  data: string;
  internal: boolean;
  statusText: string;
  error: ErrorMessage;
}

export interface ILinkItemChoice {
  icon: JSX.Element;
  bgColor: BgColor;
  borderColor: BorderColor;
  textColor: TextColor;
  baseLink?: string;
  name: LinkPatternName;
  description: string;
  fw?: boolean;
}

export interface ErrorMessage {
  message: string;
  stack: string;
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
  icon?: JSX.Element;
  customStyle?: React.CSSProperties;
}
