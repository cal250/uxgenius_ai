'use client';

import { Accordion } from 'flowbite-react';
import { HiChevronDown } from 'react-icons/hi2';

export default function FAQ() {
  const faqItems = [
    {
      question: 'What exactly does UXGenius.ai do?',
      answer: "We run a lightning-fast, AI powered UX audit of your website-checking usability, clarity, visual hierarchy, branding, accessibility, and more. You'll get actionable insights to boost conversions, improve user trust, and look like a pro."
    },
    {
      question: 'How is this different from tools other tools?',
      answer: 'Our AI combines expert-level UX analysis with conversion rate optimization insights, prioritizing fixes that directly impact revenue. Unlike generic tools, we focus on business outcomes, not just technical scores.'
    },
    {
      question: 'Do I need any design or tech skills to use this?',
      answer: 'None at all! UXGenius explains issues in plain language and provides step-by-step fixes. Our AI agent can even guide you through implementations.'
    },
    {
      question: 'What do I actually get with my audit?',
      answer: 'You receive: UX Score (0-100 rating), Top 5 Issues Prioritized, Conversion Killers Report, and 30+ Design Heuristics Analysis - all presented in an actionable dashboard.'
    },
    {
      question: 'How do I know this will be worth it?',
      answer: 'Most customers see measurable conversion improvements within 7 days. We offer a free audit so you can see the potential impact before paying anything.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="w-full max-w-[60%]">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>

          <Accordion
            className="divide-y divide-gray-200/60"
          >
            {faqItems.map((item, index) => (
              <Accordion.Panel
                key={index}
                className="border-gray-200/60"
              >
                <Accordion.Title className="text-base sm:text-lg font-medium text-gray-900 hover:bg-gray-100 px-3 sm:px-4 py-4 sm:py-5">
                  {item.question}
                </Accordion.Title>
                <Accordion.Content className="px-3 sm:px-4 py-4 sm:py-5">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}