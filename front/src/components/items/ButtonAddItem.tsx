import React, { useState } from "react";
import DialogBase from "../shared/DialogBase";
import FormLinkComponent from "./FormLink";
import { type LinkPatternName } from "../../core/utils/interface.ui";
import { type IconName } from "@/assets/icon";
import IconSet from "@/components/shared/IconSet";

type Props = {
  children?: JSX.Element;
  title: string;
  description: string;
  icon: IconName;
  onAddItem: (linkType: LinkPatternName) => void;
};

const ButtonAddItemComponent = ({ icon, description, title, ...props }: Props): JSX.Element => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setOpenDialog(true);
        }}
        className="add-link-button min-w-80 flex-1"
      >
        <DialogBase
          actions={[
            {
              label: "Ajouter",
              className: "btn-primary",
              callback() {
                props.onAddItem("Custom");
              },
            },
            {
              label: "Annuler",
              className: "btn-secondary",
            },
          ]}
          open={openDialog}
          setOpen={setOpenDialog}
        >
          <FormLinkComponent />
        </DialogBase>

        <div className="flex items-center justify-center gap-8">
          <div className="rounded-full bg-primary-100 p-3 shadow-[0_0_0_10px_hsl(var(--primary-50))]">
            <IconSet icon={icon} size={30} color="#527875" />
          </div>
          <div className="flex-0 flex flex-col gap-2">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="text-sm text-gray-500 opacity-70">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonAddItemComponent;
