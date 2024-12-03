import React, { ReactNode } from "react";
import { TypographyH4, TypographyP } from "../ui/typography";

const flatCardVariants = {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground",
            defaultHeading: "text-primary",
            secondary: "bg-secondary text-secondary-foreground",
            secondaryHeading: "text-secondary",
            tertiary: "bg-tertiary text-tertiary-foreground",
            tertiaryHeading: "text-tertiary",
            quaternary: "bg-quaternary text-quaternary-foreground",
            quaternaryHeading: "text-quaternary",
        },
    },
};

interface FlatCard {
    children: ReactNode;
    className?: string;
    title: string;
    number: string;
    variant: string;
}

const FlatCard: React.FC<FlatCard> = ({
    children,
    className = "",
    title,
    number,
    variant,
}: FlatCard) => {
    let themeValue = "";
    let headingTheme = "";
    if (variant === "secondary") {
        themeValue = flatCardVariants.variants.variant.secondary;
        headingTheme = flatCardVariants.variants.variant.secondaryHeading;
    } else if (variant === "tertiary") {
        themeValue = flatCardVariants.variants.variant.tertiary;
        headingTheme = flatCardVariants.variants.variant.tertiaryHeading;
    } else if (variant === "quaternary") {
        themeValue = flatCardVariants.variants.variant.quaternary;
        headingTheme = flatCardVariants.variants.variant.quaternaryHeading;
    } else if (variant === "default") {
        themeValue = flatCardVariants.variants.variant.default;
        headingTheme = flatCardVariants.variants.variant.defaultHeading;
    } else {
        themeValue = flatCardVariants.variants.variant.default;
        headingTheme = flatCardVariants.variants.variant.defaultHeading;
    }

    return (
        <div
            className={`grid grid-cols-[1fr,9fr] gap-2 sm:gap-0  w-full h-full p-16 rounded-xl z-20 bg-[#EEEEEE4D] border border-[#C4C4C4BF] ${className}`}
        >
            <div
                className={`${themeValue} w-20 h-20 flex items-start justify-center text-6xl font-serif rounded-xl font-light`}
            >
                {number}
            </div>
            <div className="hp-combo flex items-start justify-center gap-4 text-left py-2">
                <TypographyH4 className={`font-medium ${headingTheme}`}>
                    {title}
                </TypographyH4>
                <TypographyP className="font-medium tracking-normal text-2xl">
                    {children}
                </TypographyP>
            </div>
        </div>
    );
};

export default FlatCard;
