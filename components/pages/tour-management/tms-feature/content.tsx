import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  AlertCircle,
  Calendar,
  MessageSquare,
  PenToolIcon as Tool,
  Users,
  Zap,
} from "lucide-react";
import type React from "react";

export default function TMSFeatures() {
  return (
    <section className="border-t bg-muted/40 py-16 md:py-24 border-b">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground dark:text-white">
          Your New Command Center: 25+ Features of the Best Tour Management
          Software
        </h2>

        <Tabs defaultValue="core" className="w-full">
          <TabsList className="grid w-full grid-cols-3 gap-4 mb-8">
            <TabsTrigger value="core" className="text-center">
              Core Features
            </TabsTrigger>
            <TabsTrigger value="advanced" className="text-center">
              Advanced Tools
            </TabsTrigger>
            <TabsTrigger value="team" className="text-center">
              Team Power-Ups
            </TabsTrigger>
          </TabsList>

          <TabsContent value="core">
            <div className="grid gap-6 md:grid-cols-3">
              <FeatureCard
                icon={<Tool className="h-6 w-6 text-yellow-500" />}
                title="Tour Product Builder"
                description="Create full itineraries in 5 minutes. Add photos, GPS pins, pricing, and crucial info for those gluten-free trekkers."
              />
              <FeatureCard
                icon={<Calendar className="h-6 w-6 text-blue-500" />}
                title="Smart Booking Overload Prevention"
                description="Get alerts when you're booking 3 sunrise hikes on the same day at same time. 'Hey, Carlos can't clone himself!'"
              />
              <FeatureCard
                icon={<MessageSquare className="h-6 w-6 text-green-500" />}
                title="Live Customer Updates"
                description="Change a meeting point? It auto-updates:"
                list={[
                  "Booking confirmations",
                  "Guide apps",
                  "Printed itineraries",
                  "User Dashboard",
                ]}
              />
            </div>
          </TabsContent>

          <TabsContent value="advanced">
            <div className="grid gap-6 md:grid-cols-3">
              <FeatureCard
                icon={<Zap className="h-6 w-6 text-yellow-500" />}
                title="AI Scrappy Assistant"
                description="Struggling to describe that majestic mountain view? Our AI creates irresistible tour descriptions AND suggests killer hashtags like #EpicSunriseSpot."
                badge="Coming Soon"
              />
              <FeatureCard
                icon={<AlertCircle className="h-6 w-6 text-blue-500" />}
                title="Weather-Adaptive Tours"
                description="Rain forecast? Auto-send alternate itineraries with indoor activities. Customers will think you're psychic."
                badge="Coming Soon"
              />
              <FeatureCard
                icon={<Zap className="h-6 w-6 text-red-500" />}
                title="Profitability Dashboard"
                description="See which tours are cash cows vs. money pits. 'Hmm, maybe fewer llama rides…'"
                badge="Coming Soon"
              />
            </div>
          </TabsContent>

          <TabsContent value="team">
            <div className="grid gap-6 md:grid-cols-2">
              <FeatureCard
                icon={<Users className="h-6 w-6 text-yellow-500" />}
                title="Role-Based Access"
                description="Guides see only their schedule. Accountants see only finances. Admins see everything (insert evil laugh)."
              />
              <FeatureCard
                icon={<Zap className="h-6 w-6 text-gray-500" />}
                title="Offline Mode"
                description="No signal in the canyon? Guides can check bookings offline. Changes sync once they're back online."
                badge="Coming Soon"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  list,
  badge,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  list?: string[];
  badge?: string;
}) {
  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden transition-transform hover:scale-[1.02]"
      )}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {icon}
            <h3 className="ml-4 text-xl font-semibold">{title}</h3>
          </div>
          {badge && <Badge variant="default">{badge}</Badge>}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        {list && (
          <ul className="list-disc pl-5 space-y-1 mt-4 text-sm text-muted-foreground">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
