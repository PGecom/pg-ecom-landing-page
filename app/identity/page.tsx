import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import IdHero from "../components/identity/IdHero";
import IdFeatures from "../components/identity/IdFeatures";
import IdPricing from "../components/identity/IdPricing";
import IdSecurity from "../components/identity/IdSecurity";
import IdFAQ from "../components/identity/IdFAQ";
import IdCTA from "../components/identity/IdCTA";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Identity Verification Platform",
  description:
    "Complete KYC and AML verification with document OCR, biometric matching, audit logs, multi-company support, and credit-based pricing. SOC 2 and GDPR compliant.",
  openGraph: {
    title: "PG Ecom - Identity Verification & KYC Platform",
    description:
      "Enterprise-grade KYC and AML verification with document OCR, biometric matching, and credit-based pricing. SOC 2 compliant with 200+ document types supported.",
    url: "https://www.pgecom.com/identity",
  },
  twitter: {
    title: "PG Ecom - Identity Verification & KYC Platform",
    description:
      "Enterprise-grade KYC and AML verification with document OCR, biometric matching, and credit-based pricing. SOC 2 compliant with 200+ document types supported.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/identity",
  },
};

export default function IdentityPage() {
  return (
    <div className="min-h-screen bg-white">
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
