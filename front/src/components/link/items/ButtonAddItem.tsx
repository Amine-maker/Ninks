import React from "react";
import { type LinkPatternName } from "../../../core/utils/interface.ui";
import { type IconName } from "@/assets/icon";
import IconSet from "@/components/shared/IconSet";
import { useSetAtom } from "jotai";
import { dialogAtom } from "@/hooks/DialogHook";

type Props = {
  children?: JSX.Element;
  title: string;
  description: string;
  icon: IconName;
  onAddItem: (linkType: LinkPatternName) => void;
};

const ButtonAddItemComponent = ({ icon, description, title, ...props }: Props): JSX.Element => {
  const setDialogState = useSetAtom(dialogAtom);
  return (
    <div
      onClick={() => {
        setDialogState(true);
      }}
      className="add-link-button min-w-80 flex-1"
    >
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
  );
};

export default ButtonAddItemComponent;
