import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investment Disclaimer | Amana Regenesis",
  description: "Important risk disclosures for Sharia-compliant real estate investments",
};

export default function Disclaimer() {
  return (
    <section className="amana-section bg-amana-soft-grey geometric-pattern">
      <div className="amana-container max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-amana-green">Investment Risk Disclosure</h1>
          <p className="text-amana-charcoal/90 mt-4 max-w-2xl mx-auto">
            Essential information for informed decision-making in Sharia-compliant real estate
          </p>
        </header>

        <div className="bg-white rounded-xl shadow-sm border border-amana-gold/20 p-8 md:p-12">
          {/* Critical Warning */}
          <div className="p-6 mb-10 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
            <h3 className="text-red-600 font-playfair text-xl mb-3">Essential Risk Notice</h3>
            <p className="text-amana-charcoal/90">
              Real estate investments carry inherent risks. Capital is at risk. Past performance ≠ future results. 
              <span className="block mt-2 font-medium">Not FDIC Insured • No Bank Guarantee • May Lose Value</span>
            </p>
          </div>

          {/* Risk Factors */}
          <section className="mb-12">
            <h2 className="text-amana-green border-b border-amana-gold/30 pb-2">Key Risk Factors</h2>
            <div className="amana-grid-2 gap-8 mt-8">
              <div className="border border-amana-gold/20 p-6 rounded-lg">
                <h3 className="text-amana-teal mb-3">Market Risks</h3>
                <ul className="space-y-2">
                  <li>Navi Mumbai property price fluctuations</li>
                  <li>Infrastructure project delays</li>
                  <li>Regulatory changes in SEZ policies</li>
                  <li>See <Link href="/news-insights" className="text-amana-green hover:underline">market analysis</Link></li>
                </ul>
              </div>
              <div className="border border-amana-gold/20 p-6 rounded-lg">
                <h3 className="text-amana-teal mb-3">Fund-Specific Risks</h3>
                <ul className="space-y-2">
                  <li>3-year lock-in period (SEBI AIF Cat-II)</li>
                  <li>Development project execution risk</li>
                  <li>Rental income volatility</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sharia Compliance Section */}
          <section className="mb-12">
            <h2 className="text-amana-green border-b border-amana-gold/30 pb-2">Sharia Considerations</h2>
            <div className="amana-grid-2 gap-8 mt-8">
              <div className="bg-amana-soft-grey p-6 rounded-lg">
                <h3 className="text-amana-teal">Certification Scope</h3>
                <p className="mt-2 text-sm">
                  Our Sharia compliance certification covers investment structures, not project outcomes. 
                  <span className="block mt-2 text-amana-green">
                    <Link href="/sharia-commitment" className="hover:underline">
                      Review certification parameters
                    </Link>
                  </span>
                </p>
              </div>
              <div className="bg-amana-soft-grey p-6 rounded-lg">
                <h3 className="text-amana-teal">Income Purification</h3>
                <ul className="mt-2 text-sm space-y-2">
                  <li>Annual purification at 1.5% of NAV</li>
                  <li>Charities pre-approved by Sharia Board</li>
                  <li>Zakat responsibility remains with investor</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Regulatory Compliance */}
          <section className="mb-12">
            <h2 className="text-amana-green border-b border-amana-gold/30 pb-2">Regulatory Status</h2>
            <div className="overflow-x-auto mt-8">
              <table className="w-full border border-amana-gold/20">
                <thead>
                  <tr className="bg-amana-gold/10">
                    <th className="p-4 text-left">Registration</th>
                    <th className="p-4 text-left">Number</th>
                    <th className="p-4 text-left">Authority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-amana-gold/10">
                    <td className="p-4">SEBI AIF Category II</td>
                    <td className="p-4">IN/AIF/123456/2024</td>
                    <td className="p-4">SEBI</td>
                  </tr>
                  <tr className="border-b border-amana-gold/10">
                    <td className="p-4">GST Registration</td>
                    <td className="p-4">27ABCDE1234F2Z5</td>
                    <td className="p-4">Maharashtra GST</td>
                  </tr>
                  <tr>
                    <td className="p-4">Sharia Certification</td>
                    <td className="p-4">SC-ARPL/2024/009</td>
                    <td className="p-4">Internal Sharia Board</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Contact Section */}
          <section className="border-t border-amana-gold/20 pt-10">
            <h2 className="text-amana-green mb-6">Investor Support</h2>
            <div className="amana-grid-2 gap-8">
              <div className="border border-amana-gold/20 p-6 rounded-lg">
                <h3 className="text-amana-teal mb-3">Compliance Team</h3>
                <ul className="space-y-2">
                  <li>Email: <a href="mailto:compliance@amana-regenesis.com" className="text-amana-green hover:underline">compliance@amana-regenesis.com</a></li>
                  <li>Phone: <a href="tel:+918369426568" className="text-amana-green hover:underline">+91 836 942 6568</a></li>
                  <li>Hours: 10 AM - 6 PM IST (Mon-Fri)</li>
                </ul>
              </div>
              <div className="border border-amana-gold/20 p-6 rounded-lg">
                <h3 className="text-amana-teal mb-3">Documentation</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/fund" className="text-amana-green hover:underline">
                      Private Placement Memorandum
                    </Link>
                  </li>
                  <li>
                    <Link href="/sharia-commitment" className="text-amana-green hover:underline">
                      Sharia Compliance Certificate
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-center text-sm text-amana-charcoal/80">
              Physical Verification: Plot No. 12, Sector 30A, Navi Mumbai - 400706
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}