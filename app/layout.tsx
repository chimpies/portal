import type { Metadata } from "next";
import "./globals.css";

import { Bebas_Neue, Inter } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Chimpies | Portal",
  description: "A Portal that can take you to the jungle.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
  className={`
  ${bebas.variable}
  ${inter.variable}
  bg-[#cccecd]
  text-black
  `}
>
        {children}
      </body>
    </html>
  );
}
