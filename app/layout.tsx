//Providers
import ReduxProvider from "@/store/provider";
import { Toaster } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

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
        <body className={`${instrumentSans.className}`}>
          <NextTopLoader color="#633CFF" showSpinner={false} />
          {children}
          <Toaster
            position="bottom-center"
            containerClassName="toaster-container"
            toastOptions={{
              className: "toaster",
            }}
          />
        </body>
      </ReduxProvider>
    </html>
  );
}
