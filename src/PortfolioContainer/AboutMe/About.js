import { Paper } from "@material-ui/core";
import { Divider, Typography } from "@mui/material";
import React from "react";
import { abouteData } from "../../Data";
import "./About.css";
const About = () => {
  const { competence, presentation } = abouteData;
  return (
    <div className="about-container" id="about">
      <div className="about-head">
        <h1>About Me</h1>
        <p style={{ color: "orange" }}>Why choose me ?</p>
        <Divider
          sx={{
            backgroundColor: "purple",
          }}
        />
      </div>
      <Paper className="about-section" elevation={4}>
        <div className="image-container">
          <img
            src={require("../../assets/Home/Resume.jpg")}
            alt=""
            className="image"
          />
        </div>
        <div className="why">
          <Typography variant="body2">{presentation}</Typography>
          <br />
          <ul>
            {competence.map((pre, i) => (
              <li>
                {" "}
                <Typography key={i} variant="subtitle2">
                  {pre}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </Paper>
    </div>
  );
};

export default About;
