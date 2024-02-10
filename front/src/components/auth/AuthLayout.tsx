import React from "react";
import { envLocal } from "../../core/utils/constante";

const AuthLayout = (): JSX.Element => {
  console.log(envLocal);

  return <div className="flex flex-col gap-3 p-4 ">login</div>;
};

export default AuthLayout;
