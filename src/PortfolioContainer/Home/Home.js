import React from "react";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";

import "./Home.css";
const Home = () => {
  return (
    <div className="home-container" id="home">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
};

export default Home;
