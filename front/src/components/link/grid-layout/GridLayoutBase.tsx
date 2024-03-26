import React, { useCallback, useRef, useState } from "react";
import { Responsive, WidthProvider, type Layout, type ItemCallback } from "react-grid-layout";
import { type LinkPatternName, type GridLayoutItem } from "../../../core/utils/interface.ui";
import ButtonAddItemComponent from "@/components/link/items/ButtonAddItem";
import { toast } from "sonner";
import { RxCornerBottomRight } from "react-icons/rx";
import DropList from "@/components/link/drop/DropList";
import LayoutLinkItemComponent from "@/components/link/items/LayoutLinkItem";
import * as constante from "@/core/utils/constante";
import clsx from "clsx";
import DialogStepperForm from "@/components/link/dialog/DialogStepperForm";
import { useSetAtom } from "jotai";
import { dialogMediaAtom, stepperDialogAtom } from "@/hooks/DialogHook";

const ResponsiveReactGridLayout = WidthProvider(Responsive);
interface Props {
  className?: string;
  cols?: { lg: number; md: number; sm: number; xs: number; xxs: number };
  rowHeight?: number;
  onLayoutChange: (layout: Layout[]) => void;
}

const GridLayoutBaseComponent: React.FC<Props> = ({
  className = "layout",
  cols = { lg: 8, md: 10, sm: 6, xs: 2, xxs: 2 },
  rowHeight = 100,
  onLayoutChange,
}) => {
  const [gridLinkItems, setGridLinkItems] = useState<GridLayoutItem[]>([
    // items to show, get from database
    ...[0, 1, 2, 3, 4].map((i, key, list) => ({
      i,
      x: i,
      y: 0,
      add: i === list.length - 1,
      ...constante.DEFAULT_LINKS_CONFIG,
    })),
  ]);
  const [newCounter, setNewCounter] = useState(gridLinkItems.length);
  const [, setBreakpoint] = useState<string>();
  const [currentCols, setCurrentCols] = useState<number>(cols.md);
  const resizeRef = useRef(null);
  const setOpenStepperDialog = useSetAtom(stepperDialogAtom);
  const setOpenMediaDialog = useSetAtom(dialogMediaAtom);

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

  useCallback(() => {
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

  const handleResize: ItemCallback = () => {
    // console.log(old, newItem);
  };

  const handleDropItem = (layout: Layout[], item: Layout, e: Event): void => {
    console.log(layout, item);
  };

  return (
    <section className="flex flex-col gap-9">
      <div className="container-add-type flex flex-wrap gap-3">
        {" "}
        <DialogStepperForm />
        <ButtonAddItemComponent
          onClick={() => {
            setOpenStepperDialog(true);
          }}
          title="Add a link to your wall"
          description="You can add a link to connect with your friends and community."
          icon="NinkLogoDarkgreen"
        />
        <ButtonAddItemComponent
          title="Add media to your wall"
          description="You can add a media to express and share with your friends and community"
          icon="Image01"
        ></ButtonAddItemComponent>
      </div>

      <DropList />
      <ResponsiveReactGridLayout
        useCSSTransforms={true}
        margin={[20, 20]}
        resizeHandles={["se"]}
        onLayoutChange={onLayoutChange}
        isDroppable={true}
        onDrop={handleDropItem}
        onResizeStop={handleResize}
        resizeHandle={
          <div className="react-resizable-handle" ref={resizeRef}>
            <RxCornerBottomRight />
          </div>
        }
        onBreakpointChange={onBreakpointChange}
        rowHeight={rowHeight}
        cols={cols}
        className={clsx(className, "mb-36")}
      >
        {gridLinkItems.map((item) => createElement(item))}
      </ResponsiveReactGridLayout>
    </section>
  );
};
export default GridLayoutBaseComponent;
