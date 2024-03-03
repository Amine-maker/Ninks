import React from "react";
import { envLocal } from "../../core/utils/constante";
import { Button } from "@/components/ui/button";

const AuthLayout = (): JSX.Element => {
  const isLogin = false;
  console.log(envLocal);

  if (isLogin) {
    return (
      <div className="flex gap-3">
        <Button icon={{ icon: "Settings03" }} variant="link">
          Settings
        </Button>
        <Button icon={{ icon: "LogOut01" }} variant="link">
          Logout
        </Button>
      </div>
    );
  } else {
    return (
      <div className="w-1/2">
        <Button icon={{ icon: "LogIn01", color: "#527875" }} variant="link">
          Log in
        </Button>
      </div>
    );
  }
};

export default AuthLayout;
