import { Auth0Provider } from "@auth0/auth0-react";
import { createAuth0Client } from "@auth0/auth0-spa-js";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import LayoutComponent from "./components/layout/LayoutComponent";
import ErrorPage from "./components/page/ErrorPage";
import Profile from "./components/page/ProfilePage";
import { envLocal } from "./core/utils/constante";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Navigate to={"/home"}></Navigate> },
      { path: "/profile", element: <Profile /> },
      { path: "/home", element: <div>home</div> },
      { path: "/:username", element: <div>Username</div> },
      { path: "/dashboard", element: <div>Dashboard</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Auth0Provider
    domain={envLocal.VITE_AUTH0_DOMAIN}
    clientId={envLocal.VITE_AUTH0_CLIENT_ID}
    cacheLocation="localstorage"
    useRefreshTokens={true}
    authorizationParams={{
      redirect_uri: window.location.origin + "/profile",
    }}
  >
    <RouterProvider router={router}></RouterProvider>
  </Auth0Provider>
);
