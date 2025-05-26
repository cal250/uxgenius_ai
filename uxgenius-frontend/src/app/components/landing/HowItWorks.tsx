'use client';

import React from 'react';
import Image from 'next/image';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-black text-center text-black mb-6">
          How it works - Fast, Actionable UX Insights in 3 Steps
        </h2>
        <p className="text-xl text-center text-[#6b7280] font-['Poppins'] max-w-4xl mx-auto mb-16">
          UXGenius makes it easy to uncover whats hurting your user experience-and give you the steps to fix it. No downloads, no learning curve, just results and increased revenue and conversions
        </p>
        <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#e5e7eb] p-10 flex flex-col items-center">
              <Image 
                src="/images/img_website.svg" 
                alt="Website icon" 
                width={136} 
                height={136} 
                className="mb-6"
              />
              <h3 className="text-4xl font-extrabold text-center text-[#111928] font-['Outfit'] mb-6">
                Paste Your Website URL
              </h3>
              <p className="text-base text-center text-[#6b7280] font-['Poppins']">
                Submit any page-from landing page to product detail- and let us scan it instantly using our AI UX Genius.
              </p>
            </div>
            <div className="border border-[#e5e7eb] p-10 flex flex-col items-center">
              <div className="relative mb-6">
                <Image 
                  src="/images/img_vector.png" 
                  alt="Vector" 
                  width={122} 
                  height={136} 
                />
                <Image 
                  src="/images/img_vector_blue_800.svg" 
                  alt="Vector blue" 
                  width={96} 
                  height={99} 
                  className="absolute top-[29px] left-[26px]"
                />
                <div className="absolute top-[110px] left-[224px] w-[7px] h-[7px] bg-[#0000ca] rounded-[3px]"></div>
                <Image 
                  src="/images/img_group.svg" 
                  alt="Group" 
                  width={96} 
                  height={84} 
                  className="absolute top-[22px] left-[26px]"
                />
                <Image 
                  src="/images/img_vector_green_a700.svg" 
                  alt="Vector green" 
                  width={34} 
                  height={31} 
                  className="absolute top-[58px] left-[94px]"
                />
                <div className="absolute top-[67px] left-[97px] text-white text-xs font-black font-['Inter']">85%</div>
                <Image 
                  src="/images/img_vector_deep_purple_900_01.svg" 
                  alt="Vector purple" 
                  width={7} 
                  height={7} 
                  className="absolute top-[54px] left-[9px]"
                />
                <Image 
                  src="/images/img_vector_green_a700_01.svg" 
                  alt="Vector green small" 
                  width={8} 
                  height={8} 
                  className="absolute top-[95px] left-[121px]"
                />
                <Image 
                  src="/images/img_vector_green_a700_01.svg" 
                  alt="Vector green small" 
                  width={8} 
                  height={8} 
                  className="absolute top-[38px] left-[11px]"
                />
                <Image 
                  src="/images/img_vector_green_a700_01.svg" 
                  alt="Vector green small" 
                  width={8} 
                  height={8} 
                  className="absolute top-[9px] left-[85px]"
                />
                <Image 
                  src="/images/img_group_blue_800.svg" 
                  alt="Group blue" 
                  width={99} 
                  height={102} 
                  className="absolute top-[21px] left-[24px]"
                />
              </div>
              <h3 className="text-4xl font-extrabold text-center text-[#111928] font-['Outfit'] mb-6">
                Get a UX Score + Audit Breakdown
              </h3>
              <p className="text-base text-center text-[#6b7280] font-['Poppins']">
                We'll analyze design, usability, clarity and more-then deliver a prioritized list of friction points to be addressed.
              </p>
            </div>
            <div className="p-10 flex flex-col items-center">
              <Image 
                src="/images/img_virtualassistant.svg" 
                alt="Virtual assistant" 
                width={136} 
                height={136} 
                className="mb-6"
              />
              <h3 className="text-4xl font-extrabold text-center text-[#111928] font-['Outfit'] mb-6">
                Chat with the UXGenius Agent
              </h3>
              <p className="text-base text-center text-[#6b7280] font-['Poppins']">
                Ask questions about your audit, get explanations, and learn how to fix the friction points and issues on your site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;