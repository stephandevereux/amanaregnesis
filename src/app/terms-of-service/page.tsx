import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Amana Regenesis",
  description: "Legal terms governing our Sharia-compliant investment platform and property transactions",
};

export default function TermsOfService() {
  return (
    <section className="amana-section geometric-pattern">
      <div className="amana-container max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-amana-green">Terms of Ethical Engagement</h1>
          <p className="text-amana-charcoal/90 mt-4 max-w-2xl mx-auto">
            Governing your participation in our Sharia-compliant real estate ecosystem
          </p>
          <div className="mt-6 text-sm text-amana-charcoal/80">
            Effective: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-sm border border-amana-gold/20 p-8 md:p-12">
          <div className="prose prose-amana max-w-none">
            {/* Islamic Finance Section */}
            <section className="mb-16">
              <h2 className="text-amana-green border-b border-amana-gold/30 pb-2">1. Islamic Finance Framework</h2>
              <div className="amana-grid-2 gap-8 mt-8">
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <h3 className="text-amana-teal mb-3">Musharakah (Partnership)</h3>
                  <ul className="space-y-2">
                    <li>Minimum 2 partners required</li>
                    <li>Profit sharing ratio fixed upfront</li>
                    <li>Losses proportional to capital contribution</li>
                  </ul>
                </div>
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <h3 className="text-amana-teal mb-3">Mudarabah (Profit Sharing)</h3>
                  <ul className="space-y-2">
                    <li>Investor provides 100% capital</li>
                    <li>Developer provides expertise</li>
                    <li>Profit split: 70% investor / 30% developer</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 p-6 bg-amana-soft-grey rounded-lg">
                <h4 className="text-amana-green">AAOIFI Compliance</h4>
                <p className="mt-2">
                  All contracts adhere to Accounting and Auditing Organization for Islamic Financial Institutions standards:
                  <span className="block mt-2 text-amana-teal">
                    Sharia Standard No. 12 (Musharakah) • No. 13 (Mudarabah)
                  </span>
                </p>
              </div>
            </section>

            {/* Investor Obligations */}
            <section className="mb-16">
              <h2 className="text-amana-green border-b border-amana-gold/30 pb-2">2. Investor Commitments</h2>
              <div className="amana-grid-3 gap-6 mt-8">
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <h3 className="text-amana-teal">KYC Requirements</h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>PAN card copy</li>
                    <li>Aadhaar verification</li>
                    <li>Bank account proof</li>
                  </ul>
                </div>
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <h3 className="text-amana-teal">Communication</h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>Update address within 30 days</li>
                    <li>Respond to audits within 14 days</li>
                    <li>Quarterly portfolio reviews</li>
                  </ul>
                </div>
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <h3 className="text-amana-teal">Zakat Management</h3>
                  <ul className="mt-2 space-y-2 text-sm">
                    <li>Self-declaration required</li>
                    <li>Nisab threshold: ₹4,89,535 (Silver)</li>
                    <li>2.5% annual obligation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Property Transactions */}
            <section className="mb-16">
              <h2 className="text-amana-green border-b border-amana-gold/30 pb-2">3. Property Transactions</h2>
              <div className="overflow-x-auto mt-8">
                <table className="w-full border border-amana-gold/20">
                  <thead>
                    <tr className="bg-amana-gold/10">
                      <th className="p-4 text-left min-w-[200px]">Process</th>
                      <th className="p-4 text-left">Timeline</th>
                      <th className="p-4 text-left">Financial Terms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-amana-gold/10">
                      <td className="p-4">Booking Amount</td>
                      <td className="p-4">Day 1</td>
                      <td className="p-4">10% (Refundable within 15 days)</td>
                    </tr>
                    <tr className="border-b border-amana-gold/10">
                      <td className="p-4">Construction Linked Payments</td>
                      <td className="p-4">Quarterly</td>
                      <td className="p-4">70% total cost</td>
                    </tr>
                    <tr className="border-b border-amana-gold/10">
                      <td className="p-4">Possession</td>
                      <td className="p-4">36 months</td>
                      <td className="p-4">20% on possession</td>
                    </tr>
                    <tr>
                      <td className="p-4">Title Transfer</td>
                      <td className="p-4">45 days post-completion</td>
                      <td className="p-4">₹25,000 documentation fee</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-16">
              <h2 className="text-amana-green border-b border-amana-gold/30 pb-2">4. Conflict Resolution</h2>
              <div className="amana-grid-2 gap-8 mt-8">
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-amana-green/10 p-2 rounded-full">
                      <svg className="w-6 h-6 text-amana-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-amana-teal">Sharia Mediation</h3>
                      <ul className="mt-2 space-y-2 text-sm">
                        <li>3-member scholar panel</li>
                        <li>30-day resolution timeline</li>
                        <li>Binding fatwa issuance</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-amana-green/10 p-2 rounded-full">
                      <svg className="w-6 h-6 text-amana-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-amana-teal">Legal Arbitration</h3>
                      <ul className="mt-2 space-y-2 text-sm">
                        <li>Mumbai jurisdiction</li>
                        <li>90-day resolution period</li>
                        <li>English language proceedings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Additional Sections */}
            <section className="space-y-16">
              <div>
                <h2 className="text-amana-green border-b border-amana-gold/30 pb-2">5. Termination Rights</h2>
                <div className="amana-grid-2 gap-8 mt-8">
                  <div className="border border-amana-gold/20 p-6 rounded-lg">
                    <h3 className="text-amana-teal">By Investor</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li>30-day written notice</li>
                      <li>5% early exit fee</li>
                      <li>Project phase penalties apply</li>
                    </ul>
                  </div>
                  <div className="border border-amana-gold/20 p-6 rounded-lg">
                    <h3 className="text-amana-teal">By Amana</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                      <li>Material breach of terms</li>
                      <li>Force majeure events</li>
                      <li>Regulatory requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-amana-green border-b border-amana-gold/30 pb-2">6. Governing Law</h2>
                <div className="mt-8 p-6 bg-amana-soft-grey rounded-lg">
                  <ul className="space-y-3">
                    <li>Indian Contract Act, 1872</li>
                    <li>SEBI (AIF) Regulations, 2012</li>
                    <li>Arbitration and Conciliation Act, 1996</li>
                  </ul>
                  <p className="mt-4 text-sm text-amana-charcoal/80">
                    Despite secular legal framework, all transactions maintain Sharia compliance through bilateral agreement
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="text-center border-t border-amana-gold/20 pt-12 mt-16">
              <h2 className="text-amana-green">Need Clarification?</h2>
              <div className="amana-grid-2 gap-4 mt-6 max-w-md mx-auto">
                <Link href="/contact-us" className="amana-btn-primary">
                  Contact Legal Team
                </Link>
                <Link href="/sharia-commitment" className="amana-btn-secondary">
                  Ethics Charter
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}