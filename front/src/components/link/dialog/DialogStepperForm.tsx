import IconSet from "@/components/shared/IconSet";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { stepperDialogAtom } from "@/hooks/DialogHook";
import { useAtom } from "jotai";
import React, { useState } from "react";

type Props = {
  //
};

const DialogStepperForm: React.FC<Props> = () => {
  const [open, setOpen] = useAtom(stepperDialogAtom);
  const [step, setStep] = useState<number>(1);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-1/2">
        <DialogHeader>
          <DialogTitle>
            <div className="flex w-full items-center justify-between">
              <div className="rounded-full bg-primary-100 p-3 shadow-[0_0_0_10px_hsl(var(--primary-50))]">
                <IconSet icon="NinkLogoDarkgreen" size={25} color="#527875" />
              </div>
              <span className="">
                <Badge className="flex gap-2 bg-gray-200 text-gray-500">
                  <span>{step} / 2</span> <IconSet className="" icon="ArrowSquareUpRight" />
                </Badge>
              </span>
            </div>
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <section className="choice-item mt-8">test</section>
      </DialogContent>
    </Dialog>
  );
};

export default DialogStepperForm;
