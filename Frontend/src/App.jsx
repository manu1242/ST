import React from "react";
import "./App.css";
import st from './assets/st.png'
import Designer from "./assets/Designer.png";
import Community from "./assets/Listener.png";
import ProblemSolver from "./assets/Problem solver.png";
import Trust from "./assets/trust.png";
import Home from "./assets/Home.png";
import Per1 from "./assets/person1.png";
import Per2 from "./assets/per2.png";
import Per3 from "./assets/per3.png";
import Per4 from "./assets/per4.png";
import Per5 from "./assets/per5.png";
import Per6 from "./assets/per6.png";
import Per7 from "./assets/per7.png";
import Per8 from "./assets/per8.png";
import Per9 from "./assets/per9.png";
import Per10 from "./assets/per10.png";
import Per11 from "./assets/per10.png";

function App() {
  return (
    <div className="bg">
      <div className="center-logo">
        <img src={Home} alt="Student Tribe" className="main-logo" />
        <img src={st} alt="Inner Center Image" className="overlay-logo" />
      </div>

      <div className="word move-right top-left">
        <img src={ProblemSolver} alt="problem solver" />
      </div>
      <div className="word move-left top-center">
        <img src={Designer} alt="designer" />
      </div>
      <div className="word move-right top-right">
        <img src={Designer} alt="designer" />
      </div>
      <div className="word move-left mid-left">
        <img src={Trust} alt="trust" />
      </div>
      <div className="word move-right mid-right">
        <img src={Designer} alt="designer" />
      </div>
      <div className="word move-left bottom-left">
        <img src={ProblemSolver} alt="problem solver" />
      </div>
      <div className="word move-right bottom-center">
        <img src={Trust} alt="trust" />
      </div>
      <div className="word move-left bottom-right">
        <img src={Community} alt="community" />
      </div>
      <div className="people-pyramid">
        {}
        <img src={Per1} alt="person" className="person p1" />
        <img src={Per4} alt="person" className="person p4" />

        {}
        <img src={Per2} alt="person" className="person p2" />
        <img src={Per9} alt="person" className="person p9" />
        <img src={Per10} alt="person" className="person p10" />
        <img src={Per3} alt="person" className="person p3" />

        {}
        <img src={Per4} alt="person" className="person p4" />
        <img src={Per5} alt="person" className="person p5" />
        <img src={Per6} alt="person" className="person p6" />

        {}
        <img src={Per7} alt="person" className="person p7" />
        <img src={Per8} alt="person" className="person p8" />
        <img src={Per9} alt="person" className="person p9" />
        <img src={Per10} alt="person" className="person p10" />

        {}
        <img src={Per11} alt="person" className="person p11" />
        <img src={Per1} alt="person" className="person p12" />
        <img src={Per2} alt="person" className="person p13" />
        <img src={Per3} alt="person" className="person p14" />
        <img src={Per4} alt="person" className="person p15" />
      </div>
    </div>
  );
}

export default App;
