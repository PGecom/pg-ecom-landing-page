import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Whitelabel from "./components/Whitelabel";
import BringYourProvider from "./components/BringYourProvider";
import Integrations from "./components/Integrations";
import Dashboard from "./components/Dashboard";
import Invoice from "./components/Invoice";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Virtual & Physical Card Issuing Platform",
  description:
    "Create whitelabel card programs with virtual and physical cards. Bring your own provider or use ours. Set spend controls, manage card lifecycles, and integrate with our developer-ready API.",
  openGraph: {
    title: "PG Ecom - Virtual & Physical Card Issuing Platform",
    description:
      "Create whitelabel card programs with virtual and physical cards. Bring your own provider, set spend controls, and manage card lifecycles at scale.",
    url: "https://www.pgecom.com",
  },
  twitter: {
    title: "PG Ecom - Virtual & Physical Card Issuing Platform",
    description:
      "Create whitelabel card programs with virtual and physical cards. Bring your own provider, set spend controls, and manage card lifecycles at scale.",
  },
  alternates: {
    canonical: "https://www.pgecom.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Whitelabel />
      <BringYourProvider />
      <Integrations />
      <Dashboard />
      <Invoice />
      <Footer />
    </div>
  );
}
