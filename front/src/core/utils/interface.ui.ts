import { type Role } from "./enum";
import { type LinkPattern, type DispatchAction } from "./actionLinkInterface";

export type ILoginPayload = {
  username: string;
  password: string;
};

export type UiUser = {
  id: string;
  username: string;
  email: string;
  links: any[];
};

export type GridLayoutItem = {
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
};

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

export type ApiUserDataToken = {
  accessToken: string;
  id: string;
  roles: string[];
  tokenType: string;
  username: string;
  email: string;
  sites: any[];
};

export interface GenericError {
  status: string;
  data: string;
  internal: boolean;
  statusText: string;
  error: ErrorMessage;
}

export type LinkItemChoice = {
  icon: JSX.Element;
  bgColor: BgColor;
  borderColor: BorderColor;
  textColor: TextColor;
  baseLink?: string;
  name: LinkPatternName;
  description: string;
  fw?: boolean;
};

export type LinkItem<T extends LinkPattern> = {
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
};

// Access au donnée via le type LinkPatternName

// const enumLinkValue = LinkPattern[LinkPattern.Behance];

// const t: ILinkItem<typeof enumLinkValue> = {
//   actions: {},
// };

export interface ErrorMessage {
  message: string;
  stack: string;
}

export type ApiUser = Omit<UiUser, "roles"> & {
  authorities: Array<{ authority: string }>;
};

export type UiRenderIf = {
  children: JSX.Element;
  isTrue: boolean;
};

export type IRegisterPayload = {
  email: string;
  password: string;
  username: string;
  roles?: Role[];
};

export type UiLinks = {
  to: string;
  hidden: boolean;
  displayName: string;
  selected: boolean;
  icon?: JSX.Element;
  customStyle?: React.CSSProperties;
};

// Model
