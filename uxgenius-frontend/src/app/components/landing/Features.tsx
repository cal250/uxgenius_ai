// app/components/Features.tsx

import { HiLightningBolt, HiOutlineLightBulb, HiChartBar } from "react-icons/hi";

const features = [
  {
    title: "Instant UX Score",
    description:
      "Get a fast, clear UX grade with no setup required. Enter your URL and see your audit within seconds.",
    icon: <HiLightningBolt className="text-blue-600 text-3xl mb-3" />,
  },
  {
    title: "AI-Powered Recommendations",
    description:
      "Get prioritized fixes, explained clearly — no more vague feedback or guesswork.",
    icon: <HiOutlineLightBulb className="text-yellow-500 text-3xl mb-3" />,
  },
  {
    title: "Track Changes & Results",
    description:
      "Monitor how your UX improvements impact performance over time with version history.",
    icon: <HiChartBar className="text-green-500 text-3xl mb-3" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">Why UXGenius?</h2>
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {features.map((f, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition">
            <div className="flex justify-center">{f.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
