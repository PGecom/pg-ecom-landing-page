import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import PrepaidHero from "../components/prepaid/PrepaidHero";
import PrepaidHowItWorks from "../components/prepaid/PrepaidHowItWorks";
import PrepaidFeatures from "../components/prepaid/PrepaidFeatures";
import PrepaidDeepDive from "../components/prepaid/PrepaidDeepDive";
import PrepaidPricing from "../components/prepaid/PrepaidPricing";
import PrepaidFAQ from "../components/prepaid/PrepaidFAQ";
import PrepaidCTA from "../components/prepaid/PrepaidCTA";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Prepaid Top-Up Platform",
  description:
    "A white-label platform for reselling mobile airtime and data worldwide. 150+ countries, 500+ operators, intelligent pricing engine, and multi-tenant management.",
  openGraph: {
    title: "PG Ecom - Global Mobile Top-Up & Airtime Reselling Platform",
    description:
      "White-label mobile top-up platform covering 150+ countries and 500+ operators. Set your own pricing, manage your team, and process top-ups from one dashboard.",
    url: "https://www.pgecom.com/prepaid",
  },
  twitter: {
    title: "PG Ecom - Global Mobile Top-Up & Airtime Reselling Platform",
    description:
      "White-label mobile top-up platform covering 150+ countries and 500+ operators. Set your own pricing, manage your team, and process top-ups from one dashboard.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/prepaid",
  },
};

export default function PrepaidPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PrepaidHero />
      <PrepaidHowItWorks />
      <PrepaidFeatures />
      <PrepaidDeepDive />
      <PrepaidPricing />
      <PrepaidFAQ />
      <PrepaidCTA />
      <Footer />
    </div>
  );
}
