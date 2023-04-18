import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { type ILinks } from "../../core/utils/interface";
import { RenderIf } from "../../core/utils/utils";
import AuthLayoutComponent from "../auth/AuthLayoutComponent";
import HeaderComponent from "./HeaderComponent";
import { Toaster } from "sonner";

const LayoutComponent = (): JSX.Element => {
  const location = useLocation();
  const [currentLink, setCurrentLink] = useState<string>(location.pathname);

  const isSelected = (link: string): boolean => {
    return location.pathname.includes(link);
  };

  const selectedStyle: React.CSSProperties = {
    outline: "1px solid var(--paragraph)",
    background: "var(--background-invert)",
  };

  const links: ILinks[] = [
    {
      to: "/home",
      selected: isSelected("/home"),
      hidden: false,
      displayName: "Home",
      customStyle: selectedStyle,
    },
    {
      to: "/profile",
      hidden: false,
      displayName: "Links",
      selected: isSelected("/profile"),
      customStyle: selectedStyle,
    },
  ];

  return (
    <main className="flex flex-row">
      <Toaster duration={2000} closeButton richColors position="bottom-right" />

      <aside className="border-r max-w-lg flex-25 sticky top-0 h-screen border-gray-300 p-3">
        <div className="flex flex-col justify-between h-full">
          <div className="flex-grow">
            <div className="px-4 flex justify-center items-center py-6 text-center ">
              <h1 className="text-8xl mt-12 leading-none">Amine</h1>
            </div>
            <div className="p-4">
              <ul className="space-y-2">
                {links.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link
                        style={link.selected ? link.customStyle : undefined}
                        to={link.to}
                        onClick={() => {
                          setCurrentLink(link.to);
                        }}
                        className={`link-button ${link.hidden ? "hidden" : ""}`}
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
      <section className="content w-full">
        <HeaderComponent />
        <div className="flex justify-center">
          <section className="max-w-8xl flex-75 p-5">
            <Outlet />
          </section>
        </div>
      </section>
    </main>
  );
};

export default LayoutComponent;
