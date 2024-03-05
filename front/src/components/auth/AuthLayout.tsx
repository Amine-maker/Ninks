import React from "react";
import { envLocal } from "../../core/utils/constante";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AuthLayout = (): JSX.Element => {
  const isLogin = true;
  console.log(envLocal);

  if (isLogin) {
    return (
      <div className="flex gap-3">
        <Link to="/settings">
          <Button
            className="text-gray-500"
            icon={{ icon: "Settings03", color: "#527875" }}
            variant="link"
          >
            Settings
          </Button>
        </Link>

        <Button
          className="text-gray-500"
          icon={{ icon: "LogOut01", color: "#527875" }}
          variant="link"
        >
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
