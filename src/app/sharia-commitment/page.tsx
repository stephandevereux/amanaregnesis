import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Shield, FileText, CheckCircle, X, Info } from "lucide-react";

export default function ShariaCommitment() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amana-charcoal to-amana-teal overflow-hidden">
        <div className="absolute inset-0 w-full h-full islamic-pattern-overlay opacity-20"></div>
        <div className="amana-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-h1 font-playfair text-white mb-6">
              Our <span className="text-amana-gold">Sharia</span> Commitment
            </h1>
            <p className="text-lg text-white/90 mb-8">
              At Amana Regenesis, adherence to Islamic principles forms the bedrock of our business.
              We are committed to maintaining the highest standards of Sharia compliance in all our operations.
            </p>
          </div>
        </div>
      </section>

      {/* Islamic Finance Principles */}
      <section className="amana-section">
        <div className="amana-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-playfair text-amana-charcoal mb-8 text-center">
              Islamic Finance <span className="text-amana-green">Principles</span>
            </h2>

            <div className="space-y-12">
              <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amana-green">
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-amana-green/10 rounded-full flex items-center justify-center text-amana-green">
                      <X className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl text-amana-charcoal mb-4">Prohibition of Riba (Interest)</h3>
                    <p className="text-gray-700 mb-4">
                      Islam strictly prohibits the charging or payment of interest (riba) in financial transactions.
                      This prohibition is based on the principle that money itself has no intrinsic value and should
                      not generate more money without being associated with productive economic activity.
                    </p>
                    <p className="text-gray-700">
                      At Amana Regenesis, all our investment and financing structures are designed to be completely
                      free from interest. Instead, we utilize profit-and-loss sharing arrangements, asset-backed financing,
                      and other Sharia-compliant mechanisms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amana-green">
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-amana-green/10 rounded-full flex items-center justify-center text-amana-green">
                      <X className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl text-amana-charcoal mb-4">Avoidance of Gharar (Uncertainty)</h3>
                    <p className="text-gray-700 mb-4">
                      Islamic finance prohibits transactions with excessive uncertainty or ambiguity (gharar).
                      This includes contracts where the terms are unclear, outcomes are unduly uncertain, or
                      there is information asymmetry between parties.
                    </p>
                    <p className="text-gray-700">
                      Our investment products and real estate contracts are carefully structured to provide
                      clear terms, transparent pricing, and well-defined obligations for all parties involved,
                      eliminating excessive uncertainty.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amana-green">
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-amana-green/10 rounded-full flex items-center justify-center text-amana-green">
                      <X className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl text-amana-charcoal mb-4">Prohibition of Maysir (Gambling)</h3>
                    <p className="text-gray-700 mb-4">
                      Islamic finance prohibits gambling or speculation (maysir), which involves gaining something
                      of value by chance rather than through productive effort. This extends to any transaction that
                      resembles gambling or pure speculation.
                    </p>
                    <p className="text-gray-700">
                      Our investments are based on careful analysis of real assets and markets, avoiding speculative
                      activities. We focus on creating genuine economic value through property development and
                      asset appreciation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amana-green">
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-amana-green/10 rounded-full flex items-center justify-center text-amana-green">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl text-amana-charcoal mb-4">Asset-Backed Financing</h3>
                    <p className="text-gray-700 mb-4">
                      Islamic finance emphasizes that financial transactions should be backed by real assets.
                      This principle ensures that money is tied to productive economic activity and actual assets
                      rather than abstract financial instruments.
                    </p>
                    <p className="text-gray-700">
                      All our investment opportunities are backed by tangible real estate assets. Investors
                      participate in the ownership of these assets and share in the returns generated from them,
                      whether through rental income or appreciation in value.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-amana-green">
                <div className="flex items-start">
                  <div className="mr-6">
                    <div className="w-12 h-12 bg-amana-green/10 rounded-full flex items-center justify-center text-amana-green">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-2xl text-amana-charcoal mb-4">Profit and Loss Sharing</h3>
                    <p className="text-gray-700 mb-4">
                      In contrast to interest-based financing, Islamic finance promotes risk-sharing arrangements
                      where profits and losses are distributed equitably among the involved parties based on their
                      contribution and pre-agreed terms.
                    </p>
                    <p className="text-gray-700">
                      Our investment structures incorporate profit-and-loss sharing mechanisms such as Musharakah
                      (partnership) and Mudarabah (profit-sharing), ensuring that all parties share in both the
                      risks and rewards of the venture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sharia Supervisory Board */}
      <section className="amana-section bg-amana-soft-grey geometric-pattern">
        <div className="amana-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-playfair text-amana-charcoal mb-8 text-center">
              Sharia <span className="text-amana-green">Supervisory Board</span>
            </h2>

            <div className="bg-white rounded-lg shadow-md p-8 mb-12">
              <p className="text-gray-700 mb-6">
                Our Sharia Supervisory Board (SSB) consists of distinguished scholars with expertise in Islamic
                jurisprudence and finance. The board provides guidance and oversight to ensure that all our
                activities remain compliant with Sharia principles.
              </p>

              <p className="text-gray-700 mb-6">
                The primary responsibilities of our Sharia Supervisory Board include:
              </p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-amana-green mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    <strong>Product Development:</strong> Reviewing and approving all investment products and structures
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amana-green mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    <strong>Contract Review:</strong> Ensuring all contracts and agreements adhere to Islamic principles
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amana-green mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    <strong>Operational Oversight:</strong> Monitoring business operations for continued compliance
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amana-green mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    <strong>Zakat Calculation:</strong> Providing guidance on Zakat (obligatory charity) calculations
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-amana-green mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <span className="text-gray-700">
                    <strong>Annual Audit:</strong> Conducting an annual Sharia audit of all business activities
                  </span>
                </li>
              </ul>

              <div className="bg-amana-green/5 p-6 rounded-lg border border-amana-green/20">
                <div className="flex items-start">
                  <Info className="text-amana-green mr-3 mt-1 flex-shrink-0 w-5 h-5" />
                  <p className="text-gray-700 italic">
                    "The SSB of Amana Regenesis has reviewed all the company's activities, investments, and
                    financing structures and found them to be in full compliance with Sharia principles for
                    the fiscal year 2024, as detailed in our annual certification."
                    <br /><br />
                    <span className="font-medium not-italic">— Dr. Mahmood Al-Rashid, Chairman, Sharia Supervisory Board</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link href="/files/sharia-certification.pdf">
                <Button className="amana-btn-primary">
                  View Our Sharia Certification
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="amana-section">
        <div className="amana-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-playfair text-amana-charcoal mb-8 text-center">
              Our Certification <span className="text-amana-green">Process</span>
            </h2>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="font-playfair text-xl text-amana-charcoal mb-4">Rigorous External Review</h3>
                  <p className="text-gray-700 mb-6">
                    In addition to our internal Sharia Supervisory Board, all our products and operations undergo
                    certification by the Islamic Finance Review Board (IFRB), an independent international authority
                    on Sharia compliance.
                  </p>
                  <p className="text-gray-700">
                    This dual-layer verification ensures that our adherence to Islamic principles meets the highest
                    global standards and provides additional confidence to our investors and partners.
                  </p>
                </div>

                <div className="bg-amana-soft-grey p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-10 h-10 text-amana-green" />
                    </div>
                    <p className="text-amana-charcoal font-medium">
                      Islamic Finance Review Board
                    </p>
                    <p className="text-gray-600 text-sm">
                      Certified Partner
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-700 mb-8">
                Have questions about our Sharia compliance practices or interested in learning more about
                Islamic finance principles? Our team of experts is here to help.
              </p>

              <Link href="/contact-us">
                <Button className="amana-btn-secondary">
                  Contact Our Sharia Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
