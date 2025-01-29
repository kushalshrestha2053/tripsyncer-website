import "./globals.css";
import type { Metadata } from "next";
import { Inter, Satisfy } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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
          <div className="flex min-h-screen flex-col bg-background">
            <Header satisfy={satisfy} />
            <main className="flex-1 bg-background">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
