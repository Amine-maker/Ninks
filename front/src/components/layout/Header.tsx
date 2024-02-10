import React from "react";
import { Link } from "react-router-dom";
import { BsFillGrid1X2Fill } from "react-icons/bs";

function HeaderComponent(): JSX.Element {
  return (
    <div className="abs-header flex w-full place-content-center border-b border-gray-300 p-3">
      <Link to={"/home"} role="button" className="flex h-full w-11 items-center justify-center rounded-lg border-2 border-tertiary-n-25 bg-tertiary">
        <BsFillGrid1X2Fill className="text-tertiary-n-25"></BsFillGrid1X2Fill>
      </Link>
    </div>
  );
}

export default HeaderComponent;
