import {Fade} from 'react-reveal'
import React from 'react'
import { illustration, skillPage } from '../portfolio'
import DisplayLottie from '../Lottie/DisplayLottie'

import ComputerMan from '/home/bhubesh/myportfolio/src/Portfolio/Lottiesjson/ComputerMan.json'

import './Skills.css'
import SoftwareSkills from '../SoftwareSkills/SoftwareSkills' 



function Skills() {
    return (
        <div className = 'skills'>
            <div className="skill__maindiv">
                <Fade left duration={2000} >
                    <div className="skills__imageDiv">
                        {!illustration.animated ?(
                            <DisplayLottie animationData = {ComputerMan}></DisplayLottie>
                        ): (
                            <img 
                            alt = 'man is working'
                            src = 'https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg'
                            ></img>
                        )}
                    </div>
                </Fade>

                {/* text in right side */}

                <Fade right duration={2000}>
                    <div className="skills-text-div">
                        <h1 className = 'skills-heading'> 
                            {skillPage.title}{''}
                        </h1>
                        {/* subttitle */}
                        <p className = 'subTitle skills-text-subtitle'>
                            {skillPage.subTitle}
                        </p>
                        <br></br>
                        <SoftwareSkills></SoftwareSkills>

                        <div>
                                {skillPage.skills.map((skills, i) => {
                                  return (
                                    <p
                                      key={i}
                                      className = 'subTitle skills-text'
                                    >
                                      {skills}
                                    </p>
                                  );
                                })}
            </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Skills
