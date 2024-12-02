import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Onboarding = () => {
    return (
        <section className="wh-max">
            <div className="container custom-container grid grid-cols-1 place-items-center gap-12 px-8 py-10">
                <div className="w-[70%] mx-auto grid grid-cols-1 place-items-center gap-24 px-6 py-8 ">
                    <div className="w-72">
                        <Image
                            src={"/bismillah.svg"}
                            width={500}
                            height={500}
                            alt="oscc logo"
                        />
                    </div>
                    <div className="hp-combo gap-2 text-center w-full overflow-hidden">
                        <TypographyH3 className="text-[#33658A] tracking-wider">
                            Let’s get you started on your journey of life-long
                            learning and growth.
                        </TypographyH3>
                        <TypographyP className="font-normal tracking-normal text-2xl">
                            To tailor the platform to your needs, we’ll gather
                            some information in a few quick steps.
                        </TypographyP>
                    </div>
                </div>
                <div className="w-[40%] flex justify-center gap-5">
                    <Link href={"/auth/register"} className="w-full">
                        <Button variant={"alt"} size={"hero"}>
                            Logout
                        </Button>
                    </Link>
                    <Button variant={"tertiary"} size={"hero"}>
                        Start Onboarding
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Onboarding;
