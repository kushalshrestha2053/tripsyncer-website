"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { BlogHeader } from "./header";
import { BlogCategories } from "./categories";
import { BlogGrid } from "./grid";

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <section className="border-t bg-muted/40 py-10 md:py-16 dark:bg-muted/10">
      <Container>
        <BlogHeader />
        <BlogCategories onCategoryChange={setSelectedCategory} />
        <BlogGrid category={selectedCategory} />
      </Container>
    </section>
  );
}
