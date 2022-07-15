import { Paper } from "@material-ui/core";
import { Divider, Typography } from "@mui/material";
import React from "react";
import "./About.css";
const About = () => {
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
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
            perspiciatis quo suscipit maxime ad odio necessitatibus accusantium
            doloribus doloremque a unde eum corporis, aut accusamus laudantium?
            Voluptate necessitatibus accusantium culpa!
          </Typography>
          <br />
          <ul>
            <li>
              {" "}
              <Typography variant="subtitle2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Debitis, dicta.
              </Typography>
            </li>
            <li>
              {" "}
              <Typography variant="subtitle2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ratione, et.
              </Typography>
            </li>
            <li>
              {" "}
              <Typography variant="subtitle2">Lorem ipsum dolor sit</Typography>
            </li>
            <li>
              {" "}
              <Typography variant="subtitle2">Lorem ipsum elit.</Typography>
            </li>
            <li>
              {" "}
              <Typography variant="subtitle2">
                Lorem dolo consectetur adipisicing elit. Quo, ipsa.
              </Typography>
            </li>
            <li>
              {" "}
              <Typography variant="subtitle2">
                Lorem adipisicing elit. Enim, minima?
              </Typography>
            </li>
          </ul>
        </div>
      </Paper>
    </div>
  );
};

export default About;
