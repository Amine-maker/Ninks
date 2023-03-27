import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { type IUser } from "../../core/utils/interface";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

const AuthLayoutComponent = (): JSX.Element => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0<IUser>();

  useEffect(() => {
    console.log(isAuthenticated, user);
  }, [user]);

  return (
    <div className="p-4 flex flex-col gap-3">
      {!isAuthenticated ? (
        <button
          onClick={() => {
            void (async () => {
              await loginWithRedirect();
            })();
          }}
          type="button"
          className="flex items-center"
        >
          <ArrowRightOnRectangleIcon className="h-6" />
          <span className="font-bold text-sm ml-2">Login or signup</span>
        </button>
      ) : (
        <button
          onClick={() => {
            logout({ logoutParams: { returnTo: window.location.origin } });
          }}
          type="button"
          className="flex items-center"
        >
          <ArrowRightOnRectangleIcon className="h-6" />
          <span className="font-bold text-sm ml-2">Logout</span>
        </button>
      )}
    </div>
  );
};

export default AuthLayoutComponent;
