'use client';

import { HiCheckBadge } from 'react-icons/hi2';

interface PricingFeatureListProps {
     features: string[];
}

export default function PricingFeatureList({ features }: PricingFeatureListProps) {
     return (
          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
               {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                         <HiCheckBadge className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-1" />
                         <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                    </li>
               ))}
          </ul>
     );
} 