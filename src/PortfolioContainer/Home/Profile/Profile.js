import React from "react";
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
                Hello, I'm <span className="highlighted-text">USER</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Developper 💣",
                      1300,
                      "Ingeneer 🖥️",
                      1300,
                      "Manager 🔨",
                      1300,
                      "Project 📈",
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
              <button className="btn primary-btn"> Hire me</button>
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
