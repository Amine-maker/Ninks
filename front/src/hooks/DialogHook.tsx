import { type IconName } from "@/assets/icon";
import { atom } from "jotai";

export type DialogAtomeValue = {
  open: boolean;
  onOpenDialog: VoidFunction;
  onCloseDialog: VoidFunction;
  component: React.ReactNode;
  actions?: DialogAction[];
  width: string | number;
};

export type DialogAction = {
  label: string;
  icon: IconName;
  callback: VoidFunction;
};

export const dialogBaseAtom = atom(false);
export const stepperDialogAtom = atom(false);
export const dialogMediaAtom = atom(false);
