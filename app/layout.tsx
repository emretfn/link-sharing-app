//Providers
import ReduxProvider from "@/store/provider";

//assets
import "./globals.css";

//Types
import type { Metadata } from "next";

//Fonts
import localFont from "next/font/local";

const instrumentSans = localFont({
  src: "../public/assets/fonts/InstrumentSans-VariableFont_wdth,wght.ttf",
  variable: "--font-instrument-sans",
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
      <ReduxProvider>
        <body className={`${instrumentSans.className}`}>{children}</body>
      </ReduxProvider>
    </html>
  );
}
