import React, { useState } from 'react'
import { FAQ_LIST } from '../utils/helper'
import Heading from '../common/Heading'
import { Arrow } from '../utils/icon'
import Description from '../common/Description'

const Faq = () => {
  const [active, setActive] = useState()

  const handleClick = (i) => {
    setActive(active === i ? "" : i)
  }
  return (
    <div className='bg-darkBlue pb-[356px]'>
      <div className='max-w-[1054px] mx-auto px-4'>
        <Heading text="FAQs" myClass="pb-10 max-sm:pb-6" />
        {FAQ_LIST.map((obj, i) => (
          <div key={i} onClick={() => handleClick(i)} className={`rounded-xl overflow-hidden max-w-[1022px] bg-opacity-10 mb-6 ${active === i ? "bg-gradient-to-r from-sky to-lightSky" : "bg-white"} p-[1px]`}>
            <div className='cursor-pointer p-6 max-md:p-4 flex items-center justify-between w-full bg-darkBlue overflow-hidden'>
              <h2 className='text-xl font-medium leading-6 text-white'>{obj.title}</h2>
              <Arrow myClass={`transition-all duration-500 ${active === i ? "rotate-180" : ""}`} />
            </div>
            <Description text={obj.description} myClass={` px-6 transition-all duration-500 ease-linear bg-darkBlue rounded-b-xl overflow-y-auto ${active === i ? "h-[120px]" : "h-0 opacity-0"}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq