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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  // Form variables
  const inputPadGap = "py-7 gap-8";
  const inputHeight = "h-20";
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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <Card className="grid grid-cols-1 place-items-center gap-5 bg-[#FFFFFFA6] min-w-full w-[75rem] px-0 py-3">
                {/* User Form */}
                <CardContent className="w-full grid grid-cols-1 px-14 py-2 gap-10">
                  {/* Full Legal Name */}
                  <div
                    className={`flex justify-center items-start ${inputPadGap} border-b`}
                  >
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="p-0">
                              Your Full Legal Name
                            </FormLabel>
                            <FormDescription className="mt-0 mb-2 text-questionInput-description">
                              Your full legal name in official document(s)
                            </FormDescription>
                            <FormControl>
                              <Input
                                className={`bg-questionInput border-questionInput-border text-questionInput-foreground ${inputHeight}`}
                                placeholder="Ahmad Iqbal"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* Group Name */}
                  <div
                    className={`flex justify-center items-start ${inputPadGap} border-b`}
                  >
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="groupName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="p-0">
                              IMS Group Name
                            </FormLabel>
                            <FormDescription className="mt-0 mb-2 text-questionInput-description">
                              Enter the number/name of the IMS group you are
                              part of (if applicable). Example: IMS India G8
                            </FormDescription>
                            <FormControl>
                              <Input
                                className={`bg-questionInput border-questionInput-border text-questionInput-foreground ${inputHeight}`}
                                placeholder="IMS G18"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Contact Number */}
                  <div
                    className={`flex justify-center items-start ${inputPadGap} border-b`}
                  >
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="groupName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="p-0">
                              IMS Group Name
                            </FormLabel>
                            <FormDescription className="mt-0 mb-2 text-questionInput-description">
                              Enter the number/name of the IMS group you are
                              part of (if applicable). Example: IMS India G8
                            </FormDescription>
                            <FormControl>
                              <Input
                                className={`bg-questionInput border-questionInput-border text-questionInput-foreground ${inputHeight}`}
                                placeholder="+911234567890"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  {/* Location */}
                  <div
                    className={`flex justify-center items-start ${inputPadGap} border-b`}
                  >
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="groupName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="p-0">
                              IMS Group Name
                            </FormLabel>
                            <FormDescription className="mt-0 mb-2 text-questionInput-description">
                              Enter the number/name of the IMS group you are
                              part of (if applicable). Example: IMS India G8
                            </FormDescription>
                            <FormControl>
                              <div className="flex items-center justify-center gap-4">
                                <Select>
                                  <SelectTrigger
                                    className={`bg-questionInput border-questionInput-border text-questionInput-foreground ${inputHeight}`}
                                  >
                                    <SelectValue placeholder="Theme" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">
                                      System
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <Select>
                                  <SelectTrigger
                                    className={`bg-questionInput border-questionInput-border text-questionInput-foreground ${inputHeight}`}
                                  >
                                    <SelectValue placeholder="Theme" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">
                                      System
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                                <Select>
                                  <SelectTrigger
                                    className={`bg-questionInput border-questionInput-border text-questionInput-foreground ${inputHeight}`}
                                  >
                                    <SelectValue placeholder="Theme" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="light">Light</SelectItem>
                                    <SelectItem value="dark">Dark</SelectItem>
                                    <SelectItem value="system">
                                      System
                                    </SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
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
              <div className="grid grid-cols-1 gap-5">
                <Button type="submit" variant={"tertiary"} className="w-full">
                  Login with Email
                </Button>
                <Link href={"/auth/register"} className="w-full">
                  <Button variant="outline" className="w-full">
                    Don&apos;t have an account? Sign up
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
