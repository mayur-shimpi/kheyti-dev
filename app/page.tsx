import Appbar from "./components/appbar";
import HeroSection from "./components/landing/heroSection";
import Footer from "./components/footer";
import FarmingResolutionSection from "./components/landing/farmingResolutionSection";
import GreenBoxScrollingSection from "./components/landing/greenBoxScrollingSection";
import MilestonesSection from "./components/landing/milestonesSection";
import FootprintSection from "./components/landing/footprintsSection";
import OurGoalSection from "./components/landing/ourGoalSection";
import OurVisionSection from "./components/landing/ourVisionSection";
import ReviewsSlider from "./components/landing/reviewsSection";
import CollabrationSection from "./components/landing/collabration";
import StoriesSection from "./components/landing/storiesSections";
import InnovationSection from "./components/landing/innovationSection";
import JoinUsSection from "./components/landing/joinusSection";
import FeaturesSections from "./components/landing/featuresSection";
import GetInTouchSection from "./components/landing/getInTouchSection";

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
      <ReviewsSlider />
      <CollabrationSection />
      <StoriesSection />
      <InnovationSection />
      <JoinUsSection />
      <FeaturesSections />
      <GetInTouchSection />
      <Footer />
    </div>
  );
}
