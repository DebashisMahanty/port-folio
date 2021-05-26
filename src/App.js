import './App.css';
import Intro from "./Component/Common/Landing/Intro.jsx";
import AboutMe  from "./Component/Common/About/AboutMe.jsx";
import Skills  from "./Component/Common/Skills/Skills.jsx";
import Certification from "./Component/Common/certification/certification.jsx";
import MyWork from "./Component/Common/myWork/myWork.jsx";
import Photograps from "./Component/Common/Photography/photograph.jsx";
import Footer from "./Component/Common/Footer/footer.jsx";
import Internship from "./Component/Common/internship/internship.jsx";
import Nav from "./Component/Common/navbar.jsx";
import Scroll from "./Component/Common/scroll/scroll.jsx";

function App() {
  return (
    <div className="App">
      <Scroll />
        <Nav />
      <Intro />
      <AboutMe />
      <Skills />
      <Internship />
      <Certification />
      <MyWork />
      <Photograps />
      <Footer />
    
    </div>
  );
}

export default App;
