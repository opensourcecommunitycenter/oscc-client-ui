// import { Button } from "@/components/ui/button";
import Stepper from "@/components/custom/stepper";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import React from "react";

const Onboarding = () => {
    return (
        <section className="wh-max">
            <div className="container custom-container grid grid-cols-1 place-items-center gap-12 px-8 py-10">
                <div>
                    <Stepper />
                </div>
                <div className="hp-combo gap-4 text-center w-full overflow-hidden">
                    <TypographyH3 className="text-[#33658A] tracking-wide">
                        Setup your Personal Profile
                    </TypographyH3>
                    <TypographyP className="w-[90%] mx-auto font-normal tracking-normal text-2xl">
                        Help us understand your background, vision, and
                        commitment
                    </TypographyP>
                </div>

                <div>form</div>
            </div>
        </section>
    );
};

export default Onboarding;
