// app/components/ImpactfulStats.tsx
import { HiArrowTrendingUp, HiClock, HiCpuChip, HiDocumentArrowDown } from 'react-icons/hi2';
import Image from 'next/image';

export default function ImpactfulStats() {
     const stats = [
          {
               icon: <HiArrowTrendingUp className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />,
               title: "Double Digit Conversion Lift on Average",
               description: "Most users see measurable improvements within days of implementing changes"
          },
          {
               icon: <HiClock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />,
               title: "10-20 Hours Saved Per Audit",
               description: "Automated analysis replaces manual review processes"
          },
          {
               icon: <HiCpuChip className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />,
               title: "AI + Expert-Level Recommendations",
               description: "Combines machine efficiency with human expertise"
          },
          {
               icon: <HiDocumentArrowDown className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-600" />,
               title: "One-Click Audit Reports",
               description: "Instant PDF/downloadable reports with prioritized actions"
          }
     ];

     return (
          <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
               <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                         {/* Image Section */}
                         <div className="relative rounded-xl overflow-hidden shadow-xl">
                              <Image
                                   src="/images/mob.png"
                                   alt="Mobile"
                                   width={400}
                                   height={200}
                                   className="w-full h-auto"
                              />
                              {/* Animated metric overlay */}
                              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white p-3 sm:p-4 rounded-lg shadow-md animate-float">
                                   <div className="flex items-center gap-2 sm:gap-3">
                                        <div className="bg-green-100 p-1.5 sm:p-2 rounded-full">
                                             <HiArrowTrendingUp className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
                                        </div>
                                        <div>
                                             <p className="text-xs text-gray-500">Conversion Uplift</p>
                                             <p className="text-xl sm:text-2xl font-bold text-gray-900">+34.7%</p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* Stats Content */}
                         <div className="space-y-8 sm:space-y-12">
                              <div className="max-w-md">
                                   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                                        See Real UX Impact—Without the Guesswork
                                   </h2>
                                   <p className="text-base sm:text-lg text-gray-600">
                                        UXGenius delivers insights that help you move fast, fix what matters, and grow revenue—without
                                        relying on expensive agencies or complicated tools.
                                   </p>
                              </div>

                              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                                   {stats.map((stat, index) => (
                                        <div key={index} className="flex gap-3 sm:gap-4">
                                             <div className="flex-shrink-0">
                                                  <div className="bg-blue-100 p-2 sm:p-3 rounded-lg">
                                                       {stat.icon}
                                                  </div>
                                             </div>
                                             <div>
                                                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                                                       {stat.title}
                                                  </h3>
                                                  <p className="text-xs sm:text-sm text-gray-600">
                                                       {stat.description}
                                                  </p>
                                             </div>
                                        </div>
                                   ))}
                              </div>

                              {/* CTA Buttons */}
                              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                                   <button className="bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                                        Start your audit
                                   </button>
                                   <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:border-gray-400 transition-colors text-sm sm:text-base">
                                        Get a demo
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
}