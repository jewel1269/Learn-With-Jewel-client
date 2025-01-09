import React from "react";
import Banner from "../banner/banner";
import TutorialsSection from "../tutorialsSection/tutorialsSection";
import Testimonials from "../testimonials/testimonials";
import FeaturesAndStats from "../featuresAndStats/featuresAndStats";

const HomeScreen = () => {
  return (
    <div>
      <Banner />
      <TutorialsSection />
      <FeaturesAndStats/>
      <Testimonials />
    </div>
  );
};

export default HomeScreen;
