import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import UseCaseHero from "../../components/use-cases/UseCaseHero";
import UseCaseFeatures from "../../components/use-cases/UseCaseFeatures";
import UseCaseHowItWorks from "../../components/use-cases/UseCaseHowItWorks";
import UseCaseCTA from "../../components/use-cases/UseCaseCTA";
import Footer from "../../components/Footer";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Loyalty & Rewards Cards via Card Issuing API",
  description:
    "Use our card issuing API to create branded prepaid and reward cards. Issue cards, load funds, and use transaction webhooks to build your own loyalty program.",
  openGraph: {
    title: "PG Ecom - Loyalty & Rewards Cards via API",
    description:
      "Use our card issuing API to create branded prepaid and reward cards. Issue cards, load funds, and use transaction webhooks to build your own loyalty program.",
    url: "https://www.pgecom.com/use-cases/loyalty-programs",
  },
  twitter: {
    title: "PG Ecom - Loyalty & Rewards Cards via API",
    description:
      "Use our card issuing API to create branded prepaid and reward cards. Issue cards, load funds, and use transaction webhooks to build your own loyalty program.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/use-cases/loyalty-programs",
  },
};

export default function LoyaltyProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 2, name: "Use Cases", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 3, name: "Loyalty & Rewards Cards", item: "https://www.pgecom.com/use-cases/loyalty-programs" },
          ],
        }}
      />
      <Navbar />
      <UseCaseHero slug="loyaltyPrograms" />
      <UseCaseFeatures slug="loyaltyPrograms" />
      <UseCaseHowItWorks slug="loyaltyPrograms" />
      <UseCaseCTA slug="loyaltyPrograms" />
      <Footer />
    </div>
  );
}
