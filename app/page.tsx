import HeroSection from "@/sections/HeroSection";
import Benefits from "@/sections/Benefits";
export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Benefits />
    </div>
  );
}
