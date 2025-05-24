import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gray-50 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Top Badge */}
          <p className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            New — Let our UXGenius AI Agent help today!
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Turn UX Issues Into <br className="hidden md:block" /> Revenue Fast!
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-6 text-base md:text-lg">
            Run an AI-powered UX audit in seconds. Spot what’s broken, see how to fix it, and improve your conversions — without a full design team or expensive consultants.
          </p>

          {/* URL Input */}
          <form className="flex flex-col sm:flex-row w-full max-w-md">
            <input
              type="url"
              placeholder="Enter the URL to review..."
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 text-sm font-medium rounded-b-md sm:rounded-r-md sm:rounded-b-none"
            >
              Audit URL
            </button>
          </form>

          {/* Disclaimer */}
          <p className="text-sm text-gray-500 mt-4">
            No credit card. No downloads. Just clear next steps.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-80 md:h-[420px]">
          <Image
            src="https://via.placeholder.com/600x400?text=UX+Audit+Preview"
            alt="UX Audit Dashboard"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
