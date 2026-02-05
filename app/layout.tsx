import React from "react"
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lora } from "next/font/google";

import "./globals.css";

const _playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const _lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "Para ti",
  description: "Un regalo especial de cumpleanos",
};

export const viewport: Viewport = {
  themeColor: "#c97b7b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-serif antialiased">{children}</body>
    </html>
  );
}
