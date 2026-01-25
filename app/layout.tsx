import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import Image from "next/image";

import { ThemeProvider } from "next-themes";

import { ReactNode } from "react";

import "./globals.css";

import Footer from "@components/footer";
import Header from "@components/header";

import Background from "@images/gradient.webp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AssoDePicche",
  description: "",
};

interface Properties {
  children: ReactNode;
}

export default function RootLayout(properties: Properties) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container max-w-3xl mx-auto min-h-screen flex flex-col px-4 py-5">
            <div className="flex-1">
              <Header/>
              <main className="min-h-screen font-sans w-full max-w-3xl flex-col py-32 px-16 sm:items-start">{ properties.children }</main>
            </div>
            <Footer/>
            <Image
              alt="Background"
              className="absolute left-1/2 top-0 z-0 -translate-x-1/2 object-cover w-full"
              priority
              role="presentation"
              src={Background}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
