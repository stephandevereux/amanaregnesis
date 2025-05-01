"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ValueCard = ({ title, description, icon, delay }: ValueCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setIsVisible(true);
      }, delay);
    }
  }, [inView, delay]);

  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-amana-gold
      transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div className="flex items-start">
        <div className="mr-4 text-amana-green">{icon}</div>
        <div>
          <h3 className="font-playfair text-xl text-amana-charcoal mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="amana-section bg-amana-soft-grey geometric-pattern">
      <div className="amana-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div
            ref={ref}
            className={`transition-all duration-1000 transform ${
              inView ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <h2 className="text-h2 font-playfair text-amana-charcoal mb-6">
              Building a <span className="text-amana-green">Legacy</span> of Trust and Innovation
            </h2>

            <p className="text-gray-700 mb-6">
              At Amana Regenesis Pvt. Ltd., we're more than a real estate company—we're a movement. Founded on the
              principles of trust, transparency, and ethical prosperity, we oversee a unique ecosystem that combines
              the Amana Islamic Real Estate Fund and Amana Developers Pvt. Ltd.
            </p>

            <p className="text-gray-700 mb-6">
              Our goal? To redefine real estate in India by offering Sharia-compliant investment opportunities and
              delivering world-class properties in high-growth regions like Navi Mumbai. With a commitment to Islamic
              finance and cutting-edge technology, we're crafting a future where wealth and values grow together.
            </p>

            <div className="mb-8">
              <h3 className="text-h3 font-playfair text-amana-green mb-3">Our Vision</h3>
              <p className="text-gray-700 mb-6">
                To create sustainable wealth and thriving communities through Sharia-compliant real estate innovation,
                ensuring every investment honors faith and fosters progress.
              </p>

              <h3 className="text-h3 font-playfair text-amana-green mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To deliver exceptional real estate projects and ethical investment opportunities, leveraging advanced
                technology like AI and blockchain to ensure transparency, safety, and quality for investors and residents alike.
              </p>
            </div>

            <Link href="/about-us">
              <Button className="amana-btn-primary">
                Explore Our Story
              </Button>
            </Link>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            <ValueCard
              title="Ethical Investment"
              description="We adhere to Islamic finance principles, avoiding interest-based transactions and focusing on real asset-backed opportunities."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z" />
                  <path d="M12 8v8" />
                  <path d="M8 12h8" />
                </svg>
              }
              delay={100}
            />

            <ValueCard
              title="Innovation"
              description="We leverage modern technology and investment strategies within the framework of Sharia principles to maximize returns."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              }
              delay={300}
            />

            <ValueCard
              title="Transparency"
              description="We maintain complete transparency in all our operations, ensuring investors understand exactly how their money is being utilized."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polygon points="21 15 16 10 5 21" />
                </svg>
              }
              delay={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
