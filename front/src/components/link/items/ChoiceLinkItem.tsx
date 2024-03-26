import { LinkPattern } from "@/core/utils/actionLinkInterface";
import { type LinkPatternName } from "@/core/utils/interface.ui";
import React from "react";

type Props = {
  //
  linkItem: LinkPatternName;
};

const ChoiceLinkItem: React.FC<Props> = (props) => {
  return <div>ChoiceLinkItem</div>;
};

export default ChoiceLinkItem;

// type mappedPattern = { [Item in LinkPattern]: { name: string; link: string } };

// const t: mappedPattern = { Behance: { link: "", name: "" } };
