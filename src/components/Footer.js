import React from 'react'
import {FaGithub} from "react-icons/fa"
import {BsLinkedin} from "react-icons/bs"
import {AiTwotoneMail} from "react-icons/ai"
import "../styles/Footer.css"


function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          < a href='https://github.com/bjlovee'>
          <FaGithub /> 
          </a>
         
          < a href='https://www.linkedin.com/in/brandon-johnson-software-engineer/'>
          <BsLinkedin />
          </a>

          {/* < a href=''>
          <AiTwotoneMail />
          </a> */}
        </div>
        <p> &copy; 2023 BrandonJohhnson.com </p>
    </div>
  );
}

export default Footer