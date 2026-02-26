import React from 'react'
import SectionName from '../utils/SectionName';
import oracle from '../../assets/certificates/1.png'
import hackerrank from '../../assets/certificates/3.png'
import internship from '../../assets/certificates/internship.png'
import wipro from '../../assets/certificates/2.png'
import internshala from '../../assets/certificates/4.png'
import javaScript from '../../assets/certificates/5.png'
import css from '../../assets/certificates/6.png'
import python from '../../assets/certificates/7.png'



function Certificates() {
  return (
    <div className='w-8/10 mx-auto md:w-9/10 text-center mb-10 md:mt-30 mt-20 md:scroll-mt-30 scroll-mt-25' id='certificates'>
      <div className="certification-heading md:mb-20 mb-10">
        <SectionName name="Certifications" wid={20} />
      </div>
      <div className="certidications grid gap-8 text-start w-full md:grid-cols-[repeat(auto-fill,280px)] auto-rows-[10px] justify-center">
        <div className="about-image row-end-[span_5] rounded-xl overflow-hidden hover:scale-105 duration-500 cursor-pointer">
          <img src={oracle} alt="Oracle Certificate" className='w-full rounded-xl p-0.5 object-cover h-full' loading='lazy' />
        </div>
        <div className="about-image rounded-xl row-end-[span_6]  overflow-hidden hover:scale-105 duration-500 cursor-pointer relative">
          <img src={hackerrank} alt="Oracle Certificate" className='w-full rounded-xl p-0.5 object-cover h-full' loading='lazy' />
        </div>
        <div className="about-image rounded-xl row-end-[span_5] overflow-hidden hover:scale-105 duration-500 cursor-pointer relative">
          <img src={javaScript} alt="Oracle Certificate" className='w-full rounded-xl p-0.5 object-cover h-full' loading='lazy' />
        </div>
        <div className="about-image rounded-xl row-end-[span_12] overflow-hidden hover:scale-105 duration-500 cursor-pointer relative ">
          <img src={wipro} alt="Oracle Certificate" className='w-full rounded-xl p-0.5 object-cover h-full' loading='lazy' />
        </div>
        <div className="about-image rounded-xl row-end-[span_5] overflow-hidden hover:scale-105 duration-500 cursor-pointer relative">
          <img src={internshala} alt="Oracle Certificate" className='w-full rounded-xl p-0.5 object-cover h-full' loading='lazy' />
        </div>
        <div className="about-image rounded-xl row-end-[span_5] overflow-hidden hover:scale-105 duration-500 cursor-pointer relative">
          <img src={css} alt="Oracle Certificate" className='w-full rounded-xl p-0.5 object-cover h-full' loading='lazy' />
        </div>
        <div className="about-image rounded-xl row-end-[span_10]  overflow-hidden hover:scale-105 duration-500 cursor-pointer relative">
          <img src={internship} alt="Oracle Certificate" className='w-full rounded-xl p-0.5 object-cover h-full' loading='lazy' />
        </div>
        <div className="about-image rounded-xl row-end-[span_5]  overflow-hidden hover:scale-105 duration-500 cursor-pointer relative">
          <img src={python} alt="Oracle Certificate" className='w-full rounded-xl p-0.5 object-cover h-full' loading='lazy' />
        </div>
        
        
        
        
      </div>
    </div>
  )
}

export default Certificates