'use client';

import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi2';

export default function FreeAuditCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Left Image */}
          <div className="hidden md:block relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/mob.png"
              alt="Problem Interface Example"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Center Content */}
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Don't let a confusing interface<br className="hidden sm:block" />
              undo everything you've built.
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl mx-auto">
              UXGenius helps you clean it up, clear the path, and turn curious visitors
              into confident buyers—one smart fix at a time.
            </p>

            <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-medium hover:bg-blue-700 transition-colors mb-4 inline-flex items-center gap-2">
              Get My Free Audit!
              <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <p className="text-gray-600 text-xs sm:text-sm">
              Our team has seen almost everything...<br />
              Start free, run one audit, and spot what's silently killing conversions.
            </p>
          </div>

          {/* Right Image */}
          <div className="hidden md:block relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/cta-after.png"
              alt="Improved Interface Example"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Mobile Images */}
        <div className="md:hidden grid gap-4 sm:gap-6 mt-8 sm:mt-12">
          <div className="relative h-40 sm:h-48 w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/cta-before-mobile.png"
              alt="Problem Interface Mobile"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="relative h-40 sm:h-48 w-full rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/cta-after-mobile.png"
              alt="Improved Interface Mobile"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}