import Navbar from "../components/Navbar";
import EcomHero from "../components/ecommerce/EcomHero";
import EcomFeatures from "../components/ecommerce/EcomFeatures";
import EcomDashboard from "../components/ecommerce/EcomDashboard";
import EcomIntegrations from "../components/ecommerce/EcomIntegrations";
import EcomInvoice from "../components/ecommerce/EcomInvoice";
import EcomPricing from "../components/ecommerce/EcomPricing";
import EcomCTA from "../components/ecommerce/EcomCTA";
import Footer from "../components/Footer";

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <EcomHero />
      <EcomFeatures />
      <EcomDashboard />
      <EcomIntegrations />
      <EcomInvoice />
      <EcomPricing />
      <EcomCTA />
      <Footer />
    </div>
  );
}
