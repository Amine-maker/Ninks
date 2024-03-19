import React, { type ReactNode, type PropsWithChildren } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAtom } from "jotai";
import { dialogAtom } from "@/hooks/DialogHook";

export type DialogProps = PropsWithChildren & {
  closeCallback?: () => Promise<void>;
  component?: ReactNode;
};

const DialogBase: React.FC<DialogProps> = ({ component, closeCallback, children }) => {
  const [open, setOpen] = useAtom(dialogAtom);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogBase;
