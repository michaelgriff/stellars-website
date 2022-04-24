import React, { useState } from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Team from "../components/Team";
import Faq from "../components/FAQ";
import Collab from "../components/Collab";
import Platform from "../components/Platform";
import Gallery from "../components/Gallery";
import Roadmap from "../components/Roadmap";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Banner />
      <div id="about">
        <About />
      </div>
      <div id="stellarspace">
        <Platform />
      </div>
      <div id="collection">
        <Gallery />
      </div>
      <div id="visionboard">
        <Roadmap />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="collabs">
        <Collab />
      </div>
    </div>
  );
};

export default Home;
