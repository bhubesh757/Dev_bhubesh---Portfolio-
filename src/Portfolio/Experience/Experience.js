import React from 'react'
import ExperienceCard from '../ExperienceCard/ExperienceCard';

import {Fade} from 'react-reveal'
//  work exp

import {workExperiences} from '/home/bhubesh/myportfolio/src/Portfolio/portfolio.js'

// css

import './Experience.css'
import emoji from 'react-easy-emoji';
function Experience() {
    return (
        <div className = 'experience' id = 'experience'>
            <Fade bottom duration={1000} >
                <div className="experience-container" id="workExperience">
                    <div>
                        <h1 className="experience-heading">{emoji('Internships 🚀')} </h1>
                        <div className="experience-cards-div">
                        {workExperiences.experience.map((card,i) => {
                            return (
                                <ExperienceCard
                                    key={i}
                                    cardInfo={{
                                        company: card.company,
                                        desc: card.desc,
                                        date: card.date,
                                        companylogo: card.companylogo,
                                        role: card.role,
                                        descBullets: card.descBullets
                                    }}
                                />
                            );
                        })}
                        </div>
                    </div>
                </div>
                </Fade>
        </div>
    )
}

export default Experience 
