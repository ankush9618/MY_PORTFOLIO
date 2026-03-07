import React, { useState } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import {motion} from 'framer-motion'

function CerificateCard({ certificate }) {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(true);
        document.body.classList.add('overflow-hidden');
    }

    const handleClose = () => {
        setActive(false);
        document.body.classList.remove('overflow-hidden');
    }
    return (
        <>
            <motion.div className={`row-end-span_${certificate.height} rounded-xl overflow-hidden hover:scale-105 duration-500 cursor-pointer relative bg-white/10`}
            initial={{scale:0.5,opacity:0}}
            whileInView={{scale:1,opacity:1}}
            transition={{duration:0.6}}
            >
                <img onClick={handleClick} src={certificate.img} alt={certificate.name} className='w-full rounded-xl p-0.5 object-cover h-full opacity-80' loading='lazy' />
            </motion.div>
            {
                active && <div className='fixed top-0 left-0 p-5 flex justify-center items-center z-100 h-screen w-full bg-white/10 backdrop-blur-xs' onClick={handleClose}><motion.div className={`${certificate.height > 7 ? "w-100" : "w-200"} relative flex flex-col md:flex-col-reverse gap-4`}
                initial={{scale:0.5,opacity:0}}
                whileInView={{scale:1,opacity:1}}
                transition={{duration:0.6}}
                ><img src={certificate.img} alt="" className='w-full rounded-xl cursor-pointer' /> <div className='bg-black/10 hover:scale-110 duration-300 md:bg-white/20 size-10 md:size-12 mx-auto rounded-full flex justify-center items-center text-7xl text-white cursor-pointer' onClick={handleClose}><IoCloseSharp /></div></motion.div></div>
            }
        </>
    )
}

export default CerificateCard