import React from 'react'
import profile from "../../assets/profile.png"

function Home() {
    return (
        <div id="home" className="home w-full text-center md:mt-10 mt-5 scroll-mt-50" >
            <div className="profile-img md:size-50 size-30 mx-auto md:mb-10 mb-5 rounded-full relative cursor-pointer hover:scale-105 duration-700">
                {/* Spinning Background */}
                <div className="absolute inset-0 rounded-full md:border-2 border-1 profile-bg border-white animate-spin z-0"></div>

                {/* Static Image */}
                <div className="relative z-10 overflow-hidden rounded-full size-full outline-0">
                    <img src={profile} alt="Profile" className="object-cover w-full h-full" />
                </div>
            </div>
            <div className='md:text-5xl text-lg lg:w-3/5 w-9/10 mx-auto font-semibold'>
                <span className='name text-transparent bg-clip-text '>I'm Ankush Kumar Singh, </span>
                passionate about building modern UIs.
            </div>
            <div className='lg:w-5/10 w-9/10 mx-auto md:my-3 my-2 md:text-xl space-2'>
                Currently working at Accenture as a Siebel (Open UI) Developer with 1.5+ years of experience, now transitioning into modern frontend development with React, Tailwind, and JavaScript.
            </div>
            <div className='w-9/10 mx-auto flex justify-center gap-4 md:gap-8 my-5'>
                <div className="contact-me info-button px-4  py-3 rounded-3xl hover:scale-104 cursor-pointer transition-scale duration-500">
                    Connect With Me
                </div>
                <div className="resume px-8  py-3 rounded-3xl hover:scale-104 cursor-pointer transition-scale duration-500 border-2 hover:border-purple-500">
                    Resume
                </div>
            </div>
        </div>
    )
}

export default Home