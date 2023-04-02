import React, { useState } from "react";
import ReactDOM from "react-dom";
import GridLayoutBaseComponent from "./GridLayoutBaseComponent";

const LayoutIndex: React.FC = (props) => {
  const [layout, setLayout] = useState([]);

  const onLayoutChange = (newLayout: any): void => {
    setLayout(newLayout);
  };

  return (
    <div>
      <GridLayoutBaseComponent onLayoutChange={onLayoutChange} />
    </div>
  );
};

export default LayoutIndex;
