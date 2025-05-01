import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Users, Building } from "lucide-react";

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: "Sohail Ansari",
    title: "Chief Executive Officer",
    bio: "With a passion for ethical innovation, Sohail leads Amana Regenesis to new heights in Sharia-compliant real estate development across India.",
    imageUrl: "/img.jpeg",
  },
  {
    id: 2,
    name: "Fatima Rahman",
    title: "Chief Investment Officer",
    bio: "Guiding our fund with precision, Fatima ensures every rupee aligns with your values and goals while maximizing returns.",
    imageUrl: "https://same-assets.com/images/cio-placeholder",
  },
  {
    id: 3,
    name: "Dr. Yusuf Patel",
    title: "Chief Sharia Compliance Officer",
    bio: "A renowned scholar in Islamic finance, Dr. Patel ensures all our operations maintain strict adherence to Sharia principles.",
    imageUrl: "https://same-assets.com/images/compliance-placeholder",
  },
  {
    id: 4,
    name: "Priya Mehta",
    title: "Head of Development",
    bio: "Overseeing projects that blend safety, sustainability, and quality in Navi Mumbai, Priya brings modern development practices to our properties.",
    imageUrl: "https://same-assets.com/images/dev-placeholder",
  },
];

export default function AboutUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-amana-soft-grey overflow-hidden">
        <div className="absolute inset-0 w-full h-full islamic-pattern-overlay opacity-20"></div>
        <div className="amana-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-h1 font-playfair text-amana-charcoal mb-6">
              Building a <span className="text-amana-green">Legacy</span> of Trust and Innovation
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Pioneering Sharia-compliant real estate investment and development across high-growth markets,
              with a commitment to ethical excellence and sustainable returns.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="amana-section">
        <div className="amana-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 font-playfair text-amana-charcoal mb-6">
                Our <span className="text-amana-green">Story</span>
              </h2>

              <p className="text-gray-700 mb-6">
                At Amana Regenesis Pvt. Ltd., we're more than a real estate company—we're a movement. Founded on the
                principles of trust, transparency, and ethical prosperity, we oversee a unique ecosystem that combines
                the Amana Islamic Real Estate Fund and Amana Developers Pvt. Ltd.
              </p>

              <p className="text-gray-700 mb-6">
                Founded in 2020, Amana Regenesis emerged from a vision to transform how Islamic investors
                participate in the growing real estate markets of South Asia. Our founders recognized a gap
                in the market for truly Sharia-compliant real estate opportunities that didn't compromise on returns.
              </p>

              <p className="text-gray-700 mb-6">
                Starting with a single development project in Navi Mumbai, we quickly expanded our portfolio
                to include multiple residential and commercial properties across major growth centers in India.
                In 2022, we launched our dedicated investment fund to allow a broader range of investors to
                participate in our success.
              </p>

              <p className="text-gray-700">
                Today, Amana Regenesis stands as a testament to the viability of ethical investment models
                in modern real estate markets, proving that adherence to Sharia principles and competitive
                returns can go hand in hand.
              </p>
            </div>

            <div className="relative h-[450px] bg-amana-charcoal/5 rounded-lg overflow-hidden">
              {/* In a real implementation, this would be an actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-16 h-16 text-amana-green mb-4" />
                  <span className="text-amana-green text-lg font-medium">Company Timeline Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="amana-section bg-gradient-to-r from-amana-charcoal to-amana-teal text-white">
        <div className="amana-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-h2 font-playfair mb-6">
              Our <span className="text-amana-gold">Values</span>
            </h2>
            <p>
              Our business is built on a foundation of Islamic principles and ethical standards that guide
              every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="font-playfair text-xl text-amana-gold mb-4">Integrity</h3>
              <p className="text-white/80">
                We conduct all business with complete transparency and honesty, ensuring that our
                actions always align with our words and Islamic ethical standards.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="font-playfair text-xl text-amana-gold mb-4">Excellence</h3>
              <p className="text-white/80">
                We strive for perfection in every aspect of our operations, from investment analysis
                to property development and customer service.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="font-playfair text-xl text-amana-gold mb-4">Community</h3>
              <p className="text-white/80">
                We believe in creating developments that enhance the communities they are part of,
                contributing positively to social well-being and local economies.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <h3 className="font-playfair text-xl text-amana-gold mb-4">Sustainability</h3>
              <p className="text-white/80">
                Our commitment to environmental stewardship means we incorporate sustainable practices
                in all our developments, minimizing ecological impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="amana-section bg-amana-soft-grey geometric-pattern">
        <div className="amana-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-amana-green/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-amana-green" />
                </div>
                <h3 className="font-playfair text-2xl text-amana-charcoal mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To create sustainable wealth and thriving communities through Sharia-compliant real estate innovation,
                  ensuring every investment honors faith and fosters progress.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-amana-green/10 rounded-full flex items-center justify-center mb-6">
                  <Building className="w-8 h-8 text-amana-green" />
                </div>
                <h3 className="font-playfair text-2xl text-amana-charcoal mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To deliver exceptional real estate projects and ethical investment opportunities, leveraging advanced
                  technology like AI and blockchain to ensure transparency, safety, and quality for investors and residents alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="amana-section">
        <div className="amana-container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-h2 font-playfair text-amana-charcoal mb-4">
              Our <span className="text-amana-green">Leadership</span>
            </h2>
            <p className="text-gray-600">
              Our diverse team combines expertise in Islamic finance, real estate development,
              and technology to drive Amana Regenesis forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="amana-card">
                <div className="h-64 bg-amana-soft-grey relative">
                  {/* In a real implementation, this would be an actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Users className="w-10 h-10 text-amana-green mb-2" />
                      <span className="text-amana-green font-medium">Team Member Photo</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl text-amana-charcoal mb-1">{member.name}</h3>
                  <p className="text-amana-green font-montserrat text-sm font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/contact-us">
              <Button className="amana-btn-primary">
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
