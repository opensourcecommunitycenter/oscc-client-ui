import Image from "next/image";
import React, { ReactNode } from "react";
import { TypographyH3, TypographyP } from "../ui/typography";

interface StackedCard {
    children: ReactNode;
    className?: string;
    title: string;
    imageSrc: string;
}

const StackedCard: React.FC<StackedCard> = ({
    children,
    className = "",
    title,
}: StackedCard) => {
    return (
        <div
            className={`flex flex-col items-center justify-center gap-10 w-full h-full px-14 py-20 border border-[#C4C4C4BF] universal-roundness bg-card text-card-foreground hover:bg-card/90 ${className}`}
        >
            <div className="hp-combo flex items-center justify-center gap-6 text-center p-2">
                <TypographyH3>{title}</TypographyH3>
                <TypographyP className="font-normal tracking-normal">
                    {children}
                </TypographyP>
            </div>
        </div>
    );
};

export default StackedCard;
