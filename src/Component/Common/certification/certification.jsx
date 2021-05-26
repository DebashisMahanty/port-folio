import React from "react";
import { BiCertification } from 'react-icons/bi';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import timelineElements from "./timelineElements";
import "./style.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "./stylemin.css";


function App() {

  let workIconStyles = { background: "cyan" };
  let schoolIconStyles = { background: "cyan" };

  // const body = {
  //   backgroundImage: `url(${BackgroundImage})`,
  //   backgroundSize: "cover",
  //   color:"white"
  // };

  const heading2 = {
    fontSize:"100px",
    color:"#2b3035",
    textAlign:"right",
    fontFamily: "Pacifico ,cursive"
  };


  // const heading2 = {
  //   color: "white",
  //   marginTop: "6rem",
  // };

  return (
    <div>
      <h1 style={heading2} class="title" id={'Certification'}>&#60;Certification&#62;</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <BiCertification /> : <AiFillSafetyCertificate />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default App;