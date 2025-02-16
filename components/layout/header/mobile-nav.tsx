"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { mainNavigation } from "@/config/navigation";
import { AuthButtons } from "./auth-buttons"; // Assuming you have the AuthButtons component

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileNav({ open, onOpenChange }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="pr-0">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-2">
            {/* Navigation Links */}
            {mainNavigation.map((item) => (
              <MobileNavItem
                key={item.name}
                item={item}
                pathname={pathname}
                onSelect={() => onOpenChange(false)}
              />
            ))}
            {/* Auth Buttons */}
            <div className="mt-4">
              <AuthButtons />
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface NavItem {
  name: string;
  href?: string;
  items?: Array<{
    name: string;
    href: string;
    description?: string;
  }>;
}

function MobileNavItem({
  item,
  pathname,
  onSelect,
}: {
  item: NavItem;
  pathname: string;
  onSelect: () => void;
}) {
  if ("href" in item && item.href) {
    return (
      <Link
        href={item.href}
        className={`block px-2 py-1 text-lg font-medium ${
          pathname === item.href ? "text-primary" : "text-muted-foreground"
        }`}
        onClick={onSelect}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <>
      <div className="px-2 py-1 text-lg font-medium text-foreground">
        {item.name}
      </div>
      {item.items?.map((subItem) => (
        <Link
          key={subItem.href}
          href={subItem.href}
          className={`block px-4 py-1 text-base ${
            pathname === subItem.href ? "text-primary" : "text-muted-foreground"
          }`}
          onClick={onSelect}
        >
          {subItem.name}
        </Link>
      ))}
    </>
  );
}
