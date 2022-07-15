import React from "react";
import "./Resume.css";
const Resume = () => {
  return (
    <div className="Resume-container" id="resume">
      Resume
      <img
        src={require("../../assets/Home/shapeBg2.png")}
        alt=""
        style={{
          position: "absolute",
          bottom: -1,
          left: 0,
          width: "100%",
          height: "20%",
        }}
        id="img"
      />
    </div>
  );
};

export default Resume;
