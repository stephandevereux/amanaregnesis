"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Why Navi Mumbai is India's Next Real Estate Hub",
    excerpt: "With a new airport and metro lines, Navi Mumbai offers 15% CAGR potential. Learn why it's perfect for ethical investors.",
    date: "March 15, 2025",
    category: "Market Analysis",
    imageUrl: "https://same-assets.com/images/navi-mumbai-skyline",
    slug: "navi-mumbai-real-estate-boom",
    content: `
      <p>Navi Mumbai is rapidly emerging as a prime destination for real estate investment in India, driven by significant infrastructure developments and a growing demand for ethical, Sharia-compliant opportunities. With the upcoming Navi Mumbai International Airport and expanded metro connectivity, the region is poised for a 15% compound annual growth rate (CAGR) over the next decade.</p>
      <h2>Key Drivers of Growth</h2>
      <ul>
        <li><strong>Airport Development</strong>: The new airport, set to be operational by 2025, will enhance connectivity and attract businesses.</li>
        <li><strong>Metro Expansion</strong>: Lines 2A and 3 will reduce commute times, making areas like Kharghar and Taloja more accessible.</li>
        <li><strong>Affordable Housing</strong>: Compared to Mumbai, Navi Mumbai offers competitive pricing, appealing to middle-income investors.</li>
      </ul>
      <p>At Amana Regenesis, we align these opportunities with Sharia-compliant principles, ensuring ethical investments that deliver both financial and social returns. Our projects in Kharghar and Taloja are designed to capitalize on this growth while adhering to Islamic finance standards.</p>
      <h2>Why Invest Now?</h2>
      <p>With property prices expected to rise post-infrastructure completion, early investors can secure high returns. Our blockchain-based transparency ensures trust in every transaction, making Navi Mumbai an ideal choice for ethical investors.</p>
    `,
  },
  {
    id: 2,
    title: "How Blockchain Enhances Trust in Real Estate",
    excerpt: "Discover how our blockchain technology ensures transparency in profit distribution and makes property transactions more secure.",
    date: "February 28, 2025",
    category: "Technology",
    imageUrl: "https://same-assets.com/images/blockchain-concept",
    slug: "blockchain-real-estate-trust",
    content: `
      <p>Blockchain technology is revolutionizing the real estate industry by introducing unprecedented transparency and security. At Amana Regenesis, we leverage blockchain to ensure trust in every transaction, particularly for our Sharia-compliant investment projects.</p>
      <h2>Benefits of Blockchain in Real Estate</h2>
      <ul>
        <li><strong>Transparency</strong>: All transactions, including profit distribution, are recorded on an immutable ledger, accessible to investors.</li>
        <li><strong>Security</strong>: Smart contracts automate agreements, reducing the risk of fraud or errors.</li>
        <li><strong>Efficiency</strong>: Blockchain eliminates intermediaries, lowering costs and speeding up processes.</li>
      </ul>
      <p>Our platform uses blockchain to track ownership, payments, and profit-sharing in our Navi Mumbai projects. Investors can verify every step, ensuring compliance with Islamic finance principles like Musharakah.</p>
      <h2>Future Potential</h2>
      <p>As blockchain adoption grows, we anticipate even greater integration, such as tokenized real estate assets, making investments more accessible. Amana Regenesis is at the forefront, building trust through technology.</p>
    `,
  },
  {
    id: 3,
    title: "Understanding Musharakah in Real Estate Investment",
    excerpt: "An in-depth guide to profit and loss sharing structures in Islamic real estate financing and how they benefit investors.",
    date: "February 10, 2025",
    category: "Islamic Finance",
    imageUrl: "https://same-assets.com/images/islamic-finance-concept",
    slug: "understanding-musharakah-investment",
    content: `
      <p>Musharakah, a cornerstone of Islamic finance, is a partnership model where profits and losses are shared among investors. At Amana Regenesis, we use Musharakah to structure our real estate investments, ensuring ethical and equitable returns.</p>
      <h2>How Musharakah Works</h2>
      <ul>
        <li><strong>Joint Ownership</strong>: Investors and Amana Regenesis co-own the property, sharing risks and rewards.</li>
        <li><strong>Profit Sharing</strong>: Returns are distributed based on agreed ratios, not fixed interest.</li>
        <li><strong>Sharia Compliance</strong>: All transactions avoid riba (interest) and adhere to Islamic principles.</li>
      </ul>
      <p>In our Navi Mumbai projects, Musharakah allows investors to participate in high-growth opportunities while maintaining ethical standards. Our blockchain platform ensures transparent profit distribution.</p>
      <h2>Benefits for Investors</h2>
      <p>Musharakah aligns financial goals with ethical values, fostering trust and fairness. It’s ideal for investors seeking Sharia-compliant opportunities with strong growth potential.</p>
    `,
  },
];

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
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
            <span className="bg-amana-green text-white text-xs px-3 py-1 rounded font-montserrat font-medium mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="font-playfair text-3xl md:text-4xl text-amana-charcoal mb-4">
              {post.title}
            </h1>
            <p className="text-sm text-gray-500 mb-6 font-montserrat">{post.date}</p>
            <div className="relative h-64 overflow-hidden mb-6">
              <div className="w-full h-full bg-amana-soft-grey"></div>
              {/* Placeholder for image */}
              {/* <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
              /> */}
            </div>
            <div
              className="prose prose-lg text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}