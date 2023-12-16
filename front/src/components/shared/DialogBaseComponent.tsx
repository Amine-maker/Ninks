import React, { Fragment } from "react";

interface Props {
  children: JSX.Element;
  open: boolean;
  dataStyle?: React.CSSProperties;
  setOpen: (value: boolean) => void;
  closeCallback?: () => void;
  actions: ActionDialog[];
}

export interface ActionDialog {
  label: string;
  className: string;
  callback?: () => void;
}

const DialogBaseComponent = (props: Props): JSX.Element => {
  const close = (): void => {
    props.setOpen(false);
    props.closeCallback?.();
  };

  return <></>;
};

export default DialogBaseComponent;
