import React from 'react'
import SectionName from '../utils/SectionName'
import {motion} from 'framer-motion'


function About() {

    let experience = () => {
        let today = new Date();
        let join = new Date("2023-11-28");

        // Difference in milliseconds
        let diffMs = today - join;

        // Convert to years (approx, using average year length = 365.25 days to account for leap years)
        let diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);

        return diffYears.toFixed(1);
    }
    

    return (
        <section className='lg:w-7/10 mx-auto w-9/10 text-center mb-10 md:mt-30 mt-20 md:scroll-mt-30 scroll-mt-25' id='about'>
            <div className="about-heading md:mb-20 mb-10">
                <SectionName name="About me" wid={20} />
            </div>
            <div className="about-me flex gap-8 text-start w-full">

                <motion.div className="about-info  mx-auto text-justify text-sm md:text-base" aria-label='about info'
                initial={{x:-120,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.6}}
                >
                    <p className='mb-3'>
                        I'm a <span className='font-semibold'>Frontend Developer</span> with {experience()}+ years of experience building and maintaining enterprise-scale web applications using HTML, CSS, JavaScript, and jQuery. Experienced in translating Figma designs into pixel-accurate, responsive UIs, implementing client-side business logic, and integrating Frontend components with backend services. Proven ability to resolve high-volume UI defects, improve code quality, and deliver reusable UI components. Recognized as a UI SME for ownership, problem-solving, and cross-team collaboration.
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
                </motion.div>
                <motion.div className="about-image max-w-80 h-auto rounded-xl hidden md:block overflow-hidden hover:scale-102 duration-500 cursor-pointer"
                initial={{x:100,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.6}}
                >
                    <img src="https://res.cloudinary.com/daootd1uo/image/upload/v1753557934/aks_flaz20.jpg" alt="full Image" className='w-full rounded-xl p-1 object-cover h-full' loading='lazy'/>
                </motion.div>
            </div>
        </section>
    )
}

export default About