import { type IAction } from "@/core/utils/actionLinkInterface";

const InstagramService = (): UiInstagramService => {
  return {
    actions: [
      {
        actionName: "send",
        label: "Send Blabla",
        icon: "Share01",
        callback: () => {
          console.log("test");
        },
      },
    ],
  };
};

export const TwitterService = (): UiInstagramService => {
  return {
    actions: [
      {
        actionName: "send",
        label: "Send Blabla",
        icon: "Share01",
        callback: () => {
          console.log("test");
        },
      },
    ],
  };
};

export type UiInstagramService = {
  name?: "Instagram";
  actions: IAction[];
};

export type UiTwitterService = {
  name?: "Twitter";
  actions: IAction[];
};

export default InstagramService;
