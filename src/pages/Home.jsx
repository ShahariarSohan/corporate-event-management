import React from "react";
import Banner from "../components/Banner";
import HowWeWorks from "../components/HowWeWorks";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <HowWeWorks></HowWeWorks>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
