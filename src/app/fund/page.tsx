"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight, Play, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// Sample strategy data
const strategies = [
  {
    title: "Residential Developments",
    description: "Invest in affordable housing projects in Navi Mumbai’s high-growth areas like Kharghar and Taloja.",
    stats: { roi: "12-15%", projects: 5, investment: "₹50 Cr" },
  },
  {
    title: "Commercial Complexes",
    description: "Fund modern office spaces and retail centers with strong rental yields and long-term value.",
    stats: { roi: "10-13%", projects: 3, investment: "₹30 Cr" },
  },
  {
    title: "Mixed-Use Properties",
    description: "Support integrated developments combining residential, commercial, and recreational spaces.",
    stats: { roi: "13-16%", projects: 2, investment: "₹20 Cr" },
  },
];

// Sample performance examples
const performanceExamples = [
  {
    title: "Kharghar Heights",
    description: "A residential project completed in 2024, delivering 14% ROI to investors.",
    imageUrl: "/assets/kharghar-heights.jpg",
  },
  {
    title: "Taloja Commercial Hub",
    description: "A retail center launched in 2023, achieving 11% annual returns.",
    imageUrl: "/assets/taloja-hub.jpg",
  },
];

export default function FundPage() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: strategiesRef, inView: strategiesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: portalRef, inView: portalInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: performanceRef, inView: performanceInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Placeholder for stat animation
  const [counts, setCounts] = useState(strategies.map(() => ({ roi: 0, projects: 0, investment: 0 })));

  useEffect(() => {
    if (strategiesInView) {
      strategies.forEach((_, index) => {
        setTimeout(() => {
          setCounts((prev) =>
            prev.map((c, i) =>
              i === index
                ? {
                    roi: parseFloat(strategies[index].stats.roi.split("-")[0]),
                    projects: strategies[index].stats.projects,
                    investment: parseInt(strategies[index].stats.investment),
                  }
                : c
            )
          );
        }, index * 200);
      });
    }
  }, [strategiesInView]);

  return (
    <div className="min-h-screen bg-amana-charcoal text-white">
      {/* Fund Overview */}
      <section className="amana-section geometric-pattern bg-amana-charcoal">
        <div className="amana-container">
          <div
            ref={heroRef}
            className={`text-center transition-all duration-800 transform ${
              heroInView ? "opacity-100" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-h1 font-playfair text-amana-gold mb-4">
              Amana Regenesis Fund
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Discover Sharia-compliant investment opportunities in Navi Mumbai’s booming real estate market, powered by transparency and ethical principles.
            </p>
            <div className="relative h-64 bg-amana-soft-grey rounded-lg mb-8">
              {/* Placeholder for dashboard screenshot */}
            </div>
            <Link href="#investment-strategies">
              <Button className="amana-btn-primary bg-amana-green hover:bg-amana-teal">
                Discover Strategies
              </Button>
            </Link>
          </div>
          <div className="mt-12">
            <div className="relative h-80 border-4 border-amana-gold rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-amana-charcoal/50 flex items-center justify-center">
                <button className="animate-pulse bg-amana-green rounded-full p-4">
                  <Play className="h-8 w-8 text-white" />
                </button>
              </div>
              {/* Placeholder for video */}
              {/* <video src="/videos/fund-overview.mp4" controls className="w-full h-full object-cover" /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section id="investment-strategies" className="amana-section bg-amana-soft-grey">
        <div className="amana-container">
          <h2 className="text-h2 font-playfair text-amana-charcoal mb-12 text-center">
            Investment Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {strategies.map((strategy, index) => (
              <div
                key={index}
                ref={strategiesRef}
                className={`amana-card bg-white transition-all duration-800 transform ${
                  strategiesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-amana-green p-4">
                  <h3 className="font-playfair text-xl text-white">{strategy.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{strategy.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-amana-gold font-montserrat font-bold">{counts[index].roi}%</p>
                      <p className="text-sm text-gray-500">Expected ROI</p>
                    </div>
                    <div>
                      <p className="text-amana-gold font-montserrat font-bold">{counts[index].projects}</p>
                      <p className="text-sm text-gray-500">Projects</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-amana-gold font-montserrat font-bold">{counts[index].investment}</p>
                      <p className="text-sm text-gray-500">Investment</p>
                    </div>
                  </div>
                  <Link
                    href="/fund"
                    className="inline-flex items-center text-amana-green hover:text-amana-teal mt-4"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Portal */}
      <section className="amana-section bg-amana-charcoal">
        <div className="amana-container">
          <div
            ref={portalRef}
            className={`text-center transition-all duration-800 transform ${
              portalInView ? "opacity-100" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-h2 font-playfair text-amana-gold mb-4">
              Investor Portal
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Manage your investments with our secure, user-friendly portal, designed for transparency and ease of use.
            </p>
            <div className="relative h-64 bg-amana-soft-grey rounded-lg mb-8">
              {/* Placeholder for portal mockup */}
            </div>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 bg-amana-green rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                  </svg>
                </div>
                <p className="text-gray-300 mt-2">Dashboard</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 bg-amana-green rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <p className="text-gray-300 mt-2">Reports</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 bg-amana-green rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <p className="text-gray-300 mt-2">Transactions</p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Link href="https://portal.amana-regenesis.com">
                <Button className="amana-btn-primary bg-amana-green hover:bg-amana-teal">
                  Login
                </Button>
              </Link>
              <Link href="/contact-investors">
                <Button className="amana-btn-secondary">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="amana-section bg-amana-soft-grey">
        <div className="amana-container">
          <h2 className="text-h2 font-playfair text-amana-charcoal mb-12 text-center">
            Performance
          </h2>
          <div
            ref={performanceRef}
            className={`transition-all duration-2000 ${
              performanceInView ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-64 bg-white rounded-lg mb-8">
              {/* Placeholder SVG graph */}
              <svg className="w-full h-full" viewBox="0 0 800 200">
                <polyline
                  fill="none"
                  stroke="#D4A017"
                  strokeWidth="4"
                  points="0,180 100,150 200,100 300,120 400,80 500,90 600,60 700,40 800,50"
                  className={performanceInView ? "animate-draw" : ""}
                />
                <polyline
                  fill="none"
                  stroke="#2E7D32"
                  strokeWidth="4"
                  points="0,170 100,140 200,90 300,110 400,70 500,80 600,50 700,30 800,40"
                  className={performanceInView ? "animate-draw" : ""}
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {performanceExamples.map((example, index) => (
              <div
                key={index}
                className={`amana-card bg-white transition-all duration-800 transform ${
                  performanceInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 bg-amana-soft-grey rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl text-amana-charcoal mb-2">{example.title}</h3>
                  <p className="text-gray-600">{example.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="/assets/ppm.pdf">
              <Button className="amana-btn-primary bg-amana-green hover:bg-amana-teal">
                Download PPM
              </Button>
            </Link>
            <Link href="#investment-strategies">
              <Button className="amana-btn-secondary">
                Explore More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Investors */}
      <section className="amana-section bg-amana-charcoal">
        <div className="amana-container">
          <div
            ref={contactRef}
            className={`transition-all duration-800 transform ${
              contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-h2 font-playfair text-amana-gold mb-8 text-center">
              Contact Our Investor Team
            </h2>
            <form
              action="/thank-you"
              className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-amana-charcoal font-montserrat mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded border border-amana-green focus:outline-none focus:ring-2 focus:ring-amana-teal"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-amana-charcoal font-montserrat mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded border border-amana-green focus:outline-none focus:ring-2 focus:ring-amana-teal"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-amana-charcoal font-montserrat mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 rounded border border-amana-green focus:outline-none focus:ring-2 focus:ring-amana-teal"
                  rows={4}
                  required
                ></textarea>
              </div>
              <Button
                type="submit"
                className="w-full amana-btn-primary bg-amana-green hover:bg-amana-teal"
              >
                Submit
              </Button>
            </form>
            <div className="fixed bottom-4 right-4">
              <button className="bg-amana-green text-white rounded-full p-4 animate-pulse">
                <MessageCircle className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 2s forwards;
        }
      `}</style>
    </div>
  );
}