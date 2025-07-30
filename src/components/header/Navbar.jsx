import React, { useEffect, useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import git from "../../assets/git.png"
import linkedIn from "../../assets/linkedIn.png"
import instagram from "../../assets/instagram.png";
import { IoIosArrowDown } from "react-icons/io";
import styleImg from "../../assets/download.svg"
import { Link } from 'react-router';

function Navbar() {

    const [menu, setMenu] = useState(false);
    const menuclicked = () => {
        setMenu(!menu)
    }
    useEffect(() => {
        if (menu) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [menu]);
    return (
        <>
            <div className="navbar w-full sticky top-0 bg-[#1c1c1c] z-100">
                <div className="navbar-big lg:flex justify-between w-9/10 h-25 items-center hidden mx-auto">
                    <div className="navbar-left text-3xl font-semibold relative cursor-pointer">
                        <p className='z-1 relative bg-transparent name text-red'>Ankush Kumar Singh</p>
                        <img className='absolute bottom-[-5px] right-[-30px] w-[100px]' src={styleImg} alt="" />
                    </div>
                    <div className="navbar-middle text-xl">
                        <ul className='flex gap-8'>
                            <li className='hover:text-pink-500 duration-500 hover:scale-105'><a href="/#home">Home</a> </li>
                            <li className='hover:text-pink-500 duration-500 hover:scale-105'><a href="/#about">About me</a> </li>
                            <li className='hover:text-pink-500 duration-500 hover:scale-105'><a href="/#skills">Skills</a> </li>
                            <li className='hover:text-pink-500 duration-500 hover:scale-105'><a href="/#projects">Projects</a> </li>
                            <li className='group cursor-pointer relative'>
                                <p className='flex items-center gap-2'>Other<IoIosArrowDown /></p>
                                <div className='hidden group-hover:block absolute top-7 w-50 pt-4'>
                                    <ul className='flex flex-col gap-2 bg-[#1c1c1c] border-t-2 border-pink-400 px-5 pt-4 shadow-md shadow-gray-500'>
                                        <li className='border-b-1 border-gray-500 pb-2 hover:text-pink-500 duration-500 hover:scale-105'>Education</li>
                                        <li className='hover:text-pink-500 duration-500 hover:scale-105 pb-3'>Certifications</li>
                                        
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <a href="/#contact">
                    <div className="navbar-right px-4 py-3 rounded-3xl hover:scale-104 cursor-pointer transition-scale duration-500">
                        Connect With Me
                    </div></a>
                </div>
                <div className="navbar-small lg:hidden font-semibold text-xl relative">
                    <div className='flex items-center justify-between h-20 w-9/10 mx-auto'>
                        <div className='relative'>
                            <p>Ankush Kumar Singh</p>
                            <img src={styleImg} className='w-20 absolute right-[-30px] bottom-[-5px] z-[-1]' alt="" />
                        </div>
                        {menu ? <RxCross2 className='text-3xl' onClick={menuclicked} /> : <CgMenuRightAlt className='text-3xl' onClick={menuclicked} />}
                    </div>
                    <div className={`fixed top-20.5 z-50 w-8/10 h-[calc(100vh-80px)] bg-white transition-all duration-800 ease-in-out ${menu ? 'right-0' : '-right-full'}`}>
                        <ul className='bg-[#3c3737] from-[#DA7C25] to-[#B923E1] flex flex-col gap-4 py-10 px-8 text-start h-full'>
                            <li><a href="/#home" onClick={menuclicked}>Home</a> </li>
                            <li><a href="/#about" onClick={menuclicked}>About me</a> </li>
                            <li><a href="/#skills" onClick={menuclicked}>Skills</a> </li>
                            <li><a href="/#projects" onClick={menuclicked}>Projects</a> </li>
                            <li><a href="/#contact" onClick={menuclicked}>Contact</a> </li>
                            <li className='flex gap-4 mt-8'>
                                <a href="https://www.linkedin.com/in/aks9618" target='blank'><img src={linkedIn} className='w-10 text-white' alt="linkedIn logo" /></a>
                                 <a href="https://github.com/ankush9618" target='blank'><img src={git} className='w-10 text-white' alt="github logo" /></a>
                                  <a href="https://www.instagram.com/_myself_aks_/" target='blank'><img src={instagram} className='w-10 text-white' alt="instagram logo" /></a>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='h-[1px] mx-auto sticky top-20 lg:top-25 bg-white shadow-blue-500'></div>
        </>
    )
}

export default Navbar