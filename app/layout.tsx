import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import GA from "@/components/GA";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Morph - Free to use File Converter",
    description: `Transform your files in the blink of an eye!! Break free from file format limitations. Your files your way. Convert them effortlessly.`,
    creator: "Aayush Vinay",
    keywords: "image converter, video converter, audio converter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            
            <meta name="google-site-verification" content="LFaTfHdlyo1iJHkJaM5FMK6Zv8SGUOVXQqsPvzkOPsQ" />
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={["light", "dark"]}>
                    <Navbar />
                    <Toaster />
                    <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
                        {children}
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
