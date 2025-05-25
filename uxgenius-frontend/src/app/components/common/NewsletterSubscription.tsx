'use client';

import { HiEnvelope } from 'react-icons/hi2';

export default function NewsletterSubscription() {
     return (
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white text-gray-900">
               <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                         UX Is Evolving. So Should You.
                    </h2>
                    <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto text-gray-600">
                         Join Our Mailing List Now! Stay ahead of the curve with updates, tips, and insights from a
                         team with 20+ years of UX leadership—and a front-row seat into AI.
                    </p>

                    <form className="max-w-md mx-auto">
                         <div className="relative mb-3 sm:mb-4">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                   <HiEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                              </div>
                              <input
                                   type="email"
                                   placeholder="Enter your email"
                                   className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg bg-gray-50 text-gray-900 text-sm sm:text-base focus:ring-2 focus:ring-blue-500 border border-gray-200"
                              />
                         </div>
                         <button
                              type="submit"
                              className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm sm:text-base"
                         >
                              Subscribe
                         </button>
                    </form>

                    <p className="text-xs sm:text-sm mt-3 sm:mt-4 text-gray-500">
                         No junk or fluff. Just impactful info about UX & AI
                    </p>
               </div>
          </section>
     );
}