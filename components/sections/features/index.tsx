import { Container } from "@/components/ui/container";
import { FeaturesHeader } from "./header";
import { FeaturesGrid } from "./grid";

export function FeaturesSection() {
  return (
    <section
      id="products"
      className="border-t bg-muted/40 py-10 md:py-16 dark:bg-muted/10"
    >
      <Container>
        <FeaturesHeader />
        <FeaturesGrid />
      </Container>
    </section>
  );
}
