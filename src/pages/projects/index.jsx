import React from 'react'
import Hero from '../../components/Hero'
import Projects from '../../components/Projects';
import Portfolio from './Portfolio';
import hero from "../../asset/img/project-hero.jpg";


const ProjectSection = () => {
  return (
    <div>
        <Hero heroImg={hero} heading="Our Projects" subHeading="We take pride in what we do"/>
        <Portfolio/>
        <Projects />
    </div>
  )
}

export default ProjectSection