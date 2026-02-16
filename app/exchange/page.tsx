import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExchangeHero from "../components/exchange/ExchangeHero";
import ExchangeFeatures from "../components/exchange/ExchangeFeatures";
import ExchangeHowItWorks from "../components/exchange/ExchangeHowItWorks";
import ExchangeSecurity from "../components/exchange/ExchangeSecurity";
import ExchangeCTA from "../components/exchange/ExchangeCTA";

export const metadata: Metadata = {
  title: "PG Exchange — P2P Crypto Trading with Escrow Protection",
  description:
    "Buy and sell cryptocurrency peer-to-peer on PG Exchange. Secure escrow protection, 50+ payment methods, 9 cryptocurrencies, real-time chat, and KYC-verified traders.",
  openGraph: {
    title: "PG Exchange — P2P Crypto Trading with Escrow Protection",
    description:
      "Buy and sell cryptocurrency peer-to-peer on PG Exchange. Secure escrow protection, 50+ payment methods, 9 cryptocurrencies, and real-time chat.",
    url: "https://www.pgecom.com/exchange",
  },
  twitter: {
    title: "PG Exchange — P2P Crypto Trading with Escrow Protection",
    description:
      "Buy and sell cryptocurrency peer-to-peer on PG Exchange. Secure escrow protection, 50+ payment methods, 9 cryptocurrencies, and real-time chat.",
  },
  alternates: { canonical: "https://www.pgecom.com/exchange" },
};

export default function ExchangePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ExchangeHero />
      <ExchangeFeatures />
      <ExchangeHowItWorks />
      <ExchangeSecurity />
      <ExchangeCTA />
      <Footer />
    </div>
  );
}
