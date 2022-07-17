import { Chip } from "@mui/material";
import React from "react";
import "./MySkills.css";
const MySkills = ({ uni, an, diploma }) => {
  return (
    <div className="MySkills-container">
      <Chip label="CATIA V5" />
      <Chip
        label="CAD
"
      />{" "}
      <Chip label="SolidWorks" />
      <Chip label="Deutsch" /> <Chip label="Englische Sprache" />
      <Chip label="success" /> <Chip label="SAP" />
      <Chip label="JavaScript" /> <Chip label="HTML" /> <Chip label="CSS" />{" "}
      <Chip label="React JS" /> <Chip label="Design" />
      <Chip label="Qualification" /> <Chip label="ISO 9001" />
      <Chip label="ISO 13485" /> <Chip label="Qualification" />
      <Chip label="Validation" />
      <Chip
        label="FAT SAT QI QO QP
"
      />
      <Chip
        label="MS Office
"
      />{" "}
      <Chip label="Sage ERP X3" />
      <Chip label="3D printing" /> <Chip label="R&D" />
      <Chip label="success" />
    </div>
  );
};

export default MySkills;
