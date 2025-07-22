import React, { useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

function Navbar() {

    const [menu, setMenu] = useState(false);
    const menuclicked = () => {
        setMenu(!menu)
    }
    console.log(menu)
    return (
        <>
            <div className="navbar w-full sticky top-0 bg-[#1c1c1c]">
                <div className="navbar-big lg:flex justify-between w-9/10 h-25 items-center hidden mx-auto">
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
                <div className="navbar-small lg:hidden font-semibold text-xl relative">
                    <div className='flex items-center justify-between h-20 w-9/10 mx-auto'>
                        <div className='relative'>
                            <p>Ankush Kumar Singh</p>
                            <img src="src/assets/download.svg" className='w-20 absolute right-[-30px] bottom-[-5px] z-[-1]' alt="" />
                        </div>
                        {menu ? <RxCross2 className='text-3xl' onClick={menuclicked}/> :<CgMenuRightAlt className='text-3xl' onClick={menuclicked} />}
                    </div>
                    <div className={`fixed top-20 z-50 w-8/10 h-[calc(100vh-80px)] bg-white transition-all duration-800 ease-in-out ${menu ? 'right-0' : '-right-full'}`}>
                        <ul className='bg-[#3c3737] from-[#DA7C25] to-[#B923E1] flex flex-col gap-4 py-10 px-8 text-start h-full'>
                            <li>Home</li>
                            <li>About Me</li>
                            <li>Skills</li>
                            <li>Projects</li>
                            <li>Contact</li>
                            <li className='flex gap-4 mt-8'>
                                <img src="src/assets/linkedIn.svg" className='w-10 text-white' alt="a" />
                                <img src="src/assets/git.svg" className='w-10 text-white' alt="a" />
                                <img src="src/assets/instagram.svg" className='w-10 text-white' alt="a" />
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='h-[1px] mx-auto sticky top-20 md:top-25 bg-white shadow-blue-500'></div>
        </>
    )
}

export default Navbar