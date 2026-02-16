import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import IdHero from "../components/identity/IdHero";
import IdFeatures from "../components/identity/IdFeatures";
import IdPricing from "../components/identity/IdPricing";
import IdSecurity from "../components/identity/IdSecurity";
import IdFAQ from "../components/identity/IdFAQ";
import IdCTA from "../components/identity/IdCTA";
import Footer from "../components/Footer";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Identity Verification & KYC Compliance Platform",
  description:
    "Complete KYC and AML verification with document OCR, biometric matching, audit logs, multi-company support, and credit-based pricing. SOC 2 and GDPR compliant.",
  openGraph: {
    title: "PG Ecom - Identity Verification & KYC Platform",
    description:
      "Enterprise-grade KYC and AML verification with document OCR, biometric matching, audit logs, and credit-based pricing. SOC 2 compliant with 200+ document types.",
    url: "https://www.pgecom.com/identity",
  },
  twitter: {
    title: "PG Ecom - Identity Verification & KYC Platform",
    description:
      "Enterprise-grade KYC and AML verification with document OCR, biometric matching, audit logs, and credit-based pricing. SOC 2 compliant with 200+ document types.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/identity",
  },
};

export default function IdentityPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "PG Ecom Identity Verification",
          applicationCategory: "SecurityApplication",
          description:
            "Complete KYC and AML verification with document OCR, biometric matching, and credit-based pricing. SOC 2 and GDPR compliant.",
          url: "https://www.pgecom.com/identity",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
            description: "Credit-based pricing",
          },
        }}
      />
      <Navbar />
      <IdHero />
      <IdFeatures />
      <IdPricing />
      <IdSecurity />
      <IdFAQ />
      <IdCTA />
      <Footer />
    </div>
  );
}
