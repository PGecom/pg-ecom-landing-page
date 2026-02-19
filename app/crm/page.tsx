import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CrmHero from "../components/crm/CrmHero";
import CrmFeatures from "../components/crm/CrmFeatures";
import CrmHowItWorks from "../components/crm/CrmHowItWorks";
import CrmPricing from "../components/crm/CrmPricing";
import CrmSecurity from "../components/crm/CrmSecurity";
import CrmCTA from "../components/crm/CrmCTA";

export const metadata: Metadata = {
  title: "Captisso — Transform Your Customer Relationships | PG Ecom",
  description:
    "The all-in-one CRM that helps you close more deals, automate workflows, and grow your business faster. Smart contact management, sales pipeline, and advanced analytics.",
  openGraph: {
    title: "Captisso — Transform Your Customer Relationships | PG Ecom",
    description:
      "The all-in-one CRM that helps you close more deals, automate workflows, and grow your business faster. Smart contact management, sales pipeline, and advanced analytics.",
    url: "https://www.pgecom.com/crm",
  },
  twitter: {
    title: "Captisso — Transform Your Customer Relationships | PG Ecom",
    description:
      "The all-in-one CRM that helps you close more deals, automate workflows, and grow your business faster. Smart contact management, sales pipeline, and advanced analytics.",
  },
  alternates: { canonical: "https://www.pgecom.com/crm" },
};

export default function CrmPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CrmHero />
      <CrmFeatures />
      <CrmHowItWorks />
      <CrmPricing />
      <CrmSecurity />
      <CrmCTA />
      <Footer />
    </div>
  );
}
