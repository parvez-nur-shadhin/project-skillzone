import Banner from "@/Components/Banner";
import Services from "@/Components/Services";
import Stats from "@/Components/Stats";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Banner />
      <Services />
      <Testimonials />
      <Stats />
    </div>
  );
}
