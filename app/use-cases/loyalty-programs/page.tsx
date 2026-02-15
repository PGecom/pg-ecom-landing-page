import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import UseCaseHero from "../../components/use-cases/UseCaseHero";
import UseCaseFeatures from "../../components/use-cases/UseCaseFeatures";
import UseCaseHowItWorks from "../../components/use-cases/UseCaseHowItWorks";
import UseCaseCTA from "../../components/use-cases/UseCaseCTA";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Loyalty & Rewards Cards",
  description:
    "Launch branded prepaid and reward cards with cashback programs, points-based rewards, customer segmentation, and engagement analytics.",
  openGraph: {
    title: "PG Ecom - Loyalty & Rewards Cards",
    description:
      "Launch branded reward cards with cashback, points-based rewards, and engagement analytics to drive customer loyalty.",
    url: "https://www.pgecom.com/use-cases/loyalty-programs",
  },
  twitter: {
    title: "PG Ecom - Loyalty & Rewards Cards",
    description:
      "Launch branded reward cards with cashback, points-based rewards, and engagement analytics.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/use-cases/loyalty-programs",
  },
};

export default function LoyaltyProgramsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <UseCaseHero slug="loyaltyPrograms" />
      <UseCaseFeatures slug="loyaltyPrograms" />
      <UseCaseHowItWorks slug="loyaltyPrograms" />
      <UseCaseCTA slug="loyaltyPrograms" />
      <Footer />
    </div>
  );
}
