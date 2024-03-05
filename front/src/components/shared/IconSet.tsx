import { icons, type IconName } from "@/assets/icon";
import React, { Suspense, type HtmlHTMLAttributes, useMemo } from "react";

export interface IconProps extends HtmlHTMLAttributes<HTMLDivElement> {
  icon: IconName;
  className?: string;
  size?: number;
  color?: string;
}

const IconSet: React.FC<IconProps> = ({ icon, className, size, color, ...otherProps }) => {
  const SvgIcon = useMemo(() => icons[icon], [icon]);

  console.log(color);

  return (
    <div
      className={className}
      aria-label={icon}
      role="img"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fill: "red",
        fontSize: size ?? "24",
      }}
      {...otherProps}
    >
      {" "}
      <Suspense fallback={null}>
        <SvgIcon
          style={{
            width: size ?? "100%",
            height: size ?? "100%",
            stroke: color !== undefined ? color : "black",
          }}
          key={icon}
        />
      </Suspense>
    </div>
  );
};

export default IconSet;
