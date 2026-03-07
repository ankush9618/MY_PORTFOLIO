import React from 'react';
import SectionName from '../utils/SectionName';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import git from "../../assets/git.svg"
import linkedIn from "../../assets/linkedIn.svg"
import instagram from "../../assets/insta.svg";
import { RiTelegram2Line } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import {motion} from 'framer-motion'

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_FORM_PUBLIC_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Response sent successfully", res);
    }
  };
  return (
    <div className='mx-auto w-9/10 text-center mb-10 md:mt-30 mt-20 md:scroll-mt-30 scroll-mt-25' id='contact'>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="about-heading md:mb-20 mb-10">
        <SectionName name="Get in touch" wid={20} />
      </div>
      <div className='md:w-8/10 w-9/10 mx-auto md:flex justify-center gap-8'>
        <motion.div className='text-start'
        initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6}}
        >
          <span className='textClip md:text-4xl font-semibold text-2xl'>Let's talk</span>
          <p className='text-gray-300'>
            Feel free to talk with me anytime — I'm always open to a good conversation, questions, or just a quick hello. 😊
          </p>
          <div className='contact-details text-gray-400 mt-4 flex flex-col gap-2 mb-5'>
            <div className="email flex items-center gap-2"><IoIosMail className='text-xl' /> <a href="mailto:ankushkumar9618@gmail.com">ankushkumar9618@gmail.com</a></div>
            <div className="phone flex items-center gap-2"><FaPhoneAlt className='text-xl' /> <a href="tel:+919618538848">+91 9618538848</a></div>
            <div className="location flex items-center gap-2"><IoLocationSharp className='text-xl' /> Hyderabad, India.</div>
          </div>

          <div className='gap-4 mt-8 hidden md:flex'>
            <a href="https://www.linkedin.com/in/aks9618" target='blank'><img loading='lazy' src={linkedIn} className='w-10 h-10 hover:scale-115 duration-300 text-white' alt="linkedIn logo" /></a>
            <a href="https://github.com/ankush9618" target='blank'><img loading='lazy' src={git} className='w-10 h-10 rounded-full text-white bg-white hover:scale-115 duration-300' alt="github logo" /></a>
            <a href="https://www.instagram.com/_myself_aks_" target='blank'><img loading='lazy' src={instagram} className='w-10 h-10 text-white hover:scale-115 duration-300' alt="instagram logo" /></a>

          </div>

        </motion.div>
        <motion.div className='text-start w-full'
        initial={{y:100,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.6}}
        >
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input name="name" type="text" placeholder='Enter your name' id="name" className='w-full border-2 px-2 py-1 block mt-2 mb-5 rounded-md border-gray-400' required />
            <label htmlFor="email">Your Email</label>
            <input name="email" type="email" placeholder='Enter your email' id="email" className='w-full border-2 px-2 py-1 block mt-2 mb-5 rounded-md border-gray-400' required />
            <label htmlFor="message">Your Message</label>
            <textarea name="message" placeholder='Enter your message here..' id="message" className='w-full border-2 px-2 py-1 block mt-2 mb-5 rounded-md border-gray-400' rows={5} cols={25} required />
            <button type="submit" value="Submit" className='bgGradient px-5 py-3 text-xl rounded-3xl cursor-pointer hover:scale-104 duration-700 text-white flex justify-center items-center gap-2 w-full' >Send message<RiTelegram2Line className='text-2xl'/></button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
