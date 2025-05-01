import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Users, Building, BarChart3, Coins } from "lucide-react";

export default function OurCompanies() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-amana-soft-grey overflow-hidden">
        <div className="absolute inset-0 w-full h-full islamic-pattern-overlay opacity-20"></div>
        <div className="amana-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-h1 font-playfair text-amana-charcoal mb-6">
              Our <span className="text-amana-green">Companies</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Amana Regenesis operates through two specialized entities, each with a distinct focus on Sharia-compliant real estate opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="amana-section">
        <div className="amana-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-h2 font-playfair text-amana-charcoal mb-6">
              A Holistic <span className="text-amana-green">Approach</span>
            </h2>
            <p className="text-gray-700 mb-4">
              Our dual-company structure allows us to provide comprehensive solutions in the Islamic real estate sector,
              serving both investors looking for ethical returns and end-users seeking Sharia-compliant properties.
            </p>
            <p className="text-gray-700">
              Both our companies operate under the same core principles of Sharia compliance, ethical business practices,
              and a commitment to creating value for all stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Amana Fund */}
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-amana-green text-white">
              {/* Islamic Pattern Background */}
              <div className="absolute inset-0 w-full h-full islamic-pattern-overlay opacity-10"></div>

              <div className="relative z-10 p-8 md:p-10">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Coins className="w-8 h-8 text-white" />
                </div>

                <span className="text-sm uppercase tracking-wider font-montserrat font-medium text-white/80">
                  For Investors
                </span>
                <h3 className="text-3xl font-playfair font-bold mt-2 mb-6">
                  Amana Fund
                </h3>

                <p className="text-white/90 mb-8">
                  Our investment platform provides Sharia-compliant opportunities for individuals and institutions
                  seeking ethical returns through real estate investments across high-growth markets.
                </p>

                <Link href="https://fund.amana-regenesis.com">
                  <Button className="bg-white hover:bg-amana-gold text-amana-charcoal hover:text-amana-charcoal transition-colors group">
                    Visit Fund Website
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Amana Developers */}
            <div className="relative overflow-hidden rounded-xl shadow-lg bg-amana-teal text-white">
              {/* Islamic Pattern Background */}
              <div className="absolute inset-0 w-full h-full islamic-pattern-overlay opacity-10"></div>

              <div className="relative z-10 p-8 md:p-10">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-white" />
                </div>

                <span className="text-sm uppercase tracking-wider font-montserrat font-medium text-white/80">
                  For Home Buyers
                </span>
                <h3 className="text-3xl font-playfair font-bold mt-2 mb-6">
                  Amana Developers
                </h3>

                <p className="text-white/90 mb-8">
                  Our development arm creates high-quality residential and commercial properties built on
                  ethical principles and Sharia-compliant financing options for end-users.
                </p>

                <Link href="https://developers.amana-regenesis.com">
                  <Button className="bg-white hover:bg-amana-gold text-amana-charcoal hover:text-amana-charcoal transition-colors group">
                    Visit Developers Website
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amana Fund Details */}
      <section className="amana-section bg-amana-soft-grey geometric-pattern">
        <div className="amana-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-amana-green text-white text-sm rounded font-montserrat font-medium mb-6">
                For Investors
              </span>
              <h2 className="text-h2 font-playfair text-amana-charcoal mb-6">
                Amana <span className="text-amana-green">Fund</span>
              </h2>

              <p className="text-gray-700 mb-6">
                Amana Fund provides a platform for investors to participate in Sharia-compliant real estate
                opportunities that deliver competitive returns while maintaining ethical integrity.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-amana-green mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    <strong>Diversified Portfolio:</strong> Access to a range of real estate assets across residential,
                    commercial, and mixed-use developments.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amana-green mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    <strong>Transparent Fee Structure:</strong> Clear, Sharia-compliant fee structures with no hidden charges.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amana-green mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    <strong>Regular Dividends:</strong> Consistent profit distributions through rental income and capital appreciation.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amana-green mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    <strong>Digital Portal:</strong> Advanced investor portal for real-time portfolio tracking and management.
                  </span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://fund.amana-regenesis.com">
                  <Button className="amana-btn-primary">
                    Explore Investment Opportunities
                  </Button>
                </Link>

                <Link href="https://fund.amana-regenesis.com/investor-portal">
                  <Button className="amana-btn-secondary">
                    Investor Portal
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Fund Stats */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-amana-green/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-amana-green" />
                </div>
                <h4 className="font-playfair text-xl text-amana-charcoal mb-1">
                  12.5%
                </h4>
                <p className="text-gray-600 text-sm">
                  Average Annual Return
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-amana-green/10 rounded-full flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-amana-green" />
                </div>
                <h4 className="font-playfair text-xl text-amana-charcoal mb-1">
                  18
                </h4>
                <p className="text-gray-600 text-sm">
                  Properties in Portfolio
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-amana-green/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-amana-green" />
                </div>
                <h4 className="font-playfair text-xl text-amana-charcoal mb-1">
                  350+
                </h4>
                <p className="text-gray-600 text-sm">
                  Active Investors
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-amana-green/10 rounded-full flex items-center justify-center mb-4">
                  <Coins className="w-6 h-6 text-amana-green" />
                </div>
                <h4 className="font-playfair text-xl text-amana-charcoal mb-1">
                  $85M
                </h4>
                <p className="text-gray-600 text-sm">
                  Assets Under Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amana Developers Details */}
      <section className="amana-section">
        <div className="amana-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-[500px] bg-white rounded-lg shadow-md overflow-hidden">
                {/* In a real implementation, this would be a gallery of property images */}
                <div className="absolute inset-0 bg-amana-charcoal/5 flex items-center justify-center">
                  <span className="text-amana-teal text-lg font-medium">Property Showcase Gallery</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 bg-amana-teal text-white text-sm rounded font-montserrat font-medium mb-6">
                For Home Buyers
              </span>
              <h2 className="text-h2 font-playfair text-amana-charcoal mb-6">
                Amana <span className="text-amana-teal">Developers</span>
              </h2>

              <p className="text-gray-700 mb-6">
                Amana Developers creates premium residential and commercial properties with a focus on
                quality, sustainability, and ethical financing options for home buyers and businesses.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-amana-teal mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    <strong>Sharia-Compliant Purchase Plans:</strong> Ethical financing options without riba (interest).
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amana-teal mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    <strong>Premium Locations:</strong> Strategically located properties in high-growth areas.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amana-teal mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    <strong>Sustainable Construction:</strong> Eco-friendly building practices and materials.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amana-teal mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    <strong>Community-Focused:</strong> Developments designed to enhance quality of life with amenities.
                  </span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://developers.amana-regenesis.com">
                  <Button className="amana-btn-primary">
                    Browse Available Properties
                  </Button>
                </Link>

                <Link href="https://developers.amana-regenesis.com/sales-process">
                  <Button className="amana-btn-secondary">
                    Sales Process
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="amana-section bg-gradient-to-r from-amana-charcoal to-amana-teal text-white">
        <div className="amana-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-h2 font-playfair mb-6">
              Ready to Engage with <span className="text-amana-gold">Amana Regenesis</span>?
            </h2>
            <p className="mb-8">
              Whether you're looking to invest in our Sharia-compliant opportunities or purchase
              a property with ethical financing, we're here to assist you at every step.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://fund.amana-regenesis.com">
                <Button className="amana-btn-secondary bg-transparent border-amana-gold text-white hover:text-amana-charcoal px-8 py-6">
                  Invest with Fund
                </Button>
              </Link>

              <Link href="https://developers.amana-regenesis.com">
                <Button className="amana-btn-secondary bg-transparent border-amana-gold text-white hover:text-amana-charcoal px-8 py-6">
                  Explore Properties
                </Button>
              </Link>

              <Link href="/contact-us">
                <Button className="amana-btn-primary px-8 py-6">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
