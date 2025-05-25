// app/components/Footer.tsx
/**
 * Footer with multiple columns and legal info
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Column */}
          <div>
            <h4 className="text-white font-bold mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {['About', 'Vision & Mission', 'Contact'].map((item) => (
                <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>
          
          {/* Product Column */}
          <div>
            <h4 className="text-white font-bold mb-4">PRODUCT</h4>
            <ul className="space-y-2">
              {['Features', 'Services', 'Pricing'].map((item) => (
                <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-white font-bold mb-4">LEGAL</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map((item) => (
                <li key={item}><a href="#" className="hover:text-white">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-4">Stay Updated</h4>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p>© 2025 UXGenius, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}