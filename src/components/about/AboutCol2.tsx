"use client"
import React, { useState } from "react";
import styles from "./aboutCol2.module.css"

const AboutCol2 = () => {
  const [active, setActive] = useState<string>("Skills");

  const handleClick = (item: string) => {
    setActive(item);
  };

  return (
    <div>
      <div className={styles.contentLinks}>
        <div
          onClick={() => handleClick("Skills")}
          className={`${styles.contentLink} ${
            active === "Skills" ? styles.activeLink : ""
          }`}
        >
          Skills
        </div>
        <div
          onClick={() => handleClick("Experience")}
          className={`${styles.contentLink} ${
            active === "Experience" ? styles.activeLink : ""
          }`}
        >
          Experience
        </div>
        <div
          onClick={() => handleClick("Education")}
          className={`${styles.contentLink} ${
            active === "Education" ? styles.activeLink : ""
          }`}
        >
          Education
        </div>
      </div>
      <div className={styles.linkContents}>
        <ul className={`${active === "Skills" ? styles.activeContent : ""}`}>
          <li>
            <span>
              React JavaScript/TypeScript {""}
              <span className={styles.spanSkills}>|</span> HTML/CSS {""}
              <span className={styles.spanSkills}>|</span> Bootstrap
            </span>
            <br />
            Building dynamic and responsive web applications with a modern and
            user-friendly interface.
          </li>
          <li>
            <span>Next JS</span>
            <br />
            Buildig server-side rendered and highli scalable web applications
            with improved SEO.
          </li>
          <li>
            <span>
              Mongo DB {""}
              <span className={styles.spanSkills}>|</span> PostgreSQL{" "}
              <span className={styles.spanSkills}>|</span> Firebase
            </span>
            <br />
            Databases
          </li>
          <li>
            <span>GIT/GITHUB</span>
            <br />
            Version control
          </li>
        </ul>
        <ul
          className={`${active === "Experience" ? styles.activeContent : ""}`}
        >
          <li>
            <span>Dowel</span>
            <br />
            Description
          </li>
          <li>
            <span>React</span>
            <br />
            Description
          </li>
          <li>
            <span>React</span>
            <br />
            Description
          </li>
        </ul>
        <ul className={`${active === "Education" ? styles.activeContent : ""}`}>
          <li>
            <span>Unical</span>
            <br />
            Description
          </li>
          <li>
            <span>React</span>
            <br />
            Description
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCol2;
