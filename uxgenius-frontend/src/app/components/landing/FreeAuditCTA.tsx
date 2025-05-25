import React from 'react';

const UXAuditComponent = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gradient-to-r from-green-50 to-gray-100 p-8 min-h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">What&#39;s Inside a UXGenius Audit</h1>
        <p className="text-gray-600">
          See exactly how we break down your site&#39;s user experience—from high-level scoring to deep, actionable recommendations. Every audit is built on the proven UX principles and backed by AI-driven insights.
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="text-blue-600 mr-2">⚙️</span>
            <div>
              <h3 className="font-semibold text-gray-800">UX Score</h3>
              <p className="text-gray-600 text-sm">
                0-100 rating based on usability, clarity, conversion readiness and much more (depending on subscription plan)
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-2">▲</span>
            <div>
              <h3 className="font-semibold text-gray-800">Top 5 Issues Identified</h3>
              <p className="text-gray-600 text-sm">
                Prioritized by impact so you know what to fix first, and what impact it will have on your website
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-red-500 mr-2">⚠️</span>
            <div>
              <h3 className="font-semibold text-gray-800">Conversion Killers Flagged</h3>
              <p className="text-gray-600 text-sm">
                Key UX issues identified to increase sales-like confusing CTAs, poor mobile layout or friction filled forms—so you can fix them fast
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-purple-500 mr-2">🔍</span>
            <div>
              <h3 className="font-semibold text-gray-800">UX Patterns Analyzed</h3>
              <p className="text-gray-600 text-sm">
                Our audit evaluates 30+ design heuristics from layout to microcopy to ensure your site is optimized to produce the best results.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">📈</span>
            <div>
              <h3 className="font-semibold text-gray-800">One Audit = Real Revenue Gains</h3>
              <p className="text-gray-600 text-sm">
                Most users see measurable conversion improvements within days—making even a single audit worth thousands in recovered revenue
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="relative">
          <div className="w-[500px] h-[600px] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
            <img
              src="/images/dash.png"
              alt="Placeholder"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UXAuditComponent;