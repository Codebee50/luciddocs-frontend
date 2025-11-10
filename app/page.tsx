import HeroSection from "@/sections/HeroSection";
import Benefits from "@/sections/Benefits";
import Footer from "@/components/Footer";
import HowItWorks from "@/sections/HowItWorks";
export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Benefits />
      <HowItWorks />
      <Footer />
    </div>
  );
}
