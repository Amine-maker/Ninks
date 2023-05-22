import React from "react";
import { type ILinkItemChoice, type LinkPatternName } from "./interface";
import { BsInstagram } from "react-icons/bs";
import { ReactComponent as InstaSVG } from "../../assets/instagram-color-icon.svg";
import { ReactComponent as TwitterSVG } from "../../assets/twitter-square-color-icon.svg";
import { ReactComponent as DribbbleSVG } from "../../assets/dribbble-square-color-icon.svg";
import { ReactComponent as GithubSVG } from "../../assets/github_square_icon.svg";
import { ReactComponent as StripeSVG } from "../../assets/stripe-icon.svg";
import { ReactComponent as PaypalSVG } from "../../assets/paypal-icon.svg";
import { ReactComponent as TiktokSVG } from "../../assets/tiktok-square-color-icon.svg";
import { ReactComponent as YoutubeSVG } from "../../assets/youtube-square-color-icon.svg";
import { ReactComponent as SpotifySVG } from "../../assets/spotify-square-color-icon.svg";

export const LinkChoiceMap = new Map<LinkPatternName, ILinkItemChoice>();

LinkChoiceMap.set("Custom", {
  bgColor: "bg-[#94C0D3]",
  textColor: "text-[#5b7581]",
  borderColor: "border-[#5b7581]",
  name: "Custom",
  fw: true,
  description: "partager un lien",
  icon: <BsInstagram size={42} />,
});

LinkChoiceMap.set("Instagram", {
  bgColor: "bg-[#E4405F]",
  textColor: "text-[#5f3d44]",
  borderColor: "border-[#5f3d44]",
  name: "Instagram",
  description: "partager vos photo et reels",
  icon: <InstaSVG width={45} />,
});

LinkChoiceMap.set("Twitter", {
  bgColor: "bg-[#1DA1F2]",
  textColor: "text-[#09639A]",
  borderColor: "border-[#09639A]",
  name: "Twitter",
  description: "partager vos tweets",
  icon: <TwitterSVG width={45} />,
});

LinkChoiceMap.set("Dribbble", {
  bgColor: "bg-[#EA4C89]",
  textColor: "text-[#F5809D]",
  borderColor: "border-[#F5809D]",
  name: "Dribbble",
  description: "partager vos tweets",
  icon: <DribbbleSVG width={45} />,
});
LinkChoiceMap.set("Github", {
  bgColor: "bg-[#333]",
  textColor: "text-[#212529]",
  borderColor: "border-[#212529]",
  name: "Github",
  description: "partager vos tweets",
  icon: <GithubSVG width={45} />,
});

LinkChoiceMap.set("Stripe", {
  bgColor: "bg-[#5433ff]",
  textColor: "text-[#4379FF]",
  borderColor: "border-[#4379FF]",
  name: "Stripe",
  description: "partager vos tweets",
  icon: <StripeSVG width={45} />,
});

LinkChoiceMap.set("Paypal", {
  bgColor: "bg-[#1DA1F2]",
  textColor: "text-[#09639A]",
  borderColor: "border-[#09639A]",
  name: "Paypal",
  description: "partager vos tweets",
  icon: <PaypalSVG width={35} />,
});

LinkChoiceMap.set("Tiktok", {
  bgColor: "bg-[#EE1D51]",
  textColor: "text-[#F5809D]",
  borderColor: "border-[#F5809D]",
  name: "Tiktok",
  description: "partager vos tweets",
  icon: <TiktokSVG width={45} />,
});

LinkChoiceMap.set("Youtube", {
  bgColor: "bg-[#CD201F]",
  textColor: "text-[#E76463]",
  borderColor: "border-[#E76463]",
  name: "Youtube",
  description: "partager vos tweets",
  icon: <YoutubeSVG width={45} />,
});

LinkChoiceMap.set("Spotify", {
  bgColor: "bg-[#1ed760]",
  textColor: "text-[#1db954]",
  borderColor: "border-[#1db954]",
  name: "Spotify",
  description: "partager vos tweets",
  icon: <SpotifySVG width={45} />,
});
