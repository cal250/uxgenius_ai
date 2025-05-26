'use client';

import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

interface CustomNavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const CustomNavLink = ({ href, children, className = '' }: CustomNavLinkProps) => (
  <Link href={href} className={`text-black hover:text-gray-900 text-base no-underline font-medium ${className}`}>
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

        .logo-link {
          display: block;
          transition: opacity 100ms ease-out;
        }

        .logo-link:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .logo-container {
            width: 140px;
            height: 32px;
          }
        }
      `}</style>
      <Navbar fluid rounded className="w-[1280px] h-[92px] mx-auto px-4 pt-6 bg-[rgba(33,114,194,0.04)] gap-2.5">
        <div className="flex items-center gap-1">
          <Link href="/UXGenius-Home-Page-Billing-Monthly" className="logo-link">
            <div className="logo-container w-[180px] h-[42px]">
              <Image
                src="/icons/logo.svg"
                alt="UXGenius.ai Logo"
                width={180}
                height={42}
                priority
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="text-black hidden md:flex items-center w-[464px] h-6 gap-4 ml-12 font-medium text-lg">
            <CustomNavLink href="/product">Product</CustomNavLink>
            <CustomNavLink href="/services">Services</CustomNavLink>
            <CustomNavLink href="/pricing">Pricing</CustomNavLink>
            <CustomNavLink href="/use-case">Use Cases</CustomNavLink>
            <CustomNavLink href="/contact">Contact</CustomNavLink>
          </div>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-black hover:text-gray-900 font-medium text-base">
            Log In
          </button>
          <button className="bg-[#1A56DB] text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-base whitespace-nowrap">
            Get started
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center">
          <Navbar.Toggle />
        </div>

        {/* Mobile Menu */}
        <Navbar.Collapse className="md:hidden">
          <CustomNavLink href="/product" className="text-black py-3 block">Product</CustomNavLink>
          <CustomNavLink href="/services" className="text-black py-3 block">Services</CustomNavLink>
          <CustomNavLink href="/pricing" className="text-black py-3 block">Pricing</CustomNavLink>
          <CustomNavLink href="/use-case" className="text-black py-3 block">Use Cases</CustomNavLink>
          <CustomNavLink href="/contact" className="text-black py-3 block">Contact</CustomNavLink>
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
            <button className="text-black hover:text-gray-900 font-medium text-base text-left">
              Log In
            </button>
            <button className="bg-[#1A56DB] text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-base">
              Get started
            </button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}