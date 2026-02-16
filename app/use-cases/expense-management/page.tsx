import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import UseCaseHero from "../../components/use-cases/UseCaseHero";
import UseCaseFeatures from "../../components/use-cases/UseCaseFeatures";
import UseCaseHowItWorks from "../../components/use-cases/UseCaseHowItWorks";
import UseCaseCTA from "../../components/use-cases/UseCaseCTA";
import Footer from "../../components/Footer";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Corporate Expense Management Cards & Controls",
  description:
    "Issue corporate expense cards with real-time spend controls, category restrictions, and automated reconciliation. Eliminate manual expense reports and streamline approvals.",
  openGraph: {
    title: "PG Ecom - Corporate Expense Management Cards",
    description:
      "Issue corporate expense cards with real-time spend controls, category restrictions, and automated reconciliation. Eliminate manual expense reports and streamline approvals.",
    url: "https://www.pgecom.com/use-cases/expense-management",
  },
  twitter: {
    title: "PG Ecom - Corporate Expense Management Cards",
    description:
      "Issue corporate expense cards with real-time spend controls, category restrictions, and automated reconciliation. Eliminate manual expense reports and streamline approvals.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/use-cases/expense-management",
  },
};

export default function ExpenseManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 2, name: "Use Cases", item: "https://www.pgecom.com" },
            { "@type": "ListItem", position: 3, name: "Expense Management", item: "https://www.pgecom.com/use-cases/expense-management" },
          ],
        }}
      />
      <Navbar />
      <UseCaseHero slug="expenseManagement" />
      <UseCaseFeatures slug="expenseManagement" />
      <UseCaseHowItWorks slug="expenseManagement" />
      <UseCaseCTA slug="expenseManagement" />
      <Footer />
    </div>
  );
}
