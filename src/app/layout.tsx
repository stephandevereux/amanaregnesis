import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amana Regenesis | Sharia-Compliant Real Estate Investment in India",
  description: "Discover ethical real estate solutions with Amana Regenesis. Invest in Sharia-compliant projects in Navi Mumbai with 15–20% IRR potential.",
  keywords: [
    "Sharia-compliant real estate",
    "ethical investing India",
    "Navi Mumbai real estate investment",
    "halal property development",
    "Islamic real estate fund"
  ],
  openGraph: {
    title: "Amana Regenesis | Ethical Real Estate Investment",
    description: "Sharia-compliant real estate investments in India's fastest-growing markets.",
    url: "https://www.amana-regenesis.com",
    siteName: "Amana Regenesis",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amana Regenesis | Ethical Real Estate Investment",
    description: "Sharia-compliant real estate investments in India's fastest-growing markets."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${montserrat.variable}`}>
      <ClientBody>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </ClientBody>
    </html>
  );
}
