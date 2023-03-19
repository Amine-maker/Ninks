import React from "react";
import { LinkContext, type LinkContextType } from "../context/LinkContext";

export const useLink = (): LinkContextType => {
  return React.useContext(LinkContext);
};
