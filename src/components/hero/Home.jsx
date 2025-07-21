import React from 'react'

function Home() {
    return (
        <div id="home" className="home w-full text-center mt-10">
            <div className="profile-img size-50 bg-red-400 mx-auto rounded-full mb-10"></div>
            <div className='md:text-5xl text-xl md:w-3/5 w-4/5 mx-auto font-semibold'>
                <span className='name text-transparent bg-clip-text '>I'm Ankush Kumar Singh, </span>
                passionate about building modern UIs.
            </div>
            <div className='md:w-5/10 w-8/10 mx-auto my-3 md:text-xl'>
                Currently working at Accenture as a Siebel Open UI Developer with 1.5+ years of experience, now transitioning into modern frontend development with React, Tailwind, and JavaScript.
            </div>

        </div>
    )
}

export default Home