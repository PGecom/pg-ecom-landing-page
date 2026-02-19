import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MeetChimpHero from "../components/meetchimp/MeetChimpHero";
import MeetChimpFeatures from "../components/meetchimp/MeetChimpFeatures";
import MeetChimpHowItWorks from "../components/meetchimp/MeetChimpHowItWorks";
import MeetChimpSecurity from "../components/meetchimp/MeetChimpSecurity";
import MeetChimpCTA from "../components/meetchimp/MeetChimpCTA";

export const metadata: Metadata = {
  title: "MeetChimp — Professional Booking & Scheduling Platform | PG Ecom",
  description:
    "Simplify your scheduling with MeetChimp. Smart booking pages, calendar sync, automated reminders, payment collection, and client management — all in one professional platform.",
  openGraph: {
    title: "MeetChimp — Professional Booking & Scheduling Platform | PG Ecom",
    description:
      "Simplify your scheduling with MeetChimp. Smart booking pages, calendar sync, automated reminders, payment collection, and client management.",
    url: "https://www.pgecom.com/meetchimp",
  },
  twitter: {
    title: "MeetChimp — Professional Booking & Scheduling Platform | PG Ecom",
    description:
      "Simplify your scheduling with MeetChimp. Smart booking pages, calendar sync, automated reminders, payment collection, and client management.",
  },
  alternates: { canonical: "https://www.pgecom.com/meetchimp" },
};

export default function MeetChimpPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <MeetChimpHero />
      <MeetChimpFeatures />
      <MeetChimpHowItWorks />
      <MeetChimpSecurity />
      <MeetChimpCTA />
      <Footer />
    </div>
  );
}
