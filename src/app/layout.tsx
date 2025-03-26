import type { Metadata } from "next";
import { Nunito, Montserrat } from "next/font/google";
import Providers from "@/shared/ui/ThemeProvider/ThemeProvider";
import { Header } from "@/features/navigation/ui/header";
// import SplashCursor from "@/shared/ui/SplashCursor/SplashCursor";

import "./globals.css";

const nunitoSans = Nunito({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-nunito",
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Spark Studio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${nunitoSans.variable} ${montserrat.variable} antialiased`}
      >
        <Providers>
          <div className="">
            <Header />
          </div>
          <main>{children}</main>
        </Providers>
        {/* <SplashCursor /> */}
      </body>
    </html>
  );
}
