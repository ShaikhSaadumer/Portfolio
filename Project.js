import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content2 from "../components/Content2";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";
const Project = () => {
  return (
    <div>
      <Navbar />
      <Content2 heading="Projects." text="Some of my Recent Works" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
