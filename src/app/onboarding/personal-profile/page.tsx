"use client";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Stepper from "@/components/custom/stepper";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { questionFormSchema } from "@/validations/onboardingValidationSchema";
import QuestionField from "@/components/custom/question-field";

const Onboarding = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof questionFormSchema>>({
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      fullName: "",
    },
  });

  const formControl = form.control;

  const onSubmit = (values: z.infer<typeof questionFormSchema>) => {
    toast({ description: "Submit Successful" });
    console.log("Form Data:", values);
    // Submit form values to your backend API
  };

  return (
    <section className="wh-max">
      <div className="container custom-container grid grid-cols-1 place-items-center gap-12 px-8 py-10">
        {/* Stepper */}
        <div>
          <Stepper />
        </div>

        {/* Headings */}
        <div className="hp-combo gap-4 text-center w-full overflow-hidden">
          <TypographyH3 className="text-[#33658A] tracking-wide">
            Setup your Personal Profile
          </TypographyH3>
          <TypographyP className="w-[90%] mx-auto font-normal tracking-normal text-2xl">
            Help us understand your background, vision, and commitment
          </TypographyP>
        </div>

        {/* Form Section */}
        <div className="px-8 py-7">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-28">
              {/* Form Card */}
              <Card className="grid grid-cols-1 place-items-center gap-5 bg-[#FFFFFFA6] min-w-full w-[75rem] px-0 py-8">
                <CardContent className="w-full grid grid-cols-1 px-14 py-2 gap-10">
                  {/* Full Legal Name */}
                  <QuestionField
                    formControl={formControl}
                    fieldName="fullName"
                    label="Your Full Legal Name"
                    placeholder="Ahmad Iqbal"
                  >
                    Your full legal name in official document(s)
                  </QuestionField>

                  {/* Group Name */}
                  <QuestionField
                    formControl={formControl}
                    fieldName="groupName"
                    label="IMS Group Name"
                    placeholder="IMS India G18"
                  >
                    Enter the number/name of the IMS group you are part of (if
                    applicable). Example: IMS India G8
                  </QuestionField>

                  {/* Contact Number */}
                  <QuestionField
                    formControl={formControl}
                    fieldName="contactNumber"
                    variant="phone"
                    label="Contact Number"
                    placeholder="1234567890"
                  >
                    Provide your primary contact number with country code as
                    prefix, for important updates.
                  </QuestionField>

                  {/* Location */}
                  <QuestionField
                    formControl={formControl}
                    fieldName="location"
                    variant="location"
                    label="Location"
                  >
                    Your city and country of residence.
                  </QuestionField>

                  {/* Edu Background */}
                  <QuestionField
                    formControl={formControl}
                    fieldName="EduBackground"
                    variant="textarea"
                    label="Briefly describe your professional or educational background."
                    placeholder="Your Professional or Educational Background"
                  >
                    Example: 1. Student, Economics & Political Science; 2.
                    B.Tech, Civil Engineering.
                  </QuestionField>

                  {/* CV Upload */}
                  <QuestionField
                    formControl={formControl}
                    fieldName="uploadCV"
                    variant="file"
                    label="Upload CV"
                  >
                    Upload a professional or basic CV (Max 100 MB).
                  </QuestionField>

                  {/* Vision title */}
                  <QuestionField
                    formControl={formControl}
                    fieldName="visionTitle"
                    label="What is your vision title?"
                    placeholder="Vision Title"
                  >
                    Summarize your vision in one line (Example: Building a
                    knowledge-based community).
                  </QuestionField>

                  {/* Vision Statement Upload */}
                  <QuestionField
                    formControl={formControl}
                    fieldName="visionStatement"
                    variant="file"
                    label="Vision Statement"
                  >
                    Upload a document outlining your vision using the SMART
                    technique (Max 100 MB).
                  </QuestionField>

                  {/* Time Dedication */}
                  <QuestionField
                    formControl={formControl}
                    fieldName="dedicationTime"
                    label="How much time can you dedicate?"
                    placeholder="10"
                  >
                    Specify in hours per week (e.g., 10 hours/week).
                  </QuestionField>

                  {/* SKA */}
                  <QuestionField
                    formControl={formControl}
                    fieldName="ska"
                    variant="trinput"
                    label="Mention Your SKA (Skills, Knowledge, Attributes)"
                  >
                    Highlight your top skills, areas of knowledge, and any
                    unique attributes you bring to the platform.
                  </QuestionField>

                  {/* Rizq */}
                  <QuestionField
                    formControl={formControl}
                    fieldName="rizq"
                    variant="textarea"
                    label="Rizq"
                    placeholder="Your Rizq"
                  >
                    Share how you aim to benefit or contribute to the Ummah.
                  </QuestionField>

                  {/* Your Works */}
                  <QuestionField
                    className="border-b-transparent"
                    formControl={formControl}
                    fieldName="works"
                    variant="textarea"
                    label="Your Works"
                    placeholder="Your Works"
                  >
                    You can submit research papers, thesis, presentations,
                    blogs, or videos related to your expertise (Max 100 MB).
                  </QuestionField>
                </CardContent>
              </Card>

              {/* Cancel & Next Buttons */}
              <div className="flex items-center justify-center gap-5">
                <Link href={"/"} className="w-full">
                  <Button variant="alt" className="w-full">
                    Cancel
                  </Button>
                </Link>

                <Button type="submit" variant={"tertiary"} className="w-full">
                  Next
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
