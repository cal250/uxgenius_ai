'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f3f4f6] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Image 
                src="/images/img_brain_imagesolid.svg" 
                alt="UXGenius Logo" 
                width={42} 
                height={42} 
              />
              <span className="ml-4 text-[#111928] text-2xl font-bold">UXGenius.ai</span>
            </div>
            <p className="mt-4 text-[#6b7280] text-base">
              We are an open-source library of over <span className="font-medium text-[#111928]">400+ web components and interactive elements built with the utility classes from Tailwind CSS.</span>
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" aria-label="X Social">
                <Image src="/images/img_x_social.svg" alt="X Social" width={24} height={24} />
              </Link>
              <Link href="#" aria-label="YouTube">
                <Image src="/images/img_youtube.svg" alt="YouTube" width={24} height={24} />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Image src="/images/img_instagram.svg" alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Image src="/images/img_vector_blue_gray_800.svg" alt="LinkedIn" width={24} height={24} />
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-[#111928] text-sm font-semibold uppercase">COMPANY</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-[#6b7280] text-base hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] text-base hover:text-gray-900">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] text-base hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-[#111928] text-sm font-semibold uppercase">PRODUCT</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-[#6b7280] text-base hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] text-base hover:text-gray-900">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] text-base hover:text-gray-900">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-[#111928] text-sm font-semibold uppercase">RESOURCES</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-[#6b7280] text-base hover:text-gray-900">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] text-base hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] text-base hover:text-gray-900">
                  Use Cases
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-[#111928] text-sm font-semibold uppercase">LEGAL</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#" className="text-[#6b7280] text-base hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] text-base hover:text-gray-900">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#6b7280] text-base hover:text-gray-900">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-[#6b7280] text-base">
            © 2025 UXGenius, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;