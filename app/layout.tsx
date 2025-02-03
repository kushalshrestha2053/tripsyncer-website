import "./globals.css";
import type { Metadata } from "next";
import { Inter, Satisfy } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ClientLayout from "./clientLayout";

const inter = Inter({ subsets: ["latin"] });
const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TripSyncer: All-in-One App for Road Trips, Events & Tour Management",
  description:
    "Plan unforgettable road trips, host flawless events, and manage professional tours with TripSyncer. AI-powered tools for smarter planning and collaboration. Start free today!",
  keywords: [
    "road trip planner",
    "home event manager",
    "tour management system",
    "travel app",
    "event planning app",
    "AI-powered trip planner",
    "TripSyncer app",
  ],
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: "https://tripsyncer.com",
  //   title: "TripSyncer: Your Ultimate Travel Management Companion",
  //   description:
  //     "From personal adventures to professional tour management, TripSyncer: Your Ultimate Travel Management Companion. Try it now and create memories effortlessly.",
  //   siteName: "Tripsyncer",
  //   images: [
  //     {
  //       url: "/tripsyncer-logo.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "TripSyncer Dashboard Overview",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background mt-10 lg:mt-20`}>
        <ThemeProvider>
          <ClientLayout satisfy={satisfy}>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
