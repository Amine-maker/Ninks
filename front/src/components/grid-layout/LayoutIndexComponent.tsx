import React, { useState } from "react";
import GridLayoutBaseComponent from "./GridLayoutBaseComponent";

const LayoutIndex: React.FC = (props) => {
  const [_, setLayout] = useState([]);

  const onLayoutChange = (newLayout: any): void => {
    setLayout(newLayout);
  };

  return <GridLayoutBaseComponent onLayoutChange={onLayoutChange} />;
};

export default LayoutIndex;
