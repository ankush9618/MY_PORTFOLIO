import React, { useEffect, useState } from 'react'
import { CgMenuRightAlt } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import git from "../../assets/git.svg"
import linkedIn from "../../assets/linkedIn.svg"
import instagram from "../../assets/insta.svg";
import { IoIosArrowDown } from "react-icons/io";
import styleImg from "../../assets/download.svg"
import { Link } from 'react-router';
import {motion} from 'framer-motion'

function Navbar() {

    const [menu, setMenu] = useState(false);
    const [scrolled,setScrolled] = useState(false)
    const menuclicked = () => {
        setMenu(!menu)
    }
    useEffect(() => {
        if (menu) {
            document.body.classList.add('overflow-hidden');
            setScrolled(true);
        } else {
            if(window.scrollY <= 50)
                setScrolled(false);
            document.body.classList.remove('overflow-hidden');
        }
    }, [menu]);

    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll",handleScroll);
    },[])
    return (
        <>
            <div className={`navbar fixed left-[50%] translate-[-50%] top-10 z-100 p-3 md:px-5 rounded-b-20 md:rounded-[70px] md:w-9/10 w-full ${scrolled?" md:bg-white/15 md:backdrop-blur-md backdrop-blur-3xl border-white border-b":""}`}>
                <div className="navbar-big lg:flex justify-between h-15 items-center hidden mx-auto">
                    <div className="navbar-left text-3xl font-semibold relative cursor-pointer">
                        <a href="/#home"><p className='z-1 relative bg-transparent name text-red md:text-xl xl:text-3xl'>Ankush Kumar Singh</p></a>
                        <img className='absolute bottom-[-5px] right-[-30px] w-[100px]' src={styleImg} alt="" />
                    </div>
                    <div className="navbar-middle text-xl font-semibold xl:text-2xl">
                        <ul className='flex gap-8'>
                            <li className='hover:text-pink-500 duration-500 hover:scale-105'><a href="/#home">Home</a> </li>
                            <motion.li className='hover:text-pink-500 duration-500 hover:scale-105'
                            layoutId="underline"
                            ><a href="/#about">About me</a> </motion.li>
                            <li className='hover:text-pink-500 duration-500 hover:scale-105'><a href="/#skills">Skills</a> </li>
                            <li className='hover:text-pink-500 duration-500 hover:scale-105'><a href="/#projects">Projects</a> </li>
                            <li className='group cursor-pointer relative'>
                                <p className='flex items-center gap-2'>Other<IoIosArrowDown /></p>
                                <div className='hidden group-hover:block absolute top-7 w-50 pt-4'>
                                    <ul className='flex flex-col gap-2 bg-[#1c1c1c] border-t-2 border-pink-400 px-5 pt-4 shadow-md shadow-gray-500'>
                                        <li className='border-b-1 border-gray-500 pb-2 hover:text-pink-500 duration-500 hover:scale-105'>Education</li>
                                        <li className='hover:text-pink-500 duration-500 hover:scale-105 pb-3'><a href="/#certificates">Certifications</a></li>
                                        
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
                <div className="navbar-small lg:hidden font-semibold text-xl">
                    <div className='flex items-center justify-between h-15 mx-auto text-2xl'>
                        <div className='relative'>
                            <a href="/#home"><p>Ankush Kumar Singh</p></a>
                            <img src={styleImg} className='w-20 absolute right-[-30px] bottom-[-5px] z-[-1]' alt="" />
                        </div>
                        {menu ? <RxCross2 className='text-4xl' onClick={menuclicked} /> : <CgMenuRightAlt className='text-4xl' onClick={menuclicked} />}
                    </div>
                    <div className={`fixed z-50 w-8/10 top-21.5 h-[calc(100vh-80px)] bg-[#1c1c1c] transition-all duration-500 ease-in-out ${menu ? 'right-0' : '-right-full'}`}>
                        <ul className='bg-white/10 backdrop-blur-xl flex flex-col gap-4 py-10 px-8 text-start h-full text-xl '>
                            <li><a href="/#home" onClick={menuclicked}>Home</a> </li>
                            <li><a href="/#about" onClick={menuclicked}>About me</a> </li>
                            <li><a href="/#skills" onClick={menuclicked}>Skills</a> </li>
                            <li><a href="/#projects" onClick={menuclicked}>Projects</a> </li>
                            <li><a href="/#certificates" onClick={menuclicked}>Certifications</a> </li>
                            <li><a href="/#contact" onClick={menuclicked}>Contact</a> </li>
                            <li className='flex gap-4 mt-8'>
                                <a href="https://www.linkedin.com/in/aks9618" target='blank'><img src={linkedIn} className='w-10 h-10  text-white' alt="linkedIn logo" /></a>
                                 <a href="https://github.com/ankush9618" target='blank'><img src={git} className='w-10 h-10 rounded-full bg-white' alt="github logo" /></a>
                                  <a href="https://www.instagram.com/_myself_aks_/" target='blank'><img src={instagram} className='w-10 h-10 text-white' alt="instagram logo" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <div className='h-[1px] mx-auto sticky top-20 lg:top-25 bg-white shadow-blue-500'></div> */}
        </>
    )
}

export default Navbar;