import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Briefcase,
  ClipboardList,
  Users,
  Calendar,
  FileText,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}

const features: Feature[] = [
  {
    icon: <Briefcase className="h-6 w-6 text-blue-500" />,
    title: "CRM",
    description:
      "Manage client relationships efficiently and grow your business.",
    tag: "Client Management",
  },
  {
    icon: <ClipboardList className="h-6 w-6 text-yellow-500" />,
    title: "Tour Management",
    description: "Organize and customize tours seamlessly for your customers.",
    tag: "Tour Organization",
  },
  {
    icon: <Users className="h-6 w-6 text-green-500" />,
    title: "Staff Management",
    description: "Coordinate and manage your staff with ease.",
    tag: "Team Coordination",
  },
  {
    icon: <Calendar className="h-6 w-6 text-purple-500" />,
    title: "Booking System",
    description: "Simplify bookings with an integrated, user-friendly system.",
    tag: "Booking Tools",
  },
  {
    icon: <FileText className="h-6 w-6 text-red-500" />,
    title: "Invoice Management",
    description: "Generate and manage invoices effortlessly.",
    tag: "Finance Management",
  },
];

export function FeatureList() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4">
                {feature.icon}
                <div>
                  <CardTitle>{feature.title}</CardTitle>
                  <Badge className="mt-1 bg-gray-600 text-white">
                    {feature.tag}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
