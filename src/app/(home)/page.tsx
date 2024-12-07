import FAQCard from "@/components/custom/faq-card";
import FlatCard from "@/components/custom/flat-card";
import SimpleCard from "@/components/custom/simple-card";
import StackedCard from "@/components/custom/stacked-card";
import { Button } from "@/components/ui/button";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
  TypographyPHero,
} from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ========== Start Hero Section ========== */}
      <section className="screen-max">
        <div className="relative w-full h-full hero-background p-12 overflow-hidden bg-[#FFF6ED40]">
          {/* Sub Div */}
          <div className="relative container custom-container w-full h-[90%] sub-hero-background flex flex-col items-center justify-center rounded-xl overflow-hidden ">
            {/* Hero Image Gradient */}

            {/* Content (Text + Buttons) */}
            <div className="grid place-items-center absolute w-full mx-auto inset-0 p-20 gap-12">
              <div className="w-full grid grid-cols-1 place-items-center gap-10 text-center">
                <div className="w-full flex flex-col flex-wrap text-primary-foreground gap-5 xl:gap-7 p-6">
                  <TypographyH1 className="font-semibold drop-shadow-[0_0_6px_rgba(255,240,228,0.5)]">
                    Virtual Space for Real Life Choices
                  </TypographyH1>
                  <TypographyPHero>
                    Empowering you to connect Islamic Worldview with the
                    realities of modern life through practical and
                    transformative experiences.
                  </TypographyPHero>
                </div>

                {/* Buttons */}
                <div className="w-full flex justify-center gap-5 px-6">
                  <Link href={"/auth/register"} className="w-full">
                    <Button variant={"secondary"} size={"hero"}>
                      Join Us
                    </Button>
                  </Link>
                  <Link href={""} className="w-full">
                    <Button variant={"glass"} size={"hero"}>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== End Hero Section ========== */}

      {/* ========== Start About Section ========== */}
      <section className="wh-max-p">
        <div className="container custom-container px-12 py-32 grid grid-cols-[6fr,7fr] gap-8 place-items-center">
          <div className="relative w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] xl:w-[450px] xl:h-[450px] overflow-hidden">
            {/* About Image */}
            <Image
              src={"/images/man-holding-child.webp"}
              fill
              objectFit="cover"
              alt="About image"
              className="left-0 rounded-full"
            />
            <div className="absolute inset-0 image-radial-gradient"></div>
          </div>
          <div className="hp-combo-h2 justify-self-start">
            <TypographyH2>Addressing the Disconnect</TypographyH2>
            <TypographyP>
              In a world that separates worldly knowledge from deeper, spiritual
              insights, many feel the lack of a cohesive approach that truly
              aligns with their values. OSCC is here to bridge that gap. We
              blend Islam with practical guidance for today’s challenges,
              creating a experiences that’s relevant, rooted, and real.
            </TypographyP>
          </div>
        </div>
      </section>
      {/* ========== End About Section ========== */}

      {/* ========== Start Solution Section ========== */}
      <section className="wh-max">
        <div className="container custom-container flex flex-col items-center justify-center px-12 py-32 gap-10">
          <div className="hp-combo-h2 flex items-center justify-center text-center">
            <TypographyH2>From Skills to Solutions</TypographyH2>
            <TypographyP>Making an Impact That Matters</TypographyP>
          </div>
          <div className="grid grid-cols-2 place-items-center py-10 gap-7">
            <SimpleCard
              title={"Opportunity"}
              imageSrc={"/images/lighthouse.webp"}
            >
              Gain access to workshops and training programs that blend Islamic
              wisdom with practical life skills. Each session is designed to
              provide you with new perspectives and actionable steps toward
              personal and professional success.
            </SimpleCard>
            <SimpleCard
              title={"Social Network"}
              imageSrc={"/images/sail-boat.webp"}
            >
              Become part of a like-minded community where learning doesn’t end
              in isolation. Discuss ideas, share insights, and collaborate with
              peers and mentors who are on a similar journey of growth.
            </SimpleCard>
            <SimpleCard title={"Achievement"} imageSrc={"/images/fishes.webp"}>
              Set and accomplish meaningful goals, from completing specialized
              workshops to mastering core skills. Track your progress, earn
              recognition, and see how each milestone brings you closer to a
              fulfilling path.
            </SimpleCard>
            <SimpleCard
              title={"Personal Growth"}
              imageSrc={"/images/plant.webp"}
            >
              OSCC is more than a learning platform—it’s a space for
              introspection, character building, and developing resilience. Each
              course and community interaction is designed to foster growth that
              aligns with your values and aspirations.
            </SimpleCard>
          </div>
        </div>
      </section>
      {/* ========== End Solution Section ========== */}

      {/* ========== Start Explore Section ========== */}
      <section className="wh-max bg-backgroundAlt">
        <div className="container custom-container flex flex-col items-center justify-center px-12 py-32 gap-16">
          <div className="hp-combo-h2 flex items-center justify-center text-center">
            <TypographyH2>Explore Our Workshops</TypographyH2>
            <TypographyP>
              Each of our programs is designed to bring practical, grounded
              lessons inspired by the Islamic Worldview for your all-rounded
              development.
            </TypographyP>
          </div>
          <div className="grid grid-cols-2 place-items-center py-10 gap-20">
            <StackedCard variant={"quaternary"} title={"Seerah Workshop"}>
              Draws lessons from the life of Prophet Muhammad (ﷺ) and his
              companions to provide moral and spiritual guidance.
            </StackedCard>
            <StackedCard
              variant={"secondary"}
              title={"Arabic Literature Workshop"}
            >
              Covers essential skills like grammar, tajweed, and tafsir to
              deepen your understanding of Islamic texts.
            </StackedCard>
            <StackedCard
              variant={"default"}
              title={"Critical Thinking Workshop"}
            >
              Strengthens decision-making with a focus on Qur’anic wisdom for
              thoughtful, clear analysis.
            </StackedCard>
            <StackedCard
              variant={"tertiary"}
              title={"Emotional Intelligence Workshop"}
            >
              Training empathy, self-awareness, and emotional resilience
              grounded in Qur’an & Seerah.
            </StackedCard>
          </div>
          <div
            className="bg-white border border-[#2F485859] 
                   px-8 py-6 text-3xl rounded-2xl"
          >
            More Programmes are currently under Development
          </div>
        </div>
      </section>
      {/* ========== End Explore Section ========== */}

      {/* ========== Start How OSCC Works Section ========== */}
      <section className="wh-max">
        <div className="container custom-container flex flex-col items-center justify-center px-12 py-32 gap-16">
          <div className="hp-combo-h2 flex items-center justify-center text-center">
            <TypographyH2>How OSCC Works</TypographyH2>
            <TypographyP>Your Path with OSCC</TypographyP>
          </div>
          <div className="grid grid-cols-1 gap-10">
            <FlatCard
              title={"Choose Your Level"}
              number={"1"}
              variant={"default"}
            >
              Start as an observer or dive in as an active participant, based on
              your comfort level.
            </FlatCard>
            <FlatCard
              title={"Attend Live Workshops via Zoom"}
              number={"2"}
              variant={"secondary"}
            >
              Join expert-led sessions that address real-life applications and
              actionable insights.
            </FlatCard>
            <FlatCard
              title={"Access Recordings & Discussions"}
              number={"3"}
              variant={"tertiary"}
            >
              Review past sessions and continue the conversation with peers.
            </FlatCard>
            <FlatCard
              title={"Track Your Achievements"}
              number={"4"}
              variant={"quaternary"}
            >
              See your progress and celebrate milestones that matter to your
              overall growth.
            </FlatCard>
          </div>
        </div>
      </section>
      {/* ========== End How OSCC Works Section ========== */}

      {/* ========== Start FAQ Section ========== */}
      <section className="relative wh-max faq-section-background">
        <div className="container custom-container flex flex-col items-center justify-center px-12 py-32 gap-16">
          <div className="hp-combo-h2 flex items-center justify-center text-center">
            <TypographyH2 className="text-question-heading">
              Frequently Asked Questions
            </TypographyH2>
          </div>
          <div className="grid grid-cols-1 gap-10 bg-[#EEEEEE4D] p-20 overflow-hidden universal-roundness">
            <FAQCard title={"How does spectator membership work?"}>
              As a spectator, you can observe workshops, view limited recorded
              content, and get a feel for our community without actively
              participating in live sessions or discussions.
            </FAQCard>
            <FAQCard
              title={"How are workshops conducted? Do I need special software?"}
            >
              Our live workshops are hosted on Zoom, so you’ll need a Zoom
              account. Links to join are shared directly on the platform for
              easy access.
            </FAQCard>
            <FAQCard
              title={"Are live sessions recorded? Can I watch them later?"}
            >
              Yes, all live sessions are recorded and available for replay.
              Active members can access recordings anytime to revisit key points
              or catch up if they missed the live session.
            </FAQCard>
            <FAQCard
              title={
                "What’s the difference between spectator access and active membership?"
              }
            >
              Spectator access lets you browse content and observe sessions,
              while active membership allows full participation in workshops,
              discussions, and community interactions.
            </FAQCard>
          </div>
        </div>
      </section>
      {/* ========== End FAQ Section ========== */}
    </>
  );
}
