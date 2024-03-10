import { type IconName } from "@/assets/icon";
import IconSet from "@/components/shared/IconSet";
import BaseExternalApiService from "@/core/service/external-api/BaseService";
import { type LinkPatternName } from "@/core/utils/interface.ui";
import React from "react";

type DropItemProps = {
  name: LinkPatternName;
  icon: IconName;
};

const DropItem: React.FC<DropItemProps> = ({ name, icon }) => {
  const baseActionService = BaseExternalApiService();
  const actions = baseActionService.getActions(name);

  console.log(actions);

  return (
    <div
      draggable
      className="flex h-14 w-20 cursor-grab overflow-hidden rounded-xl border border-gray-300 shadow-theme active:cursor-grabbing"
    >
      <div className="flex flex-1 basis-[25%] items-center justify-center bg-gray-200">
        <IconSet icon="DragIndicator" />
      </div>
      <div className="flex-1  basis-[75%] bg-white p-3">
        <IconSet className="h-full" icon={icon} />
      </div>
    </div>
  );
};

export default DropItem;
