import GridLayoutBaseComponent from "@/components/link/grid-layout/GridLayoutBase";
import DialogBase from "@/components/shared/DialogBase";
import React, { useState } from "react";

const BaseProfileLinks: React.FC = (props) => {
  const [, setLayout] = useState([]);

  const onLayoutChange = (newLayout: any): void => {
    setLayout(newLayout);
  };

  return (
    <>
      <GridLayoutBaseComponent onLayoutChange={onLayoutChange} />
      <DialogBase />
    </>
  );
};

export default BaseProfileLinks;
