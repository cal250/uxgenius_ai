const props = [
  "Double Digit Conversion Lift on Average",
  "10–20 Hours Saved Per Audit",
  "AI plus Expert-Level Recommendations",
  "One-Click Audit Reports",
  "No UX Experience or Expertise Required",
];

export default function ValueProps() {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        See Real UX Impact — Without All of the Guesswork
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10 text-base">
        UXGenius delivers insights that help you move fast, fix what matters, and grow revenue — without relying on expensive agencies or complicated tools.
      </p>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mb-10">
        {props.map((p, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="text-green-500 text-lg mt-1">✔</div>
            <p className="text-gray-700">{p}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-sm font-medium"
        >
          Start your audit
        </a>
        <a
          href="#"
          className="text-blue-600 underline font-medium text-sm hover:text-blue-800"
        >
          Get a demo
        </a>
      </div>
    </section>
  );
}
