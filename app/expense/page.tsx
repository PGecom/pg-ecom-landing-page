import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExpenseHero from "../components/expense/ExpenseHero";
import ExpenseFeatures from "../components/expense/ExpenseFeatures";
import ExpenseHowItWorks from "../components/expense/ExpenseHowItWorks";
import ExpenseSecurity from "../components/expense/ExpenseSecurity";
import ExpenseCTA from "../components/expense/ExpenseCTA";

export const metadata: Metadata = {
  title: "Expenci — Smart Business Expense Management",
  description:
    "Track and manage your business expenses efficiently. Capture receipts, automate categorization, enforce policies, and generate real-time reports with Expenci.",
  openGraph: {
    title: "Expenci — Smart Business Expense Management",
    description:
      "Track and manage your business expenses efficiently with Expenci. Smart receipt scanning, approval workflows, and real-time reporting.",
    url: "https://www.pgecom.com/expense",
  },
  twitter: {
    title: "Expenci — Smart Business Expense Management",
    description:
      "Track and manage your business expenses efficiently with Expenci.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/expense",
  },
};

export default function ExpensePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ExpenseHero />
      <ExpenseFeatures />
      <ExpenseHowItWorks />
      <ExpenseSecurity />
      <ExpenseCTA />
      <Footer />
    </div>
  );
}
