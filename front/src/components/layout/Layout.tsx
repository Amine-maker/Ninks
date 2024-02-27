import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { RenderIf } from "@/core/utils/utils";
import HeaderComponent from "./Header";
import { Toaster } from "sonner";
import AuthLayout from "../auth/AuthLayout";
import { type UiLinks } from "@/core/utils/interface.ui";
import { Button } from "@/components/ui/button";

const Layout = (): JSX.Element => {
  const location = useLocation();
  const [, setCurrentLink] = useState<string>(location.pathname);

  const isSelected = (link: string): boolean => {
    return location.pathname.includes(link);
  };

  const links: UiLinks[] = [
    {
      to: "/home",
      selected: isSelected("/home"),
      hidden: false,
      displayName: "My page",
    },
    {
      to: "/statistics",
      hidden: false,
      displayName: "Statistics",
      selected: isSelected("/statistics"),
    },
  ];

  return (
    <main className="container flex flex-wrap gap-8">
      <Toaster duration={2000} closeButton richColors position="bottom-right" />

      <aside className="top-0 min-w-40 p-3 pt-8 md:sticky md:h-screen md:w-full md:max-w-72">
        <div className="flex h-full flex-col justify-between">
          <div className="flex-grow">
            <div className="flex flex-col gap-6">
              <div className="flex size-40 items-center justify-center rounded-full bg-primary-50 text-2xl text-primary-600">
                AD
              </div>
              <h1 className="mt-2 text-4xl font-bold">Amine caspersksi</h1>
              <p className="prose prose-gray text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta porro facere eum
                delectus nihil dignissimos co
              </p>
              <Button variant={"secondary"} className="w-fit">
                Select theme
              </Button>
              <div className="border-t"></div>
              <ul className="space-y-2 border p-1">
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
      <section className="content flex-1 border border-gray-300 ">
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
