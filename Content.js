import "./ContentStyles.css";
import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="introimg" />
      </div>
      <div className="pagecontent">
        <p>I am a Learner at GameTrain</p>
        <h1>React Developer.</h1>

        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
