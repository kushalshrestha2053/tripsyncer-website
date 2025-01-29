import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Rocket, CreditCard } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const getOs = () => {
  const platform = navigator.platform.toLowerCase();
  const userAgent = navigator.userAgent.toLowerCase();

  if (
    platform.includes("mac") ||
    userAgent.includes("iphone") ||
    userAgent.includes("ipad")
  ) {
    return "Apple";
  } else if (platform.includes("win") || userAgent.includes("windows")) {
    return "Windows";
  } else if (platform.includes("linux") || userAgent.includes("linux")) {
    return "Linux";
  }
  return "Other";
};

export default function PricingSection() {
  const [downloadLink, setDownloadLink] = useState("#");

  useEffect(() => {
    const os = getOs();
    if (os === "Apple") {
      setDownloadLink("https://apps.apple.com/us/app/tripsyncer/id6502956755");
    } else if (os === "Windows") {
      setDownloadLink(
        "https://play.google.com/store/apps/details?id=com.tripsyncer"
      );
    } else if (os === "Linux") {
      setDownloadLink(
        "https://play.google.com/store/apps/details?id=com.tripsyncer"
      );
    } else {
      setDownloadLink(
        "https://play.google.com/store/apps/details?id=com.tripsyncer"
      );
    }
  }, []);

  return (
    <section className="border-t bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Affordable Plans for Every Planner
          </h2>
        </div>

        <div className="flex justify-center">
          <Card className="p-6 rounded-lg w-full sm:w-auto max-w-2xl shadow-md bg-card border text-card-foreground transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-card/70 dark:text-card-foreground/90">
            <CardContent className="p-0">
              <div className="text-primary-foreground p-6 text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black dark:text-gray-100">
                  TripSyncer is Completely Free
                </h3>
                <p className="text-lg opacity-90 text-black dark:text-gray-100">
                  Enjoy all features without any cost during our beta period
                </p>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex justify-center">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-black dark:text-gray-100">
                      <Rocket className="w-6 h-6 mr-3 text-primary" />
                      <span>Access to all premium features</span>
                    </li>
                    <li className="flex items-center text-black dark:text-gray-100">
                      <CreditCard className="w-6 h-6 mr-3 text-primary" />
                      <span>No credit card required</span>
                    </li>
                    <li className="flex items-center text-black dark:text-gray-100">
                      <Sparkles className="w-6 h-6 mr-3 text-primary" />
                      <span>
                        Be part of shaping the future of event planning
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <Link href={downloadLink} target="blank">
                    <Button
                      size="lg"
                      variant="default"
                      className="w-full sm:w-auto px-6 py-3 g"
                    >
                      <span className="block sm:hidden">
                        Get Started for Free →
                      </span>
                      <span className="hidden sm:block">
                        Get Started for Free → Experience the Difference
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-center mt-8 text-muted-foreground">
          Limited time offer. Start planning your perfect event today!
        </p>
      </div>
    </section>
  );
}
