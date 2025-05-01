"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the email to a newsletter service
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    // Reset form and submission state after 3 seconds
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="bg-amana-charcoal py-16">
      <div className="amana-container">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm p-8 sm:p-10 rounded-xl border border-amana-gold/30">
            <div className="w-16 h-16 bg-amana-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-amana-gold" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-playfair text-white mb-4">
              Stay Ahead with Amana Insights
            </h2>

            <p className="text-white/80 mb-8">
              Join our community for the latest updates on ethical real estate investments and project launches.
            </p>

            {isSubmitted ? (
              <div className="bg-amana-green/20 p-4 rounded-lg border border-amana-green/30">
                <p className="text-white font-medium">
                  Thank you for subscribing! We'll keep you updated.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-amana-gold"
                />
                <Button
                  type="submit"
                  className="bg-amana-gold hover:bg-amana-gold/90 text-amana-charcoal font-medium px-6"
                >
                  Subscribe
                </Button>
              </form>
            )}

            <p className="text-white/50 text-xs mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
