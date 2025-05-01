"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate the content after component mount
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex items-center justify-center overflow-hidden min-h-[600px] h-[85vh] md:h-[90vh]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-amana-charcoal/40 z-10"></div>
      <div className="absolute inset-0 w-full h-full">
        {/* For a real implementation, use a video here */}
        <div className="w-full h-full bg-gradient-to-r from-amana-charcoal to-amana-teal opacity-90"></div>

        {/* Islamic Pattern Overlay */}
        <div className="absolute inset-0 w-full h-full islamic-pattern-overlay"></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-20 text-center px-4 sm:px-6 md:px-8 max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <span className="text-base md:text-lg lg:text-xl text-white font-montserrat font-light mb-2 md:mb-4 block">
          Where Trust Meets Tomorrow
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-white leading-tight mb-4 md:mb-6">
          <span className="text-amana-gold">Ethical</span> Real Estate Investment <br className="hidden sm:block" />
          <span className="text-amana-gold">Sharia</span>-Compliant Excellence
        </h1>

        <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl lg:max-w-3xl mx-auto mb-6 md:mb-10 font-montserrat font-light">
          
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6">
          <Link href="https://fund.amana-regenesis.com">
            <Button className="amana-btn-primary text-sm md:text-base px-6 py-3 md:px-8 md:py-4 group">
              Invest with Us
              <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <Link href="https://developers.amana-regenesis.com" className="mt-3 sm:mt-0">
            <Button className="amana-btn-secondary text-sm md:text-base px-6 py-3 md:px-8 md:py-4">
              Discover Projects
            </Button>
          </Link>
        </div>

        {/* Quick Stats Section */}
        <div className="mt-10 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-white/20">
            <h3 className="text-amana-gold font-playfair text-xl md:text-2xl mb-1 md:mb-2">15–20% IRR Potential</h3>
            <p className="text-white/80 text-xs md:text-sm">Competitive returns through ethical investment</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-white/20">
            <h3 className="text-amana-gold font-playfair text-xl md:text-2xl mb-1 md:mb-2">Navi Mumbai's Market</h3>
            <p className="text-white/80 text-xs md:text-sm">Investing in India's fastest-growing region</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-white/20">
            <h3 className="text-amana-gold font-playfair text-xl md:text-2xl mb-1 md:mb-2">Certified Excellence</h3>
            <p className="text-white/80 text-xs md:text-sm">Fully Sharia-compliant projects and investments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
