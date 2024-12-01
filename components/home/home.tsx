import React from "react";
import Navbar from "../header/header";
import Banner from "../banner/banner";
import TutorialsSection from "../tutorialsSection/tutorialsSection";
import Community from "../community/community";
import Details from "../community/details";
import AboutJewel from "../aboutJewel/aboutJewel";
import Footer from "../footer/footer";
import Testimonials from "../testimonials/testimonials";

const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <TutorialsSection />
      <Community />
      <Details />
      <AboutJewel />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomeScreen;
