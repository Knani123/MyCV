import { Chip, Paper } from "@mui/material";
import React from "react";
import "./Educa.css";
const Educa = ({ uni, an, diploma }) => {
  return (
    <div className="Educa-container">
      <span className="Educa-header">
        <h5>{uni}</h5>{" "}
        <Chip
          label={an}
          sx={{ color: "white", backgroundColor: "#24263b" }}
          variant="filled"
        />
      </span>
      <p>{diploma}</p>
    </div>
  );
};

export default Educa;
