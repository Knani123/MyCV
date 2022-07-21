import { Divider, Typography } from "@mui/material";
import React from "react";
import Card from "./Card/Card";
import { TestimonialTadata } from "../../Data";
import "./Testimonial.css";
const Testimonial = () => {
  return (
    <div className="Testimonial-container" id="Testimonial">
      <div className="Testimonial-head">
        <h1 style={{ color: "white" }}>Testimonial</h1>
        <p style={{ color: "orange" }}>what they say about me ?</p>
        <Divider
          sx={{
            backgroundColor: "purple",
          }}
        />
      </div>
      <div className="Testimonial-section">
        {TestimonialTadata.map((pre, i) => (
          <li>
            <Card key={i} pre={pre} />
          </li>
        ))}
      </div>
      <img
        src={require("../../assets/Home/shapeBg.png")}
        alt=""
        style={{
          position: "absolute",
          bottom: -2,
          width: "100%",
          height: "10%",
        }}
      />
    </div>
  );
};

export default Testimonial;
