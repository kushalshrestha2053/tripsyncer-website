"use client";

import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faCableCar,
  faCar,
  faMapLocation,
  faMapPin,
  faShareNodes,
  faThumbTack,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";

interface ICategory {
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
}

const Features = () => {
  const [selectedTile, setSelectedTile] = useState<string>("Trip Planning");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const data: ICategory[] = [
    {
      title: "Trip Planning",
      icon: <FontAwesomeIcon icon={faCar} size="1x" />,
      description:
        "Start your adventure effortlessly! Set up your itinerary, invite friends, and hit the road with just a few clicks.",
      subtitle: "Seamless Planning & Trip Creation 🗺️",
      image: "/planning.jpeg",
      alt: "Tripsyncer: trip planning mobile app",
    },
    {
      title: "Live Location",
      icon: <FontAwesomeIcon icon={faMapPin} size="1x" />,
      description:
        "Keep the squad in sync! Always know where your friends are with real-time location updates.",
      subtitle: "Live Location Sharing 📍",
      image: "/user-location.jpeg",
      alt: "Tripsyncer: trip planning mobile app",
    },
    {
      title: "Pin/Note",
      icon: <FontAwesomeIcon icon={faThumbTack} size="1x" />,
      description:
        "Capture every moment and idea on the go. Pin amazing spots and jot down your thoughts with our intuitive note-taking feature.",
      subtitle: "Pin & Note 📌",
      image: "/notes.jpeg",
      alt: "Tripsyncer: trip planning mobile app",
    },
    {
      title: "Activity Planning",
      icon: <FontAwesomeIcon icon={faCableCar} size="1x" />,
      description:
        "Dive into excitement with activities everyone loves. Easily browse and book recommended activities tailored to your group's preferences.",
      subtitle: "Plan Activities with Ease 🎢",
      image: "/activities.jpeg",
      alt: "Tripsyncer: trip planning mobile app",
    },
    {
      title: "Real Time",
      icon: <FontAwesomeIcon icon={faArrowsRotate} size="1x" />,
      description:
        "Get real-time updates and never miss out on the fun. Stay informed about trip changes and upcoming plans.",
      subtitle: "Stay Updated 🔄",
      image: "/user-location.jpeg",
      alt: "Tripsyncer: trip planning mobile app",
    },
    {
      title: "Stop Points",
      icon: <FontAwesomeIcon icon={faMapLocation} size="1x" />,
      description:
        "Organize your journey with precision. Set strategic meetup and stop points to manage your travel itinerary flawlessly.",
      subtitle: "Meetup Points & Stop Points 📍",
      image: "/stop-points.jpeg",
      alt: "Tripsyncer: trip planning mobile app",
    },
    {
      title: "AI-Activities",
      icon: <FontAwesomeIcon icon={faWandMagicSparkles} size="1x" />,
      description:
        "Discover activities tailored to your destination and preferences. Our AI analyzes local attractions and suggests the best experiences for your group.",
      subtitle: "AI-Recommended Activities ✨",
      image: "/ai.jpeg",
      alt: "Tripsyncer: trip planning mobile app",
    },
    {
      title: "Social Sharing",
      icon: <FontAwesomeIcon icon={faShareNodes} size="1x" />,
      description:
        "Easily share your favorite travel memories on social media. With just a few taps, post your photos, videos, and travel notes directly to your favorite platforms.",
      subtitle: "Memory Sharing to Social Media 📸",
      image: "/social.jpeg",
      alt: "Tripsyncer: trip planning mobile app",
    },
  ];

  const handleTileClick = (index: number, title: string) => {
    setSelectedTile(title);

    const container = containerRef.current;
    const selectedItem = itemRefs.current[index];

    if (container && selectedItem) {
      const containerWidth = container.offsetWidth;
      const selectedItemLeft = selectedItem.offsetLeft;
      const selectedItemWidth = selectedItem.offsetWidth;

      const scrollPosition =
        selectedItemLeft - (containerWidth / 2 - selectedItemWidth / 2);

      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = () => {
        const scrollLeft = container.scrollLeft;
        const containerWidth = container.offsetWidth;
        const totalWidth = container.scrollWidth / 3;

        if (scrollLeft <= 0) {
          container.scrollLeft = totalWidth;
        } else if (scrollLeft >= totalWidth * 2) {
          container.scrollLeft = totalWidth;
        }
      };

      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      id="features"
      className="py-16 bg-background w-full max-w-[75%] mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
        Features Details
      </h2>
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r  to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l to-transparent z-10 pointer-events-none"></div>
        <div
          ref={containerRef}
          className="flex space-x-2 sm:space-x-4 overflow-x-auto snap-x snap-mandatory py-2 sm:py-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[...data, ...data, ...data].map((category, index) => (
            <div
              role="button"
              key={category.title + index}
              className={`cursor-pointer px-2 sm:px-4 py-3 sm:py-6 rounded-lg text-center flex-shrink-0 flex flex-col justify-center items-center transition-all duration-300 snap-center w-[100px] sm:w-[140px]
                ${
                  selectedTile === category.title
                    ? "text-accent transform scale-110 bg-white/10 shadow-lg"
                    : " hover:bg-white/5"
                }`}
              ref={(el: any) => (itemRefs.current[index] = el)}
              onClick={() => handleTileClick(index, category.title)}
            >
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 transition-transform duration-300 transform hover:scale-110">
                {category.icon}
              </div>
              <div className="text-xs sm:text-sm font-semibold">
                {category.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTile && (
        <div className="grid lg:grid-cols-2 mt-2 p-10 w-full md:grid-cols-1 bg-card border text-card-foreground rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg dark:bg-card/70 dark:text-card-foreground/90">
          <div className="py-5 flex flex-col justify-center leading-normal gap-5">
            <h5 className="mb-2 text-2xl md:text-4xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.find((item) => item.title === selectedTile)?.subtitle}
            </h5>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {data.find((item) => item.title === selectedTile)?.description}
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative mx-auto border-gray-300 dark:border-slate-600 bg-gray-300 border-[10px] rounded-[2.5rem] h-[450px] w-[225px]">
              <div className="h-[24px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -start-[12px] top-[54px] rounded-s-lg"></div>
              <div className="h-[34px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -start-[12px] top-[93px] rounded-s-lg"></div>
              <div className="h-[34px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -start-[12px] top-[134px] rounded-s-lg"></div>
              <div className="h-[48px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -end-[12px] top-[106px] rounded-e-lg"></div>
              <div className="rounded-[1.5rem] overflow-hidden w-full h-full bg-white dark:border-slate-600">
                <img
                  src={data.find((item) => item.title === selectedTile)?.image}
                  className="object-fill w-full h-full"
                  alt={data.find((item) => item.title === selectedTile)?.alt}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Features;
