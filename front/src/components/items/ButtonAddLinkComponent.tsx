import React from "react";

interface Props {
  children?: JSX.Element;
  onAddItem: () => void;
}

const ButtonAddLinkComponent = (props: Props): JSX.Element => {
  return (
    <button
      className="add-button"
      onClick={() => {
        props.onAddItem();
      }}
    >
      Add item
    </button>
  );
};

export default ButtonAddLinkComponent;
