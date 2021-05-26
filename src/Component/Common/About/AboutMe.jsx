import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import vector from "../../../images/vector.jpg";
import Resume from "../../../images/resume.pdf";
import { Col, Row, Button } from "reactstrap";
import Background from "../../../images/background1.jpg";
import "./styles.css";

function AboutMe() {
  const body = {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 15%",

  };
  const bodyy = {
    marginTop:"2rem",
    marginBottom:"4rem"
  }

  const heading = {
    fontSize: "100px",
    color: "#2b3035",
    textAlign:"left",
    fontFamily: "Pacifico ,cursive",
    paddingTop: "2rem",
  };

  const about = {
    marginTop: "6rem",
    marginRight:"4rem",
    fontFamily: "Raleway , sans-serif"
  };

  return (
    <div style={body} id={'AboutMe'}>
      <h1 style={heading} class="heading">&#60;Aboutme&#62;</h1>
      <Row>
        <Col>
          <div class="box" style={bodyy}>
            <div class="cardd">
              <div class="imgBx">
              <img src={vector} alt="Logo" style={{width:"100%"}} />
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div style={about}>
            <h4 style={{color:"#e9dfdf"}}>
            I am Debashis Priyadarshi Mahanty, Web developer and UI & UX Designer.
             Designing and Coding have been my passion since the days I started working 
             with computers. I enjoy creating beautifully designed, intuitive and functional websites.
            </h4>
          </div>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
          <Button color="primary">Resume</Button>
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default AboutMe;
