import React, { useState } from "react";
import { BiLink } from "react-icons/bi";
import DialogBase from "../shared/DialogBase";
import FormLinkComponent from "./FormLink";
import { type LinkPatternName } from "../../core/utils/interface.ui";

interface Props {
  children?: JSX.Element;
  onAddItem: (linkType: LinkPatternName) => void;
}

const ButtonAddLinkComponent = (props: Props): JSX.Element => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          setOpenDialog(true);
        }}
        className="add-link-button"
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
        <div className="p-4 rounded-xl bg-background-invert-25 place-content-center flex-wrap flex">
          <span className="rounded-full p-0.5">
            <BiLink size={20} color="var(--stroke)" />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Ajouter un lien</h2>
          <p className="text-gray-500 font-bold text-sm opacity-70">Ajouter un super lien pour être cool</p>
        </div>
      </div>
    </>
  );
};

export default ButtonAddLinkComponent;
