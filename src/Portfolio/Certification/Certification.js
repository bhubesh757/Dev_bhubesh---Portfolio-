import React from 'react'

import {Fade} from 'react-reveal'
import AchievementCard from '../CertificationCard/AchievementCard';

//certication which is achievemensection


import {achievementSection} from '/home/bhubesh/myportfolio/src/Portfolio/portfolio.js'

// css

import './Certification.css'
import AchivementCardTwo from '../CertificationCard/AchivementCardTwo';
function Certification() {
    return (
        <div>
            <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className="heading achievement-heading"
            >
              {achievementSection.title}
            </h1>
            <p
              className= "subTitle achievement-subtitle"
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className = 'achievement-cards-div'>
            {achievementSection.achievementsCards.map((card,i) => {
              return (
                <AchivementCardTwo
                  key={i}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    footer: card.footerLink,
                  }}

                />
              );
             
            })}
          </div>
          {/* <AchivementCardTwo></AchivementCardTwo>
          <AchivementCardTwo></AchivementCardTwo>
          <AchivementCardTwo></AchivementCardTwo> */}
          <div>
          </div>

        </div>
      </div>
    </Fade>
        </div>
    )
}

export default Certification
