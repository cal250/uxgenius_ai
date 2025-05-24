// app/components/HowItWorks.tsx
import { HiOutlineGlobeAlt, HiOutlineClipboardCheck, HiOutlineChatAlt2 } from 'react-icons/hi'

const steps = [
  {
    title: "Paste Your Website URL",
    description: "Submit any page—from landing to product detail—and let us scan it instantly using our AI UX Genius.",
    icon: <HiOutlineGlobeAlt className="text-blue-600 text-4xl" />,
  },
  {
    title: "Get a UX Score + Audit Breakdown",
    description: "We analyze usability, clarity, and more — then deliver a prioritized list of friction points.",
    icon: <HiOutlineClipboardCheck className="text-yellow-500 text-4xl" />,
  },
  {
    title: "Chat with the UXGenius Agent",
    description: "Ask questions about your audit, get explanations, and learn how to fix the issues on your site.",
    icon: <HiOutlineChatAlt2 className="text-green-600 text-4xl" />,
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">
        How it works – Fast, Actionable UX Insights in 3 Steps
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
        {steps.map((step, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-md transition">
            <div className="flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">{step.title}</h3>
            <p className="text-gray-600 text-sm text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
