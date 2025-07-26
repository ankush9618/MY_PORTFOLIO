import React from 'react'
import SectionName from '../utils/SectionName'
import SkillsCard from '../utils/SkillsCard'
import allSkills from '../../../skills';

function Skills() {
    return (
        <div className=' mx-auto w-9/10 text-center mb-10 md:mt-30 mt-20 md:scroll-mt-30 scroll-mt-25' id='skills'>
            <div className="about-heading md:mb-20 mb-10">
                <SectionName name="My skills" wid={20}/>
            </div>
            <div className=" flex gap-4 xl:gap-8 w-full flex-wrap justify-center">
                {allSkills.map(skills=>{
                    return <SkillsCard key={skills.name} skills={skills}/>
                })}
            </div>
        </div>
    )
}

export default Skills