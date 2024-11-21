import type { Metadata } from "next";
import { Karla, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const karla = Karla({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-karla",
});

const playfair_display = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair-display",
});

export const metadata: Metadata = {
    title: "OSCC",
    description: "Open Source Community Center",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-karla font-playfair-display antialiased",
                    karla.variable,
                    playfair_display.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
