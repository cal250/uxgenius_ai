const PLANS = [
  {
    name: 'Architect',
    price: '$289',
    features: [
      'AI UX Agent coaching',
      'Full Heuristic Evaluation',
      'Prioritized Issues by ROI impact',
      'Track Audit History & Changes',
      'Multiple Pages per Audit (up to 3)'
    ]
  },
  {
    name: 'Visionary',
    price: '$789',
    features: [
      'Everything from Architect Plus...',
      'CTA Effectiveness Analysis',
      'Conversion Friction Detection',
      'Accessibility check (Color, Fonts, WCAG)',
      'Tone & Microcopy Clarity Check',
      'Multiple Pages per Audit (up to 10)'
    ]
  },
  {
    name: 'Omniscient',
    price: '$1,899',
    features: [
      'Everything from Visionary Plus...',
      'White-Labeled Reports & Tools',
      'AI-Powered Competitor Comparison',
      'Personalized Strategy Brief',
      'Onboarding Flow Clarity Audit',
      'Multiple Pages per Audit (unlimited)'
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <div key={plan.name} className="border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}/year</p>
              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}