import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Stats from "../Stats/Stats";
import Information from "../Information/Information";
import Contact from "../Contact/Contact";
import Api from "../Api/Api";

const Home = () => {
  return (
    <Layout>
        <Hero />
        <About />
        <Stats />
        <Information />
        <Api />
        <Contact />
    </Layout>
  );
};
export default Home;