"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/our-companies", label: "Our Companies" },
  { href: "/sharia-commitment", label: "Sharia Commitment" },
  { href: "/news-insights", label: "News & Insights" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-sm py-3 md:py-4"
      }`}
    >
      <div className="amana-container flex-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-10 md:h-12 animate-fade-in">
            {/* Placeholder for the logo - replace with actual logo */}
            <div className="flex items-center">
              <span className="font-playfair text-amana-green text-xl md:text-2xl font-bold">
                AMANA<span className="text-amana-gold">REGENESIS</span>
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-montserrat text-amana-charcoal hover:text-amana-green transition-colors duration-300 text-button py-2"
            >
              {link.label}
            </Link>
          ))}
          <Button className="amana-btn-primary ml-2 md:ml-4 whitespace-nowrap">Invest Now</Button>
        </nav>

        {/* Mobile Menu Trigger */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="text-amana-charcoal">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-white p-0">
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center pb-6 border-b border-amana-gold/20">
                <span className="font-playfair text-amana-green text-xl font-bold">
                  AMANA<span className="text-amana-gold">REGENESIS</span>
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="h-5 w-5 text-amana-charcoal" />
                </Button>
              </div>

              <nav className="flex flex-col space-y-5 pt-6">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-montserrat text-amana-charcoal hover:text-amana-green transition-colors duration-300 text-subheading py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-amana-gold/20">
                <Button
                  className="amana-btn-primary w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Invest Now
                </Button>
                <div className="mt-6 flex justify-center space-x-6">
                  {/* Social Media Links */}
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex-center h-10 w-10 rounded-full bg-amana-soft-grey hover:bg-amana-gold/20 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amana-charcoal hover:text-amana-green transition-colors duration-300"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex-center h-10 w-10 rounded-full bg-amana-soft-grey hover:bg-amana-gold/20 transition-colors duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amana-charcoal hover:text-amana-green transition-colors duration-300"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
