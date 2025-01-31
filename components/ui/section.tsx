import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "muted";
}

export function Section({
  className,
  variant = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-10 md:py-16",
        variant === "muted" && "bg-muted/40",
        className
      )}
      {...props}
    />
  );
}
