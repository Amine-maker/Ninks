import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
import { Responsive, WidthProvider, type Layout } from "react-grid-layout";
import { type LinkPatternName, type GridLayoutItem } from "../../core/utils/interface.ui";
import ButtonAddLinkComponent from "@components/items/ButtonAddLink";
import { toast } from "sonner";
import { RxCornerBottomRight } from "react-icons/rx";
import DropList from "@/components/drop/DropList";
import LayoutLinkItemComponent from "@/components/items/LayoutLinkItem";
import * as constante from "@/core/utils/constante";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
interface Props {
  className?: string;
  cols?: { lg: number; md: number; sm: number; xs: number; xxs: number };
  rowHeight?: number;
  onLayoutChange: (layout: Layout[]) => void;
}

const GridLayoutBaseComponent: React.FC<Props> = ({
  className = "layout",
  cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  rowHeight = 100,
  onLayoutChange,
}) => {
  const [gridLinkItems, setGridLinkItems] = useState<GridLayoutItem[]>([
    ...[0, 1, 2, 3, 4].map((i, key, list) => ({
      i,
      x: i * 2,
      y: 0,
      add: i === list.length - 1,
      ...constante.DEFAULT_LINKS_CONFIG,
    })),
  ]);
  const [newCounter, setNewCounter] = useState(gridLinkItems.length);
  const [, setBreakpoint] = useState<string>();
  const [currentCols, setCurrentCols] = useState<number>(cols.md);
  const resizeRef = useRef(null);

  const onAddItem = (linkType: LinkPatternName): void => {
    console.log("adding", newCounter);
    toast.promise(
      async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
          setGridLinkItems([
            ...gridLinkItems,
            {
              linkType,
              i: newCounter,
              x: (gridLinkItems.length * 2) % (currentCols !== 0 ? currentCols : 12), // trouver un moyen de conditionner par rapport au currentCols
              y: Infinity, // puts it at the bottom
              ...constante.DEFAULT_LINKS_CONFIG,
            },
          ]);
          setNewCounter(newCounter + 1);
        });
      },
      {
        loading: "Loading",
        success: "Link has been added successfully",
        error: "Error while adding link",
      },
    );
  };

  useEffect(() => {
    onAddMedia();
  }, []);

  const onAddMedia = (): null => {
    return null;
  };

  const onBreakpointChange = (breakpoint: string, cols: number): void => {
    setBreakpoint(breakpoint);
    setCurrentCols(cols);
  };

  const onRemoveItem = (id: number): void => {
    console.log("removing", id);
    setGridLinkItems(gridLinkItems.filter((item) => item.i !== id));
    toast.promise(async () => await new Promise((resolve, reject) => setTimeout(resolve, 500)), {
      loading: "Loading",
      success: "Link has been removed successfully",
      error: "Error while removing link",
    });
  };

  const createElement = (el: GridLayoutItem): JSX.Element => {
    const removeStyle: React.CSSProperties = {
      position: "absolute",
      right: "2px",
      top: 0,
      cursor: "pointer",
    };
    const { i } = el;
    return (
      <div key={i} data-grid={el}>
        <LayoutLinkItemComponent
          key={i}
          customStyle={removeStyle}
          actions={{
            remove: (id) => {
              onRemoveItem(id);
            },
          }}
          layoutElement={el}
        ></LayoutLinkItemComponent>
      </div>
    );
  };

  // TODO: create button add media instead of using link button
  return (
    <div className="flex flex-col gap-9">
      <div className="container-add-type flex gap-3">
        <ButtonAddLinkComponent onAddItem={onAddItem} />
        <ButtonAddLinkComponent onAddItem={onAddMedia} />
      </div>

      <DropList />
      <ResponsiveReactGridLayout
        resizeHandles={["se"]}
        onLayoutChange={onLayoutChange}
        resizeHandle={
          <div className="react-resizable-handle" ref={resizeRef}>
            <RxCornerBottomRight />
          </div>
        }
        onBreakpointChange={onBreakpointChange}
        rowHeight={rowHeight}
        cols={cols}
        className={className}
      >
        {_.map(gridLinkItems, (el) => {
          return createElement(el);
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
};
export default GridLayoutBaseComponent;
