import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { type ILinks } from "@/core/utils/interface.ui";
import { RenderIf } from "@/core/utils/utils";
import HeaderComponent from "./Header";
import { Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import AuthLayout from "../auth/AuthLayout";

const Layout = (): JSX.Element => {
  const location = useLocation();
  const [, setCurrentLink] = useState<string>(location.pathname);

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

      <aside className="flex-25 sticky top-0 h-screen max-w-lg border-r border-gray-300 p-3">
        <div className="flex h-full flex-col justify-between">
          <div className="flex-grow">
            <div className="flex items-center justify-center px-4 py-6 text-center ">
              <h1 className="mt-12 text-8xl leading-none">
                {" "}
                <Button>test</Button> Amine
              </h1>
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
                        <RenderIf isTrue={Boolean(link.icon)}>{link.icon!}</RenderIf>
                        {link.displayName}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <AuthLayout />
        </div>
      </aside>
      <section className="content w-full">
        <HeaderComponent />
        <div className="flex justify-center">
          <section className="flex-75 max-w-8xl p-5">
            <Outlet />
          </section>
        </div>
      </section>
    </main>
  );
};

export default Layout;
