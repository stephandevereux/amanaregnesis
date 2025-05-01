"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { FileText, Shield, CheckCircle, AlignJustify } from "lucide-react";

export default function ShariaSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="amana-section bg-gradient-to-r from-amana-charcoal/95 to-amana-teal/95 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full islamic-pattern-overlay opacity-10"></div>

      <div className="amana-container relative z-10">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Content */}
          <div className="text-white">
            <h2 className="text-h2 font-playfair mb-6">
              Faith in Every <span className="text-amana-gold">Foundation</span>
            </h2>

            <p className="mb-6">
              At Amana Regenesis, Sharia compliance isn't just a promise—it's our core. Certified by a dedicated
              Sharia Advisory Board and aligned with AAOIFI standards, we ensure every investment and project avoids
              riba (interest), gharar (uncertainty), and haram (prohibited) activities.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Shield className="text-amana-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-playfair text-xl text-amana-gold mb-1">No Riba</h3>
                  <p className="text-white/80">
                    Ethical financing without interest, using profit-sharing models like Musharakah instead.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <AlignJustify className="text-amana-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-playfair text-xl text-amana-gold mb-1">No Gharar</h3>
                  <p className="text-white/80">
                    Clear, fair transactions every time, avoiding excessive uncertainty in all dealings.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="text-amana-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-playfair text-xl text-amana-gold mb-1">Purification</h3>
                  <p className="text-white/80">
                    Any non-compliant income is purified through charitable donations, ensuring complete adherence.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/files/sharia-certification.pdf">
                <Button className="amana-btn-secondary bg-transparent border-amana-gold text-white hover:text-amana-charcoal">
                  Download Sharia Certificate
                </Button>
              </Link>

              <Link href="/sharia-commitment">
                <Button className="amana-btn-primary">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Certificate Display */}
          <div className="relative rounded-lg overflow-hidden shadow-xl border-2 border-amana-gold">
            {/* This would typically be an actual certificate image or video */}
            <div className="aspect-[4/3] bg-white p-8 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-amana-green/10 flex items-center justify-center">
                      <Shield className="w-12 h-12 text-amana-green" />
                    </div>
                  </div>

                  <h3 className="font-playfair text-2xl text-amana-charcoal mb-3">
                    Sharia Compliance Certificate
                  </h3>

                  <p className="text-gray-600 mb-4">
                    Islamic Finance Review Board
                  </p>

                  <div className="w-full max-w-xs mx-auto flex justify-between items-center border-t border-gray-200 pt-4">
                    <div className="text-left">
                      <p className="text-xs text-gray-500">Certificate ID</p>
                      <p className="text-sm font-medium text-amana-charcoal">IFRB-2024-AR-0142</p>
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-gray-500">Valid Until</p>
                      <p className="text-sm font-medium text-amana-charcoal">March 31, 2025</p>
                    </div>
                  </div>

                  {/* Gold Seal */}
                  <div className="absolute bottom-8 right-8 w-24 h-24 opacity-30">
                    <div className="w-full h-full rounded-full border-4 border-amana-gold flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full border-2 border-amana-gold flex items-center justify-center">
                        <span className="font-playfair text-lg text-amana-gold">IFRB</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-16 text-center">
          <h3 className="font-playfair text-2xl text-white mb-6">
            Hear from Our Sharia Experts
          </h3>
          <div className="relative max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <div className="aspect-video bg-amana-charcoal flex items-center justify-center">
              <div className="text-white/70">
                <Shield className="w-12 h-12 mx-auto mb-3" />
                <p>Video from Sharia Advisory Board</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
