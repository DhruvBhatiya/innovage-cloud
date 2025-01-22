import React from "react";
import { Banner } from "../../components/Banner";
import { Contact } from "../../components/contact/Contact";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { Projects } from "../../components/Projects/Projects";
import { Skills } from "../../components/skills/Skills";

import { IntegrationTool } from "../../components/IntegrationTool/IntegrationTool";
import { BankFacilitySystem } from "../../components/BankFacilitySystem/BankFacilitySystem";
import HomeNumbers from "../../components/Numbers/HomeNumbers";


const Home = () => {
  return (
    <div className="homePage">
      <NavBar />
      <Banner />
      <Skills />
      {/* Portfolio */}
      <IntegrationTool />
      <HomeNumbers />
      <Projects />
      {/* <BankFacilitySystem /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
