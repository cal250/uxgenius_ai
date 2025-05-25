'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItem {
     question: string;
     answer?: string;
}

interface PricingFAQProps {
     title: string;
     faqs: FAQItem[];
}

export default function PricingFAQ({ title, faqs }: PricingFAQProps) {
     const [openIndex, setOpenIndex] = useState<number | null>(null);

     const toggleFAQ = (index: number) => {
          setOpenIndex(openIndex === index ? null : index);
     };

     return (
          <section className="py-16 px-4 bg-gray-50">
               <div className="max-w-7xl mx-auto flex justify-center">
                    <div className="w-full max-w-[60%]">
                         <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
                         <div className="space-y-4">
                              {faqs.map((faq, index) => (
                                   <div
                                        key={index}
                                        className="border border-gray-200 rounded-lg overflow-hidden"
                                   >
                                        <button
                                             onClick={() => toggleFAQ(index)}
                                             className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                                        >
                                             <h3 className="font-semibold text-left">{faq.question}</h3>
                                             <ChevronDownIcon
                                                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'transform rotate-180' : ''
                                                       }`}
                                             />
                                        </button>
                                        {openIndex === index && faq.answer && (
                                             <div className="px-6 py-4 bg-white">
                                                  <p className="text-gray-600">{faq.answer}</p>
                                             </div>
                                        )}
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </section>
     );
} 