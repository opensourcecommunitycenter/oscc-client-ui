import Image from "next/image";
import React from "react";
import { TypographyH3, TypographyP } from "../ui/typography";

const SimpleCard = () => {
    return (
        <div className="flex flex-col items-center justify-center w-[500px] h-[500px] p-12 border border-[#C4C4C4BF] universal-roundness bg-card text-card-foreground hover:bg-card/90">
            <Image
                width={150}
                height={150}
                src={"/images/lighthouse.png"}
                alt="Hero image"
            />
            <div className="h2-p-combo flex items-center justify-center text-center p-2">
                <TypographyH3>Opportunity</TypographyH3>
                <TypographyP className="text-base leading-7 font-normal">
                    Gain access to workshops and training programs that blend
                    Islamic wisdom with practical life skills. Each session is
                    designed to provide you with new perspectives and actionable
                    steps toward personal and professional success.
                </TypographyP>
            </div>
        </div>
    );
};

export default SimpleCard;
