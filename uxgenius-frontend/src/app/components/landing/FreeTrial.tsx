'use client';

import { HiEnvelope } from 'react-icons/hi2';

export default function FreeTrial() {
     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          // Handle form submission
          console.log('Free trial requested');
     };

     return (
          <section className="py-20 px-4 bg-blue-600 text-white">
               <div className="max-w-7xl mx-auto text-center">
                    <div className="max-w-3xl mx-auto">
                         <h2 className="text-3xl md:text-4xl font-bold mb-6">
                              Give it a try. It's Free!!!
                         </h2>
                         <p className="text-lg mb-8">
                              Start with one audit on the house—see your UX score, get your top 3 fixes,
                              and feel the genius kick in! When you're ready for deeper insights,
                              full reports, and AI coach, just upgrade. No pressure. No push sales bot.
                              Just better UX—with more revenue to show for it.
                         </p>
                    </div>

                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                         <div className="relative mb-4">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                   <HiEnvelope className="w-5 h-5 text-gray-400" />
                              </div>
                              <input
                                   type="email"
                                   placeholder="Enter your email"
                                   required
                                   className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
                              />
                         </div>
                         <button
                              type="submit"
                              className="w-full bg-white text-blue-600 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                         >
                              Try for 7 days
                         </button>
                         <p className="text-sm mt-4 opacity-90">
                              Instant signup. No credit card required.<br />
                              Start free, run one audit, and spot what's silently killing conversions.
                         </p>
                    </form>
               </div>
          </section>
     );
}