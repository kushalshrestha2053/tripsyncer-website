import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProductFooterProps {
  link: string;
}

export function ProductFooter({ link }: ProductFooterProps) {
  // Ensure `link` is defined and is a string before calling `startsWith`
  const formattedLink =
    link && typeof link === "string"
      ? link.startsWith("/")
        ? link
        : `/${link}`
      : "/"; // Default to "/" if `link` is not a valid string

  return (
    <div className="flex w-full items-center justify-end">
      <Link
        href={formattedLink}
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
