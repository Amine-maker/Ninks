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
  sites: any[];
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

export interface ILinkItem<T extends LinkPatternName | null> {
  id: string;
  userId: string;
  icon: JSX.Element;
  bgColor: BgColor;
  borderColor: BorderColor;
  textColor: TextColor;
  baseLink?: string;
  link: string;
  name: T;
  description: string;
  actions: any;
}

export interface IAction {
  popoverIcon?: JSX.Element;
  callback: (params?: any) => void;
}

export interface IActionsBase {
  remove: (id: number) => void;
  update?: (id: number) => void;
}

export type LinkPatternNameTest = "Youtube" | "Twitter";

// Création d'une interface pour chaque action personnalisée
interface TwitterActions extends IActionsBase {
  tweet: (message: string) => void;
}
interface InstagramActions extends IActionsBase {
  send: (message: string) => void;
}

enum LinkPattern { // mettre ca dans les enum et ajouter tous les types
  Instagram = "Instagram",
  Twitter = "Twitter",

  // Youtube = "Youtube",
  // Stripe = "Stripe",
  // Github = "Github",
  // Paypal = "Paypal",
  // Tiktok = "Tiktok",
  // Dribbble = "Dribbble",
  // Reddit = "Reddit",
  // Facebook = "Facebook",
  // LinkedIn = "LinkedIn",
  // Behance = "Behance",
  // Spotify = "Spotify",
  // Custom = "Custom",
}

interface LinkPatternActions {
  [LinkPattern.Instagram]: InstagramActions;
  [LinkPattern.Twitter]: TwitterActions;
  // ...
}

export type DispatchAction<T extends LinkPattern> = LinkPatternActions[T];

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
