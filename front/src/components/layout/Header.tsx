import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function HeaderComponent(): JSX.Element {
  return (
    <div className="abs-header flex w-full place-content-center border-b border-r p-3">
      <Link to={"/home"} role="button">
        <Button
          icon={{ icon: "NinkLogoDarkgreen" }}
          className="h-12 w-12"
          size={"icon"}
          variant={"secondary"}
        ></Button>{" "}
      </Link>
    </div>
  );
}

export default HeaderComponent;
