import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { projectList } from "../helpers/ProjectList"
import "../styles/Projects.css"


function Projects() {
  return (
    <div className='project'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
     {projectList.map((project, idx) =>{
      return <ProjectItem id={idx} name={project.name} image={project.image} url={project.url}/>
     })}
      </div>
    </div>
    
  )
}

export default Projects