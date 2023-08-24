import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const instrumentSans = localFont({
  src: "../public/assets/fonts/InstrumentSans-VariableFont_wdth,wght.ttf",
});

export const metadata: Metadata = {
  title: "devlinks",
  description: "devlinks is a challenge by frontend mentor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>{children}</body>
    </html>
  );
}
