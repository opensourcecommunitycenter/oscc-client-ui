"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginFormSchema } from "@/validations/authValidationSchema";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TypographyH4, TypographyP } from "@/components/ui/typography";

const Login = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    toast({ description: "Signup successful!" });
    console.log("Form Data:", values);
    // Submit form values to your backend API
  };

  return (
    <section className="wh-max">
      <div className="container custom-container grid grid-cols-1 place-items-center">
        {/* Header Section */}
        <div className="hp-combo flex items-center justify-center gap-4 text-center p-12">
          <TypographyP className="font-semibold tracking-normal">
            Welcome Back!
          </TypographyP>
          <TypographyH4 className={"font-normal text-green tracking-wide"}>
            Login to your account
          </TypographyH4>
        </div>

        {/* Form Section */}
        <div className="px-8 py-7">
          <Card className="grid grid-cols-1 place-items-center gap-5 bg-[#FFFFFFA6] max-w-full w-[700px] px-0 py-3">
            <CardHeader className="w-full h-full">
              <Button
                variant="outline"
                className="bg-[#f1f1f1] border border-[#c4c4c4] text-[#6b6b6b] font-medium"
              >
                <div className="w-7">
                  <Image
                    src={"/google.svg"}
                    width={500}
                    height={500}
                    alt="oscc logo"
                  />
                </div>
                Signup using Google
              </Button>
            </CardHeader>
            <div className="grid place-items-center">
              <span className="p-4 bg-[#FAFAFA] rounded-2xl border border-[#2F485859]">
                OR
              </span>
            </div>
            {/* User Form */}
            <CardContent className="w-full grid grid-cols-1 gap-10">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="ahmadiqbal@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Password */}
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="•••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Submit & Login Buttons */}
                  <div className="grid grid-cols-1 gap-5">
                    <Button
                      type="submit"
                      variant={"tertiary"}
                      className="w-full"
                    >
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Login;
