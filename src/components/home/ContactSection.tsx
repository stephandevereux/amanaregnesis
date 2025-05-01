"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "investor",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to the server
    console.log("Form submitted:", formData);
    // Reset form or show success message
  };

  return (
    <section className="amana-section">
      <div className="amana-container">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-h2 font-playfair text-amana-charcoal mb-4">
              Let's Build <span className="text-amana-green">Together</span>
            </h2>
            <p className="text-gray-600">
              Whether you're an investor seeking ethical opportunities or a buyer exploring our Navi Mumbai projects,
              we're here to assist. Contact us today to start your journey with Amana Regenesis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Map and Contact Info */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                {/* Map would go here in a real implementation */}
                <div className="h-64 bg-amana-soft-grey relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-amana-green" />
                    <span className="sr-only">Navi Mumbai Office Location</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amana-green/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-amana-green" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg text-amana-charcoal mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      World Trade Center, Navi Mumbai<br />
                      Maharashtra, India 400705
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amana-green/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-amana-green" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg text-amana-charcoal mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      <Link href="tel:+912255551234" className="hover:text-amana-green">
                        +91-22-XXXX-XXXX
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amana-green/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-amana-green" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg text-amana-charcoal mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      <Link href="mailto:info@amana-regenesis.com" className="hover:text-amana-green">
                        info@amana-regenesis.com
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-md p-8 border border-gray-100"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="amana-form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="amana-form-input"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="amana-form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="amana-form-input"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="amana-form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="amana-form-input"
                      placeholder="+91 (XXX) XXX-XXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="amana-form-label">
                      I am interested in
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="amana-form-input"
                      required
                    >
                      <option value="investor">Investing with Amana Fund</option>
                      <option value="buyer">Buying Property from Amana Developers</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="amana-form-label">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="amana-form-input min-h-[120px]"
                    placeholder="How can we assist you?"
                    required
                  ></textarea>
                </div>

                <Button type="submit" className="amana-btn-primary w-full group">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  By submitting this form, you agree to our{" "}
                  <Link href="/privacy-policy" className="text-amana-green hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
