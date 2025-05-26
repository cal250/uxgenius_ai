'use client';

import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface CustomNavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const CustomNavLink = ({ href, children, className = '' }: CustomNavLinkProps) => (
  <Link href={href} className={`text-black hover:text-gray-900 text-sm no-underline font-medium ${className}`}>
    {children}
  </Link>
);

export default function Header() {
  return (
    <>
      <style jsx global>{`
        .custom-nav-link {
          position: relative !important;
        }
        .custom-nav-link::before,
        .custom-nav-link::after {
          display: none !important;
          content: none !important;
        }
        .custom-nav-link > span::before,
        .custom-nav-link > span::after {
          display: none !important;
          content: none !important;
        }
      `}</style>
      <Navbar fluid rounded className="w-[90%] mx-auto px-4 py-4 md:py-6 bg-gray-200 mt-4">
        <div className="flex items-center gap-8">
          <Navbar.Brand href="/">
            <span className="text-xl md:text-2xl font-bold text-gray-900">UXGenius.ai</span>
          </Navbar.Brand>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <CustomNavLink href="/product">Product</CustomNavLink>
            <CustomNavLink href="/services">Services</CustomNavLink>
            <CustomNavLink href="/pricing">Pricing</CustomNavLink>
            <CustomNavLink href="/use-case">Use Cases</CustomNavLink>
            <CustomNavLink href="/contact">Contact</CustomNavLink>
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
          <CustomNavLink href="/product" className="py-2 block">Product</CustomNavLink>
          <CustomNavLink href="/services" className="py-2 block">Services</CustomNavLink>
          <CustomNavLink href="/pricing" className="py-2 block">Pricing</CustomNavLink>
          <CustomNavLink href="/use-case" className="py-2 block">Use Cases</CustomNavLink>
          <CustomNavLink href="/contact" className="py-2 block">Contact</CustomNavLink>
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