import { Rating, Typography } from "@mui/material";
import React from "react";
import "./Card.css";
const Card = ({ pre }) => {
  const { name, poste, temoin, image } = pre;

  return (
    <div className="card-container">
      <Typography variant="caption" fontStyle="italic" textAlign="justify">
        <span className="quote">&#8220;</span> {temoin}
        <span className="quote">&#8221;</span>
      </Typography>
      <Rating readOnly value={5} size="small" />
      <div className="card-perso">
        <img
          // src={require("../../../assets/Home/profilephoto.jpg")}
          src={image}
          alt="fff"
          className="card-img"
        />
        <span className="card-person-info">
          <Typography variant="body2">{name}</Typography>
          <Typography variant="caption">{poste}</Typography>
        </span>
      </div>
    </div>
  );
};

export default Card;
