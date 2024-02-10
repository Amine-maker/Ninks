import React from "react";
import { type IUser } from "../../core/utils/interface.ui";
import { envLocal } from "../../core/utils/constante";

const AuthLayout = (): JSX.Element => {
  console.log(envLocal);

  return <div className="p-4 flex flex-col gap-3">login</div>;
};

export default AuthLayout;
