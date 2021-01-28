import React from 'react';
import Headroom from 'react-headroom';
import './Navbar.css';
import { NavBtnLink , NavBtn } from './NavbarElements';
// import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
// import StyleContext from '../../contexts/StyleContext';

import { achievementSection, greeting, projectsHeader, skillPage, workExperiences } from './portfolio';

function Header() {;
  const viewExperience = workExperiences.display;
  // const viewOpenSource = openSource.display;
  const viewSkills = skillPage.display;
  const viewAchievement = achievementSection.display;
  const viewProjects = projectsHeader.display;

  return (
    <Headroom>
      <header className='header'>
        <a href="" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: 'white' }}
        >
          <span className='navicon'></span>
        </label>
        <ul className='menu'>
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}

          {viewProjects && (
            <li>
              <a href = '#projects'>Projects</a>
            </li>
          )}
             {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          
          <NavBtn>
                      <NavBtnLink to = '/resume' className = 'navbar__resumebutton'>
                            Resume
                      </NavBtnLink>
                  </NavBtn>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;