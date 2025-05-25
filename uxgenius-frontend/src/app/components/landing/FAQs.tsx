// app/components/FAQ.tsx
import { Accordion } from 'flowbite-react';

/**
 * FAQ section with collapsible questions
 */
export default function FAQ() {
  const faqs = [
    {
      question: 'What exactly does UXGenius.ai do?',
      answer: 'We run a lightning-fast, AI powered UX audit of your website-checking usability, clarity, visual hierarchy, branding, accessibility, and more. You’ll get actionable insights to boost conversions, improve user trust, and look like a pro.'
    },
    {
      question: 'How is this different from other tools?',
      answer: 'Our AI combines expert-level UX analysis with actionable business insights, prioritizing fixes by ROI impact.'
    },
    // Add other FAQ items
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion>
          {faqs.map((faq, index) => (
            <Accordion.Panel key={index}>
              <Accordion.Title>{faq.question}</Accordion.Title>
              <Accordion.Content>
                <p className="text-gray-600">{faq.answer}</p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </section>
  );
}