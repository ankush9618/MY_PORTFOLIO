import React from 'react';
import {motion} from 'framer-motion'

function SkillsCard({skills}) {
    return (
        <>
            <motion.div className='w-70 md:w-80 2xl:w-90 h-auto border-2 border-white hover:border-[#ff00ff] rounded-xl hover:scale-110 duration-500 skillcard flex items-center justify-center cursor-pointer flex-col py-4 px-2 gap-2 md:gap-4  shadow-md shadow-gray-700 outline-0'
            initial={{y:100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.6}}
            >
                <div className={`textClip md:text-2xl text-xl font-semibold `}> {skills.name}</div>
                <div className='text-start text-md md:text-xl mx-auto pl-2 text-gray-300'>{skills.description}</div>
                <div className='flex flex-wrap gap-2 pl-2'>{
                skills.skills.map((skill)=>
                        <div key={skill} className='bg-gray-800 py-1 px-2 rounded-md text-sm'>{skill}</div>
                )
                    }</div>
            </motion.div>
        </>
    )
}

export default SkillsCard