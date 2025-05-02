import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Twitter, Linkedin } from "lucide-react";
import NewsletterSection from "@/components/home/NewsletterSection";

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Why Navi Mumbai is India’s Next Real Estate Hotspot: A Smart Investor’s Guide",
    excerpt: "With a new airport, metro lines, and Sharia-compliant opportunities, Navi Mumbai offers 15% CAGR potential.",
    date: "March 15, 2025",
    category: "Market Analysis",
    imageUrl: "/Navi-Mumbai-Skyline.jpg",
    slug: "navi-mumbai-real-estate-hotspot",
    author: "Amana Regenesis Team",
    readTime: "6 min read",
    tags: ["NaviMumbaiRealEstate", "InvestInMumbai", "ShariaCompliantInvesting", "SmartCityIndia"],
    content: `
      <p>Navi Mumbai, once perceived as Mumbai’s quieter sibling, is now emerging as India’s most promising real estate hub. With mega-infrastructure projects, affordable pricing, and strategic urban planning, the region is witnessing unprecedented growth. Experts predict a 15% CAGR in property values over the next decade, making it a goldmine for investors—especially those seeking Sharia-compliant, ethical investments.</p>
      
      <img src="/skyline-view.jpg" alt="Navi Mumbai Skyline" class="w-full h-auto rounded-lg my-4" />
      
      <h2>Key Factors Fueling Navi Mumbai’s Real Estate Boom</h2>
      <h3>1. Navi Mumbai International Airport – A Game Changer</h3>
      <p>The airport, operational by 2025-26, will handle 60 million passengers annually, reducing reliance on Mumbai’s overburdened Chhatrapati Shivaji Maharaj International Airport. It will attract businesses, hospitality chains, and logistics hubs, driving demand in areas like Ulwe, Dronagiri, and Kharghar.</p>
      
      <h3>2. Metro Expansion – Seamless Connectivity</h3>
      <p>Mumbai Metro Lines 2A & 3 and Navi Mumbai Metro Phase 2 will connect Navi Mumbai to South Mumbai and Thane, significantly reducing travel times. Hotspots include:</p>
      <ul>
        <li><strong>Kharghar</strong>: Education & IT hub</li>
        <li><strong>Taloja</strong>: Industrial & affordable housing</li>
        <li><strong>Belapur</strong>: Commercial & luxury real estate</li>
      </ul>
      
      <h3>3. Affordable Housing vs. Mumbai’s Sky-High Prices</h3>
      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f0f0f0;">
          <th style="padding: 10px; border: 1px solid #ddd;">Location</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Avg. Price per Sq. Ft. (2025)</th>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">South Mumbai</td>
          <td style="padding: 10px; border: 1px solid #ddd;">₹50,000 - ₹1,00,000+</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Bandra/Kurla</td>
          <td style="padding: 10px; border: 1px solid #ddd;">₹35,000 - ₹70,000</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Navi Mumbai (Kharghar/Taloja)</td>
          <td style="padding: 10px; border: 1px solid #ddd;">₹12,000 - ₹25,000</td>
        </tr>
      </table>
      <p>With Mumbai becoming unaffordable, Navi Mumbai offers better infrastructure at a third of the price, attracting first-time buyers and investors.</p>
      
      <img src="/drone-shot.jpg" alt="Kharghar Project" class="w-full h-auto rounded-lg my-4" />
      
      <h3>4. Business & IT Growth – The New Corporate Hub</h3>
      <p>The Thane-Belapur Industrial Belt is expanding with IT parks and manufacturing. JNPT Port proximity boosts logistics, while MNCs relocate to Navi Mumbai for lower costs.</p>
      
      <h3>5. Sharia-Compliant & Ethical Opportunities</h3>
      <p>For halal investors, Navi Mumbai offers zero-interest financing, blockchain-based transparency, and socially responsible developments. Amana Regenesis leads with Musharakah-based projects.</p>
      
      <h2>Best Areas to Invest in Navi Mumbai (2025-2030)</h2>
      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f0f0f0;">
          <th style="padding: 10px; border: 1px solid #ddd;">Location</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Why Invest?</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Price Trend (Next 5 Years)</th>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Kharghar</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Education hub, metro connectivity, luxury projects</td>
          <td style="padding: 10px; border: 1px solid #ddd;">↑ 18-20% CAGR</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Taloja</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Affordable housing, industrial growth</td>
          <td style="padding: 10px; border: 1px solid #ddd;">↑ 15-17% CAGR</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Ulwe</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Airport proximity, upcoming infrastructure</td>
          <td style="padding: 10px; border: 1px solid #ddd;">↑ 20-25% CAGR</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Belapur</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Commercial hub, premium developments</td>
          <td style="padding: 10px; border: 1px solid #ddd;">↑ 12-15% CAGR</td>
        </tr>
      </table>
      
      <h2>Why Invest Now?</h2>
      <ul>
        <li><strong>Pre-Infrastructure Boom</strong>: Prices are 30-40% lower than post-airport projections.</li>
        <li><strong>Government Push</strong>: PMAY subsidies and smart city initiatives boost affordability.</li>
        <li><strong>Rental Yields</strong>: Expected to rise to 5-7% by 2030.</li>
      </ul>
      
      <h2>Navi Mumbai vs. Other Indian Cities</h2>
      <p>While Bengaluru and Hyderabad dominate IT, and Pune thrives in education, Navi Mumbai offers affordability, infrastructure, and future-ready growth. For ethical investors, Amana Regenesis provides Sharia-compliant options, ensuring profits align with values.</p>
      
      <h2>Call to Action</h2>
      <p>Interested in Sharia-compliant real estate in Navi Mumbai? Contact Amana Regenesis at <a href="mailto:info@amana-regenesis.com">info@amana-regenesis.com</a> or call +91 XXXX XXX XXX for exclusive opportunities!</p>
    `,
  },
  {
    id: 2,
    title: "How Blockchain is Revolutionizing Trust in Real Estate: A Complete Guide",
    excerpt: "Blockchain brings transparency and security to real estate, ensuring Sharia-compliant investing with Amana Regenesis.",
    date: "February 28, 2025",
    category: "Technology",
    imageUrl: "/simple-art.jpg",
    slug: "blockchain-real-estate-trust",
    author: "Amana Regenesis Team",
    readTime: "8 min read",
    tags: ["BlockchainRealEstate", "HalalInvesting", "SmartContracts", "AmanaRegenesis"],
    content: `
      <p>The real estate industry has long been plagued by opaque transactions, fraud risks, and inefficiencies. But blockchain technology is changing the game—introducing unprecedented transparency, security, and speed to property investments. For Sharia-compliant investors, blockchain is even more critical, ensuring ethical profit-sharing, zero hidden charges, and full compliance with Islamic finance principles like Musharakah.</p>
      
      <img src="/prop1.jpeg" alt="Blockchain Technology" class="w-full h-auto rounded-lg my-4" />
      
      <h2>Why Real Estate Needs Blockchain</h2>
      <h3>1. End-to-End Transparency</h3>
      <p>Every transaction is recorded on an immutable public ledger (like Ethereum or Hyperledger). Investors can track ownership history, payments, and legal documents in real time. For example, in our Navi Mumbai projects, buyers verify land titles in seconds—eliminating disputes.</p>
      
      <h3>2. Smart Contracts: No Middlemen, No Delays</h3>
      <p>Traditional processes require lawyers, brokers, and banks, leading to delays and extra costs. Blockchain’s smart contracts auto-execute when conditions are met (e.g., payment → ownership transfer). This ensures no interest (riba) and supports Musharakah-based profit-sharing.</p>
      
      <h3>3. Fraud Prevention & Secure Transactions</h3>
      <p>Land fraud is a $1.3 billion problem in India (Economic Times, 2024). Blockchain encrypts all records, making tampering impossible. Biometric/KYC integration stops fake buyers or sellers.</p>
      
      <h3>4. Faster, Cheaper Cross-Border Investments</h3>
      <p>Foreign investors face legal hurdles and high fees. Blockchain enables tokenization, splitting properties into digital shares (e.g., 10 investors own 10% each), and instant global transactions via stablecoins like USDT. Amana Regenesis is piloting Halal real estate tokens for Gulf investors.</p>
      
      <img src="/nm-skyline2.jpeg" alt="Navi Mumbai Project" class="w-full h-auto rounded-lg my-4" />
      
      <h2>How Amana Regenesis Uses Blockchain</h2>
      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f0f0f0;">
          <th style="padding: 10px; border: 1px solid #ddd;">Stage</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Traditional System</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Our Blockchain Solution</th>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Land Verification</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Manual checks (weeks/months)</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Instant blockchain records</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Profit Distribution</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Opaque, delayed</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Smart contracts auto-split profits</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Investor Reporting</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Quarterly PDFs</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Live dashboard with history</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Resale Process</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Broker-dependent</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Peer-to-peer NFT-based trading</td>
        </tr>
      </table>
      
      <h3>Real-World Example: Kharghar Project</h3>
      <p>Over 100 investors track every rupee of construction spending. Smart contracts distribute quarterly profits based on agreed ratios, with no banks or interest—pure Islamic finance compliance.</p>
      
      <h2>The Future: Blockchain + Real Estate in 2030</h2>
      <ul>
        <li><strong>NFT Property Deeds</strong>: Buy/sell homes like digital collectibles.</li>
        <li><strong>Metaverse Real Estate</strong>: Virtual land ownership (e.g., Dubai’s Metaverse Strategy).</li>
        <li><strong>AI + Blockchain Audits</strong>: AI checks legal docs, predicts market risks.</li>
      </ul>
      
      <h2>Why This Matters for Investors</h2>
      <ul>
        <li><strong>No More Fraud</strong>: Say goodbye to fake sellers, duplicate registries.</li>
        <li><strong>Lower Costs</strong>: Cut middlemen fees by 50-70%.</li>
        <li><strong>Sharia-Compliant</strong>: Zero interest, pure profit-sharing.</li>
        <li><strong>Global Access</strong>: Invest from anywhere, anytime.</li>
      </ul>
      
      <h2>Call to Action</h2>
      <p>Want transparent, Halal real estate investments powered by blockchain? Contact us at <a href="mailto:info@amana-regenesis.com">info@amana-regenesis.com</a> or call +91 XXXX XXX XXX. Visit <a href="/fund">our Fund page</a> to get started!</p>
    `,
  },
  {
    id: 3,
    title: "Understanding Musharakah: The Ethical Way to Invest in Real Estate",
    excerpt: "Musharakah offers a fair, Sharia-compliant model for real estate investing with shared risks and rewards.",
    date: "February 10, 2025",
    category: "Islamic Finance",
    imageUrl: "/hands.jpg",
    slug: "understanding-musharakah-investment",
    author: "Amana Regenesis Team",
    readTime: "8 min read",
    tags: ["Musharakah", "IslamicFinance", "HalalInvesting", "AmanaRegenesis"],
    content: `
      <p>In a world of interest-based loans and speculative investing, Musharakah stands out as a fair, Sharia-compliant model for real estate. It’s not just about profits—it’s about shared risk, ethical growth, and community benefit. At Amana Regenesis, we structure all our Navi Mumbai projects on Musharakah principles, ensuring 100% Halal returns for investors.</p>
      
      <img src="/team.jpg" alt="Musharakah Partnership" class="w-full h-auto rounded-lg my-4" />
      
      <h2>What is Musharakah?</h2>
      <p>Musharakah means "sharing" in Arabic. In finance, it’s a profit-and-loss partnership where:</p>
      <ul>
        <li>Two or more parties pool funds for a project.</li>
        <li>Profits are split as per agreement (e.g., 70-30%).</li>
        <li>Losses are shared based on investment ratio.</li>
        <li>No interest (riba) is involved—only ethical profit-sharing.</li>
      </ul>
      <p>Example: You invest ₹50 lakhs in an Amana Regenesis property; we manage construction. If the project earns 20% profit, you get ₹10 lakhs (if agreed as 50-50%). If it loses money, you only bear 50% of the loss.</p>
      
      <h2>Musharakah vs. Conventional Loans</h2>
      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f0f0f0;">
          <th style="padding: 10px; border: 1px solid #ddd;">Factor</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Musharakah (Islamic)</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Conventional Loan</th>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Profit</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Shared per agreement</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Fixed interest (riba)</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Risk</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Shared by all parties</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Only borrower bears loss</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Ownership</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Investor co-owns asset</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Bank owns until loan repaid</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Ethics</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Halal, socially fair</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Interest prohibited in Islam</td>
        </tr>
      </table>
      
      <img src="/resi-1.jpg" alt="Navi Mumbai Housing" class="w-full h-auto rounded-lg my-4" />
      
      <h2>Why Musharakah is Perfect for Real Estate</h2>
      <ul>
        <li><strong>Aligns with Islamic Finance</strong>: No haram elements (interest, gambling, uncertainty). Approved by global Sharia boards (AAOIFI).</li>
        <li><strong>Fair Risk Distribution</strong>: Investors and developers share gains and setbacks, unlike banks that profit even if projects fail.</li>
        <li><strong>Higher Trust</strong>: Transparent blockchain records ensure fairness.</li>
        <li><strong>Tax & Financial Benefits</strong>: Losses are capped at investment, funding real projects.</li>
      </ul>
      
      <h2>How Amana Regenesis Implements Musharakah</h2>
      <ol>
        <li><strong>Joint Investment Pool</strong>: You invest ₹X; we contribute land/management.</li>
        <li><strong>Sharia-Compliant Projects</strong>: Only Halal ventures (no alcohol-related properties).</li>
        <li><strong>Blockchain Tracking</strong>: Smart contracts auto-distribute profits.</li>
        <li><strong>Exit Options</strong>: Sell shares via NFT marketplace or hold for rental income.</li>
      </ol>
      
      <h3>Real Example: Navi Mumbai Housing</h3>
      <p>Total investment: ₹50 crores (50% investors, 50% us). Profit split: 60% investors / 40% Amana Regenesis. Result: Investors earned 18% annual returns—100% Halal.</p>
      
      <h2>Who Should Invest via Musharakah?</h2>
      <ul>
        <li>Muslims avoiding riba.</li>
        <li>Ethical investors prioritizing social impact.</li>
        <li>Diversifiers seeking stable real estate returns.</li>
        <li>NRI/Gulf investors targeting India’s growth.</li>
      </ul>
      
      <h2>Myths vs. Facts</h2>
      <table style="width:100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f0f0f0;">
          <th style="padding: 10px; border: 1px solid #ddd;">Myth</th>
          <th style="padding: 10px; border: 1px solid #ddd;">Fact</th>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Returns are lower than loans.</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Musharakah often outperforms long-term.</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">It’s only for Muslims.</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Anyone can benefit from fair partnerships.</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd;">Too complex.</td>
          <td style="padding: 10px; border: 1px solid #ddd;">Our blockchain platform simplifies it.</td>
        </tr>
      </table>
      
      <h2>The Future: Musharakah + Tokenization</h2>
      <p>Soon, you’ll buy Musharakah shares via Halal-certified tokens and trade globally in seconds. Amana Regenesis is leading this shift in India.</p>
      
      <h2>Call to Action</h2>
      <p>Ready to invest the Halal way? Contact us at <a href="mailto:info@amana-regenesis.com">info@amana-regenesis.com</a> or call +91 XXXX XXX XXX. Visit <a href="/fund">our Fund page</a>!</p>
    `,
  },
];

// Define the props type for Next.js 15
type PageProps = {
  params: Promise<{ slug: string }>;
};

// Async server component
export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params; // Unwrap the Promise
  console.log("Slug received:", slug); // Debug log
  const post = blogPosts.find((p) => p.slug === slug);
  console.log("Post found:", post ? post.title : "Not found"); // Debug log

  if (!post) {
    notFound();
  }

  // Get up to 2 random related posts (excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-amana-soft-grey">
      {/* Hero Section */}
      <section className="relative bg-amana-charcoal text-white py-16">
        <div className="amana-container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-amana-green text-white text-xs px-3 py-1 rounded font-montserrat font-medium mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl mb-4">{post.title}</h1>
            <div className="flex justify-center items-center text-sm text-gray-300 mb-6">
              <span>{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            <div className="relative w-full h-96 md:h-[500px] mb-6">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="amana-section py-12">
        <div className="amana-container flex flex-col md:flex-row gap-8">
          {/* Blog Content */}
          <div className="md:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div
                className="prose prose-lg text-gray-600 max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-amana-gold text-white text-xs px-3 py-1 rounded font-montserrat"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-playfair text-xl text-amana-charcoal mb-4">Share This Post</h3>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://your-site-name.netlify.app/news-insights/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amana-green hover:text-amana-teal"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://your-site-name.netlify.app/news-insights/${slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amana-green hover:text-amana-teal"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="font-playfair text-xl text-amana-charcoal mb-4">Related Posts</h3>
              <ul className="space-y-4">
                {relatedPosts.map((relatedPost) => (
                  <li key={relatedPost.slug}>
                    <Link
                      href={`/news-insights/${relatedPost.slug}`}
                      className="text-amana-green hover:text-amana-teal"
                    >
                      {relatedPost.title}
                    </Link>
                    <p className="text-sm text-gray-500">{relatedPost.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Back Link */}
      <section className="py-6">
        <div className="amana-container">
          <Link
            href="/news-insights"
            className="inline-flex items-center text-amana-green hover:text-amana-teal"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News & Insights
          </Link>
        </div>
      </section>
    </div>
  );
}