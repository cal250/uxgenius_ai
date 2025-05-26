'use client';

import { Navbar } from 'flowbite-react';

export default function Header() {
  return (
    <>
      <style jsx global>{`
        .flowbite-navbar-link::before {
          display: none !important;
        }
      `}</style>
      <Navbar fluid rounded className="w-[90%] mx-auto px-4 py-4 md:py-6 bg-gray-200 mt-4">
        <div className="flex items-center gap-8">
          <Navbar.Brand href="/">
            <span className="text-xl md:text-2xl font-bold text-gray-900">UXGenius.ai</span>
          </Navbar.Brand>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Navbar.Link href="/product" className="text-black hover:text-gray-900 text-sm no-underline font-medium flowbite-navbar-link">
              Product
            </Navbar.Link>
            <Navbar.Link href="/services" className="text-black hover:text-gray-900 text-sm no-underline font-medium flowbite-navbar-link">
              Services
            </Navbar.Link>
            <Navbar.Link href="/pricing" className="text-black hover:text-gray-900 text-sm no-underline font-medium flowbite-navbar-link">
              Pricing
            </Navbar.Link>
            <Navbar.Link href="/use-case" className="text-black hover:text-gray-900 text-sm no-underline font-medium flowbite-navbar-link">
              Use Cases
            </Navbar.Link>
            <Navbar.Link href="/contact" className="text-black hover:text-gray-900 text-sm no-underline font-medium flowbite-navbar-link">
              Contact
            </Navbar.Link>
          </div>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-black hover:text-gray-900 font-medium text-sm">
            Log In
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-sm whitespace-nowrap">
            Get started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center">
          <Navbar.Toggle />
        </div>

        {/* Mobile Menu */}
        <Navbar.Collapse className="md:hidden">
          <Navbar.Link href="/product" className="text-black hover:text-gray-900 text-sm py-2 no-underline font-medium flowbite-navbar-link">
            Product
          </Navbar.Link>
          <Navbar.Link href="/services" className="text-black hover:text-gray-900 text-sm py-2 no-underline font-medium flowbite-navbar-link">
            Services
          </Navbar.Link>
          <Navbar.Link href="/pricing" className="text-black hover:text-gray-900 text-sm py-2 no-underline font-medium flowbite-navbar-link">
            Pricing
          </Navbar.Link>
          <Navbar.Link href="/use-case" className="text-black hover:text-gray-900 text-sm py-2 no-underline font-medium flowbite-navbar-link">
            Use Cases
          </Navbar.Link>
          <Navbar.Link href="/contact" className="text-black hover:text-gray-900 text-sm py-2 no-underline font-medium flowbite-navbar-link">
            Contact
          </Navbar.Link>
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
            <button className="text-black hover:text-gray-900 font-medium text-sm text-left">
              Log In
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-sm">
              Get started
            </button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}