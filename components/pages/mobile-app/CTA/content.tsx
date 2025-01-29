import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
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

export default function FinalCTA() {
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
    <section className="py-16 bg-background border-t">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-center mb-6">
          Ready to Plan Your Next Adventure or Event?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-12">
          Start today with TripSyncer and discover the joy of stress-free
          planning. Whether you're hitting the road or hosting at home, we've
          got you covered.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <Link href={downloadLink} target="_blank">
            <Button size="lg" variant="default">
              Download TripSyncer for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" asChild>
            <Link
              href="https://www.youtube.com/watch?v=tUjk5QfrOd0"
              target="_blank"
            >
              See How It Works (Demo Video)
              <Play className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
