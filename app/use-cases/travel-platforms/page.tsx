import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import UseCaseHero from "../../components/use-cases/UseCaseHero";
import UseCaseFeatures from "../../components/use-cases/UseCaseFeatures";
import UseCaseHowItWorks from "../../components/use-cases/UseCaseHowItWorks";
import UseCaseCTA from "../../components/use-cases/UseCaseCTA";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Travel Platform Cards",
  description:
    "Issue single-use virtual cards for travel supplier payments, hotel bookings, and airline tickets with real-time authorization and multi-currency support.",
  openGraph: {
    title: "PG Ecom - Virtual Cards for Travel Platforms",
    description:
      "Issue single-use virtual cards for travel supplier payments with real-time authorization and multi-currency support.",
    url: "https://www.pgecom.com/use-cases/travel-platforms",
  },
  twitter: {
    title: "PG Ecom - Virtual Cards for Travel Platforms",
    description:
      "Issue single-use virtual cards for travel supplier payments with real-time authorization and multi-currency support.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/use-cases/travel-platforms",
  },
};

export default function TravelPlatformsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <UseCaseHero slug="travelPlatforms" />
      <UseCaseFeatures slug="travelPlatforms" />
      <UseCaseHowItWorks slug="travelPlatforms" />
      <UseCaseCTA slug="travelPlatforms" />
      <Footer />
    </div>
  );
}
