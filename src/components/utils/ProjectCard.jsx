import { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

function ProjectCard({ project }) {
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div className='w-90 md:w-80 2xl:w-90 h-auto border-2 border-white rounded-xl overflow-hidden duration-500 shadow-md shadow-gray-700 hover:border-[#ff00ff]'>
                <div className="relative cursor-pointer" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
                    <img loading="lazy" src={project.img} className='w-full object-cover h-auto border-b-1 border-gray-500 hover:opacity-60 duration-500' alt={project.title} />
                    {
                        isActive &&
                        <div className="flex justify-center gap-4 mb-2 absolute top-[50%] left-[50%] -translate-[50%] duration-1000">
                            <a href={project.liveUrl} target="blank">
                                <button className="cursor-pointer flex items-center gap-2 border-2 px-4 py-1 rounded-2xl hover:border-[#ff00ff] hover:scale-105 duration-500 bg-zinc-800 opacity-90">
                                    <FaExternalLinkAlt /> Demo
                                </button>
                            </a>
                            <a href={project.repoUrl} target="blank">
                                <button className="cursor-pointer flex items-center gap-2 border-2 px-4 py-1 rounded-2xl hover:border-[#ff00ff] hover:scale-105 duration-500 bg-zinc-800 opacity-90">
                                    <LuGithub /> Code
                                </button>
                            </a>
                        </div>
                    }
                </div>
                <div className='p-2'>
                    <span className='textClip text-xl my-2 font-bold md:text-2xl'>{project.title}</span>
                    <p className=' text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex flex-wrap gap-2 mb-2 justify-center text-sm'>
                        {project.techStack.map(tech => <div key={tech} className='px-2 py-1 bg-gray-800 rounded-md'>{tech}</div>)}
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProjectCard