import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import CoursesHero from "../components/courses/CoursesHero";
import CoursesFeatures from "../components/courses/CoursesFeatures";
import CoursesHowItWorks from "../components/courses/CoursesHowItWorks";
import CoursesInstructors from "../components/courses/CoursesInstructors";
import CoursesStudents from "../components/courses/CoursesStudents";
import CoursesIntegrations from "../components/courses/CoursesIntegrations";
import CoursesPricing from "../components/courses/CoursesPricing";
import CoursesTestimonials from "../components/courses/CoursesTestimonials";
import CoursesCTA from "../components/courses/CoursesCTA";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Online Courses & School Management Platform",
  description:
    "Create interactive courses, manage your school, process payments, and build a learning community. Drag-and-drop builder, auto certificates, multi-language support, and white-label ready.",
  openGraph: {
    title: "PG Ecom - Online Courses & School Management Platform",
    description:
      "Create and sell online courses with drag-and-drop builder, auto certificates, payment processing, community features, and white-label school management.",
    url: "https://www.pgecom.com/courses",
  },
  twitter: {
    title: "PG Ecom - Online Courses & School Management Platform",
    description:
      "Create and sell online courses with drag-and-drop builder, auto certificates, payment processing, community features, and white-label school management.",
  },
  alternates: {
    canonical: "https://www.pgecom.com/courses",
  },
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CoursesHero />
      <CoursesFeatures />
      <CoursesHowItWorks />
      <CoursesInstructors />
      <CoursesStudents />
      <CoursesIntegrations />
      <CoursesPricing />
      <CoursesTestimonials />
      <CoursesCTA />
      <Footer />
    </div>
  );
}
