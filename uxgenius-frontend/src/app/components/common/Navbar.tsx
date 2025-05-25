import { Navbar } from 'flowbite-react';

/**
 * Header component with navigation links and auth buttons
 * Uses Flowbite Navbar with responsive collapse
 */
export default function Header() {
  return (
    <Navbar fluid rounded className="max-w-7xl mx-auto px-4 py-6">
      <Navbar.Brand href="/">
        <span className="text-2xl font-bold text-gray-900">UXGenius.ai</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-4">
        <button className="text-gray-600 hover:text-gray-900 font-medium">
          Log In
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Get started
        </button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" className="text-gray-600 hover:text-gray-900">
          Product
        </Navbar.Link>
        <Navbar.Link href="#" className="text-gray-600 hover:text-gray-900">
          Services
        </Navbar.Link>
        <Navbar.Link href="#" className="text-gray-600 hover:text-gray-900">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#" className="text-gray-600 hover:text-gray-900">
          Use Cases
        </Navbar.Link>
        <Navbar.Link href="#" className="text-gray-600 hover:text-gray-900">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}