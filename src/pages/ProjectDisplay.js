import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import {SiHeroku} from "react-icons/si";
import {FaGithub} from "react-icons/fa"
import "../styles/ProjectDisplay.css";


function ProjectDisplay() {
    const {id} = useParams();
    const project = projectList[id]; 

    const style = {color: "whitesmoke"}
  return (
    <div className='project'>
        <h1> {project.name} </h1>
        <img src={project.image} onClick={project.url} />
        <p>
            <b>Skills:</b>{project.skills}
        </p>
  
        <h3> Visit Website &nbsp;|&nbsp; View Code</h3>
            <div>
            <a href={project.url} target={"_blank"} rel="noreferrer">
            <SiHeroku style={style}/>   
            </a>  
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <a href={project.github} target={"_blank"} rel="noreferrer">
             <FaGithub style={style}/>
             </a>
             </div>
      
           
    </div>
  );
}

export default ProjectDisplay;