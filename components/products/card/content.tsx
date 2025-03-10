import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProductFooter } from "./footer";
import { cn } from "@/lib/utils/theme";

import { Badge } from "@/components/ui/badge";

interface ProductContentProps {
  title: string;
  description: string;
  tags: string[];
  price: string;
  icon: string;
  className?: string;
  link: string;
}

export function ProductContent({
  title,
  description,
  tags,
  icon,
  link,
}: ProductContentProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-lg border  transition-all",
        "bg-card/50 dark:bg-card/30",
        "hover:shadow-lg dark:hover:bg-muted/5"
      )}
    >
      <CardHeader className="flex flex-row items-center gap-4">
        {icon}
        <div>
          <h3 className=" text-xl font-semibold">{title}</h3>

          {/* <div className="mt-2 flex flex-wrap gap-2">
            {tags.length > 0 && (
              <Badge className="bg-gradient-to-r from-purple-400 to-pink-500">
                {tags[0]}
              </Badge>
            )}
          </div> */}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="mt-auto p-4 pt-0">
        <ProductFooter link={link} />
      </CardFooter>
    </Card>
  );
}
