import React from 'react'
import portfolio from "../../assets/portfolio.png"

function ProjectCard({project}) {
    return (
        <>
            <div className='min-w-90'>
                <img src={project.img} className='w-90 object-cover h-auto border-2 rounded-md border-[#ff00ff]' alt="" />
            </div>
        </>
    )
}

export default ProjectCard