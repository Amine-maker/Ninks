import React from "react";
import DialogBase from "@/components/shared/DialogBase";
import { atom } from "jotai";

export const dialogAtom = atom(false);

export const useDialog = () => {
  return <DialogBase />;
};
