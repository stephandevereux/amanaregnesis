import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Amana Regenesis",
  description: "How we collect, use, and protect your data in compliance with India's DPDP Act and Islamic ethics",
};

export default function PrivacyPolicy() {
  return (
    <section className="amana-section geometric-pattern">
      <div className="amana-container max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-amana-green">Privacy Commitment</h1>
          <p className="text-amana-charcoal/90 mt-4 max-w-2xl mx-auto">
            At Amana Regenesis, we guard your data with the same ethical rigor we apply to our investments
          </p>
          <div className="mt-6 text-sm text-amana-charcoal/80">
            Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-sm border border-amana-gold/20 p-8 md:p-12">
          <div className="prose prose-amana max-w-none">
            {/* Data Collection Section */}
            <section className="mb-16">
              <h2 className="text-amana-green border-b border-amana-gold/30 pb-2">1. Data We Collect</h2>
              <div className="amana-grid-2 gap-8 mt-6">
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <h3 className="text-amana-teal mb-3">Direct Interactions</h3>
                  <ul className="space-y-2">
                    <li>KYC documents (PAN, Aadhaar, Passport)</li>
                    <li>Investment preferences and limits</li>
                    <li>Bank account details for profit distribution</li>
                  </ul>
                </div>
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <h3 className="text-amana-teal mb-3">Automated Collection</h3>
                  <ul className="space-y-2">
                    <li>Device information (IP, browser type)</li>
                    <li>Website usage via Google Analytics</li>
                    <li>Blockchain wallet addresses</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-sm text-amana-charcoal/80">
                We never collect biometric data or caste/religious information
              </p>
            </section>

            {/* Data Usage Section */}
            <section className="mb-16">
              <h2 className="text-amana-green border-b border-amana-gold/30 pb-2">2. Ethical Data Usage</h2>
              <div className="amana-grid-2 gap-8 mt-6">
                <div className="bg-amana-soft-grey p-6 rounded-lg">
                  <h3 className="text-amana-teal">Sharia-Compliant Purposes</h3>
                  <ul className="mt-3 space-y-3">
                    <li>Musharakah partnership management</li>
                    <li>Zakat calculation & distribution</li>
                    <li>Investor profit distribution</li>
                  </ul>
                </div>
                <div className="bg-amana-soft-grey p-6 rounded-lg">
                  <h3 className="text-amana-teal">Legal Compliance</h3>
                  <ul className="mt-3 space-y-3">
                    <li>SEBI reporting requirements</li>
                    <li>RBI anti-money laundering checks</li>
                    <li>GST/TDS calculations</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 p-6 border-l-4 border-amana-gold bg-amana-soft-grey">
                <h4 className="text-amana-green">Our Ethical Firewall</h4>
                <p className="mt-2">
                  We automatically reject data requests from industries involving:
                  <span className="block mt-2 text-amana-teal">
                    Alcohol • Gambling • Adult Entertainment • Interest-Based Finance
                  </span>
                </p>
              </div>
            </section>

            {/* Security Section */}
            <section className="mb-16">
              <h2 className="text-amana-green border-b border-amana-gold/30 pb-2">3. Protecting Your Data</h2>
              <div className="amana-grid-2 gap-8 mt-6">
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-amana-green/10 p-2 rounded-full">
                      <svg className="w-6 h-6 text-amana-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-amana-teal">Technical Safeguards</h3>
                      <ul className="mt-2 space-y-2">
                        <li>AES-256 encryption for data at rest</li>
                        <li>SSL/TLS 1.3 for data in transit</li>
                        <li>Blockchain-based audit trails</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-amana-green/10 p-2 rounded-full">
                      <svg className="w-6 h-6 text-amana-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-amana-teal">Organizational Measures</h3>
                      <ul className="mt-2 space-y-2">
                        <li>Quarterly Sharia compliance audits</li>
                        <li>DPO: dpo@amana-regenesis.com</li>
                        <li>Staff training on Islamic data ethics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights Section */}
            <section className="mb-16">
              <h2 className="text-amana-green border-b border-amana-gold/30 pb-2">4. Your Data Rights</h2>
              <div className="amana-grid-3 gap-6 mt-8">
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <h3 className="text-amana-teal">Access & Correction</h3>
                  <p className="mt-2 text-sm">
                    Review and update your information through our investor portal
                  </p>
                </div>
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <h3 className="text-amana-teal">Deletion Rights</h3>
                  <p className="mt-2 text-sm">
                    Request data erasure post-investment closure
                  </p>
                </div>
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <h3 className="text-amana-teal">Grievance Redressal</h3>
                  <p className="mt-2 text-sm">
                    72-hour response guarantee via <Link href="/contact-us" className="text-amana-green hover:underline">contact form</Link>
                  </p>
                </div>
              </div>
              <div className="mt-8 p-6 bg-amana-soft-grey rounded-lg">
                <h3 className="text-amana-green">DPDP Act Compliance</h3>
                <p className="mt-2">
                  We adhere to India's Digital Personal Data Protection Act 2023 requirements for:
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Data minimization</li>
                    <li>Storage limitation</li>
                    <li>Breach notification within 72 hours</li>
                  </ul>
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section className="text-center border-t border-amana-gold/20 pt-8">
              <h2 className="text-amana-green">Need Clarification?</h2>
              <div className="amana-grid-2 gap-4 mt-6 max-w-md mx-auto">
                <Link href="/contact-us" className="amana-btn-primary">
                  Contact DPO
                </Link>
                <Link href="/sharia-commitment" className="amana-btn-secondary">
                  Ethics Charter
                </Link>
              </div>
              <p className="mt-6 text-sm text-amana-charcoal/80">
                Physical Address: <br/>
                Amana Regenesis Pvt. Ltd., <br/>
                Navi Mumbai, Maharashtra - 400706
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}