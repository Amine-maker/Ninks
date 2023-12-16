import React from "react";
import { type IUser } from "../../core/utils/interface";
import { envLocal } from "../../core/utils/constante";

const AuthLayoutComponent = (): JSX.Element => {
  console.log(envLocal);

  return <div className="p-4 flex flex-col gap-3"></div>;
};

export default AuthLayoutComponent;
