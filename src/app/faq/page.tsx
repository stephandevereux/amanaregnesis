import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQs | Amana Regenesis Ethical Real Estate Investments",
  description: "Clear answers for Muslims and non-Muslims about Sharia-compliant investments in Navi Mumbai",
};

export default function FAQPage() {
  const faqs = [
    {
      category: "For All Investors",
      questions: [
        {
          question: "Can non-Muslims benefit from your ethical approach?",
          answer: (
            <div className="space-y-4">
              <p>Absolutely. Our model offers universal advantages:</p>
              <div className="amana-grid-2 gap-6">
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <h4 className="text-amana-teal">Ethical Benefits</h4>
                  <ul className="mt-2 space-y-2">
                    <li>No gambling/alcohol industry exposure</li>
                    <li>Environmental sustainability focus</li>
                    <li>Community development initiatives</li>
                  </ul>
                </div>
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <h4 className="text-amana-teal">Financial Benefits</h4>
                  <ul className="mt-2 space-y-2">
                    <li>15-20% target IRR returns</li>
                    <li>Inflation-resistant real assets</li>
                    <li>Diversification from stock markets</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
        },
        {
          question: "What's the minimum investment and lock-in period?",
          answer: (
            <div className="space-y-4">
              <table className="w-full border border-amana-gold/20">
                <thead>
                  <tr className="bg-amana-gold/10">
                    <th className="p-4 text-left">Investment Tier</th>
                    <th className="p-4 text-left">Amount</th>
                    <th className="p-4 text-left">Lock-in Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-amana-gold/10">
                    <td className="p-4">Retail Investor</td>
                    <td className="p-4">₹25 lakhs</td>
                    <td className="p-4">3 years</td>
                  </tr>
                  <tr className="border-b border-amana-gold/10">
                    <td className="p-4">High Net Worth</td>
                    <td className="p-4">₹1 crore</td>
                    <td className="p-4">2 years</td>
                  </tr>
                  <tr>
                    <td className="p-4">Institutional</td>
                    <td className="p-4">₹5 crore+</td>
                    <td className="p-4">Flexible</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-amana-charcoal/80 mt-2">
                *Early exit available with 5% penalty
              </p>
            </div>
          ),
        },
      ],
    },
    {
      category: "Islamic Finance Principles",
      questions: [
        {
          question: "How is this different from regular investing?",
          answer: (
            <div className="space-y-6">
              <div className="amana-grid-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <h4 className="text-red-600">Conventional Investing</h4>
                  <ul className="mt-2 space-y-2">
                    <li>Interest-based returns</li>
                    <li>Debt financing</li>
                    <li>Unethical industries allowed</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-amana-green">
                  <h4 className="text-amana-green">Our Approach</h4>
                  <ul className="mt-2 space-y-2">
                    <li>Profit-sharing models</li>
                    <li>Asset-backed transactions</li>
                    <li>Ethical industry screening</li>
                  </ul>
                </div>
              </div>
              <div className="p-6 bg-amana-soft-grey rounded-lg">
                <p>
                  Example: Instead of loan interest, we profit from actual property development and rentals
                </p>
              </div>
            </div>
          ),
        },
        {
          question: "What is Musharakah and how does it work?",
          answer: (
            <div className="space-y-4">
              <p className="font-semibold text-amana-teal">
                Joint Partnership Structure:
              </p>
              <ol className="list-decimal pl-5 space-y-3">
                <li>Investor provides capital (e.g., ₹50 lakhs)</li>
                <li>Amana provides expertise and management</li>
                <li>Profits split 70-30 (investor/developer)</li>
                <li>Losses shared proportionally to investment</li>
              </ol>
              <div className="mt-4 p-4 bg-amana-soft-grey rounded-lg">
                <p className="text-sm">
                  Unlike loans, you actually own part of the property
                </p>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      category: "Navi Mumbai Projects",
      questions: [
        {
          question: "Why focus on Navi Mumbai?",
          answer: (
            <div className="space-y-4">
              <div className="amana-grid-2 gap-6">
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <h4 className="text-amana-teal">Growth Drivers</h4>
                  <ul className="mt-2 space-y-2">
                    <li>New International Airport (2025)</li>
                    <li>Mumbai Metro Expansion</li>
                    <li>40% cheaper than Mumbai</li>
                  </ul>
                </div>
                <div className="border border-amana-gold/20 p-6 rounded-lg">
                  <h4 className="text-amana-teal">Our Developments</h4>
                  <ul className="mt-2 space-y-2">
                    <li>Kharghar Luxury Towers</li>
                    <li>Taloja Affordable Housing</li>
                    <li>Commercial Complexes</li>
                  </ul>
                </div>
              </div>
              <p className="text-sm text-amana-charcoal/80 mt-2">
                Projected 15% annual growth till 2030
              </p>
            </div>
          ),
        },
        {
          question: "How are projects protected against delays?",
          answer: (
            <div className="space-y-4">
              <div className="amana-grid-3 gap-6">
                <div className="border border-amana-gold/20 p-4 rounded-lg">
                  <h4 className="text-amana-teal">Financial Buffer</h4>
                  <p className="mt-1 text-sm">10% contingency reserve</p>
                </div>
                <div className="border border-amana-gold/20 p-4 rounded-lg">
                  <h4 className="text-amana-teal">Insurance</h4>
                  <p className="mt-1 text-sm">Construction all-risk policies</p>
                </div>
                <div className="border border-amana-gold/20 p-4 rounded-lg">
                  <h4 className="text-amana-teal">Contracts</h4>
                  <p className="mt-1 text-sm">Penalty clauses for delays</p>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
    {
      category: "Technology & Security",
      questions: [
        {
          question: "How does blockchain protect my investment?",
          answer: (
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 border border-amana-gold/20 rounded-lg">
                <div className="bg-amana-green/10 p-2 rounded-full">
                  <svg className="w-6 h-6 text-amana-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-amana-teal">Transparent Tracking</h4>
                  <p className="mt-1 text-sm">Real-time profit distribution records</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 border border-amana-gold/20 rounded-lg">
                <div className="bg-amana-green/10 p-2 rounded-full">
                  <svg className="w-6 h-6 text-amana-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-amana-teal">Smart Contracts</h4>
                  <p className="mt-1 text-sm">Automatic payments upon milestones</p>
                </div>
              </div>
            </div>
          ),
        },
      ],
    },
  ];

  return (
    <section className="amana-section geometric-pattern">
      <div className="amana-container">
        <header className="text-center mb-12">
          <h1 className="text-amana-green">Your Investment Questions Answered</h1>
          <p className="text-amana-charcoal/90 mt-4 max-w-2xl mx-auto">
            Clear explanations for both Islamic and conventional investors
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {faqs.map((section) => (
            <div key={section.category} className="mb-16">
              <h2 className="text-amana-gold mb-8 border-b border-amana-gold/30 pb-2">
                {section.category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {section.questions.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="mb-4 last:mb-0 border border-amana-gold/20 rounded-lg"
                  >
                    <AccordionTrigger className="text-left hover:text-amana-green text-amana-charcoal font-medium px-6 py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 pt-2 text-amana-charcoal/90">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-white p-8 rounded-xl shadow-sm border border-amana-gold/20">
          <h3 className="mb-4">Need Personal Guidance?</h3>
          <div className="amana-grid-2 gap-4 max-w-md mx-auto">
            <Link href="/contact-us" className="amana-btn-primary">
              Schedule Consultation
            </Link>
            <Link href="/sharia-commitment" className="amana-btn-secondary">
              View Certifications
            </Link>
          </div>
          <p className="mt-6 text-sm text-amana-charcoal/80">
            Available in English, Hindi, and Arabic
          </p>
        </div>
      </div>
    </section>
  );
}