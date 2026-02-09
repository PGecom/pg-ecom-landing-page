import Navbar from "../components/Navbar";
import PrepaidHero from "../components/prepaid/PrepaidHero";
import PrepaidHowItWorks from "../components/prepaid/PrepaidHowItWorks";
import PrepaidFeatures from "../components/prepaid/PrepaidFeatures";
import PrepaidDeepDive from "../components/prepaid/PrepaidDeepDive";
import PrepaidPricing from "../components/prepaid/PrepaidPricing";
import PrepaidFAQ from "../components/prepaid/PrepaidFAQ";
import PrepaidCTA from "../components/prepaid/PrepaidCTA";
import Footer from "../components/Footer";

export default function PrepaidPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PrepaidHero />
      <PrepaidHowItWorks />
      <PrepaidFeatures />
      <PrepaidDeepDive />
      <PrepaidPricing />
      <PrepaidFAQ />
      <PrepaidCTA />
      <Footer />
    </div>
  );
}
