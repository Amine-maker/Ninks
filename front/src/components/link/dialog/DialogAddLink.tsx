import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  setOpen: (value: boolean) => void;
  closeCallback?: () => void;
  actions: ActionDialog[];
};

export interface ActionDialog {
  label: string;
  className: string;
  callback?: () => void;
}

const DialogAddLink: React.FC<Props> = ({ setOpen, open }): JSX.Element => {
  const close = (): void => {
    setOpen(false);
  };

  const [openT, setOpenT] = useState(false);

  return (
    <Dialog open={openT} onOpenChange={setOpenT}>
      {" "}
      <DialogTrigger>open</DialogTrigger>
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

export default DialogAddLink;
