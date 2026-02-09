import Navbar from "../components/Navbar";
import IdHero from "../components/identity/IdHero";
import IdFeatures from "../components/identity/IdFeatures";
import IdPricing from "../components/identity/IdPricing";
import IdSecurity from "../components/identity/IdSecurity";
import IdFAQ from "../components/identity/IdFAQ";
import IdCTA from "../components/identity/IdCTA";
import Footer from "../components/Footer";

export default function IdentityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <IdHero />
      <IdFeatures />
      <IdPricing />
      <IdSecurity />
      <IdFAQ />
      <IdCTA />
      <Footer />
    </div>
  );
}
