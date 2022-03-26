import React, { useState } from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Team from "../components/Team";
import Faq from "../components/FAQ";
import Collab from "../components/Collab";

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
      <About />
      <Team />
      <Faq />
      <Collab />
    </div>
  );
};

export default Home;
