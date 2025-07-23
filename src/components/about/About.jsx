import React from 'react'
import SectionName from '../SectionName'
import aks from "../../assets/aks.jpg"

function About() {
    return (
        <div className='lg:w-7/10 mx-auto w-9/10 text-center mb-10 md:mt-30 mt-20' id='about'>
            <div className="about-heading md:mb-20 mb-10">
                <SectionName name="About me" />
            </div>
            <div className="about-me flex gap-8 text-start w-full">

                <div className="about-info  mx-auto text-justify text-sm md:text-base">
                    <p className='mb-3'>
                        I'm a Siebel developer with over 1.5+ years of experience working on Siebel (Open UI) at Accenture. Currently, I am passionately expanding my expertise in modern web development—crafting responsive and engaging user interfaces with technologies like React, Next.js, Tailwind CSS, Bootstrap, and traditional HTML/CSS.
                    </p>
                    <p>
                        Skilled in JavaScript, React.js, Node.js, HTML, CSS, Bootstrap, Tailwind CSS, and Siebel Open UI, with a strong grasp of frontend fundamentals and modern development practices. Consistently strives to deliver intuitive, user-friendly interfaces that align with both user needs and business goals.
                    </p>
                    <div className='md:mt-5 mt-3 text-lg cursor-pointer'>
                        <div className='flex flex-col gap-2'>
                                <div className='flex gap-1 md:gap-8 items-center hover:scale-x-110 duration-700'><div className='w-30'>HTML && CSS</div><div className=' h-2 w-[57%] skills-color rounded-md'></div></div>
                                <div className='flex gap-1 md:gap-8 items-center hover:scale-x-110 duration-700'><div className='w-30'>JavaScript</div><div className='h-2 w-[62%] skills-color rounded-md'></div></div>
                                <div className='flex gap-1 md:gap-8 items-center hover:scale-x-110 duration-700'><div className='w-30'>React JS</div><div className='h-2 w-[52%] skills-color rounded-md'></div></div>
                                <div className='flex gap-1 md:gap-8 items-center hover:scale-x-110 duration-700'><div className='w-30'>Tailwind CSS</div><div className='h-2 w-[55%] skills-color rounded-md'></div></div>
                                <div className='flex gap-1 md:gap-8 items-center hover:scale-x-110 duration-700'><div className='w-30'>Next JS</div><div className='h-2 w-[40%] skills-color rounded-md'></div></div>

                                
                            </div>
                        {/* <div className="about-image w-30 h-auto rounded-xl md:hidden overflow-hidden" >
                            <img src={aks} alt="" className='w-full rounded-xl p-0.5' />
                        </div> */}


                    </div>
                </div>
                <div className="about-image max-w-80 h-auto rounded-xl hidden md:block overflow-hidden hover:scale-102 duration-500 cursor-pointer">
                    <img src={aks} alt="" className='w-full rounded-xl p-1' />
                </div>
            </div>
        </div>
    )
}

export default About