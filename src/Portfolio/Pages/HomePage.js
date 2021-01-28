// import { Fade } from '@material-ui/core'
import React from 'react'
import emoji from 'react-easy-emoji'

// 
// using react reveal
import {Fade} from 'react-reveal'

// greeting frm the portfolio

import {greeting, illustration} from '/home/bhubesh/myportfolio/src/Portfolio/portfolio.js'

import './HomePage.css'
import SocialMedia from '../SocialMedia/SocialMedia'
import Button from '../Buttons/Button'
import Lottie from 'react-lottie'


// from lottie image

import ComputerMan from '/home/bhubesh/myportfolio/src/Portfolio/Lottiesjson/ComputerMan.json'
import DisplayLottie from '../Lottie/DisplayLottie'
// css
// import './Homepage.scss'
function HomePage({href}) {
    return (
        <div className="homepage__greet-main" id = 'greeting'>
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" >
                {greeting.title}
              </h1>
              <p
                className="greeting-text-p subTitle"
               
              >
                {greeting.subTitle}
              </p>
                <div className="homepage__media">

              <SocialMedia  />
                </div>
              <div className="homepage__greetbtn">
                    <Button className = 'homepage__contactbutton' text = 'Contact Me ' href = '#contact'></Button>
                    <Button 
                    text = 'Resume'
                    newTab = {true}
                    href = {greeting.resumeLink}
                    ></Button>

                </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <Fade right duration = {1000}>

          <div className="greeting-image-div">
          <img 
                alt = 'man working on computer'
                src = 'https://image.freepik.com/free-vector/design-inspiration-concept-illustration_114360-3957.jpg'
                className = 'homepage__image'
                >
                </img>
          </div>
          </Fade>
        </div>
      </div>
    </Fade>
    </div>

    
    )
}

export default HomePage