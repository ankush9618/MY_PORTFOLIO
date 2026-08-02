import React from 'react'
import {motion} from 'framer-motion'
import profile from '../../assets/profile.png'
import { IoMdDownload } from "react-icons/io";

function Home() {
   
     let experience = () => {
        let today = new Date();
        let join = new Date("2023-11-28");

        // Difference in milliseconds
        let diffMs = today - join;

        // Convert to years (approx, using average year length = 365.25 days to account for leap years)
        let diffYears = diffMs / (1000 * 60 * 60 * 24 * 365.25);

        return diffYears.toFixed(1); // e.g., 1.83 years
    }
    let today = new Date();
    let date = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0');
    
    return (
        <div id="home" className="home w-full text-center md:mt-35 mt-40 scroll-mt-50" >
            <div className="profile-img md:size-50 size-35 mx-auto mb-15 rounded-full relative cursor-pointer hover:scale-105 duration-700 p-0.5">
                {/* Spinning Background */}
                <div className="absolute inset-0 rounded-full profile-bg border-white z-0"></div>

                {/* Static Image */}
                <div className="relative z-10 overflow-hidden rounded-full size-full outline-0">
                    <img loading='lazy' src={profile} alt="Profile" className="object-cover w-full h-full" />
                </div>
            </div>
            <motion.div className='md:text-5xl text-lg lg:w-3/5 w-9/10 mx-auto font-semibold' 
            initial={{y:100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.6}}
            >
                <span className='name text-transparent bg-clip-text '>I'm Ankush Kumar Singh, </span>
                passionate about building modern UIs.
            </motion.div>
            <motion.div className='lg:w-5/10 w-9/10 mx-auto md:my-3 my-2 md:text-xl space-2'
            initial={{y:100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.6}}
            >
                Frontend Developer with <span className='font-semibold'>{experience()}+</span> years of industry experience at <span className='font-semibold'>Accenture</span>, currently advancing skills in modern frontend development using React.js, JavaScript, and Tailwind CSS.
            </motion.div>
            <motion.div className='w-9/10 mx-auto flex justify-center gap-4 md:gap-8 my-5'
            initial={{y:100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.6}}
            >
                <a href="#contact">
                    <div className="contact-me info-button px-4  py-3 rounded-3xl hover:scale-104 cursor-pointer transition-scale duration-500">
                    Connect With Me
                </div>
                </a>
                <a href="ankush.k.singh_resume.pdf" target='_blank' download={"Ankush_Kumar_Singh_Resume_" + date + "_" + month + ".pdf"}>
                    <div className="resume px-8  py-3 rounded-3xl hover:scale-104 cursor-pointer transition-scale duration-500 border-2 hover:border-purple-500 flex justify-center items-center gap-2">
                    <IoMdDownload/>Resume
                </div>
                </a>
            </motion.div>
        </div>
    )
}

export default Home
