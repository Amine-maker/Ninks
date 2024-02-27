import React from "react";
import { Link } from "react-router-dom";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { Button } from "@/components/ui/button";

function HeaderComponent(): JSX.Element {
  return (
    <div className="abs-header flex w-full place-content-center border-b border-gray-300 p-3">
      <Button size={"lg"} variant={"secondary"}>
        <Link to={"/home"} role="button"></Link>
      </Button>
    </div>
  );
}

export default HeaderComponent;
