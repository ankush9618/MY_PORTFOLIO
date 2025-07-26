import { FaExternalLinkAlt } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

function ProjectCard({ project }) {
    return (
        <>
            <div className='md:min-w-90 w-90 h-auto border-2 border-white rounded-xl overflow-hidden hover:scale-110 duration-500 shadow-md shadow-gray-700 hover:border-[#ff00ff]'>
                <img src={project.img} className='w-90 object-cover h-auto border-b-1 border-gray-500' alt="" />
                <div className='p-2'>
                    <span className='textClip text-xl my-2 font-bold md:text-2xl'>{project.title}</span>
                    <p className=' text-gray-300'>{project.description}</p>
                    <div className='flex flex-wrap gap-2 mb-2 justify-center'>
                        {project.techStack.map(tech=><div key={tech} className='px-2 py-1 bg-gray-800 rounded-md'>{tech}</div>)}
                    </div>
                    <div className="flex justify-center gap-4 mb-2">
                        <a href={project.liveUrl} target="blank">
                            <button className="cursor-pointer flex items-center gap-2 border-2 px-4 py-1 rounded-2xl hover:border-[#ff00ff] hover:scale-105 duration-500">
                            <FaExternalLinkAlt/> Demo
                        </button>
                        </a>
                        <a href={project.repoUrl} target="blank">
                            <button className="cursor-pointer flex items-center gap-2 border-2 px-4 py-1 rounded-2xl hover:border-[#ff00ff] hover:scale-105 duration-500">
                            <LuGithub/> Code
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectCard