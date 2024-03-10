import { Button } from "@/components/ui/button";
import React, { FC } from "react";

type Props = object;

const Footer: React.FC<Props> = (props) => {
  return (
    <footer className="absolute bottom-0 flex w-full justify-center  p-4">
      {" "}
      <Button variant="secondary" icon={{ icon: "NinkLogoDarkgreen" }}>
        Create your own page
      </Button>
    </footer>
  );
};

export default Footer;
