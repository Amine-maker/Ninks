import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { type ILinks } from "../../core/utils/interface";
import { RenderIf } from "../../core/utils/utils";
import { ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import AuthLayoutComponent from "../auth/AuthLayoutComponent";

const LayoutComponent = (): JSX.Element => {
  const location = useLocation();
  const [currentLink, setCurrentLink] = useState<string>(location.pathname);

  const isSelected = (link: string): boolean => {
    return location.pathname.includes(link);
  };

  const links: ILinks[] = [
    {
      to: "/home",
      selected: isSelected("/home"),
      hidden: false,
      displayName: "Home",
    },
    { to: "/profile", hidden: false, displayName: "My Page", selected: isSelected("/profile") },
  ];

  return (
    <main className="flex flex-row">
      <aside className="border-r flex-25 sticky top-0 h-screen border-gray-300 p-3">
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow">
            <div className="px-4 flex justify-center items-center py-6 text-center ">
              <h1 className="text-8xl mt-12 leading-none">Amine</h1>
            </div>
            <div className="p-4">
              <ul className="space-y-1">
                {links.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link
                        to={link.to}
                        onClick={() => {
                          setCurrentLink(link.to);
                        }}
                        className={`flex items-center ${link.hidden ? "hidden" : ""}  rounded-xl font-bold text-sm ${link.selected ? "text-cyan-900 bg-indigo-200 " : ""} gap-3  py-3 px-4`}
                      >
                        <RenderIf isTrue={Boolean(link.icon)}>{link.icon}</RenderIf>
                        {link.displayName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <AuthLayoutComponent />
        </div>
      </aside>
      <div className="content flex-75 p-5">
        <Outlet />
      </div>
    </main>
  );
};

export default LayoutComponent;
