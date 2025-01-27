import { FEATURES } from "@/lib/constants/features";
import { FeatureCard } from "./card";

export function FeaturesGrid() {
  return (
    <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
      {FEATURES.map((feature) => (
        <FeatureCard key={feature.href} {...feature} />
      ))}
    </div>
  );
}
