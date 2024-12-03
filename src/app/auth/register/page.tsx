"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";

const formSchema = z
    .object({
        fullName: z
            .string()
            .min(2, { message: "Full name must be at least 2 characters" })
            .max(50, { message: "Full name cannot exceed 50 characters" }),
        email: z
            .string()
            .email("Invalid email format")
            .max(50, { message: "Email cannot exceed 50 characters." }),
        username: z
            .string()
            .min(3, { message: "Username must be at least 3 characters" })
            .max(50, { message: "Username cannot exceed 50 characters" }),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters" })
            .max(50, { message: "Password cannot exceed 50 characters" }),
        confirmPassword: z
            .string()
            .min(8, {
                message: "Confirm password must be at least 8 characters",
            })
            .max(50),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"], // Attach error to confirmPassword field
    });

const Register = () => {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (values: z.infer<typeof formSchema>) => {
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
                        Welcome!
                    </TypographyP>
                    <TypographyH4
                        className={"font-normal text-tertiary tracking-wide"}
                    >
                        Signup for a new account
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
                                    {/* Full Name */}
                                    <FormField
                                        control={form.control}
                                        name="fullName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Ahmad Iqbal"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {/* Email */}
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
                                    <FormField
                                        control={form.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Username</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="ahmadiqbal"
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
                                                    <Input
                                                        placeholder="•••••••"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {/* Confirm Password */}
                                    <FormField
                                        control={form.control}
                                        name="confirmPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Confirm Password
                                                </FormLabel>
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
                                            Signup for a new account
                                        </Button>
                                        <Link
                                            href={"/auth/login"}
                                            className="w-full"
                                        >
                                            <Button
                                                variant="outline"
                                                className="w-full"
                                            >
                                                Already have an account? Login
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

export default Register;
