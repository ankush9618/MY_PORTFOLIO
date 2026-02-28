import React from 'react'
import SectionName from '../utils/SectionName';
import { FaExternalLinkAlt } from "react-icons/fa";
import certificates from '../../../certificates.js';
import CerificateCard from '../utils/CerificateCard';


function Certificates() {
  return (
    <div className='w-8/10 mx-auto md:w-9/10 text-center mb-10 md:mt-30 mt-20 md:scroll-mt-30 scroll-mt-25' id='certificates'>
      <div className="certification-heading md:mb-20 mb-10">
        <SectionName name="Certifications" wid={20} />
      </div>
      <div className="certidications grid gap-8 text-start w-full md:grid-cols-[repeat(auto-fill,280px)] auto-rows-[10px] justify-center">
        {
          certificates.map((certificate)=>
            <CerificateCard key={certificate.id} certificate={certificate}/>
          )
        }

      </div>
    </div>
  )
}

export default Certificates