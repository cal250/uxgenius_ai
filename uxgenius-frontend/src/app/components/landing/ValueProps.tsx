const props = [
  "Double Digit Conversion Lift on Average",
  "10–20 Hours Saved Per Audit",
  "AI plus Expert-Level Recommendations",
  "One-Click Audit Reports",
  "No UX Experience or Expertise Required",
];

export default function ValueProps() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
        See Real UX Impact — Without All of the Guesswork
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base">
        UXGenius delivers insights that help you move fast, fix what matters, and grow revenue — without relying on expensive agencies or complicated tools.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto text-left mb-8 sm:mb-10">
        {props.map((p, i) => (
          <div key={i} className="flex items-start gap-3 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="text-green-500 text-base sm:text-lg mt-0.5">✔</div>
            <p className="text-gray-700 text-sm sm:text-base">{p}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <a
          href="#"
          className="bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Start your audit
        </a>
        <a
          href="#"
          className="text-blue-600 underline font-medium text-sm hover:text-blue-800 transition-colors"
        >
          Get a demo
        </a>
      </div>
    </section>
  );
}
