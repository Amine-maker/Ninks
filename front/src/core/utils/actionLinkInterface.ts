export interface IAction<T> {
  popoverIcon?: JSX.Element;
  callback: ActionCallback<T>;
}

export interface IActionsBase {
  remove: ActionCallback<number>;
  update?: ActionCallback<number>;
}

// Création d'une interface pour chaque action personnalisée
interface TwitterActions extends IActionsBase {
  tweet: IAction<string>;
}

interface InstagramActions extends IActionsBase {
  send: IAction<string>;
}

interface YoutubeActions extends IActionsBase {
  watch: IAction<string>;
}

interface StripeActions extends IActionsBase {
  checkout: IAction<number>;
}

interface GithubActions extends IActionsBase {
  fork: IAction<string>;
}

interface PaypalActions extends IActionsBase {
  pay: IAction<number>;
}

interface TiktokActions extends IActionsBase {
  view: IAction<string>;
}

interface DribbbleActions extends IActionsBase {
  like: IAction<number>;
}

interface RedditActions extends IActionsBase {
  upvote: IAction<string>;
}

interface FacebookActions extends IActionsBase {
  share: IAction<number>;
}

interface LinkedInActions extends IActionsBase {
  connect: IAction<string>;
}

interface BehanceActions extends IActionsBase {
  appreciate: IAction<number>;
}

interface SpotifyActions extends IActionsBase {
  play: IAction<string>;
}

interface CustomActions extends IActionsBase {
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

interface LinkPatternActions {
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
}

export type ActionCallback<T> = (payload: T) => void;

export type DispatchAction<T extends LinkPattern> = LinkPatternActions[T];
