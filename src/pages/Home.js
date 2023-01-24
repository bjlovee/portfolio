import React from 'react'
import "../styles/Home.css"

import {FaGithub} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"
import {AiTwotoneMail} from "react-icons/ai"
import {FaReact} from "react-icons/fa"
import {SiDjango} from "react-icons/si"
import {SiMongodb} from "react-icons/si"
import {GrNode} from "react-icons/gr"
import {SiHtml5} from "react-icons/si"
import {IoLogoCss3} from "react-icons/io"
import {SiJavascript} from "react-icons/si"
import {ImNpm} from "react-icons/im"
import {FaBootstrap} from "react-icons/fa"
import {SiStyledcomponents} from "react-icons/si"
import {SiExpress} from "react-icons/si"
import {DiDigitalOcean} from "react-icons/di"
import {SiHeroku} from "react-icons/si"
import {SiPostman} from "react-icons/si"
import {SiTypescript} from "react-icons/si"
import {SiPython} from "react-icons/si"

function Home() {
  return (
    <div className='home'>
         <div className='about'>
            <h2>Hi, My Name is Brandon</h2>
            <div  className='prompt'>
                <p>A software developer with a passion for learning and creating.</p>
                < a href='https://github.com/bjlovee'>
          <FaGithub /> 
          </a>
         
          < a href='https://www.linkedin.com/in/brandon-johnson-software-engineer/'>
          <BsLinkedin />
          </a>
            </div>
         </div>
        <div className='skills'>

            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>
                        <div className='frontend'>
                    <FaReact color='#61DBFB' size="3rem"/> ReactJS &nbsp;
                      <SiHtml5 color='#E34C26' size="3rem"/> HTML &nbsp;
                      <IoLogoCss3 color='#264de4' size="3rem"/> CSS<br/>
                     
                      <FaReact color='#61DBFB' size="3rem"/> React Native &nbsp;
                      <ImNpm color="#CC3534" size="3rem"/> NPM<br/>
                      <FaBootstrap color='#563d7c' size="3rem"/> BootStrap &nbsp;
                      <SiStyledcomponents color='pink' size="3rem" />Styled Components
                      </div>
                        </span>
                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span>
                        <div className='backend'>
                        <GrNode color='#68A063'  size="3rem"/> Node.js &nbsp;
                         <SiDjango color='#355E3B'  size="3rem"/> Django &nbsp;
                         <SiExpress size="3rem"/> Express<br/>
                         <SiMongodb color="#589636" size="3rem"/>MongoDB &nbsp;
                         <DiDigitalOcean color="#008bcf" size="3rem"/>Digital Ocean &nbsp;
                         <SiHeroku color="#008bcf" size="3rem"/> Heroku &nbsp;<br/>
                          <SiPostman color=" #EF5B25" size="3rem"/> Postman &nbsp;
                          <SiTypescript color=" #007acc" size="3rem"/> TypeScript
                          </div>
                    </span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>
                        <div className='languages'>

                            <SiJavascript color='#F0DB4F' size="3rem"/> JavaScript &nbsp;
                            <SiPython color='#FFE873' size="3rem"/> Python
                        </div>
                    </span>
                </li>
            </ol>
            </div>
    </div>
  )
}

export default Home;