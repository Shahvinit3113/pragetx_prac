import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import WorkflowSection from "../components/WorkflowSection";
import TriggerAction from "../components/TriggerAction";
import GrowthSection from "../components/GrowthSection";
import RightTime from "../components/RightTime";
import Artificial from "../components/Artificial";
import SuccessStories from "../components/SuccessStories";
import TrustedLeaders from "../components/TrustedLeaders";
import ReadyToAutomate from "../components/ReadyToAutomate";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="antialiased text-gray-900">
      <Navbar />

      <main>
        <HeroSection />
        <WorkflowSection />
        <TriggerAction />
        <GrowthSection />
        <RightTime />
        <Artificial />
        <SuccessStories />
        <TrustedLeaders />
        <ReadyToAutomate />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
