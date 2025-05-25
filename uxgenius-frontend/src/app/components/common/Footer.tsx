'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">COMPANY</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {['About', 'Vision & Mission', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white text-sm sm:text-base transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">PRODUCT</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {['Features', 'Services', 'Pricing'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white text-sm sm:text-base transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">LEGAL</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white text-sm sm:text-base transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-3 sm:mb-4 text-sm sm:text-base">Stay Updated</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 rounded-lg bg-gray-800 text-white text-sm sm:text-base"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm">© 2025 UXGenius, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}