import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { envLocal } from "../../core/utils/constante";
import { type IUser } from "../../core/utils/interface";

const LoginButtonComponent = (): JSX.Element => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0<IUser>();

  console.log(envLocal, isAuthenticated);

  return (
    <>
      {!isAuthenticated && (
        <button
          onClick={() => {
            void (async () => {
              await loginWithRedirect();
            })();
          }}
        >
          Log in
        </button>
      )}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default LoginButtonComponent;
