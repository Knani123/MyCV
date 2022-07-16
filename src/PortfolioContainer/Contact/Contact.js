import React, { useRef, useState, useEffect } from "react";
import Typical from "react-typical";
import {
  Alert,
  Button,
  Divider,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";

import "./Contact.css";

const Contact = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xa3igu7",
        "template_5nn846u",
        form.current,
        "cpjF9rXI9ymIkgbo2"
      )
      .then(
        (result) => {
          setState({
            open: true,
            vertical: "top",
            horizontal: "right",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact-container" id="contact">
      <div className="contact-head">
        <h1>Contact Me</h1>
        <p style={{ color: "orange" }}>let's keep in touch</p>
        <Divider
          sx={{
            backgroundColor: "purple",
          }}
        />
      </div>
      <div className="cotact-email">
        <Paper className="contact-section" elevation={4}>
          <div className="all-contact">
            <div className="cotact-image">
              <h4>
                <Typical
                  loop={Infinity}
                  steps={["Let's Touch 🤝", 1300, " Send me Email ✒️📧", 1300]}
                />
              </h4>
              <div className="figure">
                <Typography
                  sx={{ color: "wheat" }}
                  variant="caption"
                  fontStyle="italic"
                >
                  Send your message
                </Typography>
                <img
                  src={require("../../assets/Home/send.png")}
                  alt="send message"
                />
              </div>
              <div className=" icon">
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
            </div>
            <div className="cotact-send">
              <form ref={form} onSubmit={sendEmail} className="cotact-form">
                <TextField
                  sx={{ margin: "5px" }}
                  fullWidth
                  label="Name"
                  size="small"
                  type="text"
                  name="name"
                  required
                />
                <TextField
                  sx={{ margin: "5px" }}
                  fullWidth
                  label="Email"
                  size="small"
                  type="email"
                  name="email"
                  required
                />
                <TextField
                  sx={{ margin: "5px" }}
                  fullWidth
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  name="message"
                  required
                />
                <button className="myButton" type="submit" value="Send">
                  Send
                </button>
                <div>
                  <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    key={vertical + horizontal}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      Email was Successfully Sent!
                    </Alert>
                  </Snackbar>
                </div>
              </form>
            </div>
          </div>
        </Paper>
      </div>
      <div className="contact-footer">
        <Typography align="center" fontStyle="italic" variant="body2">
          KnaniYosri © {new Date().getFullYear()}. All rights reserved
        </Typography>
      </div>
    </div>
  );
};

export default Contact;
