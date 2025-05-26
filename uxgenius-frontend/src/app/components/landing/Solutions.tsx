'use client';

import React from 'react';
import Image from 'next/image';

const SolutionsSection: React.FC = () => {
  return (
    <section className="bg-[#f3f4f6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-extrabold text-[#111928] mb-6">
              Our Solutions Are Built for Real-World Teams
            </h2>
            <p className="text-xl text-[#6b7280] mb-8">
              Whether you're launching your first product or optimizing a 7-figure store, UXGenius helps your team identify friction, boost conversions, and move faster-with zero design overhead.
            </p>
            <a href="#" className="inline-flex items-center text-lg font-medium text-[#1c64f2]">
              Learn more
              <Image 
                src="/images/img_chevronright_blue_a700.svg" 
                alt="Arrow right" 
                width={12} 
                height={12} 
                className="ml-2"
              />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start mb-4">
                <div className="bg-[#e1effe] rounded-lg p-2 mr-4">
                  <Image 
                    src="/images/img_announcement03.svg" 
                    alt="Announcement icon" 
                    width={32} 
                    height={32} 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111928] mb-1">
                    Marketing Teams
                  </h3>
                  <p className="text-base text-[#6b7280]">
                    Find UX gaps that hear your messaging, CTAs, and user flows-then fix them in minutes.
                  </p>
                </div>
              </div>
              <div className="flex items-start mt-8">
                <div className="bg-[#e1effe] rounded-lg p-2 mr-4">
                  <Image 
                    src="/images/img_gift01.svg" 
                    alt="Gift icon" 
                    width={32} 
                    height={32} 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111928] mb-1">
                    Product Managers
                  </h3>
                  <p className="text-base text-[#6b7280]">
                    Use audits as a fast QA pass for launches, onboarding flows, and MVPs. Ship faster and smarter.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start mb-4">
                <div className="bg-[#e1effe] rounded-lg p-2 mr-4">
                  <Image 
                    src="/images/img_shoppingcart03.svg" 
                    alt="Shopping cart icon" 
                    width={32} 
                    height={32} 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111928] mb-1">
                    Ecommerce Teams
                  </h3>
                  <p className="text-base text-[#6b7280]">
                    We highlight issues that frustrate shoppers-so you can recover abandoned carts and boost AOV.
                  </p>
                </div>
              </div>
              <div className="flex items-start mt-8">
                <div className="bg-[#e1effe] rounded-lg p-2 mr-4">
                  <Image 
                    src="/images/img_rocket02.svg" 
                    alt="Rocket icon" 
                    width={32} 
                    height={32} 
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111928] mb-1">
                    Startup Founders
                  </h3>
                  <p className="text-base text-[#6b7280]">
                    Cut through the noice and get a clear list of change that will improve engagement an revenue from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;