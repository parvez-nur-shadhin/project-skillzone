import Banner from "@/Components/Banner";
import FAQ from "@/Components/FAQ";
import HowItWorks from "@/Components/HowItWorks";
import Services from "@/Components/Services";
import Stats from "@/Components/Stats";
import Testimonials from "@/Components/Testimonials";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <Services />
      <Testimonials />
      <Stats />
      <HowItWorks />
      <FAQ />
      <ToastContainer />
    </div>
  );
}
