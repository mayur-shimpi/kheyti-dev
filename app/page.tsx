import Appbar from "./components/appbar";
import HeroSection from "./components/landing/heroSection";
import Footer from "./components/footer";
import FarmingResolutionSection from "./components/landing/farmingResolutionSection";
import GreenBoxScrollingSection from "./components/landing/greenBoxScrollingSection";
import MilestonesSection from "./components/landing/milestonesSection";
import FootprintSection from "./components/landing/footprintsSection";
import OurGoalSection from "./components/landing/ourGoalSection";
import OurVisionSection from "./components/landing/ourVisionSection";

export default function Home() {
  return (
    <div className="relative">
      <Appbar />
      <HeroSection />
      <FarmingResolutionSection />
      <GreenBoxScrollingSection />
      <MilestonesSection />
      <FootprintSection />
      <OurGoalSection />
      <OurVisionSection />
      <Footer />
    </div>
  );
}
