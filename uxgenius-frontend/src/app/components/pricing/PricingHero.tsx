'use client';

import { useState } from 'react';

interface PricingHeroProps {
     title: string;
     description: string;
     onPricingChange?: (isYearly: boolean) => void;
}

export default function PricingHero({ title, description, onPricingChange }: PricingHeroProps) {
     const [isYearly, setIsYearly] = useState(true);

     const handlePricingChange = (yearly: boolean) => {
          setIsYearly(yearly);
          onPricingChange?.(yearly);
     };

     return (
          <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
               <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                         {title}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                         {description}
                    </p>

                    <div className="mt-8 flex justify-center gap-2">
                         <button
                              onClick={() => handlePricingChange(true)}
                              className={`px-6 py-2 rounded-full transition-colors ${isYearly
                                   ? 'bg-blue-600 text-white'
                                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                   }`}
                         >
                              Yearly
                         </button>
                         <button
                              onClick={() => handlePricingChange(false)}
                              className={`px-6 py-2 rounded-full transition-colors ${!isYearly
                                   ? 'bg-blue-600 text-white'
                                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                   }`}
                         >
                              Monthly
                         </button>
                    </div>
               </div>
          </section>
     );
} 