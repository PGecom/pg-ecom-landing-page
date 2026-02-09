import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Integrations from "./components/Integrations";
import Dashboard from "./components/Dashboard";
import Invoice from "./components/Invoice";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Integrations />
      <Dashboard />
      <Invoice />
      <Footer />
    </div>
  );
}
