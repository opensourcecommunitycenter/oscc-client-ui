import SimpleCard from "@/components/custom/simple-card";
import { Button } from "@/components/ui/button";
import {
    TypographyH1,
    TypographyH2,
    TypographyP,
} from "@/components/ui/typography";
import Image from "next/image";

export default function Home() {
    // Unsplash dynamic image URL for the background. Replace 'nature' with desired keywords for specificity.
    // const unsplashImage =
    //     "https://images.unsplash.com/photo-1725384283230-184d60ac31dd?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <>
            {/* Hero Section */}
            <section className="screen-max">
                <div className="relative w-full h-full hero-background p-12 overflow-hidden bg-[#FFF6ED40]">
                    {/* Sub Div */}
                    <div className="relative container custom-container w-full h-full flex flex-col items-center justify-center rounded-xl overflow-hidden">
                        {/* Sub Div Background Image */}
                        <Image
                            src={"/images/hero3.jpg"}
                            fill={true}
                            style={{ objectFit: "cover" }}
                            alt="Hero image"
                        />
                        {/* Hero Image Gradient */}
                        <div className="absolute inset-0 hero-img-gradient"></div>

                        {/* Content (Text + Buttons) */}
                        <div className="absolute w-[95%] mx-auto inset-0 flex flex-col items-center justify-center text-center p-20 gap-12">
                            <div className="w-full flex flex-col flex-wrap text-primary-foreground gap-7">
                                <TypographyH1 className="font-semibold drop-shadow-[0_0_6px_rgba(255,240,228,0.5)]">
                                    Virtual Space for Real Life Choices
                                </TypographyH1>
                                <TypographyP className="px-6">
                                    Empowering you to connect Islamic Worldview
                                    with the realities of modern life through
                                    practical and transformative experiences.
                                </TypographyP>
                            </div>

                            {/* Buttons */}
                            <div className="w-full flex justify-center gap-5">
                                <Button
                                    variant={"quaternary"}
                                    className="w-full xl:h-14 2xl:h-16"
                                >
                                    Join Us
                                </Button>
                                <Button
                                    variant={"glass"}
                                    className="w-full xl:h-14 2xl:h-16"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Section */}
            <section className="screen-max">
                <div className="container custom-container px-12 py-32 grid grid-cols-[3fr_4fr] gap-10 place-items-center">
                    <div className="w-[400px] h-[400px] relative overflow-hidden">
                        {/* About Image */}
                        <Image
                            src={"/images/man-holding-child.jpeg"}
                            fill
                            style={{ objectFit: "cover" }}
                            alt="About image"
                            className="rounded-full"
                        />
                        <div className="absolute inset-0 image-radial-gradient"></div>
                    </div>
                    <div className="h2-p-combo pr-4">
                        <TypographyH2>Addressing the Disconnect</TypographyH2>
                        <TypographyP>
                            In a world that separates worldly knowledge from
                            deeper, spiritual insights, many feel the lack of a
                            cohesive approach that truly aligns with their
                            values. OSCC is here to bridge that gap. We blend
                            Islam with practical guidance for today’s
                            challenges, creating a experiences that’s relevant,
                            rooted, and real.
                        </TypographyP>
                    </div>
                </div>
            </section>
            ;{/* Solution Section */}
            <section className="screen-max">
                <div className="container custom-container px-12 py-32">
                    <div className="h2-p-combo flex items-center justify-center text-center">
                        <TypographyH2>From Skills to Solutions</TypographyH2>
                        <TypographyP>Making an Impact That Matters</TypographyP>
                    </div>
                    <div className="grid grid-cols-2">
                        <SimpleCard />
                    </div>
                </div>
            </section>
        </>
    );
}
