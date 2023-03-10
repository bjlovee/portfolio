import React from 'react'
import {FaGithub} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"
import {AiTwotoneMail} from "react-icons/ai"
import "../styles/Footer.css"
import {BsTwitter} from "react-icons/bs"
import {IoMdPaper} from "react-icons/io"



function Footer() {

  

  return (
    <div className='footer'>
        <div className='socialMedia'>
          < a href="https://github.com/bjlovee" target={'_blank'} rel="noreferrer">
          <FaGithub /> 
          </a>
         
       
          < a href="https://www.linkedin.com/in/brandon-johnson-software-engineer/" target={'_blank'} rel="noreferrer">
          <BsLinkedin/>
          </a>
          < a href="https://docs.google.com/document/d/1NJgxnAPFvG3EG4JuP_tZbGRRU_vkDxif/edit?usp=sharing&ouid=101413870966378258949&rtpof=true&sd=true" target={'_blank'} rel="noreferrer">
          <IoMdPaper/>
          </a>
        </div>
        <p>bj000051@yahoo.com</p>
        <p> &copy; 2023 brandon-johnson-portfolio.netlify.app </p>
    </div>
  );
}

export default Footer