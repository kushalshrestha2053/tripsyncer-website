import React from "react";

interface Step {
  title: string;
  description: string;
  image: string;
}

const MobileView = ({ image }: { image: string }) => (
  <div className="flex justify-center lg:justify-end">
    <div className="relative mx-auto border-gray-300 dark:border-slate-600 bg-gray-300 border-[10px] rounded-[2.5rem] h-[450px] w-[225px]">
      <div className="h-[24px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -start-[12px] top-[54px] rounded-s-lg"></div>
      <div className="h-[34px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -start-[12px] top-[93px] rounded-s-lg"></div>
      <div className="h-[34px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -start-[12px] top-[134px] rounded-s-lg"></div>
      <div className="h-[48px] w-[2px] bg-gray-300 dark:border-slate-600 absolute -end-[12px] top-[106px] rounded-e-lg"></div>
      <div className="rounded-[1.5rem] overflow-hidden w-full h-full bg-white dark:border-slate-600">
        <img
          src={image}
          className="object-fill w-full h-full"
          alt={image.split("/").pop()?.split(".")[0]}
        />
      </div>
    </div>
  </div>
);

const HowItWorks = () => {
  const steps: Step[] = [
    {
      title: "Download the App",
      description: "Sign up in minutes and start planning right away.",
      image: "/tripsyncer-mobile-auth.png",
    },
    {
      title: "Choose Your Focus",
      description:
        'Select "Road Trip" or "Home Event" to access tailored features.',
      image: "/tripsyncer-mobile-app-roadtrip-homeevent.png",
    },
    {
      title: "Add Details",
      description:
        "Input routes, stops, or event information and let Generative AI optimize the plan.",
      image: "/planning.jpeg",
    },
    {
      title: "Invite and Share",
      description: `Send itineraries, event links, or updates with one click.`,
      image: "/tripsyncer-mobile-app-invite-feature.png",
    },
  ];

  return (
    <div id="how">
      <section
        className="flex flex-col items-center py-16 bg-background border-t"
        id="how_it_work"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-5 text-foreground dark:text-white">
              How It Works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Follow these simple steps to get started with our amazing app.{" "}
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((item, index) => (
              <div
                className={`flex flex-col lg:flex-row items-center  ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                key={index}
              >
                <div
                  className="lg:w-1/2"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <h4 className="text-3xl font-semibold mb-3 text-center">
                    {item.title}
                  </h4>
                  <div className="flex space-x-5 mb-5">
                    <a
                      href="!#"
                      className="text-4xl text-green-500 hover:text-green-700"
                    >
                      <i className="icofont-brand-android-robot"></i>
                    </a>
                    <a
                      href="!#"
                      className="text-4xl text-gray-300 hover:text-white"
                    >
                      <i className="icofont-brand-apple"></i>
                    </a>
                    <a
                      href="!#"
                      className="text-4xl text-blue-500 hover:text-blue-700"
                    >
                      <i className="icofont-brand-windows"></i>
                    </a>
                  </div>
                  <p className=" font-semibold leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>
                <div className="text-7xl ml-24  font-extrabold text-white mt-10 lg:mt-0 lg:w-1/6 lg:block hidden">
                  <h3>{index + 1}</h3>
                </div>

                <div
                  className="lg:w-1/2 mt-10 lg:mt-0"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <MobileView image={item.image} />
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-16 text-center"
            data-aos="fade-in"
            data-aos-duration="1500"
          >
            <div className="relative">
              <img
                src="https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1392356345.jpg?resize=840,450"
                alt="YouTube Thumbnail"
                className="rounded-xl shadow-xl mx-auto hover:shadow-2xl transition-shadow duration-300 ease-in-out blur-sm"
              />
              <a
                href="https://www.youtube.com/watch?v=tUjk5QfrOd0"
                target="_blank"
                className="absolute inset-0 flex flex-col items-center justify-center text-white"
                title="Watch video"
              >
                <span className="block mt-4 text-lg md:text-xl lg:text-2xl font-semibold bg-accent/70 bg-opacity-80 py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-lg shadow-md">
                  Create Your First Trip. Go With TripSyncer!!!
                </span>

                <span className="block text-sm bg-accent/70 bg-opacity-80 py-1 px-3 rounded-lg mt-2">
                  Watch video
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
