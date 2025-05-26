'use client';

// app/components/Pricing.tsx
import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';
import Tabs from '../ui/Tabs';
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

const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('monthly');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-[#111928] font-['Outfit'] mb-6">
          Built for teams that care about growth, not guesswork
        </h2>
        <p className="text-xl text-center text-[#6b7280] font-['Poppins'] max-w-4xl mx-auto mb-12">
          UXGenius gives you the clarity, insights, and tools to turn UX problems into profit-whether you're scaling a product, running an ecom brand, or improving customer journeys that drive revenue gains.
        </p>
        <div className="flex justify-center mb-12">
          <Tabs
            tabs={[
              { id: 'monthly', label: 'Monthly' },
              { id: 'yearly', label: 'Yearly' },
            ]}
            defaultTab={activeTab}
            onChange={handleTabChange}
            className="max-w-xs"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Architect Plan */}
          <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm p-8 flex flex-col">
            <div className="flex flex-col items-center mb-6">
              <Image 
                src="/images/img_ruler.svg" 
                alt="Ruler icon" 
                width={112} 
                height={112} 
                className="mb-4"
              />
              <h3 className="text-2xl font-semibold text-[#111928] font-['Outfit']">
                Architect
              </h3>
            </div>
            <p className="text-lg text-center text-[#6b7280] font-['Poppins'] mb-8">
              For teams and operators who need deep audits, better insights and reports on multiple pages.
            </p>
            <div className="flex items-end justify-center mb-8">
              <span className="text-5xl font-extrabold text-[#111928] font-['Outfit']">$29</span>
              <span className="text-lg text-[#6b7280] font-['Inter'] ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  AI UX Agent coaching
                </span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  Full Heuristic Evaluation
                </span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  Prioritized Issues by ROI impact
                </span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  Track Audit History & Changes
                </span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  Multiple Pages per Audit (up to 3)
                </span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  And Much More
                </span>
              </li>
            </ul>
            <Button 
              variant="primary" 
              className="w-full rounded-lg bg-[#1a56db] text-white py-2.5 px-5 mt-auto"
            >
              <span className="text-sm font-medium font-['Poppins']">Get started</span>
            </Button>
          </div>

          {/* Visionary Plan */}
          <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm p-8 flex flex-col">
            <div className="flex flex-col items-center mb-6">
              <Image 
                src="/images/img_innovative.png" 
                alt="Innovative icon" 
                width={112} 
                height={112} 
                className="mb-4"
              />
              <h3 className="text-2xl font-semibold text-[#111928] font-['Outfit']">
                Visionary
              </h3>
            </div>
            <p className="text-lg text-center text-[#6b7280] font-['Poppins'] mb-8">
              Designed for high-performing teams, ecommerce professionals or SaaS leaders
            </p>
            <div className="flex items-end justify-center mb-8">
              <span className="text-5xl font-extrabold text-[#111928] font-['Outfit']">$79</span>
              <span className="text-lg text-[#6b7280] font-['Inter'] ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base font-semibold text-[#111928] font-['Inter']">
                  Everything from the Architect Plan Plus...
                </span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  CTA Effectiveness Analysis
                </span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  Conversion Friction Detection
                </span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  Accessibility check (Color, Fonts, WCAG)
                </span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  Tone & Microcopy Clarity Check
                </span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  Multiple Pages per Audit (up to 10)
                </span>
              </li>
            </ul>
            <Button 
              variant="primary" 
              className="w-full rounded-lg bg-[#1a56db] text-white py-2.5 px-5 mt-auto"
            >
              <span className="text-sm font-medium font-['Poppins']">Get started</span>
            </Button>
          </div>

          {/* Omniscient Plan */}
          <div className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm p-8 flex flex-col">
            <div className="flex flex-col items-center mb-6">
              <Image 
                src="/images/img_artificialintelligence2.svg" 
                alt="AI icon" 
                width={112} 
                height={112} 
                className="mb-4"
              />
              <h3 className="text-2xl font-semibold text-[#111928] font-['Outfit']">
                Omniscient
              </h3>
            </div>
            <p className="text-lg text-center text-[#6b7280] font-['Poppins'] mb-8">
              All-access UX intelligence: team dashboards, white-labled reports, premium AI agent logic.
            </p>
            <div className="flex items-end justify-center mb-8">
              <span className="text-5xl font-extrabold text-[#111928] font-['Outfit']">$199</span>
              <span className="text-lg text-[#6b7280] font-['Inter'] ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base font-semibold text-[#111928] font-['Inter']">
                  Everything from the Visionary Plan Plus...
                </span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  White-Labeled Reports & Tools
                </span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  AI-Powered Competitor Comparison
                </span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  Personalized Strategy Brief
                </span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  Onboarding Flow Clarity Audit
                </span>
              </li>
              <li className="flex items-center">
                <Image 
                  src="/images/img_check_teal_600.svg" 
                  alt="Check icon" 
                  width={14} 
                  height={14} 
                  className="mr-3"
                />
                <span className="text-base text-[#111928] font-['Poppins']">
                  Multiple Pages per Audit (unlimited)
                </span>
              </li>
            </ul>
            <Button 
              variant="primary" 
              className="w-full rounded-lg bg-[#1a56db] text-white py-2.5 px-5 mt-auto"
            >
              <span className="text-sm font-medium font-['Poppins']">Get started</span>
            </Button>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="#" className="text-base font-medium text-[#1a56db] font-['Poppins']">
            See the full pricing plan with all the available features
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;