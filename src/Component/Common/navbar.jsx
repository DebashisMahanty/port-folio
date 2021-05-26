import React, { Component } from "react";
import  {Navbar, Nav} from "react-bootstrap";


class navbar extends Component {
  render() {
      const nav1 = {
          fontSize:"22px"
      }
      const centerDiv ={
        marginLeft: "26%"
      }
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" style={centerDiv}>
              <Nav.Link href="#AboutMe" style={nav1}>AboutMe</Nav.Link>
              <Nav.Link href="#Skills" style={nav1}>Skills</Nav.Link>
              <Nav.Link href="#Internship" style={nav1}>Internship</Nav.Link>
              <Nav.Link href="#Certification" style={nav1}>certification</Nav.Link>
              <Nav.Link href="#MyWork" style={nav1}>MyWork</Nav.Link>
              <Nav.Link href="#Photography" style={nav1}>Photography</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default navbar;
