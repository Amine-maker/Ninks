import React from "react";
import { type GridLayoutItem } from "../../../core/utils/interface.ui";
import { type IActionsBase } from "../../../core/utils/actionLinkInterface";
import IconSet from "@/components/shared/IconSet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export type ILayoutLinkProps = {
  actions: IActionsBase;
  customStyle?: React.CSSProperties;
  layoutElement: GridLayoutItem;
};
// each link item component
const LayoutMediaItemComponent = (props: ILayoutLinkProps): JSX.Element => {
  const id = props.layoutElement.i;
  console.log(id, props);

  return (
    <article className="item-container">
      {" "}
      <div className="actions relative">
        <Button
          icon={{ icon: "ArrowSquareUpRight", color: "#787878" }}
          className="absolute right-2 top-2 !size-7 p-2"
          variant={"secondary"}
        ></Button>
      </div>
      <div className="flex size-full flex-col gap-2 p-2">
        <div className="logo size-12 rounded-xl border border-gray-300 p-1.5 shadow-sm">
          <IconSet icon="InstagramColor" color="none" />
        </div>
        <div className="item-data">
          <Badge
            variant={"destructive"}
            className="little-item-ident bg-red-100 px-1.5 text-[10px] text-red-800"
          >
            @myusername
          </Badge>
        </div>
      </div>
    </article>
  );
};

export default LayoutMediaItemComponent;
