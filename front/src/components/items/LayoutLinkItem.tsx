import React from "react";
import { type GridLayoutItem } from "../../core/utils/interface.ui";
import { type IActionsBase } from "../../core/utils/actionLinkInterface";
import IconSet from "@/components/shared/IconSet";
import { Button } from "@/components/ui/button";

export type ILayoutLinkProps = {
  actions: IActionsBase;
  customStyle?: React.CSSProperties;
  layoutElement: GridLayoutItem;
};
// each link item component
const LayoutLinkItemComponent = (props: ILayoutLinkProps): JSX.Element => {
  const id = props.layoutElement.i;
  console.log(id, props);

  return (
    <article className="item-container">
      <div className="size-full p-2">
        <div className="actions relative">
          <Button className="absolute right-0 size-6 p-1" variant={"secondary"}></Button>
        </div>
        <div className="logo size-12 rounded-xl border border-gray-300 p-1.5 shadow-sm">
          <IconSet icon="InstagramColor" color="none" />
        </div>
        <div className="item-data"></div>
      </div>
    </article>
  );
};

export default LayoutLinkItemComponent;
