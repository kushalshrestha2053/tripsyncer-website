import "./globals.css";
import type { Metadata } from "next";
import { Inter, Satisfy } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ClientLayout from "./clientLayout";

const inter = Inter({ subsets: ["latin"] });
const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tripsyncer: Group Roadtrip planning with our AI powered cutting-edge",
  description:
    "Expert guidance and resources for immigration, tax optimization, technology adoption, AI solutions, and career development.",
  keywords:
    "immigration guidance, tax optimization, AI solutions, career development, digital products, technology consulting",
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
