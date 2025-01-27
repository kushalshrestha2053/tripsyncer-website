import { TabsList } from "@/components/ui/tabs";
import { PRODUCT_CATEGORIES } from "@/lib/constants/products";
import { CategoryTab } from "./tab";

export function CategoryTabsList() {
  return (
    <TabsList className="mb-20 grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
      {PRODUCT_CATEGORIES.map((category) => (
        <CategoryTab className="mb-2" key={category} category={category} />
      ))}
    </TabsList>
  );
}
