import React from 'react'
import { contactInfo, illustration } from '../portfolio'
import SocialMedia from '../SocialMedia/SocialMedia'

import {Fade} from 'react-reveal'

// json

import ComputerMan from '/home/bhubesh/myportfolio/src/Portfolio/Lottiesjson/ComputerMan.json'

// css

import './ContactFooter.css'
import DisplayLottie from '../Lottie/DisplayLottie'
function ContactFooter() {
    return (
        <div className = 'ContactFooter'>
            <Fade bottom duration = {2000} >
            
            <div className="main contact-margin-top" id = "contact">
            <div className="contact-div-main">
            <Fade right duration = {2000}>

<div className="contact-image-div">
{!illustration.animated ? (
  <DisplayLottie animationData={ComputerMan} />
) : (
  <img
    alt="Man working"
    src= 'https://image.freepik.com/free-vector/video-call-concept-illustration_114360-1635.jpg'
  ></img>
)}
</div>
    
    </Fade>
          <div className="contact-header">
         
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className= 'subTitle contact-subtitle'
            >
              {contactInfo.subtitle}
            </p>
            <div
              className= 'contact-text-div'
            >
              <a className="contact-detail" href={'tel:' + contactInfo.number}>
                {contactInfo.number}
              </a>
              <br />
              <br />
              <a
                className="contact-detail-email"
                href={'mailto:' + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <div className="contactfooter__media">

              <SocialMedia ></SocialMedia>
              </div>
            </div>
          </div>
         
        </div>
            </div>
                
            </Fade>
        </div>
    )
}

export default ContactFooter
