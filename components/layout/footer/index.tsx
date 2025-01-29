import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, DiscIcon as DiscordIcon } from "lucide-react";
import NextLink from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="space-y-6">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <img
                alt="logo"
                className="z-0 w-40 object-cover"
                src="/tripsyncer-logo1.png"
              />
            </NextLink>
            <h2 className="text-gray-600 dark:text-gray-300 text-sm ">
              TripSyncer: Your Ultimate Travel Management Companion
            </h2>
            <div className="space-y-2">
              <div className="text-gray-600 dark:text-gray-300">
                Contact Us At
              </div>
              <Link
                href="mailto:info@tripsyncer.com"
                className=" dark:text-gray-300 hover:text-accent"
              >
                info@tripsyncer.com
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className=" dark:text-gray-300 font-semibold mb-6">
              USEFUL LINKS
            </h2>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6]"
              >
                Home
              </Link>
              <Link
                href="/mobile-app"
                className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6]"
              >
                Mobile App
              </Link>
              <Link
                href="/tms"
                className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6]"
              >
                Tour Management System
              </Link>
              <Link
                href="/marketplace"
                className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6]"
              >
                Marketplace
              </Link>
              <Link
                href="/ems"
                className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6]"
              >
                Event Management System
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6]"
              >
                Blog
              </Link>
            </nav>
          </div>

          {/* Help & Support */}
          <div>
            <h2 className=" dark:text-gray-300 font-semibold mb-6">
              HELP & SUPPORT
            </h2>
            <nav className="flex flex-col space-y-3">
              <Link
                href="/report"
                className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6]"
              >
                Report a bug
              </Link>
              <Link
                href="/feature"
                className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6]"
              >
                Request a feature
              </Link>
              <Link
                href="/roadmap"
                className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6]"
              >
                Our Roadmap
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6]"
              >
                Terms & conditions
              </Link>
              <Link
                href="/privacy"
                className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6]"
              >
                Privacy policy
              </Link>
            </nav>
          </div>

          {/* Let's Try Out */}
          <div>
            <h2 className=" dark:text-gray-300 font-semibold mb-6">
              Let’s Try Out Tripsyncer Mobile App
            </h2>
            <div className="flex justify-center flex-col gap-3">
              <a
                href="https://apps.apple.com/us/app/tripsyncer/id6502956755"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-center w-48 text-white bg-black h-14 rounded-xl"
              >
                <div className="mr-3">
                  <svg viewBox="0 0 384 512" width="30">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="-mt-1 font-sans text-xl font-semibold">
                    App Store
                  </div>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.tripsyncer"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-center w-48 text-white bg-black h-14 rounded-xl"
              >
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7 c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    ></path>
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3 c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1 c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6 c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="-mt-1 font-sans text-xl font-semibold">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center space-x-12">
            <p className="text-gray-400 dark:text-gray-300 text-sm">
              © 2024 TripSyncer. All Rights Reserved.
            </p>
            <Link
              href="/sitemap"
              className="text-gray-600 dark:text-gray-300 hover:text-[#3B82F6]"
            >
              Sitemap
            </Link>
          </div>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-400 dark:text-gray-300 hover:text-[#3B82F6]"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 dark:text-gray-300 hover:text-[#3B82F6]"
            >
              <DiscordIcon className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 dark:text-gray-300 hover:text-[#3B82F6]"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hidden Header */}
      <h2 className="hidden">
        TripSyncer: The Ultimate App for Travel, Events, and Tours
        <br />
        TripSyncer is your all-in-one companion for road trips, event planning,
        and tour management. Trusted by individuals and businesses worldwide to
        simplify logistics and enhance experiences.
      </h2>
    </footer>
  );
}
