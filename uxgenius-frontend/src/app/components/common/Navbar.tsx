'use client';

import { Navbar } from 'flowbite-react';

export default function Header() {
  return (
    <Navbar fluid rounded className="max-w-7xl mx-auto px-4 py-4 md:py-6">
      <Navbar.Brand href="/">
        <span className="text-xl md:text-2xl font-bold text-gray-900">UXGenius.ai</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2 md:gap-4 items-center">
        <button className="text-gray-600 hover:text-gray-900 font-medium text-sm md:text-base">
          Log In
        </button>
        <button className="bg-blue-600 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-blue-700 text-sm md:text-base whitespace-nowrap">
          Get started
        </button>
        <Navbar.Toggle className="ml-2" />
      </div>
      <Navbar.Collapse className="mt-4 md:mt-0">
        <Navbar.Link href="/product" className="text-gray-600 hover:text-gray-900 text-base py-2 md:py-0">
          Product
        </Navbar.Link>
        <Navbar.Link href="/services" className="text-gray-600 hover:text-gray-900 text-base py-2 md:py-0">
          Services
        </Navbar.Link>
        <Navbar.Link href="/pricing" className="text-gray-600 hover:text-gray-900 text-base py-2 md:py-0">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="/use-case" className="text-gray-600 hover:text-gray-900 text-base py-2 md:py-0">
          Use Cases
        </Navbar.Link>
        <Navbar.Link href="/contact" className="text-gray-600 hover:text-gray-900 text-base py-2 md:py-0">
          Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}