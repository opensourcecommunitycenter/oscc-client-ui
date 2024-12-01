import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/custom/header";
import Footer from "@/components/custom/footer";

const open_sans = Open_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-open-sans",
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
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${open_sans.variable} ${playfair_display.variable} min-h-screen bg-background antialiased text-xl`}
            >
                {/* <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                > */}
                <Header />
                <main>{children}</main>
                <Footer />
                {/* </ThemeProvider> */}
            </body>
        </html>
    );
}
