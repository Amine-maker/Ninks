import React from "react";
import { Link } from "react-router-dom";
import { BsFillGrid1X2Fill } from "react-icons/bs";

function HeaderComponent(): JSX.Element {
  return (
    <div className="p-3 abs-header w-full border-b border-gray-300 flex place-content-center">
      <Link to={"/home"} role="button" className="h-full flex justify-center items-center bg-tertiary border-2 border-tertiary-n-25 w-11 rounded-lg">
        <BsFillGrid1X2Fill className="text-tertiary-n-25"></BsFillGrid1X2Fill>
      </Link>
    </div>
  );
}

export default HeaderComponent;