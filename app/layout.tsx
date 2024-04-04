import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./styles/themeProvider";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga4";

ReactGA.initialize("G-66NPF35TF8");

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jim Peraino",
  description:
    "Jim Peraino is a software engineer, design technologist, founder, and architect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={inter.className}>
          <SpeedInsights />
          <Analytics />
          <main className="min-w-screen pt-10 min-h-screen flex flex-col">
            <div className="container px-1 mx-auto max-w-2xl flex flex-col flex-grow">
              <Header />
              <div className="flex flex-col pt-20">{children}</div>
              <Footer />
            </div>
          </main>
        </body>
      </ThemeProvider>
    </html>
  );
}
