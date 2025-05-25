'use client';

import { Navbar } from 'flowbite-react';

export default function Header() {
  return (
    <Navbar fluid rounded className="max-w-7xl mx-auto px-4 py-4 md:py-6">
      <div className="flex items-center gap-8">
        <Navbar.Brand href="/">
          <span className="text-xl md:text-2xl font-bold text-gray-900">UXGenius.ai</span>
        </Navbar.Brand>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Navbar.Link href="/product" className="text-gray-600 hover:text-gray-900 text-base">
            Product
          </Navbar.Link>
          <Navbar.Link href="/services" className="text-gray-600 hover:text-gray-900 text-base">
            Services
          </Navbar.Link>
          <Navbar.Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-base">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/use-case" className="text-gray-600 hover:text-gray-900 text-base">
            Use Cases
          </Navbar.Link>
          <Navbar.Link href="/contact" className="text-gray-600 hover:text-gray-900 text-base">
            Contact
          </Navbar.Link>
        </div>
      </div>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="text-gray-600 hover:text-gray-900 font-medium text-base">
          Log In
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-base whitespace-nowrap">
          Get started
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex md:hidden items-center">
        <Navbar.Toggle />
      </div>

      {/* Mobile Menu */}
      <Navbar.Collapse className="md:hidden">
        <Navbar.Link href="/product" className="text-gray-600 hover:text-gray-900 text-base py-2">
          Product
        </Navbar.Link>
        <Navbar.Link href="/services" className="text-gray-600 hover:text-gray-900 text-base py-2">
          Services
        </Navbar.Link>
        <Navbar.Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-base py-2">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="/use-case" className="text-gray-600 hover:text-gray-900 text-base py-2">
          Use Cases
        </Navbar.Link>
        <Navbar.Link href="/contact" className="text-gray-600 hover:text-gray-900 text-base py-2">
          Contact
        </Navbar.Link>
        <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
          <button className="text-gray-600 hover:text-gray-900 font-medium text-base text-left">
            Log In
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-base">
            Get started
          </button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}