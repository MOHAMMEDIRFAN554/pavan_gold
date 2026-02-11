import React from "react"
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "PAVAN GOLD | Diamond & Platinum Jewellery",
  description:
    "Discover timeless elegance with PAVAN GOLD. Explore curated collections of gold, diamond, and platinum jewellery crafted with precision and care.",
};

export const viewport: Viewport = {
  themeColor: "#1a231a",
};

import SplashScreen from "@/components/splash-screen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
