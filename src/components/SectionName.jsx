import React from 'react'

import styleImg from "../assets/download.svg"

function SectionName({name,wid}) {
  return (
    <>
    <div className='relative md:w-80 w-40 mx-auto'>
        <p className='relative md:text-5xl text-3xl font-semibold tracking-wider'>
           {name}
        </p>
        <img src={styleImg} alt=""  className={`absolute md:w-${2*wid} w-${wid} md:-bottom-2 bottom-0 md:-right-2 -right-2 z-[-1]`}/>
    </div>
    </>
  )
}

export default SectionName