import React, { useState } from "react";
import { type LinkPatternName, type GridLayoutItem, type IActionsBase } from "../../core/utils/interface";
import PopoverBase from "../shared/PopoverBase";

export interface ILayoutLinkProps {
  type?: LinkPatternName;
  actions: IActionsBase;
  customStyle?: React.CSSProperties;
  layoutElement: GridLayoutItem;
}

const LayoutLinkItemComponent = (props: ILayoutLinkProps): JSX.Element => {
  const id = props.layoutElement.i;
  const [openPanel, setOpenPanel] = useState<boolean>(false);
  return (
    <>
      (<span className="text">{id}</span>)
      <span className="remove" style={props.customStyle}>
        <PopoverBase actions={props.actions}></PopoverBase>
      </span>
    </>
  );
};

export default LayoutLinkItemComponent;
