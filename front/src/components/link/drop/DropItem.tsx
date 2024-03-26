import { type IconName } from "@/assets/icon";
import IconSet from "@/components/shared/IconSet";
import BaseExternalApiService from "@/core/service/external-api/BaseService";
import { type LinkPatternName } from "@/core/utils/interface.ui";
import React, { useCallback, useState } from "react";

type DropItemProps = {
  name: LinkPatternName;
  icon: IconName;
};

const DropItem: React.FC<DropItemProps> = ({ name, icon }) => {
  const [isDragging, setIsDragging] = useState(false);
  const baseActionService = BaseExternalApiService();
  const actions = baseActionService.getActions(name);

  const handleDrag = (): void => {
    setIsDragging(true);
    console.log(isDragging);
  };

  const handleDrop = (): void => {
    setIsDragging(false);
    console.log(isDragging);
  };
  return (
    <div
      onDragEnter={handleDrag}
      onDrop={handleDrop}
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("text/plain", "");
      }}
      className="dropItem relative"
    >
      <div className="absolute left-0 top-0 size-full shadow-theme"></div>
      <div className="flex">
        <div className="flex flex-1 basis-[25%] items-center justify-center bg-gray-200">
          <IconSet icon="DragIndicator" />
        </div>
        <div className="flex-1 basis-[75%] bg-white p-3">
          <IconSet className="h-full" icon={icon} />
        </div>
      </div>
    </div>
  );
};

export default DropItem;
