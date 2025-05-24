export default function FreeAuditCTA() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 py-16 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        {/* Decorative dummy background image */}
        <img
          src="https://via.placeholder.com/300x300?text=Background+Shape"
          alt="Decorative Background"
          className="absolute top-0 right-0 w-48 md:w-60 opacity-20 pointer-events-none"
          aria-hidden="true"
        />

        {/* Section title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Get Your Free UX Audit Today
        </h2>

        {/* Subtext */}
        <p className="mb-10 max-w-2xl mx-auto text-lg md:text-xl opacity-90">
          Unlock your website’s full potential with a comprehensive UX audit by our experts.
        </p>

        {/* CTA button with dummy icon */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-white text-indigo-700 font-semibold rounded-lg px-8 py-4 shadow-lg hover:bg-indigo-50 transition"
        >
          {/* Dummy icon */}
          <img
            src="https://via.placeholder.com/24x24?text=➕"
            alt="Icon"
            className="w-6 h-6 mr-2"
          />
          Request Free Audit
        </a>
      </div>
    </section>
  );
}
