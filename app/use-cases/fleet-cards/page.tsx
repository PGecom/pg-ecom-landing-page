import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import UseCaseHero from "../../components/use-cases/UseCaseHero";
import UseCaseFeatures from "../../components/use-cases/UseCaseFeatures";
import UseCaseHowItWorks from "../../components/use-cases/UseCaseHowItWorks";
import UseCaseCTA from "../../components/use-cases/UseCaseCTA";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Fleet & Fuel Cards",
  description:
    "Issue fleet and fuel cards with location controls, driver assignment, fuel-only restrictions, and real-time tracking for fleet operators and logistics companies.",
  openGraph: {
    title: "PG Ecom - Fleet & Fuel Cards",
    description:
      "Issue fleet and fuel cards with location controls, driver assignment, and real-time tracking for fleet operators.",
    url: "https://www.pgecom.com/use-cases/fleet-cards",
  },
  twitter: {
    title: "PG Ecom - Fleet & Fuel Cards",
    description:
      "Issue fleet and fuel cards with location controls, driver assignment, and real-time tracking.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/use-cases/fleet-cards",
  },
};

export default function FleetCardsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <UseCaseHero slug="fleetCards" />
      <UseCaseFeatures slug="fleetCards" />
      <UseCaseHowItWorks slug="fleetCards" />
      <UseCaseCTA slug="fleetCards" />
      <Footer />
    </div>
  );
}
