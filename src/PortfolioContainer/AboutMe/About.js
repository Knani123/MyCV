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
            Durant 6 ans d'expérience dans le domaine de l'ingénierie j'ai
            acquis de nombreuses compétences et connaissances qui me permettent
            de réussir dans les défis journaliers de mon métier . J'ai des
            compétences solides qui m'ont permis d'acquérir une maîtrise
            approfondie de la gestion de projet dans la conception et le
            développement des machines dans les relations et la communication
            avec les autres et en utilisation des nouveaux technologies .
          </Typography>
          <br />
          <ul>
            <li>
              {" "}
              <Typography variant="subtitle2">
                Gérer des projets des Qualification et Validation.
              </Typography>
            </li>
            <li>
              {" "}
              <Typography variant="subtitle2">
                Mise en route des nouvelles machine.
              </Typography>
            </li>
            <li>
              {" "}
              <Typography variant="subtitle2">
                Lancement, coordination et pilotage des projets
                d'industrialisation.
              </Typography>
            </li>
            <li>
              {" "}
              <Typography variant="subtitle2">
                Réalisation d’un dossier de qualification.
              </Typography>
            </li>
            <li>
              {" "}
              <Typography variant="subtitle2">
                Developement et conception.
              </Typography>
            </li>
            <li>
              {" "}
              <Typography variant="subtitle2">
                Analyser les resultat et prendre des décisions
              </Typography>
            </li>
          </ul>
        </div>
      </Paper>
    </div>
  );
};

export default About;
