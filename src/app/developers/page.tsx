"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, MapPin, MessageSquare } from "lucide-react";

// Sample project data
const projects = [
  {
    title: "Kharghar Residential",
    description: "A luxurious residential complex with sustainable amenities in the heart of Navi Mumbai.",
    imageUrl: "/assets/kharghar-residential.jpg",
    slug: "kharghar-residential",
  },
  {
    title: "Taloja Affordable Housing",
    description: "Affordable, eco-friendly homes designed for modern families in a growing neighborhood.",
    imageUrl: "/assets/taloja-affordable-housing.jpg",
    slug: "taloja-affordable-housing",
  },
];

// Sample project features
const features = [
  {
    title: "Sustainable Design",
    description: "Energy-efficient buildings with solar panels and rainwater harvesting.",
  },
  {
    title: "Modern Amenities",
    description: "Gym, pool, and community spaces for a premium lifestyle.",
  },
  {
    title: "Strategic Location",
    description: "Close to metro stations and the upcoming Navi Mumbai airport.",
  },
];

// Sample gallery images
const galleryImages = [
  { url: "/assets/project1.jpg", caption: "Kharghar Skyline View" },
  { url: "/assets/project2.jpg", caption: "Taloja Green Spaces" },
  { url: "/assets/project3.jpg", caption: "Modern Interiors" },
  { url: "/assets/project4.jpg", caption: "Community Pool" },
];

export default function DevelopersPage() {
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: detailsRef, inView: detailsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: salesRef, inView: salesInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: galleryRef, inView: galleryInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Collapsible state for project details
  const [openFeature, setOpenFeature] = useState<number | null>(null);

  // Carousel auto-scroll
  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-amana-charcoal text-white">
      {/* Our Projects */}
      <section className="amana-section geometric-pattern bg-amana-charcoal">
        <div className="amana-container">
          <h1 className="text-h1 font-playfair text-amana-gold mb-12 text-center">
            Our Projects
          </h1>
          <div
            ref={projectsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className={`amana-card border-2 border-amana-green bg-white text-amana-charcoal transform hover:scale-105 transition-transform duration-300 ${
                  projectsInView ? "opacity-100" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 bg-amana-soft-grey rounded-t-lg"></div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    href={`/${project.slug}`}
                    className="inline-flex items-center text-amana-green hover:text-amana-teal"
                  >
                    Explore Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-64 bg-amana-soft-grey rounded-lg">
            {/* Placeholder SVG map */}
            <svg className="w-full h-full" viewBox="0 0 800 200">
              <rect x="0" y="0" width="800" height="200" fill="#E0E0E0" />
              <circle cx="200" cy="100" r="10" fill="#D4A017" className="animate-pulse" />
              <circle cx="600" cy="120" r="10" fill="#D4A017" className="animate-pulse" />
            </svg>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="amana-section bg-amana-soft-grey">
        <div className="amana-container">
          <h2 className="text-h2 font-playfair text-amana-charcoal mb-12 text-center">
            Project Details
          </h2>
          <div ref={detailsRef}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`mb-4 transition-all duration-500 ${
                  detailsInView ? "opacity-100" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <button
                  className="w-full bg-amana-green text-white p-4 rounded-t-lg flex justify-between items-center"
                  onClick={() => setOpenFeature(openFeature === index ? null : index)}
                >
                  <h3 className="font-playfair text-lg">{feature.title}</h3>
                  <ChevronDown
                    className={`h-6 w-6 transform transition-transform ${
                      openFeature === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openFeature === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-4 bg-white rounded-b-lg">
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`mt-12 transition-all duration-800 ${
              detailsInView ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative h-96 border-4 border-amana-gold rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-amana-charcoal/50 flex items-center justify-center">
                <Link
                  href="https://my.matterport.com/show/?m=123"
                  className="bg-amana-green text-white px-6 py-3 rounded flex items-center"
                >
                  Launch VR Tour
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              {/* Placeholder for VR tour */}
              {/* <iframe src="https://my.matterport.com/show/?m=123" className="w-full h-full" /> */}
            </div>
            <div className="text-center mt-4">
              <Link
                href="/sales-process"
                className="inline-flex items-center text-amana-green hover:text-amana-teal"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Process */}
      <section id="sales-process" className="amana-section bg-amana-charcoal">
        <div className="amana-container">
          <h2 className="text-h2 font-playfair text-amana-gold mb-12 text-center">
            Sales Process
          </h2>
          <div
            ref={salesRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <div>
              <ol className="space-y-6">
                {[
                  { step: "Inquiry", description: "Contact us to learn about available properties." },
                  { step: "Site Visit", description: "Schedule a visit to explore the project in person." },
                  { step: "Booking", description: "Secure your unit with a booking request." },
                ].map((step, index) => (
                  <li
                    key={index}
                    className={`flex items-start transition-all duration-500 ${
                      salesInView ? "opacity-100" : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="bg-amana-gold text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-playfair text-lg text-white">{step.step}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <form action="/thank-you" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-montserrat mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded border border-amana-green focus:outline-none focus:ring-2 focus:ring-amana-teal"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-montserrat mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded border border-amana-green focus:outline-none focus:ring-2 focus:ring-amana-teal"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full amana-btn-primary bg-amana-green hover:bg-amana-teal"
                >
                  Submit Booking Request
                </Button>
              </form>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-amana-charcoal font-montserrat mb-2">Schedule a Visit</p>
                <div className="h-48 bg-amana-soft-grey rounded"></div>
                <Link href="/confirmation">
                  <Button className="w-full amana-btn-secondary mt-4">
                    Schedule Visit
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="amana-section bg-amana-soft-grey">
        <div className="amana-container">
          <h2 className="text-h2 font-playfair text-amana-charcoal mb-12 text-center">
            Gallery
          </h2>
          <div
            ref={galleryRef}
            className="relative h-64 mb-12 overflow-hidden"
          >
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="min-w-full h-64 bg-amana-soft-grey flex items-center justify-center">
                  <p className="text-gray-600">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
                  galleryInView ? "opacity-100" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="h-48 bg-amana-soft-grey"></div>
                <div className="absolute inset-0 bg-amana-charcoal/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-amana-green text-center">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="https://my.matterport.com/show/?m=123">
              <Button className="amana-btn-primary bg-amana-green hover:bg-amana-teal">
                Immerse in VR
              </Button>
            </Link>
            <Link href="#our-projects">
              <Button className="amana-btn-secondary">
                See More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Buyers */}
      <section className="amana-section bg-amana-charcoal">
        <div className="amana-container">
          <div
            ref={contactRef}
            className={`transition-all duration-800 transform ${
              contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-h2 font-playfair text-amana-gold mb-8 text-center">
              Contact Our Buyer Team
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
                className="w-full amana-btn-primary bg-amana-gold hover:bg-amana-teal"
              >
                Submit
              </Button>
            </form>
            <div className="fixed bottom-4 right-4">
              <Link href="https://wa.me/12025551234">
                <button className="bg-amana-green text-white rounded-full p-4 animate-pulse">
                  <MessageSquare className="h-6 w-6" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}