import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import {SiHeroku} from "react-icons/si";
import "../styles/ProjectDisplay.css";


function ProjectDisplay() {
    const {id} = useParams();
    const project = projectList[id]; 

  return (
    <div className='project'>
        <h1> {project.name} </h1>
        <img src={project.image} />
        <p>
            <b>Skills:</b>{project.skills}
        </p>
        <h3> Visit Website </h3>
        <h4>
            <a href='https://simple-kitchen.herokuapp.com/'>
            <SiHeroku />   
            </a> 
        </h4>
    </div>
  );
}

export default ProjectDisplay;