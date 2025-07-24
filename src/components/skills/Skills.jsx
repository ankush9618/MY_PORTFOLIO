import React from 'react'
import SectionName from '../SectionName'
import SkillsCard from '../utils/SkillsCard'
import allSkills from '../../../skills';

function Skills() {
    return (
        <div className='lg:w-9/10 mx-auto w-9/10 text-center mb-10 md:mt-30 mt-20 md:scroll-mt-30' id='experience'>
            <div className="about-heading md:mb-20 mb-10">
                <SectionName name="My skills" wid={20}/>
            </div>
            <div className=" flex gap-8 w-full flex-wrap justify-center">
                {allSkills.map(skills=>{
                    return <SkillsCard/>
                })}
            </div>
        </div>
    )
}

export default Skills