import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-19 w-full rounded-md border border-input bg-white p-5 text-medium ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-0 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-sm xl:text-lg 2xl:text-xl",
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Input.displayName = "Input";

export { Input };