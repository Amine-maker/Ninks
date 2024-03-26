import GridLayoutBaseComponent from "@/components/link/grid-layout/GridLayoutBase";
import React, { useState } from "react";

const BaseProfileLinks: React.FC = (props) => {
  const [, setLayout] = useState([]);

  const onLayoutChange = (newLayout: any): void => {
    setLayout(newLayout);
  };

  return (
    <>
      <GridLayoutBaseComponent onLayoutChange={onLayoutChange} />
    </>
  );
};

export default BaseProfileLinks;
