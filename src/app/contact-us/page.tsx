"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, MessageCircle, Users, Building } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to the server
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    // Show success message temporarily
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-amana-soft-grey overflow-hidden">
        <div className="absolute inset-0 w-full h-full islamic-pattern-overlay opacity-20"></div>
        <div className="amana-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-h1 font-playfair text-amana-charcoal mb-6">
              Contact <span className="text-amana-green">Us</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Have questions about our Sharia-compliant real estate opportunities?
              Reach out to our team for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="amana-section">
        <div className="amana-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amana-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-amana-green" />
              </div>
              <h3 className="font-playfair text-xl text-amana-charcoal mb-3">Our Locations</h3>
              <p className="text-gray-700 mb-2">
                <strong>Headquarters:</strong><br />
                World Trade Center, Navi Mumbai<br />
                Maharashtra, India 400705
              </p>
              <p className="text-gray-700">
                <strong>Regional Office:</strong><br />
                Sheikh Zayed Road<br />
                Dubai, UAE
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amana-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-amana-green" />
              </div>
              <h3 className="font-playfair text-xl text-amana-charcoal mb-3">Call Us</h3>
              <p className="text-gray-700 mb-2">
                <strong>Customer Support:</strong><br />
                <a href="tel:+919082388584" className="text-amana-green hover:underline">+91 908 238 8584</a>
              </p>
              <p className="text-gray-700">
                <strong>Investor Relations:</strong><br />
                <a href="tel:+918369426568" className="text-amana-green hover:underline">+91 836 942 6568</a>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amana-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-amana-green" />
              </div>
              <h3 className="font-playfair text-xl text-amana-charcoal mb-3">Email Us</h3>
              <p className="text-gray-700 mb-2">
                <strong>General Inquiries:</strong><br />
                <a href="mailto:info@amana-regenesis.com" className="text-amana-green hover:underline">theamanaregenesis@gmail.com</a>
              </p>
              <p className="text-gray-700">
                <strong>Investor Relations:</strong><br />
                <a href="mailto:investors@amana-regenesis.com" className="text-amana-green hover:underline">investors@amana-regenesis.com</a>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Map */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                {/* Map would go here in a real implementation */}
                <div className="h-[400px] bg-amana-soft-grey relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-8 w-8 text-amana-green mx-auto mb-3" />
                      <span className="text-amana-charcoal font-medium">Interactive Map</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amana-green rounded-lg p-8 text-white">
                <h3 className="font-playfair text-xl mb-4">Connect With Us</h3>
                <p className="mb-6">
                  Follow us on social media for the latest updates on our projects, investment opportunities,
                  and insights on Sharia-compliant real estate.
                </p>
                <div className="flex justify-center space-x-6">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
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
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
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
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
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
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="font-playfair text-2xl text-amana-charcoal mb-6">Send Us a Message</h2>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                        className="text-green-600"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-600">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
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
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="amana-form-label">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="amana-form-input"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="investment">Investment Inquiry</option>
                          <option value="property">Property Purchase</option>
                          <option value="partnership">Business Partnership</option>
                          <option value="careers">Careers</option>
                          <option value="other">Other</option>
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
                        className="amana-form-input min-h-[150px]"
                        placeholder="How can we assist you?"
                        required
                      ></textarea>
                    </div>

                    <Button type="submit" className="amana-btn-primary w-full">
                      Send Message
                    </Button>

                    <p className="text-xs text-gray-500 mt-4 text-center">
                      By submitting this form, you agree to our{" "}
                      <a href="/privacy-policy" className="text-amana-green hover:underline">
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="amana-section bg-amana-soft-grey geometric-pattern">
        <div className="amana-container">
          <h2 className="font-playfair text-2xl text-amana-charcoal mb-10 text-center">
            How Can We Help You?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="/fund"
              className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-amana-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amana-green" />
              </div>
              <h3 className="font-playfair text-xl text-amana-charcoal mb-2">Funds</h3>
              <p className="text-gray-600">
                Access your investment dashboard, view returns, and manage your portfolio.
              </p>
            </a>

            <a
              href="/developers"
              className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-amana-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-amana-green" />
              </div>
              <h3 className="font-playfair text-xl text-amana-charcoal mb-2">Developers</h3>
              <p className="text-gray-600">
                Explore our developments, virtual tours, and available properties.
              </p>
            </a>

            <a
              href="/faq"
              className="block bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-amana-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-amana-green" />
              </div>
              <h3 className="font-playfair text-xl text-amana-charcoal mb-2">FAQ</h3>
              <p className="text-gray-600">
                Find answers to frequently asked questions about our services.
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
