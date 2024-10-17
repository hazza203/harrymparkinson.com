import React from "react";
import css from "Images/css.png";
import c from "Images/c.png";
import sql from "Images/sql.png";
import react from "Images/react.png";
import python from "Images/python.png";
import java from "Images/java.jpg";
import html from "Images/html.png";
import js from "Images/js.png";
import node from "Images/node.jpg";
import Flip from "react-reveal/Flip";

import skillStyles from "./Skills.module.scss";

const Skills = () => {
  return (
    <section>
      <h2>MY TECH STACK</h2>
      <section className={skillStyles.container}>
        <Flip left>
          <img
            style={{ borderRadius: "50px" }}
            src={java}
            alt="Skilled in Java"
          />
        </Flip>
        <Flip left>
          <img src={react} alt="Skilled in React.js" />
        </Flip>
        <Flip left>
          <img src={node} alt="Skilled in Node.js" />
        </Flip>
        <Flip left>
          <img src={python} alt="Skilled in Python" />
        </Flip>
        <Flip left>
          <img src={sql} alt="Skilled in SQL" />
        </Flip>
        <Flip left>
          <img src={c} alt="Skilled in C" />
        </Flip>
        <Flip left>
          <img src={html} alt="Skilled in HTML5" />
        </Flip>
        <Flip left>
          <img src={css} alt="Skilled in CSS3" />
        </Flip>
        <Flip left>
          <img src={js} alt="Skilled in Javascript" />
        </Flip>
      </section>
    </section>
  );
};

export default Skills;
