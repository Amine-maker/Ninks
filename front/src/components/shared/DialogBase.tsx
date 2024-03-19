import React, { type PropsWithChildren } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { dialogOpen } from "@/components/shared/store/DialogStore";
import { dialogAtom } from "@/hooks/DialogHook";

type Props = PropsWithChildren & {
  closeCallback?: () => Promise<void>;
  component?: React.FC;
};

export interface ActionDialog {
  label: string;
  className: string;
  callback?: () => void;
}

const DialogBase: React.FC<Props> = (props) => {
  const [open, setOpen] = useAtom(dialogAtom);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBase;
