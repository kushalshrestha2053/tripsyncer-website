import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { ProductsSection } from "@/components/products";
import { BlogSection } from "@/components/blog";
import { Newsletter } from "@/components/layout/footer/newsletter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <BlogSection />
      <Newsletter />
    </main>
  );
}
