"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function ClientLayout({
  children,
  satisfy,
}: {
  children: React.ReactNode;
  satisfy: any;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header satisfy={satisfy} />
      <main className="flex-1 bg-background">{children}</main>
      {pathname !== "/mobile-app" && <Footer />}
    </div>
  );
}
