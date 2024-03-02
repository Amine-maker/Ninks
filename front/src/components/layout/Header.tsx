import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ReactComponent as NinkIcon } from "@assets/icons/nink_logo_darkgreen.svg";

function HeaderComponent(): JSX.Element {
  return (
    <div className="abs-header flex w-full place-content-center border-b border-r p-3">
      <Button className="h-16 w-16" size={"icon"} variant={"secondary"}>
        <Link to={"/home"} role="button">
          <NinkIcon width={40}></NinkIcon>
        </Link>
      </Button>
    </div>
  );
}

export default HeaderComponent;
