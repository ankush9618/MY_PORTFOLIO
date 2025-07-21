import React, { useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";

function Navbar() {

    const [menu, setMenu] = useState(false);
    const menuclicked = () => {
        setMenu(!menu)
    }
    console.log(menu)
    return (
        <>
            <div className="navbar w-screen">
                <div className="navbar-big md:flex justify-between mx-50 h-25 items-center hidden">
                    <div className="navbar-left text-3xl font-semibold relative cursor-pointer">
                        <p className='z-1 relative bg-transparent name text-red'>Ankush Kumar Singh</p>
                        <img className='absolute bottom-[-5px] right-[-30px] w-[100px]' src="src\assets\download.svg" alt="" />
                    </div>
                    <div className="navbar-middle text-xl">
                        <ul className='flex gap-8'>
                            <li>Home</li>
                            <li>About Me</li>
                            <li>Skills</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="navbar-right px-4  py-3 rounded-3xl hover:scale-104 cursor-pointer transition-scale duration-500">
                        Connect With Me
                    </div>
                </div>
                <div className="navbar-small md:hidden  mx-5 font-semibold text-xl relative">
                    <div className='flex items-center justify-between h-20'>
                        <div className='relative'>
                            <p>Ankush Kumar Singh</p>
                            <img src="src/assets/download.svg" className='w-20 absolute right-[-30px] bottom-[-5px] z-[-1]' alt="" />
                        </div>
                        <CgMenuRightAlt className='text-3xl' onClick={menuclicked} />
                    </div>
                    <div className={`fixed top-20 z-50 w-8/10 h-[calc(100vh-80px)] bg-white transition-all duration-500 ease-in-out ${menu ? 'right-0' : '-right-full'}`}>
                        <ul className='bg-gradient-to-br from-[#DA7C25] to-[#B923E1] flex flex-col gap-4 py-10 px-8 text-start h-full'>
                            <li>Home</li>
                            <li>About Me</li>
                            <li>Skills</li>
                            <li>Projects</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar