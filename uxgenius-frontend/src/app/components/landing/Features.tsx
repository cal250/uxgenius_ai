'use client';

import React from 'react';
import Image from 'next/image';

const Features: React.FC = () => {
  const features = [
    {
      icon: '/images/img_percent03.svg',
      title: 'Instant UX Score',
      description: 'Get a fast, clear UX grad for your site with no setup required. Just sign up, enter your URL and get a performance breakdown within seconds.'
    },
    {
      icon: '/images/img_stars01.svg',
      title: 'AI-Powered Recommendation',
      description: 'No more vague advice. Our audit shows exactly what to fix - and why - so you can improve your UX and grow revenue FAST!'
    },
    {
      icon: '/images/img_clipboardcheck.svg',
      title: 'Track Changes & Results',
      description: 'Each audit is saved in your dashboard so you can compare versions, apply changes, and track how UX upgrades impact performance.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          Fast, Actionable UX Insights in 3 Steps
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#e1effe] rounded-lg flex items-center justify-center">
                  <Image 
                    src={feature.icon}
                    alt={feature.title}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;