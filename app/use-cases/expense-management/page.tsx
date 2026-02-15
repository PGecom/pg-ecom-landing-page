import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import UseCaseHero from "../../components/use-cases/UseCaseHero";
import UseCaseFeatures from "../../components/use-cases/UseCaseFeatures";
import UseCaseHowItWorks from "../../components/use-cases/UseCaseHowItWorks";
import UseCaseCTA from "../../components/use-cases/UseCaseCTA";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Expense Management Cards",
  description:
    "Issue corporate expense cards with real-time spend controls, category restrictions, and automated reconciliation. Eliminate manual expense reports.",
  openGraph: {
    title: "PG Ecom - Expense Management Cards",
    description:
      "Issue corporate expense cards with real-time spend controls and automated reconciliation. Eliminate manual expense reports.",
    url: "https://www.pgecom.com/use-cases/expense-management",
  },
  twitter: {
    title: "PG Ecom - Expense Management Cards",
    description:
      "Issue corporate expense cards with real-time spend controls and automated reconciliation.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/use-cases/expense-management",
  },
};

export default function ExpenseManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <UseCaseHero slug="expenseManagement" />
      <UseCaseFeatures slug="expenseManagement" />
      <UseCaseHowItWorks slug="expenseManagement" />
      <UseCaseCTA slug="expenseManagement" />
      <Footer />
    </div>
  );
}
