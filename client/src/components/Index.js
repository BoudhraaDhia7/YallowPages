import React from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import About from "./about/About";
import Signup from "./breadcrumbs/Signup";
import Quote from "./quote/Quote";
import Contact from "./breadcrumbs/Contact";
import ContactUs from "./contact/Contact";
import Footer from "./footer/Footer";

import "../App.css";

const ui = (props) => {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <About></About>
      <Signup></Signup>
      <Quote></Quote>
      <Contact></Contact>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default ui;
