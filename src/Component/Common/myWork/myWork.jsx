// import React from "react";
// import { Col, Row } from "reactstrap";
// import "./styles.css";

// function myWork() {
//   const heading = {
//     fontSize: "100px",
//     color: "#2b3035",
//     fontFamily: "Pacifico ,cursive",
//     marginTop:"5%",
//     textAlign:"left"
//   };
// const para ={
//   // color: "#00000099",
//   // fontFamily: "Raleway, sans-serif",
//   // fontSize: "100%",
//   // fontWeight: "normal",
//   // marginTop: "200px",
//   // position: "absolute",
//   // textAlign: "center",
//   // zIndex: "9999"
// }

//   return (
//     <div>
//       <h1 style={heading}>&#60;My Works&#62;</h1>
//       <Row>
//         <Col>
//           <div class="card transition">
//             <h2 class="transition">Wild Life</h2>
//             <p style={para}>
//               I created the website with HTML, Css ,Bootstrap, Java Script its like a 
//               blogging website and help people like NGO.
//             </p>
//             <div class="cta-container transition">
//               <a href="#" class="cta">
//                 Project
//               </a>
//             </div>
//             <div class="card_circle transition"></div>
//           </div>
//         </Col>



//         <Col>
//           <div class="card transition">
//             <h2 class="transition">Company Website</h2>
//             <p style={para}>
//             I designed a Website for my company where i work .First i Work on ui & UX then designed a website for a Demo purpose 
//             </p>
//             <div class="cta-container transition">
//               <a href="#" class="cta">
//                 Project
//               </a>
//             </div>
//             <div class="card_circle1 transition"></div>
//           </div>
//         </Col>



//         <Col>
//           <div class="card transition">
//             <h2 class="transition">Univergence</h2>
//             <p style={para}>
//               Its a completly college management system I have done in this project as a UI & UX and Front end part like wire framing and coading 
//               .I use Xd for Designing abd React, Styled Component ,sass and more.in my last sem i have done this project
//             </p>
//             <div class="cta-container transition">
//               <a href="#" class="cta">
//                 Project
//               </a>
//             </div>
//             <div class="card_circle2 transition"></div>
//           </div>
//         </Col>



//         <Col>
//           <div class="card transition">
//             <h2 class="transition">UI & UX</h2>
//             <p style={para}>
//            I designed some UI & UX during my college project
//             </p>
//             <div class="cta-container transition">
//               <a href="#" class="cta">
//                 Project
//               </a>
//             </div>
//             <div class="card_circle3 transition"></div>
//           </div>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// export default myWork;

import React from 'react';
import { Col, Row } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./styles.css";


function myWork() {

  const heading = {
    fontSize: "100px",
    color: "#2b3035",
    fontFamily: "Pacifico ,cursive",
    marginTop:"5%",
    textAlign:"left"
  };
const para ={
  // color: "#00000099",
  // fontFamily: "Raleway, sans-serif",
  // fontSize: "100%",
  // fontWeight: "normal",
  // marginTop: "200px",
  // position: "absolute",
  // textAlign: "center",
  // zIndex: "9999"
}

  return (
    <div>
      <h1 style={heading} id={'MyWork'}>&#60;My Works&#62;</h1>
      <Row>
        <Col>
          <div class="card transition">
            <h2 class="transition">Wild Life</h2>
            <p style={para}>
              I created the website with HTML, Css ,Bootstrap, Java Script its like a 
              blogging website and help people like NGO.
            </p>
            <div class="cta-container transition">
              <a href="#" class="cta" >
                Project
              </a>
            </div>
            <div class="card_circle transition"></div>
          </div>
        </Col>



        <Col>
          <div class="card transition">
            <h2 class="transition">Company Website</h2>
            <p style={para}>
            I designed a Website for my company where i work .First i Work on ui & UX then designed a website for a Demo purpose 
            </p>
            <div class="cta-container transition">
              <a href="#" class="cta">
                Project
              </a>
            </div>
            <div class="card_circle1 transition"></div>
          </div>
        </Col>



        <Col>
          <div class="card transition">
            <h2 class="transition">Univergence</h2>
            <p style={para}>
              Its a completly college management system I have done in this project as a UI & UX and Frontend part like wire framing and coading 
              {/* .I use Xd for Designing abd React, Styled Component ,sass and more.in my last sem i have done this project */}
            </p>
            <div class="cta-container transition">
              <a href="#" class="cta">
                Project
              </a>
            </div>
            <div class="card_circle2 transition"></div>
          </div>
        </Col>



        <Col>
          <div class="card transition">
            <h2 class="transition">UI & UX</h2>
            <p style={para}>
           I designed some UI & UX during my college project
            </p>
            <div class="cta-container transition">
              <a href="#" class="cta">
                Project
              </a>
            </div>
            <div class="card_circle3 transition"></div>
          </div>
        </Col>
      </Row>
     
    </div>
  );
}
export default myWork;
