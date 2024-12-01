import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = () => {
    return (
        <section className="wh-max">
            <div className="hp-combo flex items-center justify-center gap-4 text-center p-12">
                <TypographyP className="font-semibold tracking-normal">
                    Welcome!
                </TypographyP>
                <TypographyH4
                    className={"font-normal text-green tracking-wide"}
                >
                    Signup for a new account
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
                                <Label htmlFor="full-name">Full Name</Label>
                                <Input
                                    id="full-name"
                                    type="text"
                                    placeholder="Ahmed Iqbal"
                                    required
                                />
                            </div>
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
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="ahmediqbal"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="•••••••"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="confirm-password">
                                        Confirm Password
                                    </Label>
                                </div>
                                <Input
                                    id="confirm-password"
                                    type="password"
                                    placeholder="•••••••"
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-5">
                            <Link href={"/onboarding/start"}>
                                <Button
                                    variant={"green"}
                                    type="submit"
                                    className="w-full"
                                >
                                    Signup for a new account
                                </Button>
                            </Link>
                            <Link href={"/auth/login"} className="w-full">
                                <Button variant="outline" className="w-full">
                                    Login using an existing account
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default Register;
