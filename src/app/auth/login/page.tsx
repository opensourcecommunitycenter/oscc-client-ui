import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
    return (
        <section className="wh-max">
            <div className="container custom-container grid grid-cols-1 place-items-center">
                <div className="hp-combo flex items-center justify-center gap-4 text-center p-12">
                    <TypographyP className="font-semibold tracking-normal">
                        Welcome back!
                    </TypographyP>
                    <TypographyH4
                        className={"font-normal text-green tracking-wide"}
                    >
                        Login to your account
                    </TypographyH4>
                </div>
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
                        <CardContent className="w-full grid grid-cols-1 gap-10">
                            <div className="grid gap-5">
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="ahmed@email.com"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <div className="flex items-center">
                                        <Label htmlFor="password">
                                            Password
                                        </Label>
                                        <Link
                                            href="#"
                                            className="ml-auto inline-block underline"
                                        >
                                            Forgot your password?
                                        </Link>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="•••••••"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-5">
                                <Link href={"/onboarding"}>
                                    <Button
                                        variant={"green"}
                                        type="submit"
                                        className="w-full"
                                    >
                                        Login with Email
                                    </Button>
                                </Link>
                                <Link href={"/auth/register"}>
                                    <Button variant="alt" className="w-full">
                                        Register for a new account
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Login;
