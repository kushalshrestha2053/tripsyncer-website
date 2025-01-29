"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeSwitch } from "@/components/theme/theme-switch";

export function AuthButtons() {
  return (
    <div className="flex items-center gap-4">
      <ThemeSwitch />
      <Button
        variant="ghost"
        className="inline-flex text-black bg-accent hover:bg-accent/80 sm:inline-flex"
        asChild
      >
        <Link href="/">Login / Signup</Link>
      </Button>
    </div>
  );
}
