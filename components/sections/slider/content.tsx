"use client";

import React from "react";
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
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    slidesToShow: 7,
    slidesToScroll: 1,
    cssEase: "linear",
    rtl: true,
    draggable: true,
    swipeToSlide: true,
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
          slidesToShow: 6,
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
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-background border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-tighter text-foreground sm:text-5xl">
          Supported and Advised by Teams At
        </h2>
        <Slider {...settings} className="supported-by-slider rtl-slider">
          {supportedCompanies.map((company, index) => (
            <div key={index} className="px-4">
              <Link
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="p-6 rounded-lg shadow-md flex items-center justify-center h-32 transition-all duration-300 ease-in-out bg-card hover:shadow-lg hover:scale-105">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={200}
                    height={60}
                    className="max-w-full h-auto object-contain"
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
