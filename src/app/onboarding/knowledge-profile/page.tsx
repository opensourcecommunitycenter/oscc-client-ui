"use client";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Stepper from "@/components/custom/stepper";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
// import QuestionField from "@/components/custom/question-field";
import knowledgeProfileValidationSchema from "@/validations/knowledgeProfileValidationSchema";
import QBox from "@/components/custom/q-box";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Onboarding = () => {
  const { toast } = useToast();
  // const form = useForm<z.infer<typeof knowledgeProfileValidationSchema>>({
  //   resolver: zodResolver(knowledgeProfileValidationSchema),
  //   defaultValues: {},
  // });

  // const formControl = form.control;

  // const onSubmit = (
  //   values: z.infer<typeof knowledgeProfileValidationSchema>,
  // ) => {
  //   toast({ description: "Submit Successful" });
  //   console.log("Form Data:", values);
  //   // Submit form values to your backend API
  // };

  const form = useForm<z.infer<typeof knowledgeProfileValidationSchema>>({
    resolver: zodResolver(knowledgeProfileValidationSchema),
  });

  // const formControl = form.control;

  function onSubmit(data: z.infer<typeof knowledgeProfileValidationSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

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
            Set Up Your Knowledge Profile
          </TypographyH3>
          <TypographyP className="w-[90%] mx-auto font-normal tracking-normal text-2xl">
            This step helps us understand your experience level in different
            workshops, so we can suggest the best starting point for you.
          </TypographyP>
        </div>

        {/* Form Section */}
        <div className="px-8 py-7">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-28">
              {/* Form Card */}
              <Card className="grid grid-cols-1 place-items-center gap-5 bg-[#FFFFFFA6] min-w-full w-[75rem] px-0 py-8">
                <CardContent className="w-full grid grid-cols-1 px-14 py-2 gap-10">
                  <div className="form-field">
                    <QBox />
                    <div className="w-full">
                      <FormField
                        control={form.control}
                        name="arabicLiterature"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>
                              What is your current experience level in Arabic
                              Literature (Grammar, Tajweed, Tafsir)?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="all" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    I’m new to Arabic literature and want to
                                    start with the basics.
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="mentions" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    I have a basic understanding and want to
                                    deepen my knowledge.
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="none" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    I’m comfortable with the language and want
                                    to explore specific topics in detail.
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center space-x-3 space-y-0">
                                  <FormControl>
                                    <RadioGroupItem value="none" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    I have advanced knowledge and can engage in
                                    specialized discussions.
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
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
