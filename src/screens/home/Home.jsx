import React from "react";
import { Banner } from "../../components/Banner";
import { Contact } from "../../components/contact/Contact";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { Projects } from "../../components/Projects/Projects";
import { Skills } from "../../components/skills/Skills";


const Home = () => {
  return (
    <div className="homePage">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
