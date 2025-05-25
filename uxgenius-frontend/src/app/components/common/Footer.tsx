'use client';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-bold text-base sm:text-lg">COMPANY</h4>
            <ul className="space-y-3">
              {['About', 'Vision & Mission', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="/" className="hover:text-gray-900 text-sm sm:text-base transition-colors block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Column */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-bold text-base sm:text-lg">PRODUCT</h4>
            <ul className="space-y-3">
              {['Features', 'Services', 'Pricing'].map((item) => (
                <li key={item}>
                  <a href="/" className="hover:text-gray-900 text-sm sm:text-base transition-colors block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-bold text-base sm:text-lg">LEGAL</h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="/" className="hover:text-gray-900 text-sm sm:text-base transition-colors block">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-bold text-base sm:text-lg">Stay Updated</h4>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-lg bg-gray-50 text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200"
              />
              <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm sm:text-base">© 2025 UXGenius, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}