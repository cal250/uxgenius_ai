'use client';

// app/components/HeroSection.tsx
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <p className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm sm:text-base">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  New
                </span>
                <span className="text-gray-600">
                  Let our UXGenius AI Agent help today!
                </span>
              </p>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
              Turn UX Issues Into{' '}
              <span className="text-blue-600 block sm:inline">Revenue Fast!</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              Run an AI-powered UX audit in seconds. Spot what's broken, see how to fix it,
              and improve your conversions - without a full design team or expensive consultants.
            </p>

            {/* Input Form */}
            <div className="max-w-2xl mx-auto lg:mx-0 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter the URL to review ..."
                  className="w-full px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 text-sm sm:text-base border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-md hover:bg-blue-700 transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap">
                  Audit URL
                </button>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 sm:mt-3">
                No credit card. No downloads. Just clear next steps.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2 mt-6 sm:mt-8 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/web.png"
                alt="UXGenius AI Dashboard Preview"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
              {/* Animated element overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}