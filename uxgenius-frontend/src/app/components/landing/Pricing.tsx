'use client';

// app/components/Pricing.tsx
import { HiCheckBadge, HiArrowTrendingUp, HiGlobeAlt } from 'react-icons/hi2';

export default function Pricing() {
  const plans = [
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

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for teams that care<br className="hidden sm:block" />
            about growth, not guesswork
          </h2>
          <div className="flex justify-center gap-2 mb-6 sm:mb-8">
            <button className="px-4 sm:px-6 py-2 rounded-full bg-blue-600 text-white text-sm sm:text-base">
              Yearly
            </button>
            <button className="px-4 sm:px-6 py-2 rounded-full text-gray-600 hover:bg-gray-200 text-sm sm:text-base">
              Monthly
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white p-4 sm:p-6 md:p-8 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors"
            >
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

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <HiCheckBadge className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base ${plan.popular
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 text-sm sm:text-base transition-colors">
            See the full pricing plan with all the available features →
          </a>
        </div>
      </div>
    </section>
  );
}