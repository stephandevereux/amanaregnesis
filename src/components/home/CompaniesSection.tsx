"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

interface CompanyCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  bgColor: string;
  titleColor: string;
  isRight?: boolean;
}

const CompanyCard = ({
  title,
  subtitle,
  description,
  features,
  buttonText,
  buttonLink,
  bgColor,
  titleColor,
  isRight = false,
}: CompanyCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-1000 transform
      ${inView
        ? "translate-x-0 opacity-100"
        : isRight ? "translate-x-12 opacity-0" : "-translate-x-12 opacity-0"
      } ${bgColor}`}
    >
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 w-full h-full islamic-pattern-overlay opacity-10"></div>

      <div className="relative z-10 p-8 md:p-10">
        <span className="text-sm uppercase tracking-wider font-montserrat font-medium text-white/80">
          {subtitle}
        </span>
        <h3 className={`text-3xl font-playfair font-bold mt-2 mb-4 ${titleColor}`}>
          {title}
        </h3>

        <p className="text-white/90 mb-6">
          {description}
        </p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
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
                className="text-amana-gold mr-3 mt-1 flex-shrink-0"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-white/80">{feature}</span>
            </li>
          ))}
        </ul>

        <Link href={buttonLink}>
          <Button className="bg-white hover:bg-amana-gold text-amana-charcoal hover:text-amana-charcoal transition-colors group">
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default function CompaniesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="amana-section">
      <div className="amana-container">
        <div
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="text-h2 font-playfair text-amana-charcoal mb-4">
            One Vision, <span className="text-amana-green">Two Strengths</span>
          </h2>
          <p className="text-gray-600">
            Amana Regenesis Pvt. Ltd. unites two powerful entities under one ethical mission. Our
            SEBI-registered Amana Islamic Real Estate Fund offers Sharia-compliant investment strategies
            with strong returns, while Amana Developers Pvt. Ltd. brings those investments to life with
            high-quality real estate projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <CompanyCard
            title="Amana Islamic Real Estate Fund"
            subtitle="For Investors"
            description="Invest ethically with our fund, offering three Sharia-compliant strategies—Development, Long-Term Hold, and Interest-Free Financing—in India's fastest-growing markets. Target returns of 15–20% IRR await."
            features={[
              "Fully Sharia-compliant investment structures",
              "Diverse real estate portfolio across high-growth markets",
              "Transparent profit & loss sharing mechanisms",
              "Regular Zakat calculation and distribution support"
            ]}
            buttonText="Explore Investment Opportunities"
            buttonLink="/fund"
            bgColor="bg-amana-green"
            titleColor="text-white"
          />

          <CompanyCard
            title="Amana Developers Pvt. Ltd."
            subtitle="For Home Buyers"
            description="From luxury residences to affordable homes, our development arm builds safe, sustainable properties in Navi Mumbai, designed for generations."
            features={[
              "Sharia-compliant purchase plans without riba",
              "Premium locations in high-growth areas",
              "Sustainable, eco-friendly construction practices",
              "Community-focused developments that enhance quality of life"
            ]}
            buttonText="See Our Projects"
            buttonLink="/developers"
            bgColor="bg-amana-teal"
            titleColor="text-amana-gold"
            isRight
          />
        </div>
      </div>
    </section>
  );
}
