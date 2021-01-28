import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { skillPage } from "../portfolio";
import "./SoftwareSkills.css";


export default function SoftwareSkills() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillPage.softwareSkills.map((skills,i) => {
            return (
              <li key={i} className="software-skill-inline" name={skills.skillName}>
                {/* <i className={skills.fontAwesomeClassname}></i> */}
                <img src= {skills.src}/>
                <p>{skills.skillName}</p>
                
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}