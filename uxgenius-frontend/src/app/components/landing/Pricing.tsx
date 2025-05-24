// app/components/Pricing.tsx

const plans = [
  {
    name: "Architect",
    price: "$289",
    billing: "year",
    features: [
      "AI UX Agent coaching",
      "Full Heuristic Evaluation",
      "Prioritized Issues by ROI impact",
      "Track Audit History & Changes",
      "Multiple Pages per Audit (up to 3)",
    ],
    badge: "For growth teams",
    icon: "🏗️",
    highlighted: false,
  },
  {
    name: "Visionary",
    price: "$789",
    billing: "year",
    features: [
      "Everything in Architect",
      "CTA Effectiveness Analysis",
      "Conversion Friction Detection",
      "Accessibility check (Color, Fonts, WCAG)",
      "Tone & Microcopy Clarity Check",
      "Multiple Pages per Audit (up to 10)",
    ],
    badge: "Best for Ecom/SaaS",
    icon: "🔭",
    highlighted: true,
  },
  {
    name: "Omniscient",
    price: "$1,899",
    billing: "year",
    features: [
      "Everything in Visionary",
      "White-Labeled Reports & Tools",
      "AI-Powered Competitor Comparison",
      "Personalized Strategy Brief",
      "Onboarding Flow Clarity Audit",
      "Multiple Pages per Audit (unlimited)",
    ],
    badge: "All-access UX intelligence",
    icon: "🧠",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-white py-20 px-6 text-center" id="pricing">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Built for teams that care about growth, not guesswork
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-12 text-base">
        UXGenius gives you the clarity, insights, and tools to turn UX problems into profit — whether you're scaling a product, running an ecom brand, or improving customer journeys.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-lg p-6 border shadow-sm hover:shadow-md transition ${
              plan.highlighted ? "border-blue-600 scale-[1.02]" : "border-gray-200"
            }`}
          >
            {/* Badge + Icon */}
            <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold inline-block mb-2">
              {plan.badge}
            </span>
            <div className="text-4xl mb-3">{plan.icon}</div>

            {/* Title + Price */}
            <h3 className="text-2xl font-semibold mb-1">{plan.name}</h3>
            <p className="text-3xl font-bold text-blue-600 mb-1">{plan.price}</p>
            <p className="text-sm text-gray-500 mb-6">per {plan.billing}</p>

            {/* Features */}
            <ul className="text-left space-y-2 text-gray-700 text-sm mb-6">
              {plan.features.map((f, j) => (
                <li key={j}>✓ {f}</li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="#"
              className={`block px-6 py-3 rounded-md text-white font-medium ${
                plan.highlighted ? "bg-blue-600" : "bg-gray-800"
              }`}
            >
              Get started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
