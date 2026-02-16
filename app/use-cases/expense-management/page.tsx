import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import UseCaseHero from "../../components/use-cases/UseCaseHero";
import UseCaseFeatures from "../../components/use-cases/UseCaseFeatures";
import UseCaseHowItWorks from "../../components/use-cases/UseCaseHowItWorks";
import UseCaseCTA from "../../components/use-cases/UseCaseCTA";
import Footer from "../../components/Footer";
import { JsonLd } from "../../components/JsonLd";

export const metadata: Metadata = {
  title: "Corporate Expense Management Cards via API",
  description:
    "Use our card issuing API to create corporate expense cards with spend controls, transaction webhooks, and card lifecycle management. Build your own expense solution.",
  openGraph: {
    title: "PG Ecom - Corporate Expense Cards via API",
    description:
      "Use our card issuing API to create corporate expense cards with spend controls, transaction webhooks, and card lifecycle management. Build your own expense solution.",
    url: "https://www.pgecom.com/use-cases/expense-management",
  },
  twitter: {
    title: "PG Ecom - Corporate Expense Cards via API",
    description:
      "Use our card issuing API to create corporate expense cards with spend controls, transaction webhooks, and card lifecycle management. Build your own expense solution.",
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
