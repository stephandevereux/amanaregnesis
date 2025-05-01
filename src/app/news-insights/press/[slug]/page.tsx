"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

// Press release data
const pressReleases = [
  {
    id: 1,
    title: "Amana Regenesis Launches Pilot Projects in Kharghar and Taloja",
    snippet: "Our ₹130 crore investment marks a new era in ethical real estate.",
    date: "January 25, 2025",
    slug: "pilot-projects-launch-2025",
    content: `
      <p>Amana Regenesis is proud to announce the launch of two pilot projects in Kharghar and Taloja, Navi Mumbai, with a combined investment of ₹130 crore. These projects mark a significant step in our mission to deliver ethical, Sharia-compliant real estate solutions.</p>
      <h2>Project Highlights</h2>
      <ul>
        <li><strong>Kharghar Development</strong>: A mixed-use complex with residential and commercial spaces, designed for sustainability.</li>
        <li><strong>Taloja Residential</strong>: Affordable housing units with green amenities, targeting middle-income families.</li>
        <li><strong>Sharia Compliance</strong>: Both projects adhere to Musharakah principles, ensuring transparent profit-sharing.</li>
      </ul>
      <p>These initiatives leverage Navi Mumbai’s growth potential, driven by the upcoming international airport and metro expansion. Our blockchain platform ensures transparency in all transactions, building trust with investors and buyers.</p>
      <h2>Next Steps</h2>
      <p>We invite investors to join our Sharia-compliant fund and explore these opportunities. Contact us at <a href="mailto:info@amana-regenesis.com">info@amana-regenesis.com</a> for details.</p>
    `,
  },
  {
    id: 2,
    title: "Amana Islamic Real Estate Fund Receives SEBI Registration",
    snippet: "Official Category II AIF status approved for Sharia-compliant fund.",
    date: "December 15, 2024",
    slug: "fund-sebi-registration",
    content: `
      <p>Amana Regenesis is thrilled to announce that our Islamic Real Estate Fund has received official registration as a Category II Alternative Investment Fund (AIF) from the Securities and Exchange Board of India (SEBI).</p>
      <h2>Significance of Registration</h2>
      <ul>
        <li><strong>Regulatory Approval</strong>: Validates our commitment to ethical and transparent investment practices.</li>
        <li><strong>Investor Confidence</strong>: SEBI oversight ensures compliance with stringent financial standards.</li>
        <li><strong>Market Access</strong>: Opens opportunities for institutional and retail investors seeking Sharia-compliant options.</li>
      </ul>
      <p>The fund focuses on high-growth real estate projects in Navi Mumbai, using Musharakah and blockchain technology for equitable profit-sharing and transparency.</p>
      <h2>Join Our Fund</h2>
      <p>Interested investors can learn more by visiting our <a href="/fund">Fund page</a> or contacting us at <a href="mailto:info@amana-regenesis.com">info@amana-regenesis.com</a>.</p>
    `,
  },
];

export default function PressReleasePage({ params }: { params: { slug: string } }) {
  const release = pressReleases.find((r) => r.slug === params.slug);

  if (!release) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-amana-soft-grey">
      <section className="amana-section geometric-pattern">
        <div className="amana-container">
          <Link
            href="/news-insights"
            className="inline-flex items-center text-amana-green hover:text-amana-teal mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News & Insights
          </Link>
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h1 className="font-playfair text-3xl md:text-4xl text-amana-charcoal mb-4">
              {release.title}
            </h1>
            <p className="text-sm text-gray-500 mb-6 font-montserrat">{release.date}</p>
            <div
              className="prose prose-lg text-gray-600"
              dangerouslySetInnerHTML={{ __html: release.content }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}