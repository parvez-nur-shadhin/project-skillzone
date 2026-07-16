import Banner from "@/Components/Banner";
import FAQ from "@/Components/FAQ";
import FeaturedCourses from "@/Components/Featured";
import HowItWorks from "@/Components/HowItWorks";
import Services from "@/Components/Services";
import Stats from "@/Components/Stats";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <FeaturedCourses />
      <Services />
      <Testimonials />
      <Stats />
      <HowItWorks />
      <FAQ />
    </div>
  );
}
