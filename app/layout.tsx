import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/header";
import { GlobalFooter } from "@/components/footer";

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
      <body className={`font-sans antialiased`}>
        <Providers>
          <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <GlobalFooter />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
