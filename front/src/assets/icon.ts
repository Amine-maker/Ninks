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
  LineBarChart: lazy(async () => await import("@assets/icons/barLineChart.svg")),
  Instagram: lazy(async () => await import("@assets/icons/instagram-color-icon.svg")),
  Twitter: lazy(async () => await import("@assets/icons/twitter-square-color-icon.svg")),
  Github: lazy(async () => await import("@assets/icons/github_square_icon.svg")),
  Dribbble: lazy(async () => await import("@assets/icons/dribbble-square-color-icon.svg")),
  Stripe: lazy(async () => await import("@assets/icons/stripe-icon.svg")),
  Paypal: lazy(async () => await import("@assets/icons/paypal-icon.svg")),
  Tiktok: lazy(async () => await import("@assets/icons/tiktok-square-color-icon.svg")),
  Youtube: lazy(async () => await import("@assets/icons/youtube-square-color-icon.svg")),
  Home: lazy(async () => await import("@assets/icons/home-icon.svg")),
  Palette: lazy(async () => await import("@/assets/icons/palette-icon.svg")),
  Nink: lazy(async () => await import("@/assets/icons/logo-dark.svg")),
};

export type IconName = keyof typeof icons;
