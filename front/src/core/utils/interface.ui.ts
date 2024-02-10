import { type Role } from "./enum";
import { type LinkPattern, type DispatchAction } from "./actionLinkInterface";

export interface ILoginPayload {
  username: string;
  password: string;
}

export interface IUser {
  id: string;
  username: string;
  email: string;
  links: any[];
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
  linkType?: LinkPatternName;
}

export type LinkPatternName =
  | "Instagram"
  | "Youtube"
  | "Twitter"
  | "Stripe"
  | "Github"
  | "Paypal"
  | "Tiktok"
  | "Dribbble"
  | "Reddit"
  | "Facebook"
  | "LinkedIn"
  | "Behance"
  | "Spotify"
  | "Custom";

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
  sites: any[];
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

export interface ILinkItem<T extends LinkPattern> {
  id: string;
  userId: string;
  icon: JSX.Element;
  bgColor: BgColor;
  borderColor: BorderColor;
  textColor: TextColor;
  baseLink?: string;
  link: string;
  name: LinkPatternName;
  description: string;
  actions: DispatchAction<T>;
}

// Access au donnée via le type LinkPatternName

// const enumLinkValue = LinkPattern[LinkPattern.Behance];

// const t: ILinkItem<typeof enumLinkValue> = {
//   actions: {},
// };

export interface ErrorMessage {
  message: string;
  stack: string;
}

export type ApiUser = Omit<IUser, "roles"> & {
  authorities: Array<{ authority: string }>;
};

export interface UiRenderIf {
  children: JSX.Element;
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

// Model
