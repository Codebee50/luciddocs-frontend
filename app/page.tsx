import HeroSection from "@/sections/HeroSection";
import Benefits from "@/sections/Benefits";
import Footer from "@/components/Footer";
import HowItWorks from "@/sections/HowItWorks";
import SchoolsMarquee from "@/components/SchoolsMarquee";
export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SchoolsMarquee />
      <Benefits />
      <HowItWorks />
      <Footer />
    </div>
  );
}
