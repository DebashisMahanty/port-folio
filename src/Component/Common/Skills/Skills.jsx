import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import { AiFillHtml5, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiSass, DiIllustrator } from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { FaReact, FaJira, FaConfluence, FaFigma } from "react-icons/fa";
import { SiJavascript, SiStyledComponents , SiRedux , SiAdobephotoshop, SiAdobexd, SiCanva, SiAdobeindesign, SiSketch} from "react-icons/si";
import "./styles.css";

function AboutMe() {
  const body = {
    // backgroundImage: `url(${BackgroundImage})`,
    // backgroundColor:"white",
    backgroundSize: "cover"
  };
  const skill = {
    fontSize:"100px",
    color:"#2b3035",
    fontFamily: "Pacifico ,cursive",
    textAlign:"right"
  };

  return (
    <div style={body} id={'Skills'}>
      <div class="container">
        <h1 style={skill}>&#60;Skills&#62;</h1>
        <br /><br /><br /><br /><br />
        {/* <h3 style={SubSkill}>Web Development</h3> */}
        <Container>
        <div class="ok" id="text">
          <Row>
            <Col>
            </Col>
            <Col>
              <a href="">
                <AiFillHtml5 />
              </a>
              <p>HTML5</p>
            </Col>
            <Col>
              <a href="">

                <DiCss3 />
              </a>
              <p>CSS3</p>
            </Col>
            <Col>
              <a href="">
                <SiJavascript />
              </a>
              <p>JAVA SCRIPT</p>
            </Col>
            <Col>
              <a href="">
                <BsFillBootstrapFill />
              </a>
              <p>BOOTSTRAP</p>
            </Col>
            <Col>
              <a href="">
                <FaReact />
              </a>
              <p>REACT JS</p>
            </Col>
            <Col>
              <a href="">
                <SiRedux/>
              </a>
              <p>REDUX</p>
            </Col>
            <Col>
              <a href="">
                <DiSass/>
              </a>
              <p>SASS</p>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row>
          <Col>
            </Col>
          <Col>
          <Col>
            </Col>
            </Col>
            <Col>
              <a href="">
                <SiStyledComponents/>
              </a>
              <p>STYLED COMPONENT</p>
            </Col>
            <Col>
              <a href="">
                <FaJira />
              </a>
              <p>JIRA</p>
            </Col>
            <Col>
              <a href="">
                <FaConfluence />
              </a>
              <p>CONFLUENCE</p>
            </Col>
            <Col>
              <a href="">
                <AiFillGitlab />
              </a>
              <p>GITLAB</p>
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
          </div>
        </Container>

        {/* <h3 style={SubSkill}>Design</h3> */}

      
        <Container>
        <div class="ok skillMF" id="text">
          <Row>
          <Col>
            </Col>
            <Col>
              <a href="">
                <SiAdobephotoshop/>
              </a>
              <p>PHOTOSHOP</p>
            </Col>
            <Col>
              <a href="">
                <DiIllustrator />
              </a>
              <p>ILLUSTRATOR</p>
            </Col>
            <Col>
              <a href="">
                <SiAdobexd />
              </a>
              <p>ADOBE XD</p>
            </Col>
            <Col>
              <a href="">
                <FaFigma />
              </a>
              <p>FIGMA</p>
            </Col>
            <Col>
              <a href="">
                <SiSketch />
              </a>
              <p>SKETCH</p>
            </Col>
          <Col>
              <a href="">
                <SiAdobeindesign/>
              </a>
              <p>INDESIGN</p>
            </Col>
            <Col>
              <a href="">
                <SiCanva />
              </a>
              <p>CANVA</p>
            </Col>
            <Col>
            </Col>  
          </Row>
          <Row>
          </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AboutMe;
