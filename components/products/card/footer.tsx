import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ProductFooter() {
  return (
    <div className="flex w-full items-center justify-end">
      <Link
        href="#"
        className={cn(
          "inline-flex items-center text-sm font-medium",
          "text-primary hover:text-primary/80",
          "transition-colors hover:underline"
        )}
      >
        <span>Learn more</span>
        <span className="ml-1 transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}
