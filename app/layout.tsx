import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/header";
import { GlobalFooter } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aprende Español - Learn Spanish Online",
  description:
    "Master Spanish grammar and vocabulary with our modern platform.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>
          <div className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
            <Header />

            {/* FIXED MAIN CONTAINER */}
            <main className="flex-1 flex flex-col min-h-0">
              {children}
            </main>

            <GlobalFooter />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
