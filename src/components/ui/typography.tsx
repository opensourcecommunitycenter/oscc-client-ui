import { ReactNode } from "react";

interface Typography {
    children: ReactNode;
    className?: string;
}

export function TypographyH1({ children, className = "" }: Typography) {
    return (
        <h1
            className={`scroll-m-20 font-extrabold tracking-tight text-7xl tracking-wide ${className}`}
        >
            {children}
        </h1>
    );
}

export function TypographyH2({ children, className = "" }: Typography) {
    return (
        <h2
            className={`scroll-m-20 mb-4 text-6xl text-headingForeground font-medium tracking-tight first:mt-0 ${className}`}
        >
            {children}
        </h2>
    );
}

export function TypographyH3({ children, className = "" }: Typography) {
    return (
        <h3
            className={`scroll-m-20 text-4xl font-semibold tracking-tight ${className}`}
        >
            {children}
        </h3>
    );
}

export function TypographyP({ children, className = "" }: Typography) {
    return (
        <p className={`text-3xl font-normal leading-10 ${className}`}>
            {children}
        </p>
    );
}
