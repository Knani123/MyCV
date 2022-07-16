import { Divider, Grow, Paper, Typography } from "@mui/material";

import React, { useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import HistoryIcon from "@mui/icons-material/History";
import DevicesIcon from "@mui/icons-material/Devices";
import InsightsIcon from "@mui/icons-material/Insights";
import PaletteIcon from "@mui/icons-material/Palette";
import "./Resume.css";
import { useRef } from "react";
const Resume = () => {
  const Education = useRef(null);
  const Work = useRef(null);
  const Skills = useRef(null);
  const Projects = useRef(null);
  const Interests = useRef(null);
  const [ref, setRef] = useState({ nb: "Education" });
  const handelClick = (myref) => {
    setRef({ ...ref, nb: myref.current.className });
  };
  return (
    <div className="resume-container" id="resume">
      <div className="resume-head">
        <h1 style={{ color: "black" }}>Resume</h1>
        <p style={{ color: "orange" }}>My formal bio details</p>
        <Divider
          sx={{
            backgroundColor: "purple",
          }}
        />{" "}
      </div>
      <div className="resume-section">
        {" "}
        <Paper className="resume-section" elevation={4}>
          <div className="resume-jalon">
            <div className="icon2">
              <SchoolIcon
                sx={{ cursor: "pointer" }}
                onClick={() => handelClick(Education)}
              />
              <HistoryIcon
                sx={{ cursor: "pointer" }}
                onClick={() => handelClick(Work)}
              />
              <DevicesIcon
                sx={{ cursor: "pointer" }}
                onClick={() => handelClick(Skills)}
              />
              <InsightsIcon
                sx={{ cursor: "pointer" }}
                onClick={() => handelClick(Projects)}
              />
              <PaletteIcon
                sx={{ cursor: "pointer" }}
                onClick={() => handelClick(Interests)}
              />
            </div>
            <div className="jalon">
              <span
                className="jalon-item"
                onClick={() => handelClick(Education)}
              >
                <span
                  className="Education"
                  ref={Education}
                  style={{
                    width: ref.nb === "Education" ? "100%" : 0,
                    transition: "width 1s",
                  }}
                ></span>
                <Typography
                  sx={{ cursor: "pointer", paddingLeft: "10px" }}
                  style={{
                    color: ref.nb === "Education" && "white",
                    transition: "color 1s",
                    zIndex: 100,
                  }}
                >
                  Education
                </Typography>
              </span>
              <span className="jalon-item" onClick={() => handelClick(Work)}>
                <span
                  className="Work"
                  ref={Work}
                  style={{
                    width: ref.nb === "Work" ? "100%" : 0,
                    transition: "width 1s",
                  }}
                ></span>{" "}
                <Typography
                  sx={{ cursor: "pointer", paddingLeft: "10px" }}
                  style={{
                    color: ref.nb === "Work" && "white",
                    transition: "color 1s",
                    zIndex: 100,
                  }}
                >
                  Work History
                </Typography>{" "}
              </span>
              <span className="jalon-item" onClick={() => handelClick(Skills)}>
                <span
                  className="Skills"
                  ref={Skills}
                  style={{
                    width: ref.nb === "Skills" ? "100%" : 0,
                    transition: "width 1s",
                  }}
                ></span>{" "}
                <Typography
                  sx={{ cursor: "pointer", paddingLeft: "10px" }}
                  style={{
                    color: ref.nb === "Skills" && "white",
                    transition: "color 1s",
                    zIndex: 100,
                  }}
                >
                  Programming Skills
                </Typography>{" "}
              </span>
              <span
                className="jalon-item"
                onClick={() => handelClick(Projects)}
              >
                <span
                  className="Projects"
                  ref={Projects}
                  style={{
                    width: ref.nb === "Projects" ? "100%" : 0,
                    transition: "width 1s",
                  }}
                ></span>{" "}
                <Typography
                  sx={{ cursor: "pointer", paddingLeft: "10px" }}
                  style={{
                    color: ref.nb === "Projects" && "white",
                    transition: "color 1s",
                    zIndex: 100,
                  }}
                >
                  Projects
                </Typography>{" "}
              </span>
              <span
                className="jalon-item"
                onClick={() => handelClick(Interests)}
              >
                <span
                  className="Interests"
                  ref={Interests}
                  style={{
                    width: ref.nb === "Interests" ? "100%" : 0,
                    transition: "width 1s",
                  }}
                ></span>{" "}
                <Typography
                  sx={{ cursor: "pointer", paddingLeft: "10px" }}
                  style={{
                    color: ref.nb === "Interests" && "white",
                    transition: "color 1s",
                    zIndex: 100,
                  }}
                >
                  Interests
                </Typography>
              </span>
            </div>
          </div>
          <div className="resume-details">
            <Grow in timeout={1000}>
              <h1>{ref.nb}</h1>
            </Grow>
          </div>
        </Paper>
      </div>
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
