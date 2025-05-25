'use client';

export default function PricingHeader() {
     return (
          <div className="text-center mb-10 sm:mb-16">
               <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Built for teams that care<br className="hidden sm:block" />
                    about growth, not guesswork
               </h2>
               <div className="flex justify-center gap-2 mb-6 sm:mb-8">
                    <button className="px-4 sm:px-6 py-2 rounded-full bg-blue-600 text-white text-sm sm:text-base">
                         Yearly
                    </button>
                    <button className="px-4 sm:px-6 py-2 rounded-full text-gray-600 hover:bg-gray-200 text-sm sm:text-base">
                         Monthly
                    </button>
               </div>
          </div>
     );
} 