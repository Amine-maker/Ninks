import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ErrorPage from "./components/page/ErrorPage";
import Profile from "./components/page/ProfilePage";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Navigate replace={true} to={"/home"}></Navigate> },
      { path: "/profile", element: <Profile /> },
      { path: "/home", element: <div>home</div> },
      { path: "/:username", element: <div>Username</div> },
      { path: "/dashboard", element: <div>Dashboard</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router}></RouterProvider>,
);
