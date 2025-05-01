"use client";

import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

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
  },
  {
    id: 2,
    title: "How Blockchain Enhances Trust in Real Estate",
    excerpt: "Discover how our blockchain technology ensures transparency in profit distribution and makes property transactions more secure.",
    date: "February 28, 2025",
    category: "Technology",
    imageUrl: "https://same-assets.com/images/blockchain-concept",
    slug: "blockchain-real-estate-trust",
  },
  {
    id: 3,
    title: "Understanding Musharakah in Real Estate Investment",
    excerpt: "An in-depth guide to profit and loss sharing structures in Islamic real estate financing and how they benefit investors.",
    date: "February 10, 2025",
    category: "Islamic Finance",
    imageUrl: "https://same-assets.com/images/islamic-finance-concept",
    slug: "understanding-musharakah-investment",
  },
];

// Press release data
const pressReleases = [
  {
    id: 1,
    title: "Amana Regenesis Launches Pilot Projects in Kharghar and Taloja",
    snippet: "Our ₹130 crore investment marks a new era in ethical real estate.",
    date: "January 25, 2025",
    slug: "pilot-projects-launch-2025",
  },
  {
    id: 2,
    title: "Amana Islamic Real Estate Fund Receives SEBI Registration",
    snippet: "Official Category II AIF status approved for Sharia-compliant fund.",
    date: "December 15, 2024",
    slug: "fund-sebi-registration",
  },
];

interface BlogCardProps {
  post: typeof blogPosts[0];
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`amana-card transition-all duration-500 transform ${
        inView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-amana-charcoal/20 hover:bg-amana-charcoal/10 transition-colors z-10"></div>
        <div className="w-full h-full bg-amana-soft-grey"></div>
        {/* Placeholder for image */}
        {/* <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          style={{ objectFit: "cover" }}
        /> */}

        <div className="absolute top-4 left-4 z-20">
          <span className="bg-amana-green text-white text-xs px-3 py-1 rounded font-montserrat font-medium">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2 font-montserrat">{post.date}</p>
        <h3 className="font-playfair text-xl text-amana-charcoal mb-3 leading-tight">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {post.excerpt}
        </p>
        <Link
          href={`/news-insights/${post.slug}`}
          className="inline-flex items-center text-amana-green hover:text-amana-teal"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default function NewsInsightsPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-amana-soft-grey">
      <section className="amana-section geometric-pattern">
        <div className="amana-container">
          <div
            ref={ref}
            className={`flex flex-col items-center text-center mb-12 transition-all duration-700 transform ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-h1 font-playfair text-amana-charcoal mb-4">
              News & <span className="text-amana-green">Insights</span>
            </h1>
            <p className="text-gray-600 max-w-2xl">
              Stay informed with the latest trends, expert insights, and updates from Amana Regenesis. Explore our articles and press releases to learn about Navi Mumbai’s real estate opportunities, Sharia-compliant investing, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="font-playfair text-2xl text-amana-charcoal mb-6">Press Releases</h2>
            <div className="space-y-6">
              {pressReleases.map((release) => (
                <div key={release.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                  <p className="text-sm text-gray-500 mb-1 font-montserrat">{release.date}</p>
                  <h3 className="font-playfair text-lg text-amana-charcoal mb-2">{release.title}</h3>
                  <p className="text-gray-600 mb-3">{release.snippet}</p>
                  <Link
                    href={`/news-insights/press/${release.slug}`}
                    className="inline-flex items-center text-amana-green hover:text-amana-teal text-sm"
                  >
                    Read Full Release
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}