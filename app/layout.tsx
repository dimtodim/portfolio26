import type { Metadata } from "next";
import {
  Teko,
  Geist,
  Geist_Mono,
  Space_Grotesk,
  Manrope,
} from "next/font/google";
import { ReactLenis } from "lenis/react";

import "./globals.css";
import { Providers } from "@/_components/hooks/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coa Productions",
  description: "Potfolio 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${teko.variable} ${spaceGrotesk.variable} ${manrope.variable} antialiased`}
      >
        <Providers>
          <ReactLenis root options={{ lerp: 0.07 }}>
            {children}
          </ReactLenis>
        </Providers>
      </body>
    </html>
  );
}
