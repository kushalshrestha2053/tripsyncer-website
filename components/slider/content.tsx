"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const supportedCompanies = [
  {
    name: "Fordham University",
    logo: "/fordham-university.png",
    link: "https://www.fordham.edu",
  },
  {
    name: "Baruch College",
    logo: "/baruch-college.png",
    link: "https://www.baruch.cuny.edu",
  },
  {
    name: "McNeese State University",
    logo: "/mcneese-state-university.png",
    link: "https://www.mcneese.edu",
  },
  {
    name: "Cosmos College",
    logo: "/cosmos-college.png",
    link: "https://www.cosmoscollege.edu.np",
  },
  {
    name: "Chase Bank",
    logo: "/chase-bank.png",
    link: "https://www.chase.com",
  },
  {
    name: "US Department of Veterans Affairs",
    logo: "/us-department-of-veterans-affairs.jpg",
    link: "https://www.va.gov",
  },
  {
    name: "Microsoft",
    logo: "/microsoft.png",
    link: "https://www.microsoft.com",
  },
  {
    name: "GitHub",
    logo: "/github.png",
    link: "https://www.github.com",
  },
  {
    name: "Postman",
    logo: "/postman.png",
    link: "https://www.postman.com",
  },
  {
    name: "Firebase",
    logo: "/firebase.png",
    link: "https://firebase.google.com",
  },
  {
    name: "Google",
    logo: "/google.png",
    link: "https://www.google.com",
  },
  {
    name: "Apify",
    logo: "/apify.png",
    link: "https://apify.com",
  },
  {
    name: "OpenAI",
    logo: "/openai.png",
    link: "https://www.openai.com",
  },
  {
    name: "DeepSeek",
    logo: "/deepseek.png",
    link: "https://www.deepseek.com",
  },
  {
    name: "Gemini",
    logo: "/gemini.png",
    link: "https://www.gemini.com",
  },
];

export default function SupportedAndTrustedBy() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    slidesToShow: 9,
    slidesToScroll: 1,
    cssEase: "linear",
    rtl: true,
    draggable: true,
    swipeToSlide: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const handleMouseEnter = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause(); // Pause immediately
    }
  };

  const handleMouseLeave = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay(); // Play immediately when hover is removed
    }
  };

  return (
    <section className="py-12 bg-background border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-center mb-6 text-foreground sm:text-2xl">
          Supported and Advised by
        </h2>
        <Slider
          {...settings}
          className="supported-by-slider rtl-slider"
          ref={sliderRef}
        >
          {supportedCompanies.map((company, index) => (
            <div
              key={index}
              className="px-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-5 rounded-lg  flex items-center justify-center h-24 w-24 transition-all duration-300 ease-in-out bg-card  hover:scale-150">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={80}
                    height={80}
                    className="object-contain object-center"
                  />
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
