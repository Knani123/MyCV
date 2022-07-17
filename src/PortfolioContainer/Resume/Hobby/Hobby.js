import { Chip } from "@mui/material";
import React from "react";
import "./Hobby.css";
const Hobby = ({ uni, an, diploma }) => {
  return (
    <div className="Hobby-container">
      <Chip label="Musique" />
      <Chip label="Mecanique" />
      <Chip label="Technologie" />
      <Chip label="SpaceX" /> <Chip label="Natation" />
      <Chip label="Sport" />
      <Chip label="Lecture" />
      <Chip label="Voyage" />{" "}
    </div>
  );
};

export default Hobby;
