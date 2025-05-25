// app/components/HeroSection.tsx
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-8">
              <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium">
                New
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Let our UXGenius AI Agent help today!<br />
              Turn UX Issues Into <br />
              <span className="text-blue-600">Revenue Fast!</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Run an AI-powered UX audit in seconds. Spot what’s broken, see how to fix it,
              and improve your conversions - without a full design team or expensive consultants.
            </p>

            {/* Input Form */}
            <div className="max-w-2xl mx-auto lg:mx-0 mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter the URL to review ..."
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Audit URL
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                No credit card. No downloads. Just clear next steps.
              </p>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/web.png"
                alt="UXGenius AI Dashboard Preview"
                width={600}
                height={400}
                className="w-full h-auto"
                priority
              />
              {/* Animated element overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-pulse">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <svg 
                      className="w-8 h-8 text-blue-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 10V3L4 14h7v7l9-11h-7z" 
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}