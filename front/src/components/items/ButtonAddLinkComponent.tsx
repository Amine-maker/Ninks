import React, { useState } from "react";
import { BiLink } from "react-icons/bi";
import DialogBaseComponent from "../shared/DialogBaseComponent";

interface Props {
  children?: JSX.Element;
  onAddItem: () => void;
}

const ButtonAddLinkComponent = (props: Props): JSX.Element => {
  const [openDialog, setOpenDialog] = useState(false);
  console.log(openDialog);
  return (
    <>
      <div
        onClick={() => {
          setOpenDialog(true);
        }}
        className="add-link-button"
      >
        <DialogBaseComponent
          actions={[
            {
              label: "Ajouter",
              className: "btn-primary",
              clickCallback() {
                props.onAddItem();
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
          <div className="mt-2">
            <p className="text-sm text-gray-500">form content a mettre</p>
          </div>
        </DialogBaseComponent>
        <div className="p-4 rounded-xl  bg-background-invert-25 place-content-center flex-wrap flex">
          <span className="rounded-full p-0.5">
            <BiLink size={20} color="var(--stroke)" />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Ajouter un lien</h2>
          <p className="text-gray-500 font-bold text-sm opacity-70">Ajouter un super lien pour etre cool</p>
        </div>
      </div>
    </>
  );
};

export default ButtonAddLinkComponent;
