import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="mt-20 mb-20 mx-auto max-w-7xl font-chakra-petch h-[70vh] z-10 backdrop-blur px-4 sm:px-8">
      <div className="h-full flex flex-col items-center justify-center gap-6 sm:gap-10">
        <h2 className="text-5xl sm:text-7xl font-bold text-black dark:text-white text-center">
          !! Sorry For the Inconvenience : Work in Progress!!
        </h2>
        <div className="text-xs text-primary flex gap-2 items-center justify-center">
          <hr className="h-1 w-8 sm:w-12" />
          <h1 className="text-sm text-black dark:text-white">
            WAIT FOR OUR MAGIC
          </h1>
          <hr className="h-1 w-8 sm:w-12" />
        </div>
        <h1 className="text-lg sm:text-2xl text-center font-bold text-black dark:text-white">
          EITHER THIS PAGE IS WORK IN PROGRESS OR GETTING UPDATED
        </h1>
        <Link href="/">
          <Button variant="default" className="mt-6">
            BACK TO HOME
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
