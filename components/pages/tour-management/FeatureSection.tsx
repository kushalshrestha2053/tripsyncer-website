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
  Check,
} from "lucide-react";

interface SubFeature {
  title: string;
  description: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  subFeatures: SubFeature[];
}

const features: Feature[] = [
  {
    icon: <Briefcase className="h-6 w-6 text-blue-500" />,
    title: "CRM",
    description:
      "Manage client relationships efficiently and grow your business.",
    tag: "Client Management",
    subFeatures: [
      {
        title: "Contact Tracking",
        description: "Easily keep track of your client interactions.",
      },
      {
        title: "Pipeline Management",
        description: "Monitor and optimize your sales pipeline.",
      },
      {
        title: "Reporting Tools",
        description: "Generate reports to analyze client data.",
      },
    ],
  },
  {
    icon: <ClipboardList className="h-6 w-6 text-yellow-500" />,
    title: "Tour Management",
    description: "Organize and customize tours seamlessly for your customers.",
    tag: "Tour Organization",
    subFeatures: [
      {
        title: "Custom Itineraries",
        description: "Create tailored itineraries for each client.",
      },
      {
        title: "Schedule Tracking",
        description: "Ensure all tours stay on schedule.",
      },
      {
        title: "Resource Allocation",
        description: "Efficiently allocate resources for tours.",
      },
    ],
  },
  {
    icon: <Users className="h-6 w-6 text-green-500" />,
    title: "Staff Management",
    description: "Coordinate and manage your staff with ease.",
    tag: "Team Coordination",
    subFeatures: [
      {
        title: "Shift Scheduling",
        description: "Plan and assign shifts for your team.",
      },
      {
        title: "Task Assignment",
        description: "Assign tasks and track progress effectively.",
      },
      {
        title: "Performance Monitoring",
        description: "Evaluate and improve team performance.",
      },
    ],
  },
  {
    icon: <Calendar className="h-6 w-6 text-purple-500" />,
    title: "Booking System",
    description: "Simplify bookings with an integrated, user-friendly system.",
    tag: "Booking Tools",
    subFeatures: [
      {
        title: "Online Reservations",
        description: "Allow customers to book online easily.",
      },
      {
        title: "Availability Management",
        description: "Track and manage available slots in real-time.",
      },
      {
        title: "Payment Integration",
        description: "Seamlessly process payments during bookings.",
      },
    ],
  },
  {
    icon: <FileText className="h-6 w-6 text-red-500" />,
    title: "Invoice Management",
    description: "Generate and manage invoices effortlessly.",
    tag: "Finance Management",
    subFeatures: [
      {
        title: "Invoice Generation",
        description: "Create professional invoices in seconds.",
      },
      {
        title: "Payment Tracking",
        description: "Monitor payment statuses efficiently.",
      },
      {
        title: "Tax Calculations",
        description: "Automatically calculate taxes for invoices.",
      },
    ],
  },
];

export function FeatureList() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-lg">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {feature.subFeatures.map((subFeature, subIndex) => (
                    <li key={subIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">{subFeature.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {subFeature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
