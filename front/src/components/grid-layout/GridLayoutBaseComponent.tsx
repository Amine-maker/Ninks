import React, { useState } from "react";
import _ from "lodash";
import { Responsive, WidthProvider, type Layout } from "react-grid-layout";
import { type GridLayoutItem } from "../../core/utils/interface";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

interface Props {
  className?: string;
  cols?: { lg: number; md: number; sm: number; xs: number; xxs: number };
  rowHeight?: number;
  onLayoutChange: (layout: Layout[]) => void;
}

const defaultLinkConfig = {
  w: 2,
  h: 1,
  minH: 1,
  minW: 2,
  maxW: 6,
  maxH: 4,
};

const GridLayoutBaseComponent: React.FC<Props> = ({ className = "layout", cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }, rowHeight = 100, onLayoutChange }) => {
  const [gridLinkItems, setGridLinkItems] = useState<GridLayoutItem[]>([
    ...[0, 1, 2, 3, 4].map((i, key, list) => ({
      i,
      x: i * 2,
      y: 0,
      add: i === list.length - 1,
      ...defaultLinkConfig,
    })),
  ]);
  const [newCounter, setNewCounter] = useState(gridLinkItems.length);
  const [breakpoint, setBreakpoint] = useState<string>();
  const [currentCols, setCurrentCols] = useState<number>(cols.md);

  const onAddItem = (): void => {
    console.log("adding", newCounter);
    setGridLinkItems([
      ...gridLinkItems,
      {
        i: newCounter,
        x: (gridLinkItems.length * 2) % (currentCols !== 0 ? currentCols : 12), // trouver un moyen de conditionner par rapport au currentCols
        y: Infinity, // puts it at the bottom
        ...defaultLinkConfig,
      },
    ]);

    setNewCounter(newCounter + 1);
  };

  const onBreakpointChange = (breakpoint: string, cols: number): void => {
    setBreakpoint(breakpoint);
    setCurrentCols(cols);
  };

  const onRemoveItem = (i: number): void => {
    console.log("removing", i);
    setGridLinkItems(gridLinkItems.filter((item) => item.i !== i));
  };

  const createElement = (el: GridLayoutItem): JSX.Element => {
    const removeStyle: React.CSSProperties = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer",
    };
    const i = el.i;
    return (
      <div key={i} data-grid={el}>
        (<span className="text">{i}</span>)
        <span
          className="remove"
          style={removeStyle}
          onClick={() => {
            onRemoveItem(i);
          }}
        >
          x
        </span>
      </div>
    );
  };

  return (
    <div>
      <button onClick={onAddItem}>Add Item</button>
      <ResponsiveReactGridLayout onLayoutChange={onLayoutChange} onBreakpointChange={onBreakpointChange} rowHeight={rowHeight} cols={cols} className={className}>
        {_.map(gridLinkItems, (el) => {
          return createElement(el);
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
};
export default GridLayoutBaseComponent;
