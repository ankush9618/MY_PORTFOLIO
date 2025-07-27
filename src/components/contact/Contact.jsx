import React from 'react';
import SectionName from '../utils/SectionName';
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';

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
        <div className='text-start'>
          <span className='textClip md:text-4xl font-semibold text-2xl'>Let's talk</span>
          <p className='text-gray-300'>
            Feel free to talk with me anytime — I'm always open to a good conversation, questions, or just a quick hello. 😊
          </p>
          <div className='contact-details text-gray-400 mt-4 flex flex-col gap-2 mb-5'>
            <div className="email flex items-center gap-2"><IoIosMail className='text-xl' /> ankushkumar.singh@gmail.com</div>
            <div className="phone flex items-center gap-2"><FaPhoneAlt className='text-xl' /> +91 9618538848</div>
            <div className="location flex items-center gap-2"><IoLocationSharp className='text-xl' /> India</div>
          </div>
        </div>
        <div className='text-start w-full'>
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input name="name" type="text" placeholder='Enter your name' id="name" className='md:w-full border-2 px-2 py-1 block mt-2 mb-5 rounded-md border-gray-400' required />
            <label htmlFor="email">Your Email</label>
            <input name="email" type="email" placeholder='Enter your email' id="email" className='md:w-full border-2 px-2 py-1 block mt-2 mb-5 rounded-md border-gray-400' required />
            <label htmlFor="message">Your Message</label>
            <textarea name="message" placeholder='Enter your message here..' id="message" className='md:w-full border-2 px-2 py-1 block mt-2 mb-5 rounded-md border-gray-400' rows={5} cols={25} required />
            <input type="submit" value="Submit" className='bgGradient px-5 py-3 text-xl rounded-3xl cursor-pointer hover:scale-104 duration-700 text-white' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
