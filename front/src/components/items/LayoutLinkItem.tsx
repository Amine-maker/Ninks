import React from "react";
import { type GridLayoutItem } from "../../core/utils/interface.ui";
import PopoverBase from "../shared/PopoverBase";
import { type IActionsBase } from "../../core/utils/actionLinkInterface";

export interface ILayoutLinkProps {
  actions: IActionsBase;
  customStyle?: React.CSSProperties;
  layoutElement: GridLayoutItem;
}
// each link item component
const LayoutLinkItemComponent = (props: ILayoutLinkProps): JSX.Element => {
  const id = props.layoutElement.i;
  console.log(id, props);

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
