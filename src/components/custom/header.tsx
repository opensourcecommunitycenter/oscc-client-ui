"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { useEffect } from "react";
// import { ModeToggle } from "../ui/dark-mode-button";

const Header = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (header) {
                header.classList.toggle("sticking-nav", window.scrollY > 50);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <header className="header sticky top-0 z-50 bg-background transition-all duration-300 ease-in-out">
            <nav className="flex items-center justify-between container custom-container py-6 2xl:py-8">
                <Link href={"/"}>
                    <div className="w-60">
                        <Image
                            src={"/oscc.svg"}
                            width={500}
                            height={500}
                            alt="oscc logo"
                        />
                    </div>
                </Link>
                <div>
                    <ul className="flex items-center gap-x-5 font-medium">
                        <li>
                            <Link href={"/"}>Philosophy</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Vision</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Academia</Link>
                        </li>
                        <li>
                            <Link href={"/"}>FAQ</Link>
                        </li>
                        <li>
                            <Link href={"/auth/login"} className="w-full">
                                <Button variant={"default"} size={"header"}>
                                    Login to My Account
                                </Button>
                            </Link>
                        </li>
                        {/* <li>
                            <ModeToggle />
                        </li> */}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
