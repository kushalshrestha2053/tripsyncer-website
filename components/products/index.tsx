"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { ProductHeader } from "./header";
import { ProductCategories } from "./categories";
import { ProductGrid } from "./grid";
import type { ProductCategory } from "@/lib/constants/products";

export function ProductsSection() {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("mobileApp");

  return (
    <section className="border-t bg-muted/40 py-10 md:py-16">
      <Container>
        <ProductHeader />
        <ProductCategories
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <ProductGrid category={activeCategory} />
      </Container>
    </section>
  );
}
