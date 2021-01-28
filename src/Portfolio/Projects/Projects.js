import React from 'react'
// import { Link } from 'react-router-dom'

import './Projects.css'
// Fade

import {Fade } from 'react-reveal'
import { projectsHeader } from '../portfolio'
import ProjectsData from './projects.json'
// Button
import Button from '/home/bhubesh/myportfolio/src/Portfolio/Buttons/Button.js'

import ProjectsImg from './ProjectsImg'
import GithubRepoCard from '../githubRepoCard/githubRepoCard'
function Projects() {
    return (
        <div className = 'projects-main'>
            <div className="basic-projects">
                <Fade bottom duration = {1000}>
                    <div className="projects-heading-div">
                        <div className="projects-heading-img-div">
                            <img
                            src = ''
                            >
                            </img>
                            <ProjectsImg></ProjectsImg>
                        </div>
                        <div className="projects-heading-text-div">
                            <h1 className = 'projects-heading-text'> 
                                {projectsHeader.title}
                            </h1>
                            <p
                                className="projects-header-detail-text subTitle"
                            >
                            {projectsHeader["description"]}
                </p>
                        </div>
                    </div>
                </Fade>
            </div>
            
            <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo}  />;
          })}
        </div >
        <div className="project-button">

        <Button
          text={"More Projects"}
          className="project-button"
          href="https://github.com/bhubesh757"
          newTab={true}
          
        />
        </div>
        </div>
        
    )
}

export default Projects
