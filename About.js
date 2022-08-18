import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import Content2 from "../components/Content2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <Content2 heading="About." text="I am a Friendly Front-End Developer" />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
