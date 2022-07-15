import "./App.css";
import Home from "./PortfolioContainer/Home/Home";
import React from "react";
import Contact from "./PortfolioContainer/Contact/Contact";
import About from "./PortfolioContainer/AboutMe/About";
import Resume from "./PortfolioContainer/Resume/Resume";
import Testimonial from "./PortfolioContainer/Testimonial/Testimonial";
import ScrollToTop from "./PortfolioContainer/scroll/Scroll";
import { ContactUs } from "./PortfolioContainer/Email/Email.js";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Resume />
      <Testimonial />
      <Contact />
      <ScrollToTop />
      {/* <ContactUs /> */}
    </div>
  );
}

export default App;
