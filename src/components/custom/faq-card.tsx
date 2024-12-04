import React, { ReactNode } from "react";
import { TypographyH4, TypographyP } from "../ui/typography";
import QBox from "./q-box";

interface FAQCard {
  children: ReactNode;
  className?: string;
  title: string;
}

const FAQCard: React.FC<FAQCard> = ({
  children,
  className = "",
  title,
}: FAQCard) => {
  return (
    <div
      className={`grid grid-cols-[1fr,9fr] gap-4 w-full h-full p-12 universal-roundness z-20 bg-[#FAF8F2] border border-[#C4C4C4BF] ${className}`}
    >
      <QBox />
      <div className="hp-combo flex items-start justify-center gap-4 text-left p-2">
        <TypographyH4 className={"font-semibold text-question tracking-wide"}>
          {title}
        </TypographyH4>
        <TypographyP className="font-medium tracking-normal text-2xl">
          {children}
        </TypographyP>
      </div>
    </div>
  );
};

export default FAQCard;
