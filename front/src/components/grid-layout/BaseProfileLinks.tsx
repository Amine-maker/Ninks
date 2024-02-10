import React, { useState } from "react";
import GridLayoutBase from "./GridLayoutBase";

const BaseProfileLinks: React.FC = (props) => {
  const [, setLayout] = useState([]);

  const onLayoutChange = (newLayout: any): void => {
    setLayout(newLayout);
  };

  return <GridLayoutBase onLayoutChange={onLayoutChange} />;
};

export default BaseProfileLinks;
