import { ArrowRight, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FinalCTASection() {
  return (
    <section className="border-b bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold tracking-tight">
              Start Your Adventure Today
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover amazing destinations, create unforgettable memories, and
              explore the world with ease. Your next adventure is just a click
              away!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                Plan Your Trip <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Download Our App <Smartphone className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <Image
              src="https://ttc.com/wp-content/uploads/2021/06/What-is-a-Destination-Management-CompanyDMC-scaled.jpg"
              alt="Travel collage"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-lg">
              <p className="text-2xl font-bold">1000+</p>
              <p className="text-muted-foreground">Happy Travelers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
