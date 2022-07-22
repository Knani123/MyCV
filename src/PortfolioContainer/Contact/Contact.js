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
import Sociale from "../Sociale/Sociale";

const Contact = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  const [sending, setSending] = useState(false);
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
    setSending(true);
    emailjs
      .sendForm(
        "service_xa3igu7",
        "template_5nn846u",
        form.current,
        "cpjF9rXI9ymIkgbo2"
      )
      .then(
        (result) => {
          setSending(false);
          setState({
            open: true,
            vertical: "top",
            horizontal: "right",
          });
          e.target.reset();
        },
        (error) => {
          console.log("error", error);
        }
      );
  };
  return (
    <div className="contact-container" id="contact">
      <div className="contact-head">
        <h1>Contact Me</h1>
        <p style={{ color: "orange" }}>let's keep in touch</p>
        <Divider
          sx={{
            // backgroundColor: "purple",
            backgroundColor: " #b20d0d",
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
                  // src={require("../../assets/Home/send.png")}
                  src={require("../../assets/Home/email2.jpg")}
                  alt="send message"
                />
              </div>
              <Sociale />
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
                  disabled={sending}
                />
                <TextField
                  disabled={sending}
                  sx={{ margin: "5px" }}
                  fullWidth
                  label="Email"
                  size="small"
                  type="email"
                  name="email"
                  required
                />
                <TextField
                  disabled={sending}
                  sx={{ margin: "5px" }}
                  fullWidth
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  name="message"
                  required
                />
                <button
                  className="myButton"
                  type="submit"
                  value="Send"
                  disabled={sending}
                >
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
                  <Snackbar
                    open={sending}
                    key={vertical + horizontal}
                    anchorOrigin={{ vertical, horizontal }}
                  >
                    <Alert severity="warning" sx={{ width: "100%" }}>
                      Email sending ...
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
