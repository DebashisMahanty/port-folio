// import React, {Component} from "react";
// import "./style.css";
// import { Card } from "reactstrap";
// import 'bootstrap/dist/js/bootstrap.min.js';
// import Accordion from "react-bootstrap/Accordion";

// const Internship = () => (
//     <div>
//       <Accordion defaultActiveKey="0">
//         <Card>
//           <Accordion.Toggle as={Card.Header} eventKey="0">
//             Click me!
//           </Accordion.Toggle>
//           <Accordion.Collapse eventKey="0">
//             <Card.Body>Hello! I'm the body</Card.Body>
//           </Accordion.Collapse>
//         </Card>
//       </Accordion>
//     </div>
//   );

// export default Internship;


import React, { Component } from 'react';
import "./style.css";
import { Card } from "reactstrap";
import 'bootstrap/dist/js/bootstrap.min.js';
import Accordion from "react-bootstrap/Accordion";

class internship extends Component {
  render() {
    const para = {
      color: "#979292",
      fontSize: "22px",
    };
    const company = {
      color: "#ebdfdf",
      fontWeight: "600",
      marginTop: "5rem",
    };
    const heading = {
      fontSize:"100px",
      color:"#2b3035",
      textAlign:"left",
      fontFamily: "Pacifico ,cursive"
    };
    return (
      <div>
     <h1 style={heading} id={'Internship'}>&#60;Internship&#62;</h1>
      <h3 style={company}>INFOVIZ</h3>
      <h6>Bhubaneswar, IN</h6>
      <h6 style={para}>
        I am doing now a project named UNIVERGENCE. Its a College Management system like plagarism Checker
        </h6>
      <h6 style={para}>
      text chat between teacher and student and more. In frontend we use React , Java Script, Styled Component ,
      </h6>{" "}
      <h6 style={para}>
    sass amd more. backend, I used MongoDB, Nodejs, Postman, Express.Js.
      </h6>
      <h6 style={para}>
      Here my work is Ui & UX design and frontend develop.
      </h6>
      <h3 style={company}>IDENTITY</h3>
      <h6>Bhubaneswar, IN</h6>
      <h6 style={para}>
        Here i have done many website design like how the website looks and user experience
        </h6>
      <h6 style={para}>
and i Learned here some of idea how the things to do and how to attract people
      </h6>{" "}
      </div>
    );
  }
}

export default internship;