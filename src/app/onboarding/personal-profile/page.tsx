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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Stepper from "@/components/custom/stepper";
import Link from "next/link";

const formSchema = z.object({
    email: z
        .string()
        .email("Invalid email format")
        .max(50, { message: "Email cannot exceed 50 characters." }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .max(50, { message: "Password cannot exceed 50 characters" }),
});

const Onboarding = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        alert("Next Step");
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
                        Help us understand your background, vision, and
                        commitment
                    </TypographyP>
                </div>

                {/* Form Section */}
                <div className="px-8 py-7">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <Card className="grid grid-cols-1 place-items-center gap-5 bg-[#FFFFFFA6] max-w-full w-[700px] px-0 py-3">
                                {/* User Form */}
                                <CardContent className="w-full grid grid-cols-1 gap-10">
                                    <div className="flex justify-center items-start gap-8 border-b">
                                        <div
                                            className={
                                                "w-24 aspect-square flex items-center justify-center bg-question text-question-foreground text-5xl font-serif rounded-xl font-light"
                                            }
                                        >
                                            Q
                                        </div>
                                        <div className="w-full">
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>
                                                            Email Address
                                                        </FormLabel>
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
                                        </div>
                                    </div>

                                    {/* Password */}
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="•••••••"
                                                        {...field}
                                                    />
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
                                        <Link
                                            href={"/auth/register"}
                                            className="w-full"
                                        >
                                            <Button
                                                variant="outline"
                                                className="w-full"
                                            >
                                                Don&apos;t have an account? Sign
                                                up
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
};

export default Onboarding;
