'use client';

import { HiEnvelope } from 'react-icons/hi2';

export default function FreeTrial() {
     const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          // Handle form submission
          console.log('Free trial requested');
     };

     return (
          <section className="py-20 px-4">
               <div className="max-w-7xl mx-auto flex justify-center">
                    <div className="w-full max-w-[60%] bg-white rounded-2xl shadow-xl p-8 md:p-12">
                         <div className="text-center mb-8">
                              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                   Give it a try. It's Free!!!
                              </h2>
                              <p className="text-gray-600 text-sm md:text-base">
                                   Start with one audit on the house—see your UX score, get your top 3 fixes,
                                   and feel the genius kick in! When you're ready for deeper insights,
                                   full reports, and AI coach, just upgrade. No pressure. No push sales bot.
                                   Just better UX—with more revenue to show for it.
                              </p>
                         </div>

                         <form onSubmit={handleSubmit}>
                              <div className="relative mb-4">
                                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <HiEnvelope className="w-5 h-5 text-gray-400" />
                                   </div>
                                   <input
                                        type="email"
                                        placeholder="Enter your email"
                                        required
                                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                   />
                              </div>
                              <button
                                   type="submit"
                                   className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                              >
                                   Try for 7 days
                              </button>
                              <p className="text-sm text-gray-500 mt-4">
                                   Instant signup. No credit card required.<br />
                                   Start free, run one audit, and spot what's silently killing conversions.
                              </p>
                         </form>
                    </div>
               </div>
          </section>
     );
}