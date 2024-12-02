import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap universal-roundness text-sm xl:text-lg 2xl:text-xl font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                tertiary:
                    "bg-tertiary text-tertiary-foreground hover:bg-tertiary/90",
                quaternary:
                    "bg-quaternary text-quaternary-foreground hover:bg-quaternary/90",
                green: "bg-green text-green-foreground hover:bg-green/90",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                alt: "border border-alt-border bg-alt text-alt-foreground hover:bg-alt/90 hover:text-accent-foreground",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                glass: "text-primary-foreground glass",
            },
            size: {
                default: "h-18 xl:h-18 2xl:h-18 px-4",
                sm: "h-19 universal-roundness px-3",
                lg: "h-19 universal-roundness px-8",
                icon: "h-19 w-16 2xl:h-14 2xl:w-14",
                header: "h-10 lg:h-12 xl:h-12 2xl:h-14 px-4 xl:px-4 2xl:px-5",
                hero: "w-full h-14 xl:h-16 2xl:h-18",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
