import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import UseCaseHero from "../../components/use-cases/UseCaseHero";
import UseCaseFeatures from "../../components/use-cases/UseCaseFeatures";
import UseCaseHowItWorks from "../../components/use-cases/UseCaseHowItWorks";
import UseCaseCTA from "../../components/use-cases/UseCaseCTA";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Business Charge Cards",
  description:
    "Issue business charge cards with credit line management, monthly billing cycles, grace periods, and automated statement generation.",
  openGraph: {
    title: "PG Ecom - Business Charge Cards",
    description:
      "Issue business charge cards with flexible credit lines, billing cycles, and automated statement generation.",
    url: "https://www.pgecom.com/use-cases/charge-cards",
  },
  twitter: {
    title: "PG Ecom - Business Charge Cards",
    description:
      "Issue business charge cards with flexible credit lines, billing cycles, and automated statement generation.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/use-cases/charge-cards",
  },
};

export default function ChargeCardsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <UseCaseHero slug="chargeCards" />
      <UseCaseFeatures slug="chargeCards" />
      <UseCaseHowItWorks slug="chargeCards" />
      <UseCaseCTA slug="chargeCards" />
      <Footer />
    </div>
  );
}
