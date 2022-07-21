import React from "react";
import { personaleData } from "../../Data";
import "./Sociale.css";

const Sociale = () => {
  const {
    socialMedia: {
      facebook,
      Linkedin,
      Xing,
      Github,
      Instagram,
      Youtube,
      Twitter,
    },
  } = personaleData;

  return (
    <div className=" icon">
      <a href={Github} target="_blank" rel="noopener noreferrer">
        <i class="fa fa-github"></i>{" "}
      </a>
      <a href={facebook} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-facebook-square"></i>
      </a>
      <a href={Linkedin} target="_blank" rel="noopener noreferrer">
        <i class="fa fa-linkedin"></i>
      </a>
      <a href={Instagram} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-instagram"></i>
      </a>
      <a href={Youtube} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-youtube-square"></i>
      </a>
      <a href={Twitter} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-twitter"></i>
      </a>
    </div>
  );
};

export default Sociale;
