import React from 'react'

import styleImg from "../../assets/download.svg"

function SectionName({name,wid}) {
  return (
    <>
    <div className='relative md:w-80 w-50 mx-auto'>
        <p className='relative md:text-5xl text-3xl font-semibold tracking-wider'>
           {name}
        </p>
        <img src={styleImg} alt="styleImage"  className={`absolute md:w-40 w-20 md:-bottom-2 bottom-0 md:-right-2 right-3 z-[-1]`}/>
    </div>
    </>
  )
}

export default SectionName