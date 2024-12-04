import React, { ReactNode } from "react";
import { TypographyH3, TypographyP } from "../ui/typography";

const stackedCardVariants = {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      tertiary: "bg-tertiary text-tertiary-foreground",
      quaternary: "bg-quaternary text-quaternary-foreground",
      glass: "text-primary-foreground glass",
    },
  },
};

interface StackedCard {
  children: ReactNode;
  className?: string;
  title: string;
  variant: string;
}

const StackedCard: React.FC<StackedCard> = ({
  children,
  className = "",
  title,
  variant,
}: StackedCard) => {
  let themeValue = "";
  if (variant === "secondary") {
    themeValue = stackedCardVariants.variants.variant.secondary;
  } else if (variant === "tertiary") {
    themeValue = stackedCardVariants.variants.variant.tertiary;
  } else if (variant === "quaternary") {
    themeValue = stackedCardVariants.variants.variant.quaternary;
  } else if (variant === "glass") {
    themeValue = stackedCardVariants.variants.variant.glass;
  } else if (variant === "default") {
    themeValue = stackedCardVariants.variants.variant.default;
  } else {
    themeValue = stackedCardVariants.variants.variant.default;
  }

  return (
    <div className="relative flex flex-col items-center justify-start">
      <div
        className={`flex flex-col items-center justify-start gap-10 w-full h-[400px] px-8 py-12 rounded-3xl z-20 ${themeValue} ${className}`}
      >
        <div className="hp-combo flex items-start justify-center gap-8 text-left p-2">
          <TypographyH3>{title}</TypographyH3>
          <TypographyP className="font-normal tracking-normal text-2xl">
            {children}
          </TypographyP>
        </div>
      </div>
      <div
        className={`absolute top-3 w-[95%] h-[400px] px-8 py-12 rounded-3xl overflow-hidden z-10 ${themeValue} ${className}`}
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-15"></div>
      </div>
      <div
        className={`absolute top-5 w-[90%] h-[400px] px-8 py-12 rounded-3xl overflow-hidden ${themeValue} ${className}`}
      >
        <div className="absolute inset-0 w-full h-full bg-black opacity-25"></div>
      </div>
    </div>
  );
};

export default StackedCard;
