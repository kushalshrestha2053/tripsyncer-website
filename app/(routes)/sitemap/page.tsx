"use client";
import Gleap from "gleap";
import Link from "next/link";

export default function Sitemap() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">Sitemap</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Main Column */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Main</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-accent">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/mobile-app"
                className="text-gray-500 hover:text-accent"
              >
                Tripsyncer Mobile App
              </Link>
            </li>
            <li>
              <Link
                href="/tour-management"
                className="text-gray-500 hover:text-accent"
              >
                Tour Management System
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace"
                className="text-gray-500 hover:text-accent"
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                href="/event-management"
                className="text-gray-500 hover:text-accent"
              >
                Event Management System
              </Link>
            </li>
          </ul>
        </div>

        {/* Listings Column */}

        {/* Featured Categories Column */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Featured categories</h2>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => Gleap.startClassicForm("bugreporting", true)}
                className="text-gray-500 hover:text-accent"
              >
                Report a bug
              </button>
            </li>
            <li>
              <button
                onClick={() => Gleap.startClassicForm("featurerequests", true)}
                className="text-gray-500 hover:text-accent"
              >
                Request a feature
              </button>
            </li>
            <li>
              <button
                onClick={() => Gleap.openFeatureRequests()}
                className="text-gray-500 hover:text-accent"
              >
                Our Roadmap
              </button>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className="text-gray-500 hover:text-accent"
              >
                Terms & conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-accent"
              >
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Businesses by State Column */}
        <div>
          <h2 className="font-semibold text-lg mb-4">
            Try Out Tripsyncer Mobile App
          </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://play.google.com/store/apps/details?id=com.tripsyncer"
                className="text-gray-500 hover:text-accent"
              >
                Download Tripsyncer on Google Play
              </Link>
            </li>
            <li>
              <Link
                href="https://apps.apple.com/us/app/tripsyncer/id6502956755"
                className="text-gray-500 hover:text-accent"
              >
                Download Tripsyncer on App Store
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-4">Blogs </h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://blog.tripsyncer.com"
                className="text-gray-500 hover:text-accent"
              >
                Tripsyncer Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
