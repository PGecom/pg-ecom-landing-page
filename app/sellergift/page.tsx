import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SellerGiftHero from "../components/sellergift/SellerGiftHero";
import SellerGiftFeatures from "../components/sellergift/SellerGiftFeatures";
import SellerGiftHowItWorks from "../components/sellergift/SellerGiftHowItWorks";
import SellerGiftSecurity from "../components/sellergift/SellerGiftSecurity";
import SellerGiftCTA from "../components/sellergift/SellerGiftCTA";

export const metadata: Metadata = {
  title: "SellerGift — Sell Digital Gift Cards Globally | PG Ecom",
  description:
    "Create, manage, and sell digital gift cards globally with SellerGift. White-label platform with multi-tenant architecture, instant delivery, and enterprise security.",
  openGraph: {
    title: "SellerGift — Sell Digital Gift Cards Globally | PG Ecom",
    description:
      "Create, manage, and sell digital gift cards globally with SellerGift. White-label platform with instant delivery and enterprise security.",
    url: "https://www.pgecom.com/sellergift",
  },
  twitter: {
    title: "SellerGift — Sell Digital Gift Cards Globally | PG Ecom",
    description:
      "Create, manage, and sell digital gift cards globally with SellerGift.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/sellergift",
  },
};

export default function SellerGiftPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SellerGiftHero />
      <SellerGiftFeatures />
      <SellerGiftHowItWorks />
      <SellerGiftSecurity />
      <SellerGiftCTA />
      <Footer />
    </div>
  );
}
