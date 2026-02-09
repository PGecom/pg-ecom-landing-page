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
