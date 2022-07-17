import React from "react";
import { Link } from "react-scroll";
import Typical from "react-typical";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="cloz-icon">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-square"></i>
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-youtube-square"></i>
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <div className="profile-details-name">
              <span className="primary-next">
                Hello, I'm <span className="highlighted-text">Knani Yosri</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Engineer 💣",
                      1300,
                      "Developer 🖥️",
                      1300,
                      "Developer 📈🔨",
                      1300,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  knack of building applications with front and back end
                  operation{" "}
                </span>
              </span>
            </div>
            <div className="profile-options">
              {" "}
              <Link to="contact" smooth={true} duration={1500}>
                <button className="btn primary-btn"> Hire me</button>
              </Link>
              <a
                href={require(".././cv/resume.pdf")}
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn highlighted-btn">Get resume</button>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
