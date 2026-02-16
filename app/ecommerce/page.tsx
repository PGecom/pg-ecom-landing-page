import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import EcomHero from "../components/ecommerce/EcomHero";
import EcomFeatures from "../components/ecommerce/EcomFeatures";
import EcomDashboard from "../components/ecommerce/EcomDashboard";
import EcomIntegrations from "../components/ecommerce/EcomIntegrations";
import EcomInvoice from "../components/ecommerce/EcomInvoice";
import EcomPricing from "../components/ecommerce/EcomPricing";
import EcomCTA from "../components/ecommerce/EcomCTA";
import Footer from "../components/Footer";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Ecommerce Platform for Online Stores",
  description:
    "Build, launch, and scale your online store with product management, payment processing, multi-shop support, print on demand, and multi-channel selling.",
  openGraph: {
    title: "PG Ecom - Ecommerce Platform for Online Stores",
    description:
      "Build, launch, and scale your online store with product management, MonCash and Stripe payments, multi-shop support, print on demand, and multi-channel selling.",
    url: "https://www.pgecom.com/ecommerce",
  },
  twitter: {
    title: "PG Ecom - Ecommerce Platform for Online Stores",
    description:
      "Build, launch, and scale your online store with product management, MonCash and Stripe payments, multi-shop support, print on demand, and multi-channel selling.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/ecommerce",
  },
};

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "PG Ecom Ecommerce",
          applicationCategory: "BusinessApplication",
          description:
            "Build, launch, and scale your online store with product management, payment processing, and multi-channel selling.",
          url: "https://www.pgecom.com/ecommerce",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "Free tier available",
          },
        }}
      />
      <Navbar />
      <EcomHero />
      <EcomFeatures />
      <EcomDashboard />
      <EcomIntegrations />
      <EcomInvoice />
      <EcomPricing />
      <EcomCTA />
      <Footer />
    </div>
  );
}
