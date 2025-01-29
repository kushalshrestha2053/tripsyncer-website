import React from "react";
import { BookOpen, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FinalCTABomb() {
  return (
    <section className="py-16 bg-background border-t">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Stats CTA */}
            <div className="p-8 bg-gradient-to-br from-indigo-600 to-blue-700 text-white flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Proven Results</h2>
              </div>
              <p className="text-4xl font-bold mb-3">22.7%</p>
              <p className="text-lg text-indigo-100 mb-6">
                Average boost in bookings within 6 months
              </p>
              <Button>Join Success Stories</Button>
            </div>

            {/* eBook CTA */}
            <div className="p-8 bg-white flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-800">Free eBook</h2>
              </div>
              <p className="text-2xl font-bold text-gray-800 mb-3">
                100 Tour Marketing Hacks
              </p>
              <p className="text-gray-600 mb-6">
                Get instant access to our comprehensive guide when you sign up
                today
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all duration-200"
                />
                <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 w-full">
                  Get Free eBook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
