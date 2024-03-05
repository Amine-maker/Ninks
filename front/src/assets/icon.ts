import { type HtmlHTMLAttributes, lazy as _lazy } from "react";

function lazy(
  importFn: () => Promise<any>,
): React.LazyExoticComponent<React.ComponentType<HtmlHTMLAttributes<HTMLDivElement>>> {
  return _lazy(async () => {
    const m = await importFn();
    return { default: m.ReactComponent };
  });
}

export const icons = {
  HeartCircle: lazy(async () => await import("@assets/icons/heart-circle.svg")),
  LogOut01: lazy(async () => await import("@assets/icons/log-out-01.svg")),
  CheckSquare: lazy(async () => await import("@assets/icons/check-square.svg")),
  LinkExternal02: lazy(async () => await import("@assets/icons/link-external-02.svg")),
  HelpOctagon: lazy(async () => await import("@assets/icons/help-octagon.svg")),
  Speedometer04: lazy(async () => await import("@assets/icons/speedometer-04.svg")),
  Toggle02Right: lazy(async () => await import("@assets/icons/toggle-02-right.svg")),
  InfoSquare: lazy(async () => await import("@assets/icons/info-square.svg")),
  Building08: lazy(async () => await import("@assets/icons/building-08.svg")),
  GoogleChrome: lazy(async () => await import("@assets/icons/google-chrome.svg")),
  DotsHorizontal: lazy(async () => await import("@assets/icons/dots-horizontal.svg")),
  Virus: lazy(async () => await import("@assets/icons/virus.svg")),
  TwitterSquareColor: lazy(async () => await import("@assets/icons/twitter-square-color.svg")),
  CheckCircleBroken: lazy(async () => await import("@assets/icons/check-circle-broken.svg")),
  Menu04: lazy(async () => await import("@assets/icons/menu-04.svg")),
  LogOut02: lazy(async () => await import("@assets/icons/log-out-02.svg")),
  Settings04: lazy(async () => await import("@assets/icons/settings-04.svg")),
  LinkExternal01: lazy(async () => await import("@assets/icons/link-external-01.svg")),
  SearchSm: lazy(async () => await import("@assets/icons/search-sm.svg")),
  ShieldDollar: lazy(async () => await import("@assets/icons/shield-dollar.svg")),
  Passcode: lazy(async () => await import("@assets/icons/passcode.svg")),
  LogOut03: lazy(async () => await import("@assets/icons/log-out-03.svg")),
  XCircle: lazy(async () => await import("@assets/icons/x-circle.svg")),
  Menu05: lazy(async () => await import("@assets/icons/menu-05.svg")),
  SlashCircle01: lazy(async () => await import("@assets/icons/slash-circle-01.svg")),
  Menu01: lazy(async () => await import("@assets/icons/menu-01.svg")),
  Equal: lazy(async () => await import("@assets/icons/equal.svg")),
  Settings01: lazy(async () => await import("@assets/icons/settings-01.svg")),
  Shield01: lazy(async () => await import("@assets/icons/shield-01.svg")),
  Speedometer02: lazy(async () => await import("@assets/icons/speedometer-02.svg")),
  ShieldPlus: lazy(async () => await import("@assets/icons/shield-plus.svg")),
  MedicalCircle: lazy(async () => await import("@assets/icons/medical-circle.svg")),
  Speedometer03: lazy(async () => await import("@assets/icons/speedometer-03.svg")),
  DotsGrid: lazy(async () => await import("@assets/icons/dots-grid.svg")),
  Key02: lazy(async () => await import("@assets/icons/key-02.svg")),
  ImageDown: lazy(async () => await import("@assets/icons/image-down.svg")),
  SlashCircle02: lazy(async () => await import("@assets/icons/slash-circle-02.svg")),
  Menu02: lazy(async () => await import("@assets/icons/menu-02.svg")),
  InstagramColor: lazy(async () => await import("@assets/icons/instagram-color.svg")),
  PlusSquare: lazy(async () => await import("@assets/icons/plus-square.svg")),
  Settings02: lazy(async () => await import("@assets/icons/settings-02.svg")),
  LogOut04: lazy(async () => await import("@assets/icons/log-out-04.svg")),
  Shield02: lazy(async () => await import("@assets/icons/shield-02.svg")),
  Speedometer01: lazy(async () => await import("@assets/icons/speedometer-01.svg")),
  InfoHexagon: lazy(async () => await import("@assets/icons/info-hexagon.svg")),
  CheckSquareBroken: lazy(async () => await import("@assets/icons/check-square-broken.svg")),
  Shield03: lazy(async () => await import("@assets/icons/shield-03.svg")),
  ShieldTick: lazy(async () => await import("@assets/icons/shield-tick.svg")),
  Settings03: lazy(async () => await import("@assets/icons/settings-03.svg")),
  HomeSmile: lazy(async () => await import("@assets/icons/home-smile.svg")),
  Key01: lazy(async () => await import("@assets/icons/key-01.svg")),
  Menu03: lazy(async () => await import("@assets/icons/menu-03.svg")),
  ZapOff: lazy(async () => await import("@assets/icons/zap-off.svg")),
  X: lazy(async () => await import("@assets/icons/x.svg")),
  Target01: lazy(async () => await import("@assets/icons/target-01.svg")),
  Link01: lazy(async () => await import("@assets/icons/link-01.svg")),
  CheckVerified01: lazy(async () => await import("@assets/icons/check-verified-01.svg")),
  EqualNot: lazy(async () => await import("@assets/icons/equal-not.svg")),
  Barlinechart: lazy(async () => await import("@assets/icons/barLineChart.svg")),
  Translate02: lazy(async () => await import("@assets/icons/translate-02.svg")),
  Toggle03Right: lazy(async () => await import("@assets/icons/toggle-03-right.svg")),
  Fingerprint04: lazy(async () => await import("@assets/icons/fingerprint-04.svg")),
  Toggle01Left: lazy(async () => await import("@assets/icons/toggle-01-left.svg")),
  LifeBuoy02: lazy(async () => await import("@assets/icons/life-buoy-02.svg")),
  PaletteIcon: lazy(async () => await import("@assets/icons/palette-icon.svg")),
  MinusSquare: lazy(async () => await import("@assets/icons/minus-square.svg")),
  Target02: lazy(async () => await import("@assets/icons/target-02.svg")),
  FaceIdSquare: lazy(async () => await import("@assets/icons/face-id-square.svg")),
  Archive: lazy(async () => await import("@assets/icons/archive.svg")),
  Link02: lazy(async () => await import("@assets/icons/link-02.svg")),
  CheckVerified03: lazy(async () => await import("@assets/icons/check-verified-03.svg")),
  CheckVerified02: lazy(async () => await import("@assets/icons/check-verified-02.svg")),
  Link03: lazy(async () => await import("@assets/icons/link-03.svg")),
  Target03: lazy(async () => await import("@assets/icons/target-03.svg")),
  Translate01: lazy(async () => await import("@assets/icons/translate-01.svg")),
  ZapCircle: lazy(async () => await import("@assets/icons/zap-circle.svg")),
  HeartRounded: lazy(async () => await import("@assets/icons/heart-rounded.svg")),
  LifeBuoy01: lazy(async () => await import("@assets/icons/life-buoy-01.svg")),
  Save03: lazy(async () => await import("@assets/icons/save-03.svg")),
  Fingerprint03: lazy(async () => await import("@assets/icons/fingerprint-03.svg")),
  BookmarkMinus: lazy(async () => await import("@assets/icons/bookmark-minus.svg")),
  DownloadCloud01: lazy(async () => await import("@assets/icons/download-cloud-01.svg")),
  LockKeyholeSquare: lazy(async () => await import("@assets/icons/lock-keyhole-square.svg")),
  SearchRefraction: lazy(async () => await import("@assets/icons/search-refraction.svg")),
  FileShield02: lazy(async () => await import("@assets/icons/file-shield-02.svg")),
  Asterisk02: lazy(async () => await import("@assets/icons/asterisk-02.svg")),
  MedicalCross: lazy(async () => await import("@assets/icons/medical-cross.svg")),
  FileShield03: lazy(async () => await import("@assets/icons/file-shield-03.svg")),
  EyeOff: lazy(async () => await import("@assets/icons/eye-off.svg")),
  YoutubeSquareColor: lazy(async () => await import("@assets/icons/youtube-square-color.svg")),
  HomeLine: lazy(async () => await import("@assets/icons/home-line.svg")),
  ImageCheck: lazy(async () => await import("@assets/icons/image-check.svg")),
  HeartHand: lazy(async () => await import("@assets/icons/heart-hand.svg")),
  Fingerprint02: lazy(async () => await import("@assets/icons/fingerprint-02.svg")),
  Save02: lazy(async () => await import("@assets/icons/save-02.svg")),
  HelpSquare: lazy(async () => await import("@assets/icons/help-square.svg")),
  NinkLogoDarkgreen: lazy(async () => await import("@assets/icons/nink-logo-darkgreen.svg")),
  DownloadCloud02: lazy(async () => await import("@assets/icons/download-cloud-02.svg")),
  Plus: lazy(async () => await import("@assets/icons/plus.svg")),
  Check: lazy(async () => await import("@assets/icons/check.svg")),
  Target04: lazy(async () => await import("@assets/icons/target-04.svg")),
  FileShield01: lazy(async () => await import("@assets/icons/file-shield-01.svg")),
  HeartHexagon: lazy(async () => await import("@assets/icons/heart-hexagon.svg")),
  Link04: lazy(async () => await import("@assets/icons/link-04.svg")),
  LogoDark: lazy(async () => await import("@assets/icons/logo-dark.svg")),
  Asterisk01: lazy(async () => await import("@assets/icons/asterisk-01.svg")),
  Link05: lazy(async () => await import("@assets/icons/link-05.svg")),
  SlashDivider: lazy(async () => await import("@assets/icons/slash-divider.svg")),
  Target05: lazy(async () => await import("@assets/icons/target-05.svg")),
  ShieldZap: lazy(async () => await import("@assets/icons/shield-zap.svg")),
  Nink: lazy(async () => await import("@assets/icons/nink.svg")),
  Fingerprint01: lazy(async () => await import("@assets/icons/fingerprint-01.svg")),
  Save01: lazy(async () => await import("@assets/icons/save-01.svg")),
  Share04: lazy(async () => await import("@assets/icons/share-04.svg")),
  InfoCircle: lazy(async () => await import("@assets/icons/info-circle.svg")),
  Divide03: lazy(async () => await import("@assets/icons/divide-03.svg")),
  Percent01: lazy(async () => await import("@assets/icons/percent-01.svg")),
  Download02: lazy(async () => await import("@assets/icons/download-02.svg")),
  Upload02: lazy(async () => await import("@assets/icons/upload-02.svg")),
  BookmarkX: lazy(async () => await import("@assets/icons/bookmark-x.svg")),
  Copy03: lazy(async () => await import("@assets/icons/copy-03.svg")),
  FilterLines: lazy(async () => await import("@assets/icons/filter-lines.svg")),
  Copy02: lazy(async () => await import("@assets/icons/copy-02.svg")),
  Upload03: lazy(async () => await import("@assets/icons/upload-03.svg")),
  HeartSquare: lazy(async () => await import("@assets/icons/heart-square.svg")),
  SearchLg: lazy(async () => await import("@assets/icons/search-lg.svg")),
  Download03: lazy(async () => await import("@assets/icons/download-03.svg")),
  CheckCircle: lazy(async () => await import("@assets/icons/check-circle.svg")),
  Pin02: lazy(async () => await import("@assets/icons/pin-02.svg")),
  SlashOctagon: lazy(async () => await import("@assets/icons/slash-octagon.svg")),
  Scan: lazy(async () => await import("@assets/icons/scan.svg")),
  Divide02: lazy(async () => await import("@assets/icons/divide-02.svg")),
  Share05: lazy(async () => await import("@assets/icons/share-05.svg")),
  Share07: lazy(async () => await import("@assets/icons/share-07.svg")),
  GithubSquare: lazy(async () => await import("@assets/icons/github-square.svg")),
  Percent02: lazy(async () => await import("@assets/icons/percent-02.svg")),
  XSquare: lazy(async () => await import("@assets/icons/x-square.svg")),
  Download01: lazy(async () => await import("@assets/icons/download-01.svg")),
  Upload01: lazy(async () => await import("@assets/icons/upload-01.svg")),
  HeartOctagon: lazy(async () => await import("@assets/icons/heart-octagon.svg")),
  Paypal: lazy(async () => await import("@assets/icons/paypal.svg")),
  Copy01: lazy(async () => await import("@assets/icons/copy-01.svg")),
  LogIn04: lazy(async () => await import("@assets/icons/log-in-04.svg")),
  Pin01: lazy(async () => await import("@assets/icons/pin-01.svg")),
  Percent03: lazy(async () => await import("@assets/icons/percent-03.svg")),
  Divide01: lazy(async () => await import("@assets/icons/divide-01.svg")),
  Share06: lazy(async () => await import("@assets/icons/share-06.svg")),
  MedicalSquare: lazy(async () => await import("@assets/icons/medical-square.svg")),
  Share02: lazy(async () => await import("@assets/icons/share-02.svg")),
  HomeIcon: lazy(async () => await import("@assets/icons/home-icon.svg")),
  AtSign: lazy(async () => await import("@assets/icons/at-sign.svg")),
  SearchMd: lazy(async () => await import("@assets/icons/search-md.svg")),
  Download04: lazy(async () => await import("@assets/icons/download-04.svg")),
  Upload04: lazy(async () => await import("@assets/icons/upload-04.svg")),
  Stripe: lazy(async () => await import("@assets/icons/stripe.svg")),
  Copy05: lazy(async () => await import("@assets/icons/copy-05.svg")),
  Copy04: lazy(async () => await import("@assets/icons/copy-04.svg")),
  FilterFunnel02: lazy(async () => await import("@assets/icons/filter-funnel-02.svg")),
  LogIn01: lazy(async () => await import("@assets/icons/log-in-01.svg")),
  FaceId: lazy(async () => await import("@assets/icons/face-id.svg")),
  Share03: lazy(async () => await import("@assets/icons/share-03.svg")),
  Share01: lazy(async () => await import("@assets/icons/share-01.svg")),
  NinkLogo: lazy(async () => await import("@assets/icons/nink-logo.svg")),
  Anchor: lazy(async () => await import("@assets/icons/anchor.svg")),
  LogIn03: lazy(async () => await import("@assets/icons/log-in-03.svg")),
  Copy06: lazy(async () => await import("@assets/icons/copy-06.svg")),
  Copy07: lazy(async () => await import("@assets/icons/copy-07.svg")),
  FilterFunnel01: lazy(async () => await import("@assets/icons/filter-funnel-01.svg")),
  CheckHeart: lazy(async () => await import("@assets/icons/check-heart.svg")),
  LogIn02: lazy(async () => await import("@assets/icons/log-in-02.svg")),
  PlusCircle: lazy(async () => await import("@assets/icons/plus-circle.svg")),
  FolderShield: lazy(async () => await import("@assets/icons/folder-shield.svg")),
  ZapFast: lazy(async () => await import("@assets/icons/zap-fast.svg")),
  Edit02: lazy(async () => await import("@assets/icons/edit-02.svg")),
  Trash04: lazy(async () => await import("@assets/icons/trash-04.svg")),
  LockUnlocked01: lazy(async () => await import("@assets/icons/lock-unlocked-01.svg")),
  CloudBlank02: lazy(async () => await import("@assets/icons/cloud-blank-02.svg")),
  Toggle01Right: lazy(async () => await import("@assets/icons/toggle-01-right.svg")),
  FileLock02: lazy(async () => await import("@assets/icons/file-lock-02.svg")),
  PasscodeLock: lazy(async () => await import("@assets/icons/passcode-lock.svg")),
  Eye: lazy(async () => await import("@assets/icons/eye.svg")),
  Building01: lazy(async () => await import("@assets/icons/building-01.svg")),
  FileLock03: lazy(async () => await import("@assets/icons/file-lock-03.svg")),
  Lock04: lazy(async () => await import("@assets/icons/lock-04.svg")),
  Zap: lazy(async () => await import("@assets/icons/zap.svg")),
  Hash01: lazy(async () => await import("@assets/icons/hash-01.svg")),
  Tool01: lazy(async () => await import("@assets/icons/tool-01.svg")),
  Image01: lazy(async () => await import("@assets/icons/image-01.svg")),
  Edit03: lazy(async () => await import("@assets/icons/edit-03.svg")),
  Edit01: lazy(async () => await import("@assets/icons/edit-01.svg")),
  Image03: lazy(async () => await import("@assets/icons/image-03.svg")),
  LockUnlocked02: lazy(async () => await import("@assets/icons/lock-unlocked-02.svg")),
  Home04: lazy(async () => await import("@assets/icons/home-04.svg")),
  CloudBlank01: lazy(async () => await import("@assets/icons/cloud-blank-01.svg")),
  Activity: lazy(async () => await import("@assets/icons/activity.svg")),
  ZapSquare: lazy(async () => await import("@assets/icons/zap-square.svg")),
  FileLock01: lazy(async () => await import("@assets/icons/file-lock-01.svg")),
  Building03: lazy(async () => await import("@assets/icons/building-03.svg")),
  Building02: lazy(async () => await import("@assets/icons/building-02.svg")),
  DribbbleSquareColor: lazy(async () => await import("@assets/icons/dribbble-square-color.svg")),
  InfoOctagon: lazy(async () => await import("@assets/icons/info-octagon.svg")),
  MinusCircle: lazy(async () => await import("@assets/icons/minus-circle.svg")),
  Hearts: lazy(async () => await import("@assets/icons/hearts.svg")),
  Hash02: lazy(async () => await import("@assets/icons/hash-02.svg")),
  Tool02: lazy(async () => await import("@assets/icons/tool-02.svg")),
  TiktokSquareColor: lazy(async () => await import("@assets/icons/tiktok-square-color.svg")),
  Home05: lazy(async () => await import("@assets/icons/home-05.svg")),
  Image02: lazy(async () => await import("@assets/icons/image-02.svg")),
  LockUnlocked03: lazy(async () => await import("@assets/icons/lock-unlocked-03.svg")),
  Home01: lazy(async () => await import("@assets/icons/home-01.svg")),
  Trash02: lazy(async () => await import("@assets/icons/trash-02.svg")),
  Edit04: lazy(async () => await import("@assets/icons/edit-04.svg")),
  CheckDone02: lazy(async () => await import("@assets/icons/check-done-02.svg")),
  BookmarkCheck: lazy(async () => await import("@assets/icons/bookmark-check.svg")),
  Loading03: lazy(async () => await import("@assets/icons/loading-03.svg")),
  HelpHexagon: lazy(async () => await import("@assets/icons/help-hexagon.svg")),
  Lock03: lazy(async () => await import("@assets/icons/lock-03.svg")),
  BookmarkAdd: lazy(async () => await import("@assets/icons/bookmark-add.svg")),
  Bookmark: lazy(async () => await import("@assets/icons/bookmark.svg")),
  Building06: lazy(async () => await import("@assets/icons/building-06.svg")),
  Building07: lazy(async () => await import("@assets/icons/building-07.svg")),
  LinkBroken02: lazy(async () => await import("@assets/icons/link-broken-02.svg")),
  SpotifySquareColor: lazy(async () => await import("@assets/icons/spotify-square-color.svg")),
  LockKeyholeCircle: lazy(async () => await import("@assets/icons/lock-keyhole-circle.svg")),
  Lock02: lazy(async () => await import("@assets/icons/lock-02.svg")),
  Loading02: lazy(async () => await import("@assets/icons/loading-02.svg")),
  Edit05: lazy(async () => await import("@assets/icons/edit-05.svg")),
  UploadCloud02: lazy(async () => await import("@assets/icons/upload-cloud-02.svg")),
  Trash03: lazy(async () => await import("@assets/icons/trash-03.svg")),
  Trash01: lazy(async () => await import("@assets/icons/trash-01.svg")),
  Home02: lazy(async () => await import("@assets/icons/home-02.svg")),
  Image05: lazy(async () => await import("@assets/icons/image-05.svg")),
  LockUnlocked04: lazy(async () => await import("@assets/icons/lock-unlocked-04.svg")),
  ActivityHeart: lazy(async () => await import("@assets/icons/activity-heart.svg")),
  CheckDone01: lazy(async () => await import("@assets/icons/check-done-01.svg")),
  Building05: lazy(async () => await import("@assets/icons/building-05.svg")),
  Minus: lazy(async () => await import("@assets/icons/minus.svg")),
  Building04: lazy(async () => await import("@assets/icons/building-04.svg")),
  HelpCircle: lazy(async () => await import("@assets/icons/help-circle.svg")),
  LinkBroken01: lazy(async () => await import("@assets/icons/link-broken-01.svg")),
  ShieldOff: lazy(async () => await import("@assets/icons/shield-off.svg")),
  DotsVertical: lazy(async () => await import("@assets/icons/dots-vertical.svg")),
  Lock01: lazy(async () => await import("@assets/icons/lock-01.svg")),
  Loading01: lazy(async () => await import("@assets/icons/loading-01.svg")),
  XClose: lazy(async () => await import("@assets/icons/x-close.svg")),
  LogoWhite: lazy(async () => await import("@assets/icons/logo-white.svg")),
  UploadCloud01: lazy(async () => await import("@assets/icons/upload-cloud-01.svg")),
  Heart: lazy(async () => await import("@assets/icons/heart.svg")),
  Toggle03Left: lazy(async () => await import("@assets/icons/toggle-03-left.svg")),
  Image04: lazy(async () => await import("@assets/icons/image-04.svg")),
  Toggle02Left: lazy(async () => await import("@assets/icons/toggle-02-left.svg")),
  Placeholder: lazy(async () => await import("@assets/icons/placeholder.svg")),
  Home03: lazy(async () => await import("@assets/icons/home-03.svg")),
};

export type IconName = keyof typeof icons;
