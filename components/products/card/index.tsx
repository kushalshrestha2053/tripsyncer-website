import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils/theme";
import { ProductImage } from "./image";
import { ProductContent } from "./content";
import { ProductFooter } from "./footer";
import type { Product } from "@/lib/constants/products";

interface ProductCardProps extends Product {
  className?: string;
}

export function ProductCard({
  title,
  description,

  tags,
  image,
  className,
}: ProductCardProps) {
  return <ProductContent tags={tags} title={title} description={description} />;
}
