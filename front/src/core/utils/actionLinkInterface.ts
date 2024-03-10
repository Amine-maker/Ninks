import { type IconName } from "@/assets/icon";
import type BaseExternalApiService from "@/core/service/external-api/BaseService";
import type InstagramService from "@/core/service/external-api/InstagramService";
import { type TwitterService } from "@/core/service/external-api/InstagramService";

export interface IAction<T = void> {
  actionName: string;
  label: string;
  icon: IconName;
  callback: ActionCallback<T>;
}

export type IActionsBase = {
  remove: ActionCallback<number>;
  update?: ActionCallback<number>;
};

export type ActionCallback<T> = (payload: T) => void;

// Création d'une interface pour chaque action personnalisée
type TwitterActions = {
  name: "Twitter";
  tweet: IAction<string>;
};

export type InstagramActions = {
  send: IAction<string>;
};

type YoutubeActions = {
  embed: IAction<string>;
};

type StripeActions = {
  checkout: IAction<number>;
};

type GithubActions = {
  fork: IAction<string>;
};

type PaypalActions = {
  pay: IAction<number>;
};

type TiktokActions = {
  view: IAction<string>;
};

type DribbbleActions = {
  like: IAction<number>;
};

type RedditActions = {
  upvote: IAction<string>;
};

type FacebookActions = {
  share: IAction<number>;
};

type LinkedInActions = {
  connect: IAction<string>;
};

type BehanceActions = {
  appreciate: IAction<number>;
};

type SpotifyActions = {
  play: IAction<string>;
};

interface CustomActions extends IActionsBase {
  name: "Custom";
  customAction: IAction<any>;
}

export enum LinkPattern {
  Instagram = "Instagram",
  Twitter = "Twitter",
  Youtube = "Youtube",
  Stripe = "Stripe",
  Github = "Github",
  Paypal = "Paypal",
  Tiktok = "Tiktok",
  Dribbble = "Dribbble",
  Reddit = "Reddit",
  Facebook = "Facebook",
  LinkedIn = "LinkedIn",
  Behance = "Behance",
  Spotify = "Spotify",
  Custom = "Custom",
}

export type LinkPatternActions = {
  [LinkPattern.Instagram]: InstagramActions;
  [LinkPattern.Twitter]: TwitterActions;
  [LinkPattern.Youtube]: YoutubeActions;
  [LinkPattern.Stripe]: StripeActions;
  [LinkPattern.Github]: GithubActions;
  [LinkPattern.Paypal]: PaypalActions;
  [LinkPattern.Tiktok]: TiktokActions;
  [LinkPattern.Dribbble]: DribbbleActions;
  [LinkPattern.Reddit]: RedditActions;
  [LinkPattern.Facebook]: FacebookActions;
  [LinkPattern.LinkedIn]: LinkedInActions;
  [LinkPattern.Behance]: BehanceActions;
  [LinkPattern.Spotify]: SpotifyActions;
  [LinkPattern.Custom]: CustomActions;
};

export type DispatchAction<T extends LinkPattern> = LinkPatternActions[T];

export type TypedServiceMap = typeof InstagramService | typeof TwitterService;
