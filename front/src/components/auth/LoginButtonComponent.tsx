import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { envLocal } from "../../core/utils/constante";

const LoginButtonComponent = (): JSX.Element => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  console.log(envLocal);

  return (
    <>
      {isAuthenticated && <div> auth, {user?.name}</div>}
      <button
        onClick={() => {
          void (async () => {
            await loginWithRedirect();
          })();
        }}
      >
        Log In
      </button>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default LoginButtonComponent;
