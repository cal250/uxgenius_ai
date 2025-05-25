'use client';

import {
  HiMegaphone,
  HiShoppingCart,
  HiClipboardDocumentCheck,
  HiRocketLaunch
} from 'react-icons/hi2';

export default function Solutions() {
  const teams = [
    {
      icon: <HiMegaphone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Marketing Teams",
      description: "Find UX gaps that hurt your messaging, CTAs, and user flows—then fix them in minutes."
    },
    {
      icon: <HiShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Ecommerce Teams",
      description: "We highlight issues that frustrate shoppers—so you can recover abandoned carts and boost AOV."
    },
    {
      icon: <HiClipboardDocumentCheck className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Product Managers",
      description: "Use audits as a fast QA pass for launches, onboarding flows, and MVPs. Ship faster and smarter."
    },
    {
      icon: <HiRocketLaunch className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      title: "Startup Founders",
      description: "Cut through the noise and get a clear list of changes that will improve engagement and revenue from day one."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          Our Solutions Are Built <br className="hidden sm:block" />
          for Real-World Teams
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {teams.map((team, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 sm:mb-6 text-blue-600">
                {team.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {team.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {team.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <button className="text-blue-600 font-semibold hover:text-blue-700 text-sm sm:text-base transition-colors">
            Learn more →
          </button>
        </div>
      </div>
    </section>
  );
}