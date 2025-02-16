import Link from "next/link";

interface BlogContentProps {
  title: string;
  href: string;
  excerpt: string;
}

export function BlogContent({ title, excerpt, href }: BlogContentProps) {
  return (
    <>
      <Link href={href} target="_blank" className="block group">
        <h3 className="text-lg font-semibold group-hover:text-accent">
          {title}
        </h3>
      </Link>
      <p className="mt-2 text-sm text-muted-foreground">{excerpt}</p>
    </>
  );
}
