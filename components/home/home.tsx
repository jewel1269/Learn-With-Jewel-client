import React from "react";
import Banner from "../banner/banner";
import TutorialsSection from "../tutorialsSection/tutorialsSection";
import Community from "../community/community";
import Details from "../community/details";
import AboutJewel from "../aboutJewel/aboutJewel";
import Testimonials from "../testimonials/testimonials";

const HomeScreen = () => {
  return (
    <div>
      <Banner />
      <TutorialsSection />
      <Community />
      <Details />
      <AboutJewel />
      <Testimonials />
    </div>
  );
};

export default HomeScreen;
