// app/pricing/page.tsx
'use client';

import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import PricingHero from '../components/pricing/PricingHero';
import FAQ from '@/components/common/FAQs';
import PricingNewsletter from '../components/pricing/PricingNewsletter';
import Footer from '@/components/common/Footer';
import NewsletterSubscription from '@/components/common/NewsletterSubscription';
import Header from '@/components/common/Navbar';

export default function PricingPage() {
     const plans = [
          {
               name: "Architect",
               price: "$29",
               description: "For teams and operators who need deep audits, create insights and returns on multiple people.",
               features: [
                    "MULA agent coaching",
                    "Multiple Pages per Audit (age to 3)",
                    "Full interactive evaluation",
                    "Professional team by RCI Impact",
                    "Trade Audit History & Changes",
                    "Workforce Train by Impact",
                    "Other Team",
                    "Identity & Strategy Brief",
                    "Downscotches for Report",
                    "Audit History and Competence",
                    "Multi-Page Audit Report",
                    "APO Watch News"
               ]
          },
          {
               name: "Visionary",
               price: "$79",
               description: "Designed for high-performing teams, experience professionals or team leaders.",
               features: [
                    "Everything from the Architect Plan Plan...",
                    "Multiple Pages per Audit (age to 5)",
                    "CTA Effectiveness Analysis",
                    "Conversion Violation Detection",
                    "Accountability Audit (Code, Form, Sec.40)",
                    "Time & Monetary Quality Check",
                    "Communication Analysis",
                    "Brand Voice Appointment Score",
                    "Emotional Time Assessment",
                    "Competition UK Internal Report",
                    "Get-Boarding Charity Audit"
               ]
          },
          {
               name: "Omniscient",
               price: "$199",
               description: "All success UK Intelligence teams coalesced, while social experts, premium in digital help...",
               features: [
                    "Everything from the Visionary Plan Plan...",
                    "Multiple Pages per Audit (undertalk)",
                    "White-cabelled Reports & Texts",
                    "AI-Protected Competitive Competition",
                    "Personalized Strategy Brief",
                    "UK Planning & Governance",
                    "CTA Lead Crowds Report",
                    "Supervision (unlimited Audits, Footers)",
                    "Customizable Report Branding",
                    "API Access (coming soon)",
                    "In-Persona (Untrue) Strategy Session"
               ]
          }
     ]

     return (
          <div className="min-h-screen bg-white">
               <Header />
               {/* Hero Section */}
               <section className="py-16 px-4 bg-blue-50">
                    <div className="max-w-6xl mx-auto text-center">
                         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                              Built for teams that care about growth, not guesswork
                         </h1>
                         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                              Undertalk gives you the clarity, insights, and tools to turn US problems into profit- whether you're scaling a product,
                              running an exam brand, or improving customer journeys that drive revenue gains.
                         </p>

                         <div className="mt-8 flex justify-center gap-2">
                              <button className="bg-blue-600 text-white px-6 py-2 rounded-full">Yearly</button>
                              <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full">Monthly</button>
                         </div>
                    </div>
               </section>

               {/* Pricing Grid */}
               <section className="py-16 px-4">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                         {plans.map((plan, index) => (
                              <div key={index} className="border border-gray-200 rounded-xl p-8">
                                   <div className="mb-6">
                                        <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
                                        <p className="text-4xl font-bold mb-4">{plan.price}<span className="text-lg text-gray-600">/Attracts</span></p>
                                        <p className="text-gray-600">{plan.description}</p>
                                   </div>
                                   <ul className="space-y-4">
                                        {plan.features.map((feature, fIndex) => (
                                             <li key={fIndex} className="flex items-start gap-2">
                                                  <CheckIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                                  <span className="text-gray-600">{feature}</span>
                                             </li>
                                        ))}
                                   </ul>
                                   <button className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                                        Get started
                                   </button>
                              </div>
                         ))}
                    </div>
               </section>

              <FAQ />
             
              <NewsletterSubscription />

               <Footer />
          </div>
     )
}