import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import UseCaseHero from "../../components/use-cases/UseCaseHero";
import UseCaseFeatures from "../../components/use-cases/UseCaseFeatures";
import UseCaseHowItWorks from "../../components/use-cases/UseCaseHowItWorks";
import UseCaseCTA from "../../components/use-cases/UseCaseCTA";
import Footer from "../../components/Footer";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Virtual Cards for Travel Platforms via API",
  description:
    "Use our card issuing API to create single-use virtual cards for travel supplier payments. Per-booking issuance, multi-currency support, and transaction webhooks.",
  openGraph: {
    title: "PG Ecom - Virtual Cards for Travel Platforms via API",
    description:
      "Use our card issuing API to create single-use virtual cards for travel supplier payments. Per-booking issuance, multi-currency support, and transaction webhooks.",
    url: "https://www.pgecom.com/use-cases/travel-platforms",
  },
  twitter: {
    title: "PG Ecom - Virtual Cards for Travel Platforms via API",
    description:
      "Use our card issuing API to create single-use virtual cards for travel supplier payments. Per-booking issuance, multi-currency support, and transaction webhooks.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/use-cases/travel-platforms",
  },
};

export default function TravelPlatformsPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 2, name: "Use Cases", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 3, name: "Travel Platform Cards", item: "https://www.pgecom.com/use-cases/travel-platforms" },
          ],
        }}
      />
      <Navbar />
      <UseCaseHero slug="travelPlatforms" />
      <UseCaseFeatures slug="travelPlatforms" />
      <UseCaseHowItWorks slug="travelPlatforms" />
      <UseCaseCTA slug="travelPlatforms" />
      <Footer />
    </div>
  );
}
