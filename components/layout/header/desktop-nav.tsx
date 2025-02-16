"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { mainNavigation } from "@/config/navigation";
import { ListItem } from "./list-item";
import { AuthButtons } from "./auth-buttons";

export function DesktopNav() {
  return (
    <NavigationMenu className="hidden lg:flex w-full items-center justify-between">
      {/* Left side: Navigation menu items */}
      <NavigationMenuList className="flex space-x-6">
        {mainNavigation.map((item) => (
          <NavigationMenuItem key={item.name}>
            {"href" in item ? (
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} bg-transparent hover:text-accent`}
                >
                  {item.name}
                </NavigationMenuLink>
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger className="bg-transparent">
                  {item.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 md:w-[700px] md:grid-cols-2 lg:w-[800px]">
                    {item.items.map((subItem) => (
                      <ListItem
                        key={subItem.href}
                        title={
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-lg">
                              {subItem.name}
                            </span>
                            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                              {subItem.tag}
                            </span>
                          </div>
                        }
                        href={subItem.href}
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

      <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-24 xl:ml-48 2xl:ml-72">
        <AuthButtons />
      </div>
    </NavigationMenu>
  );
}
