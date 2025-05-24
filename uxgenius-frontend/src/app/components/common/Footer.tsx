export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and description */}
        <div>
          {/* Dummy logo */}
          <img
            src="https://via.placeholder.com/150x40?text=LOGO"
            alt="UXGenius Logo"
            className="mb-4"
          />
          <p className="text-sm opacity-80">
            Transforming your digital experience with AI-powered UX solutions.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#careers" className="hover:text-white">Careers</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#solutions" className="hover:text-white">Solutions</a></li>
            <li><a href="#audit" className="hover:text-white">Free Audit</a></li>
            <li><a href="#faq" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Stay Connected</h4>
          {/* Dummy social icons row */}
          <div className="flex space-x-4 mb-6">
            <img src="https://via.placeholder.com/32x32?text=FB" alt="Facebook" className="w-8 h-8" />
            <img src="https://via.placeholder.com/32x32?text=X" alt="X/Twitter" className="w-8 h-8" />
            <img src="https://via.placeholder.com/32x32?text=IG" alt="Instagram" className="w-8 h-8" />
            <img src="https://via.placeholder.com/32x32?text=LI" alt="LinkedIn" className="w-8 h-8" />
          </div>
          {/* Dummy newsletter form */}
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 rounded-md text-gray-900 w-full sm:w-auto flex-1 mb-4 sm:mb-0 sm:mr-2"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider and copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} UXGenius.ai. All rights reserved.
      </div>
    </footer>
  );
}
