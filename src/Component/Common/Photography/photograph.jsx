import React from "react";
import "./style.css";
import dark from "../../../images/dark.jpg";

function photograph() {
  const heading ={
    fontSize: "100px",
    color: "#2b3035",
    fontFamily: "Pacifico ,cursive",
    marginTop:"10%",
    marginBottom: "revert"
  }
  return (
    <div>
      <h1 style={heading} class="heading" id={'Photography'}>Photography</h1>
 <div class="tech-slideshow">
  <div class="mover-1"></div>
  <div class="mover-2"></div>
</div>
    </div>
  );
}

export default photograph;
