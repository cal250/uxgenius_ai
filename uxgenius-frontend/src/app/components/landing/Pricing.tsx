'use client';

// app/components/Pricing.tsx
import { HiCheckBadge, HiArrowTrendingUp, HiGlobeAlt } from 'react-icons/hi2';
import PricingHeader from '../pricing/PricingHeader';
import PricingCard from '../pricing/PricingCard';
import { PricingPlan } from '../pricing/types';

// Types
interface PricingFeature {
  text: string;
}

// Pricing Feature List Component
function PricingFeatureList({ features }: { features: string[] }) {
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

const pricingPlans: PricingPlan[] = [
  {
    name: 'Architect',
    price: '$289',
    description: 'For teams and operators who need deep audits, better insights and reports on multiple pages.',
    features: [
      'AI UX Agent coaching',
      'Full Heuristic Evaluation',
      'Prioritized Issues by ROI impact',
      'Track Audit History & Changes',
      'Multiple Pages per Audit (up to 3)',
      'And Much More'
    ],
    cta: 'Get started'
  },
  {
    name: 'Visionary',
    price: '$789',
    description: 'Designed for high-performing teams, ecommerce professionals or SaaS leaders',
    features: [
      'Everything from Architect Plan Plus...',
      'CTA Effectiveness Analysis',
      'Conversion Friction Detection',
      'Accessibility check (Color, Fonts, WCAG)',
      'Tone & Microcopy Clarity Check',
      'Multiple Pages per Audit (up to 10)'
    ],
    cta: 'Get started',
    popular: true
  },
  {
    name: 'Omniscient',
    price: '$1,899',
    description: 'All-access UX intelligence: team dashboards, white-labeled reports, premium AI agent logic.',
    features: [
      'Everything from Visionary Plan Plus...',
      'White-Labeled Reports & Tools',
      'AI-Powered Competitor Comparison',
      'Personalized Strategy Brief',
      'Onboarding Flow Clarity Audit',
      'Multiple Pages per Audit (unlimited)'
    ],
    cta: 'Get started'
  }
];

// Main Pricing Component
export default function Pricing() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <PricingHeader />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 text-sm sm:text-base transition-colors"
          >
            See the full pricing plan with all the available features
            <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}