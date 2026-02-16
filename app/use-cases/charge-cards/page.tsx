import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import UseCaseHero from "../../components/use-cases/UseCaseHero";
import UseCaseFeatures from "../../components/use-cases/UseCaseFeatures";
import UseCaseHowItWorks from "../../components/use-cases/UseCaseHowItWorks";
import UseCaseCTA from "../../components/use-cases/UseCaseCTA";
import Footer from "../../components/Footer";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Business Charge Cards with Credit Line Management",
  description:
    "Issue business charge cards with credit line management, monthly billing cycles, grace periods, and automated statement generation for corporate spending.",
  openGraph: {
    title: "PG Ecom - Business Charge Cards",
    description:
      "Issue business charge cards with credit line management, monthly billing cycles, grace periods, and automated statement generation for corporate spending.",
    url: "https://www.pgecom.com/use-cases/charge-cards",
  },
  twitter: {
    title: "PG Ecom - Business Charge Cards",
    description:
      "Issue business charge cards with credit line management, monthly billing cycles, grace periods, and automated statement generation for corporate spending.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/use-cases/charge-cards",
  },
};

export default function ChargeCardsPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 2, name: "Use Cases", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 3, name: "Business Charge Cards", item: "https://www.pgecom.com/use-cases/charge-cards" },
          ],
        }}
      />
      <Navbar />
      <UseCaseHero slug="chargeCards" />
      <UseCaseFeatures slug="chargeCards" />
      <UseCaseHowItWorks slug="chargeCards" />
      <UseCaseCTA slug="chargeCards" />
      <Footer />
    </div>
  );
}
