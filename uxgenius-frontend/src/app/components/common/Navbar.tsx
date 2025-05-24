"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/140x40?text=LOGO"
            alt="UXGenius Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#solutions" className="hover:text-indigo-600">Solutions</a>
          <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>

        {/* Right-side buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="/login"
            className="text-sm font-medium text-gray-700 hover:text-indigo-600"
          >
            Log In
          </a>
          <a
            href="/register"
            className="bg-indigo-600 text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-indigo-500 transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white px-6 pt-4 pb-6 shadow-md">
          <nav className="flex flex-col space-y-4 text-sm font-medium text-gray-700">
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#solutions" className="hover:text-indigo-600">Solutions</a>
            <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <hr className="my-2 border-gray-200" />
            <a href="/login" className="hover:text-indigo-600">Log In</a>
            <a
              href="/register"
              className="bg-indigo-600 text-white text-center py-2 rounded-lg mt-2"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
