import React, { useState } from "react";
import { BiLink } from "react-icons/bi";
import DialogFormAddLinkComponent from "../shared/DialogFormAddLinkComponent";

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
        <DialogFormAddLinkComponent
          open={openDialog}
          setOpen={setOpenDialog}
          closeCallback={() => {
            props.onAddItem();
          }}
        />
        <div className="p-4 rounded-xl border-gray-400 border-2 bg-background-invert-25 place-content-center flex-wrap flex">
          <span className="rounded-full border-2 border-gray-700 p-0.5">
            <BiLink size={20} />
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl">Ajouter un lien</h2>
          <p className="text-paragraph-25 font-bold text-sm opacity-70">Ajouter un super lien pour etre cool</p>
        </div>
      </div>
    </>
  );
};

export default ButtonAddLinkComponent;
