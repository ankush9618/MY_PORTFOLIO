import React from 'react'
import SectionName from '../SectionName'

function About() {
  return (
    <div className='lg:w-7/10 mx-auto w-9/10 text-center mb-10 md:mt-30 mt-20'>
        <div className="about-heading md:mb-20 mb-10">
            <SectionName name="About Me"/>
        </div>
        <div className="about-me flex gap-8 text-start w-full">
            <div className="about-image min-w-80 bg-blue-400 h-90 rounded-xl hidden md:block">

            </div>
            <div className="about-info  mx-auto text-justify text-sm md:text-base">
                <p className='mb-3'>
                    I'm a Siebel developer with over 1.5+ years of experience working on Siebel (Open UI) at Accenture. Currently, I am passionately expanding my expertise in modern web development—crafting responsive and engaging user interfaces with technologies like React, Next.js, Tailwind CSS, Bootstrap, and traditional HTML/CSS.
                </p>
                <p>
                    Skilled in JavaScript, React.js, Node.js, HTML, CSS, Bootstrap, Tailwind CSS, and Siebel Open UI, with a strong grasp of frontend fundamentals and modern development practices. Consistently strives to deliver intuitive, user-friendly interfaces that align with both user needs and business goals.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About