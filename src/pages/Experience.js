import React from 'react'
import{
    VerticalTimeline,
    VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import {GiTruck} from "react-icons/gi"
import "../styles/Experience.css"
import {IoIosSchool} from "react-icons/io"

function Experience() {
  return (
  <div className='experience'>
    <VerticalTimeline lineColor='#453878'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
             date=" Mar 2014 - May 2020"
        iconStyle={{background: "#453878", color: "#FAEBC9"}}    
        icon={<GiTruck />}
        >
            <h3 className='vertical-timeline-element-title' id="textbox">
                Prime inc
                </h3>
                <p className='vertical-timeline-element-title' id="textbox">
                    Professional Driver<br/>
                    1 Million Miles Driven<br/>
                    Certified Driver Trainer
                </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education'
             date=" June 2015 - Current"
        iconStyle={{background: "#453878", color: "#FAEBC9"}}    
        icon={<GiTruck />}
        >
            <h3 className='vertical-timeline-element-title' id="textbox">
                6 Below
                </h3>
                <p className='vertical-timeline-element-title' id="textbox">
                    Ceo/Founder Of Company<br/>
                    Client Relationships<br/>
                    Documentation Management<br/>
                    Expanded Company Base Operation
                </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline-element--education'
             date=" July 2022 - FEB 2023"
        iconStyle={{background: "#453878", color: "#FAEBC9"}}    
        icon={<IoIosSchool />}
        >
            <h3 className='vertical-timeline-element-title' id="textbox">
                General Assembly
                </h3>
                <p className='vertical-timeline-element-title' id="textbox">
                    400+ Hours Of Expert-led Instruction<br/>
                    Full-Stack Development Fundamentals<br/>
                    Industry’s Most In-demand Technologies
                </p>
        </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
  )
}



export default Experience