import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ErrorPage from "./components/page/ErrorPage";

import "./index.css";
import BaseProfileLinks from "./components/grid-layout/BaseProfileLinks";
import SettingsPage from "@/components/page/SettingsPage";
import * as fs from "fs/promises";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Navigate replace={true} to={"/home"}></Navigate> },
      { path: "/statistics", element: <div>Dashboard</div> },
      { path: "/home", element: <BaseProfileLinks /> },
      { path: "settings", element: <SettingsPage></SettingsPage> },
      { path: "/:username", element: <div>Username</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router}></RouterProvider>,
);
