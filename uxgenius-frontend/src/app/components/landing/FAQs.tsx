
'use client'
import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

const faqs = [
  {
    q: "What exactly does UXGenius.ai do?",
    a: "We run a lightning-fast, AI-powered UX audit checking usability, clarity, branding, and accessibility to boost trust and conversions.",
  },
  {
    q: "Do I need design or tech skills?",
    a: "Nope. Anyone can use UXGenius to uncover friction and get action-ready fixes without being a designer.",
  },
  {
    q: "How do I know this is worth it?",
    a: "Most users see measurable improvements in days. One audit can reclaim thousands in lost conversions.",
  },
];

export default function FAQs() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
      {faqs.map((item, i) => (
        <div key={i} className="border-b py-4 cursor-pointer" onClick={() => setOpenIdx(i === openIdx ? null : i)}>
          <div className="flex justify-between items-center text-lg font-medium text-gray-800">
            <span>{item.q}</span>
            <HiChevronDown className={`transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
          </div>
          {openIdx === i && <p className="text-gray-600 mt-2 text-sm">{item.a}</p>}
        </div>
      ))}
    </section>
  );
}
