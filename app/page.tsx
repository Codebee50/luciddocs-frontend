import HeroSection from "@/sections/HeroSection";
import Benefits from "@/sections/Benefits";
import Footer from "@/components/Footer";
import HowItWorks from "@/sections/HowItWorks";
import SchoolsMarquee from "@/components/SchoolsMarquee";
import Contact from "@/sections/Contact";
import CallToAction from "@/sections/CallToAction";
export default function Home() {
  return (
    <div className="flex flex-col bg-bg-primary">
      <HeroSection />
      <SchoolsMarquee />
      <Benefits />
      <HowItWorks />
      <Contact />
      <CallToAction />
      <Footer />
    </div>
  );
}
