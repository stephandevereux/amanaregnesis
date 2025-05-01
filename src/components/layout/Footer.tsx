"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const mainLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  { title: "Our Companies", href: "/our-companies" },
  { title: "Sharia Commitment", href: "/sharia-commitment" },
  { title: "News & Insights", href: "/news-insights" },
  { title: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amana-charcoal text-white pt-12 lg:pt-16 pb-8">
      <div className="amana-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Company Info (Left) */}
          <div className="space-y-4">
            <div>
              <h4 className="font-playfair text-xl md:text-2xl font-bold text-white">
                AMANA<span className="text-amana-gold">REGENESIS</span>
              </h4>
              <p className="mt-3 text-gray-300 text-sm md:text-base">
                Ethical Elegance Meets Modern Innovation in Real Estate
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 flex-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-300 hover:text-amana-gold transition-colors"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110 flex-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-300 hover:text-amana-gold transition-colors"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* Main Website (Middle) */}
          <div>
            <h4 className="font-playfair text-lg md:text-xl text-amana-gold mb-4 md:mb-6">Main Website</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              {mainLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 inline-block py-1"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services (Right) */}
          <div>
            <h4 className="font-playfair text-lg md:text-xl text-amana-gold mb-4 md:mb-6">Our Services</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
              <li>
                <Link
                  href="/fund"
                  className="text-amana-gold hover:text-white transition-colors duration-300 inline-block py-1"
                >
                  Fund
                </Link>
              </li>
              <li>
                <Link
                  href="/developers"
                  className="text-amana-gold hover:text-white transition-colors duration-300 inline-block py-1"
                >
                  Developers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 md:my-8 bg-amana-gold/20" />

        {/* Contact and Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-300 text-xs md:text-sm">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p>© {currentYear} Amana Regenesis. All rights reserved.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center">
            <Link href="mailto:info@amana-regenesis.com" className="hover:text-amana-gold transition-colors whitespace-nowrap">
              info@amana-regenesis.com
            </Link>
            <span className="hidden sm:inline text-gray-500">|</span>
            <Link href="tel:+12025551234" className="hover:text-amana-gold transition-colors whitespace-nowrap">
              +1 202 555 1234
            </Link>
            <span className="hidden sm:inline text-gray-500">|</span>
            <Link href="/privacy-policy" className="hover:text-amana-gold transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}