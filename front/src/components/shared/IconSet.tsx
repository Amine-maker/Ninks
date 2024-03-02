import { icons, type IconName } from "@/assets/icon";
import React, { createElement, Suspense, type HtmlHTMLAttributes, useMemo } from "react";

export interface IconProps extends HtmlHTMLAttributes<HTMLDivElement> {
  icon: IconName;
  className?: string;
  size?: number;
}

const IconSet: React.FC<IconProps> = ({ icon, className, size, ...otherProps }) => {
  const SvgIcon = useMemo(() => icons[icon], [icon]);

  return (
    <div
      className={className}
      aria-label={icon}
      role="img"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: size ?? "24",
      }}
      {...otherProps}
    >
      {" "}
      <Suspense fallback={null}>
        <SvgIcon style={{ width: "100%", height: "100%" }} key={icon} />
      </Suspense>
    </div>
  );
};

export default IconSet;
