import Image from "next/image";
import Link from "next/link";
import NewsletterSection from "@/components/home/NewsletterSection";

// Blog post data (shared with [slug]/page.tsx)
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
  },
];

export default function NewsInsightsPage() {
  return (
    <div className="min-h-screen bg-amana-soft-grey">
      {/* Hero Section */}
      <section className="bg-amana-charcoal text-white py-16">
        <div className="amana-container text-center">
          <h1 className="font-playfair text-4xl md:text-5xl mb-4">News & Insights</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest trends in Sharia-compliant real estate and ethical investing.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="amana-section py-12">
        <div className="amana-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/news-insights/${post.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority={post.id === 1} // Prioritize first blog
                  />
                </div>
                <div className="p-6">
                  <span className="bg-amana-green text-white text-xs px-3 py-1 rounded font-montserrat mb-4 inline-block">
                    {post.category}
                  </span>
                  <h2 className="font-playfair text-xl text-amana-charcoal mb-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}