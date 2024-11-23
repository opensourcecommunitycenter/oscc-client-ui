import { ReactNode } from "react";

interface Typography {
    children: ReactNode;
    className?: string;
}

export function TypographyH1({ children, className = "" }: Typography) {
    return (
        <h1
            className={`scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl ${className}`}
        >
            {children}
        </h1>
    );
}

export function TypographyH3({ children, className = "" }: Typography) {
    return (
        <h3
            className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}
        >
            {children}
        </h3>
    );
}

export function TypographyP({ children, className = "" }: Typography) {
    return <p className={`leading-7 ${className}`}>{children}</p>;
}
