import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import dark from "../../../images/dark.jpg";
import Typewriter from "typewriter-effect";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

function Intro() {
  //greenting js
  let greeting = "";
  const date = new Date();
  const hour = date.getHours();
  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good Afternoon";
  } else if (hour >= 17 && hour < 24) {
    greeting = "Good Evening";
  }

  const bodyyy = {
    backgroundColor: "black",
    marginBottom: "-5px",
  };
  const firstDiv = {
    marginTop: "16%",
  };
  const hi = {
    color: "#fff",
    textAlign: "left",
    fontWeight: "650",
  };
  const underLine = {
    width: "6vw",
    marginLeft: "18vw",
  };
  const greetings = {
    fontSize: "100px",
    textAlign: "left",
    marginTop: "2rem",
    letterSpacing: "1px",
    fontFamily: "Lexend, sans-serif",
  };

  const name = {
    color: "#fff",
    letterSpacing: "2px",
    fontSize: "45px",
    textAlign: "left",
    fontFamily: "Lexend, sans-serif",
  };
  const work = {
    color: "gray",
    fontWeight: "300",
    fontSize: "22px",
    textAlign: "left",
    fontFamily: "Montserrat, sans-serif",
  };
  const devImage = {
    height: "100%",
    width: "100%",
    marginTop: "-5px",
  };
  const btn = {
    textAlign: "left",
  };

  return (
    <div style={bodyyy}>
      <div class="container">
        <div class="row">
          <div class="col" style={firstDiv}>
            <h3 style={hi}>
              <Typewriter
                options={{
                  strings: ["Hi There !", "Hello Namaste  "],
                  autoStart: true,
                  loop: true,
                  delay: 150,
                }}
              />
            </h3>
            <div style={underLine}></div>
            <h1 style={name}>
              I<span style={{ color: "orange" }}>'</span> m Debashis Mahanty
            </h1>
            <div style={greetings}>
              <h3 style={{ color: "gray" }}>{greeting}!</h3>
            </div>
            <h6 style={work}>Web Developer & UI & UX Designer</h6>
            <div style={btn}>
              <a href="mailto:debashismahanty46@gmail.com">
                <button type="button" class="btn btn-outline-light">
                  Hire Me
                </button>
              </a>
            </div>
          </div>
          <div class="col">
            <img style={devImage} src={dark} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
