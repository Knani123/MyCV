import { Chip, Paper } from "@mui/material";
import React from "react";
import "./Work.css";
const Workhistory = ({ Entr, an, Poste }) => {
  return (
    <div className="Work-container">
      <span className="Work-header">
        <h5>{Entr}</h5>
        <Chip
          label={an}
          sx={{ color: "white", backgroundColor: "#24263b" }}
          variant="filled"
        />
      </span>
      <p>{Poste}</p>
    </div>
  );
};

export default Workhistory;
