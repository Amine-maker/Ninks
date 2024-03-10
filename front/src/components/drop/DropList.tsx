import DropItem from "@/components/drop/DropItem";
import { type DropLayoutItem } from "@/core/utils/interface.ui";
import React, { type PropsWithChildren } from "react";

type DropListProps = PropsWithChildren & {
  items?: DropLayoutItem[];
};

const DropList: React.FC<DropListProps> = ({ children }) => {
  const dropItems: DropLayoutItem[] = [
    { icon: "Anchor", name: "Instagram" },
    { icon: "GithubSquare", name: "Twitter" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">Drop your items</h2>
      {dropItems != null ? (
        <div className="flex w-full gap-3 rounded-xl border border-gray-300 p-3">
          {dropItems.map((item, index) => {
            return <DropItem key={index} icon={item.icon} name={item.name}></DropItem>;
          })}
        </div>
      ) : (
        <div className="rounded-xl border border-gray-300 p-2 pl-4">
          <p> Your box is empty, add a link or a media first.</p>
        </div>
      )}
    </div>
  );
};

export default DropList;
