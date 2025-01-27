"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const trustedCompanies = [
  {
    name: "Company 1",
    logo: "https://www.example.com/path/to/company1-logo.svg",
  },
  {
    name: "Company 2",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Google_logo.svg",
  },
  {
    name: "Company 3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/IBM_logo.svg",
  },
  {
    name: "Company 4",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Microsoft_logo.svg",
  },
  {
    name: "Company 5",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Apple_logo.svg",
  },
  {
    name: "Company 6",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Twitter_logo_2012.svg",
  },
  {
    name: "Company 7",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Google_logo.svg",
  },
  {
    name: "Company 8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/IBM_logo.svg",
  },
];

export default function TrustedBySlider() {
  const settings = {
    dots: false, // Remove dots
    arrows: false, // Remove next/previous buttons
    infinite: true, // Infinite loop
    speed: 500,
    slidesToShow: 7, // Show 7 items at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7, // Adjust for larger screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6, // Show 6 items on tablets
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4, // Show 4 items on smaller screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2, // Show 2 items on very small screens
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-tighter text-foreground sm:text-5xl">
          Trusted By Organizations
        </h2>
        <Slider {...settings} className="trusted-by-slider">
          {trustedCompanies.map((company, index) => (
            <div key={index} className="px-4">
              <div className="p-6 rounded-lg shadow-md flex items-center justify-center h-32 transition-all duration-300 ease-in-out bg-card hover:shadow-lg hover:scale-105">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={200}
                  height={60}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
