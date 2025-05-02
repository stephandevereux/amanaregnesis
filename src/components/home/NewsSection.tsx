"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";


// Blog post data (aligned with news-insights/[slug]/page.tsx)
const blogPosts = [
  {
    id: 1,
    title: "Why Navi Mumbai is India’s Next Real Estate Hotspot: A Smart Investor’s Guide",
    excerpt: "With a new airport, metro lines, and Sharia-compliant opportunities, Navi Mumbai offers 15% CAGR potential.",
    date: "March 15, 2025",
    category: "Market Analysis",
    imageUrl: "/Navi-Mumbai-Skyline.jpg",
    slug: "navi-mumbai-real-estate-hotspot",
  },
  {
    id: 2,
    title: "How Blockchain is Revolutionizing Trust in Real Estate: A Complete Guide",
    excerpt: "Blockchain brings transparency and security to real estate, ensuring Sharia-compliant investing with Amana Regenesis.",
    date: "February 28, 2025",
    category: "Technology",
    imageUrl: "/simple-art.jpg",
    slug: "blockchain-real-estate-trust",
  },
  {
    id: 3,
    title: "Understanding Musharakah: The Ethical Way to Invest in Real Estate",
    excerpt: "Musharakah offers a fair, Sharia-compliant model for real estate investing with shared risks and rewards.",
    date: "February 10, 2025",
    category: "Islamic Finance",
    imageUrl: "/hands.jpg",
    slug: "understanding-musharakah-investment",
  },
];

// Commented out press releases (not needed in idea phase)
/*
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
*/

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
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          style={{ objectFit: "cover" }}
          priority={index === 0} // Prioritize first blog
        />
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
        <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
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

export default function NewsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="amana-section bg-amana-soft-grey geometric-pattern">
      <div className="amana-container">
        <div
          ref={ref}
          className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-12 transition-all duration-700 transform ${
            inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <h2 className="text-h2 font-playfair text-amana-charcoal mb-3">
              Insights for a <span className="text-amana-green">Brighter Future</span>
            </h2>
            <p className="text-gray-600 max-w-xl">
              Explore the latest trends, expert insights, and updates from Amana Regenesis. From Navi Mumbai's real estate boom to
              the power of Sharia-compliant investing, our blog keeps you ahead of the curve.
            </p>
          </div>

          <Link href="/news-insights" className="mt-4 md:mt-0">
            <Button className="amana-btn-secondary">
              View All Articles
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

       
      </div>
    </section>
  );
}