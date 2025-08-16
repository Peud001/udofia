"use client"
import React, { useState } from "react";
import styles from "./aboutCol2.module.css"
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

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
            Programming Languages{""}
            </span>
            <br />
            <span></span> PHP {""}
              <span className={styles.spanSkills}>|</span> JavaScript {""}
              <span className={styles.spanSkills}>|</span> TypeScript 
          </li>
          <li>
            <span>Development Frameworks & Libraries</span>
            <br />
            <span></span> React Native / React JS {""}
              <span className={styles.spanSkills}>|</span> Next.js {""}
              <span className={styles.spanSkills}>|</span> Redux {""}
              <span className={styles.spanSkills}>|</span> Tailwind CSS
          </li>
          <li>
            <span>
            Database Management{""}
            </span>
            <br/>
              <span className={styles.spanSkills}></span> MySQL{" "}
              <span className={styles.spanSkills}>|</span> MongoDB{" "}
            <br />
          </li>
          <li>
            <span>Version Control & Collaboration</span>
            <br />
            Git / GitHub
          </li>
        </ul>
        <ul
          className={`${active === "Experience" ? styles.activeContent : ""}`}
        >
          <li>
            <span> Business Development Specialist | DoWell Research (UX Living Lab)</span>
            <br />
           <span className="styles.spanSkills"> <VscDebugBreakpointLogUnverified /></span> Designed tailored business and digital solutions to address operational challenges faced by small and medium
           sized enterprises, focusing on improving efficiency, sales performance, and customer engagement.{" "}
          </li>
          <li>
            <span>Sales Executive | 525 Systems </span>
            <br />
            <span className="styles.spanSkills"> <VscDebugBreakpointLogUnverified /></span>Managed a portfolio of B2B and B2C clients, identifying customer needs and recommending tailored IT and eCommerce solutions. 
          </li>
          <li>
            <span>Team Lead | Clapify </span>
            <br />
            <span className="styles.spanSkills"> <VscDebugBreakpointLogUnverified /></span>Managed the full development cycle of a cross-platform loyalty program app, from feature planning and technical documentation to launch.
          </li>
        </ul>
        <ul className={`${active === "Education" ? styles.activeContent : ""}`}>
          <li>
            <span>University of Calabar, Nigeria</span>
            <br />
            B.Sc. Mathematics and Statistics (04.2022)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCol2;
