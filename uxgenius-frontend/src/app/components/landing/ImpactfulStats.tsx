// app/components/ImpactfulStats.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

const ImpactfulStats: React.FC = () => {
     const stats = [
          {
               icon: "/images/img_check.svg",
               title: "Double Digit Conversion Lift on Average",
               description: "Most users see measurable improvements within days of implementing changes"
          },
          {
               icon: "/images/img_check.svg",
               title: "10-20 Hours Saved Per Audit",
               description: "Automated analysis replaces manual review processes"
          },
          {
               icon: "/images/img_check.svg",
               title: "AI + Expert-Level Recommendations",
               description: "Combines machine efficiency with human expertise"
          },
          {
               icon: "/images/img_check.svg",
               title: "One-Click Audit Reports",
               description: "Instant PDF/downloadable reports with prioritized actions"
          },
          {
               icon: "/images/img_check.svg",
               title: "No UX Experience or Expertise Required",
               description: "Get professional results without needing UX knowledge"
          }
     ];

     return (
          <section className="py-16 relative overflow-hidden">
               <div className="absolute left-0 top-[233px] z-0">
                    <Image 
                         src="/images/img_ellipse_2_green_a700.svg" 
                         alt="Background shape" 
                         width={651} 
                         height={672} 
                    />
               </div>
               <div className="absolute left-[110px] top-[530px] z-0">
                    <Image 
                         src="/images/img_ellipse_1_blue_800.svg" 
                         alt="Background shape" 
                         width={536} 
                         height={563} 
                    />
               </div>
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                         <div className="relative">
                              <Image 
                                   src="/images/img_iphone_image.png" 
                                   alt="iPhone with UXGenius" 
                                   width={800} 
                                   height={917} 
                              />
                              <div className="absolute top-[86px] left-[244px]">
                                   <Image 
                                        src="/images/img_screenshot.png" 
                                        alt="UXGenius mobile screenshot" 
                                        width={540} 
                                        height={279} 
                                   />
                                   <Image 
                                        src="/images/img_iphone_screenglare.png" 
                                        alt="iPhone screen glare" 
                                        width={543} 
                                        height={278} 
                                        className="absolute top-0 left-0"
                                   />
                              </div>
                              <div className="absolute top-[626px] left-[244px] bg-white rounded-b-[16px] h-[33px] w-[279px]">
                                   <div className="relative h-full">
                                        <Image 
                                             src="/images/img_screenshot_20250421_at_81236pm_1.png" 
                                             alt="iPhone screenshot" 
                                             width={269} 
                                             height={26} 
                                             className="absolute top-0 left-[5px]"
                                        />
                                        <div className="absolute top-[23px] left-[12px] h-[3px] w-[258px] bg-white"></div>
                                   </div>
                              </div>
                              <div className="absolute top-[56px] left-[244px] border border-black rounded-t-[14px] h-[28px] w-[280px]">
                                   <Image 
                                        src="/images/img_screenshot_20250421_at_82120pm_1.png" 
                                        alt="iPhone status bar" 
                                        width={280} 
                                        height={28} 
                                        className="rounded-t-[14px]"
                                   />
                              </div>
                         </div>
                         <div>
                              <h2 className="text-4xl font-extrabold text-[#111928] mb-6">
                                   See Real UX Impact—Without all of the Guesswork
                              </h2>
                              <p className="text-xl text-[#6b7280] mb-6">
                                   UXGenius delivers insights that help you move fast, fix what matters, and grow revenue—without relying on expensive agencies or complicated tools
                              </p>
                              <p className="text-xl text-[#6b7280] mb-8">
                                   Every recommendation is backed by proven UX principals and best practices that provide real business impact.
                              </p>
                              <div className="border border-[#e5e7eb] p-8 rounded-lg mb-8">
                                   <ul className="space-y-4">
                                        {stats.map((stat, index) => (
                                             <li key={index} className="flex items-center">
                                                  <div className="bg-[#e1effe] rounded-lg p-1 mr-3">
                                                       <Image 
                                                            src={stat.icon}
                                                            alt="Check icon" 
                                                            width={8} 
                                                            height={8} 
                                                       />
                                                  </div>
                                                  <span className="text-base font-medium text-[#111928]">
                                                       {stat.title}
                                                  </span>
                                             </li>
                                        ))}
                                   </ul>
                              </div>
                              <div className="flex flex-col sm:flex-row gap-4">
                                   <Button 
                                        variant="primary" 
                                        className="rounded-lg bg-[#1a56db] text-white py-2.5 px-5"
                                        rightIcon={
                                             <Image 
                                                  src="/images/img_arrowrightoutline.svg" 
                                                  alt="Arrow right" 
                                                  width={20} 
                                                  height={20} 
                                             />
                                        }
                                   >
                                        <span className="text-sm font-medium">Start your audit</span>
                                   </Button>
                                   <Button 
                                        variant="outline" 
                                        className="rounded-lg bg-white border border-[#e5e7eb] text-[#111928] py-2.5 px-5"
                                   >
                                        <span className="text-sm font-medium">Get a demo</span>
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default ImpactfulStats;