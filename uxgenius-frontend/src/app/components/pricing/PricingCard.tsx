'use client';

import { PricingPlan } from './types';
import PricingFeatureList from './PricingFeatureList';

interface PricingCardProps {
     plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
     return (
          <div className="relative bg-white p-4 sm:p-6 md:p-8 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors">
               {plan.popular && (
                    <div className="absolute top-0 right-0 -translate-y-1/2 bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm">
                         Most Popular
                    </div>
               )}

               <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{plan.price}/year</p>
                    <p className="text-sm sm:text-base text-gray-600">{plan.description}</p>
               </div>

               <PricingFeatureList features={plan.features} />

               <button
                    className={`w-full py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${plan.popular
                         ? 'bg-blue-600 text-white hover:bg-blue-700'
                         : 'bg-gray-900 text-white hover:bg-gray-800'
                         }`}
               >
                    {plan.cta}
               </button>
          </div>
     );
} 