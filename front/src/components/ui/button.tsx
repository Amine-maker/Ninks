import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import IconSet, { type IconProps } from "@/components/shared/IconSet";

const buttonVariants = cva(
  "inline-flex gap-2 items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default:
          "bg-primary-600 text-primary-foreground hover:bg-primary-500 active:bg-primary-400 shadow-theme",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-theme",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-theme",
        secondary:
          "bg-white border border-gray-300 text-secondary-foreground hover:bg-secondary/80 active:bg-gray-100 shadow-theme",
        ghost: "hover:bg-accent hover:text-accent-foreground shadow-theme",
        link: "text-primary hover:bg-gray-100 border-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: IconProps;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {icon != null && <IconSet className="w-5" color={icon.color} icon={icon.icon} />}
        {children}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
