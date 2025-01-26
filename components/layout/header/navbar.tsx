"use client";

import { useState, useEffect } from "react";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { Logo } from "./logo";

interface NavbarProps {
  satisfy: any; // Next.js font object type
}

export function Navbar({ satisfy }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex h-16 w-full items-center justify-between gap-10 px-8">
      <Logo satisfy={satisfy} />

      <div className="lg:hidden flex items-center">
        <MobileNav open={open} onOpenChange={setOpen} />
      </div>

      <div className="hidden lg:flex flex-grow">
        <DesktopNav />
      </div>
    </div>
  );
}
