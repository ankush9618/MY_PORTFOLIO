import React from 'react'
import SectionName from '../utils/SectionName'
import ProjectCard from '../utils/ProjectCard'
import allProjects from '../../../projects'

function Projects() {
    return (
        <>
            <div className=' mx-auto w-8/10 text-center mb-10 md:mt-30 mt-20 md:scroll-mt-30 scroll-mt-25' id='skills'>
                <div className="about-heading md:mb-20 mb-10">
                    <SectionName name="Projects" wid={20} />
                </div>
                <div className='flex gap-4 flex-wrap justify-center'>
                    {
                        allProjects.map((project)=><ProjectCard key={project.img} project={project}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default Projects