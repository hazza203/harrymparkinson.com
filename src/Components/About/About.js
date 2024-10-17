import React from "react";
import Header from "Components/Header/Header.js";
import InfoSection from "./InfoSection/InfoSection.js";
import SkillBar from "./SkillBar/SkillBar.js";
import Skills from "./Skills/Skills.js";
import Bio from "./Bio/Bio.js";
import Fade from "react-reveal/Fade";

import clean from "Images/clean-96.png";
import intuitive from "Images/intuitive.png";
import speed from "Images/speed-96.png";
import problem from "Images/problem-96.png";

import aboutStyles from "./About.module.scss";

const About = (props) => {
  return (
    <main id={props.id} className={aboutStyles.container}>
      <Header name={"ABOUT"} />

      <section id="Traits" className={aboutStyles.traits}>
        <InfoSection
          img={problem}
          alt="Problem solving icon"
          header="Problem Solving"
          content="Problem solver at heart, collaborating with others to come to a solution is my passion."
        />

        <InfoSection
          img={speed}
          alt="Fast, responsive software icon"
          header="Fast"
          content="Fast and responsive software, computational complexity is always taken into account."
        />

        <InfoSection
          img={clean}
          alt="Neat code icon"
          header="Readability"
          content="My code is always clean and readable, this is a must when collaborating with others."
        />

        <InfoSection
          img={intuitive}
          alt="User experience icon"
          header="Design"
          content="Develop UI's which are easy to use, intuitive and display information in a neat and interesting style."
        />
      </section>
      <section id="information" className={aboutStyles.info}>
        <Fade left duration={1000} fraction={0.5}>
          <div className={aboutStyles.personal}>
            <Bio />
          </div>
        </Fade>
        <div className={aboutStyles.skills}>
          <Skills />
          <SkillBar
            name={"Javascript"}
            value={{ width: "80%" }}
            remainder={{ width: "20%" }}
            percentage={"80%"}
          />
          <SkillBar
            name={"Node.js"}
            value={{ width: "70%" }}
            remainder={{ width: "30%" }}
            percentage={"70%"}
          />
          <SkillBar
            name={"React.js"}
            value={{ width: "80%" }}
            remainder={{ width: "20%" }}
            percentage={"80%"}
          />
          <SkillBar
            name={"Java"}
            value={{ width: "80%" }}
            remainder={{ width: "20%" }}
            percentage={"80%"}
          />
          <SkillBar
            name={"CSS"}
            value={{ width: "60%" }}
            remainder={{ width: "40%" }}
            percentage={"60%"}
          />
          <SkillBar
            name={"Python"}
            value={{ width: "50%" }}
            remainder={{ width: "50%" }}
            percentage={"50%"}
          />
          <SkillBar
            name={"C"}
            value={{ width: "40%" }}
            remainder={{ width: "60%" }}
            percentage={"40%"}
          />
          <SkillBar
            name={"SQL"}
            value={{ width: "65%" }}
            remainder={{ width: "35%" }}
            percentage={"65%"}
          />
        </div>
      </section>
    </main>
  );
};

export default About;
