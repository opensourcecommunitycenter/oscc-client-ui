"use client";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Stepper from "@/components/custom/stepper";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { questionFormSchema } from "@/validations/onboardingValidationSchema";
import QBox from "@/components/custom/q-box";
import SelectScrollable from "@/components/custom/select-scrollable";
import { Textarea } from "@/components/ui/textarea";
import InputPhoneNumber from "@/components/custom/input-phone-number";
import InputFile from "@/components/custom/input-file";
import InputTriple from "@/components/custom/input-triple";

const Onboarding = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof questionFormSchema>>({
    resolver: zodResolver(questionFormSchema),
    defaultValues: {
      fullName: "",
    },
  });

  const onSubmit = (values: z.infer<typeof questionFormSchema>) => {
    toast({ description: "Submit Successful" });
    console.log("Form Data:", values);
    // Submit form values to your backend API
  };

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
            Help us understand your background, vision, and commitment
          </TypographyP>
        </div>

        {/* Form Section */}
        <div className="px-8 py-7">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-28">
              <Card className="grid grid-cols-1 place-items-center gap-5 bg-[#FFFFFFA6] min-w-full w-[75rem] px-0 py-8">
                {/* User Form */}
                <CardContent className="w-full grid grid-cols-1 px-14 py-2 gap-10">
                  {/* Full Legal Name */}
                  <div className="form-field">
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem className="form-item">
                            <div className="form-label-desc">
                              <FormLabel className="form-label">
                                Your Full Legal Name
                              </FormLabel>
                              <FormDescription className="form-desc">
                                Your full legal name in official document(s)
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Input placeholder="Ahmad Iqbal" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* Group Name */}
                  <div className="form-field">
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="groupName"
                        render={({ field }) => (
                          <FormItem className="form-item">
                            <div className="form-label-desc">
                              <FormLabel className="form-label">
                                IMS Group Name
                              </FormLabel>
                              <FormDescription className="form-desc">
                                Enter the number/name of the IMS group you are
                                part of (if applicable). Example: IMS India G8
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Input
                                placeholder="IMS India G18"
                                // {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div className="form-field">
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="groupName"
                        render={({ field }) => (
                          <FormItem className="form-item">
                            <div className="form-label-desc">
                              <FormLabel className="form-label">
                                Contact Number
                              </FormLabel>
                              <FormDescription className="form-desc">
                                Provide your primary contact number for
                                important updates.
                              </FormDescription>
                            </div>
                            <FormControl>
                              <InputPhoneNumber />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* Location */}
                  <div className="form-field">
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="groupName"
                        render={({ field }) => (
                          <FormItem className="form-item">
                            <div className="form-label-desc">
                              <FormLabel className="form-label">
                                Location
                              </FormLabel>
                              <FormDescription className="form-desc">
                                Your city and country of residence.
                              </FormDescription>
                            </div>
                            <FormControl>
                              <div className="flex items-center justify-center gap-4">
                                <SelectScrollable />
                              </div>
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* Edu Background */}
                  <div className="form-field">
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="groupName"
                        render={({ field }) => (
                          <FormItem className="form-item">
                            <div className="form-label-desc">
                              <FormLabel className="form-label">
                                Briefly describe your professional or
                                educational background.
                              </FormLabel>
                              <FormDescription className="form-desc">
                                Example: 1) Student, Economics & Political
                                Science; 2) B.Tech, Civil Engineering.
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Textarea
                                placeholder="Your Educational Background"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* CV Upload */}
                  <div className="form-field">
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="groupName"
                        render={({ field }) => (
                          <FormItem className="form-item">
                            <div className="form-label-desc">
                              <FormLabel className="form-label">
                                Upload CV
                              </FormLabel>
                              <FormDescription className="form-desc">
                                Upload a professional or basic CV (Max 100 MB).
                              </FormDescription>
                            </div>
                            <FormControl>
                              <InputFile />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* Vision title */}
                  <div className="form-field">
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="groupName"
                        render={({ field }) => (
                          <FormItem className="form-item">
                            <div className="form-label-desc">
                              <FormLabel className="form-label">
                                What is your vision title?
                              </FormLabel>
                              <FormDescription className="form-desc">
                                Summarize your vision in one line (Example:
                                Building a knowledge-based community).
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Input
                                placeholder="Vision title"
                                // {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* Vision Statement Upload */}
                  <div className="form-field">
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="groupName"
                        render={({ field }) => (
                          <FormItem className="form-item">
                            <div className="form-label-desc">
                              <FormLabel className="form-label">
                                Vision Statement
                              </FormLabel>
                              <FormDescription className="form-desc">
                                Upload a document outlining your vision using
                                the SMART technique (Max 100 MB).
                              </FormDescription>
                            </div>
                            <FormControl>
                              <InputFile />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* Time Dedication */}
                  <div className="form-field">
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="groupName"
                        render={({ field }) => (
                          <FormItem className="form-item">
                            <div className="form-label-desc">
                              <FormLabel className="form-label">
                                How much time can you dedicate?
                              </FormLabel>
                              <FormDescription className="form-desc">
                                Specify in hours per week (e.g., 10 hours/week).
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Input
                                placeholder="10 hours/week"
                                // {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* SKA */}
                  <div className="form-field">
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="groupName"
                        render={({ field }) => (
                          <FormItem className="form-item">
                            <div className="form-label-desc">
                              <FormLabel className="form-label">
                                Mention Your SKA (Skills, Knowledge, Attributes)
                              </FormLabel>
                              <FormDescription className="form-desc">
                                Highlight your top skills, areas of knowledge,
                                and any unique attributes you bring to the
                                platform.
                              </FormDescription>
                            </div>
                            <FormControl>
                              <InputTriple />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* Rizq */}
                  <div className="form-field">
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="groupName"
                        render={({ field }) => (
                          <FormItem className="form-item">
                            <div className="form-label-desc">
                              <FormLabel className="form-label">Rizq</FormLabel>
                              <FormDescription className="form-desc">
                                Share how you aim to benefit or contribute to
                                the Ummah.
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Textarea
                                placeholder="About Your Rizq"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* Your Works */}
                  <div className="form-field border-b-transparent">
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="groupName"
                        render={({ field }) => (
                          <FormItem className="form-item">
                            <div className="form-label-desc">
                              <FormLabel className="form-label">
                                Your Works
                              </FormLabel>
                              <FormDescription className="form-desc">
                                You can submit research papers, thesis,
                                presentations, blogs, or videos related to your
                                expertise (Max 100 MB).
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Textarea placeholder="Your Works" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Submit & Login Buttons */}
              <div className="flex items-center justify-center gap-5">
                <Button type="submit" variant="alt" className="w-full">
                  Cancel
                </Button>
                <Link href={"/auth/register"} className="w-full">
                  <Button variant={"tertiary"} className="w-full">
                    Next
                  </Button>
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
