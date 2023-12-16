import React from "react";
import { type IActionsBase } from "../../core/utils/actionLinkInterface";

interface IPopoverProps {
  actions: IActionsBase;
}

const PopoverBase = (props: IPopoverProps): JSX.Element => {
  return <div className=""></div>;
};

export default PopoverBase;
