import { Rating, Typography } from "@mui/material";
import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div className="card-container">
      <Typography variant="caption" fontStyle="italic" textAlign="justify">
        <span className="quote">&#8220;</span> Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Vel, aperiam!lorem5 Lorem ipsum dolor sit
        amet. <span className="quote">&#8221;</span>
      </Typography>
      <Rating readOnly value={5} size="small" />
      <div className="card-perso">
        <img
          // src={require("../../../assets/Home/profilephoto.jpg")}
          src="https://heavy.com/wp-content/uploads/2018/04/gettyimages-669889300-e1523334582240.jpg?quality=65&strip=all"
          alt="fff"
          className="card-img"
        />
        <span className="card-person-info">
          <Typography variant="body2">Mark Elliot Zuckerberg</Typography>
          <Typography variant="caption">
            Co-founder and CEO of Meta Platforms{" "}
          </Typography>
        </span>
      </div>
    </div>
  );
};

export default Card;
