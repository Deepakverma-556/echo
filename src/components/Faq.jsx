import React, { useState } from 'react'
import { FAQ_LIST } from '../utils/helper'
import Heading from '../common/Heading'
import { Arrow } from '../utils/icons'
import Description from '../common/Description'

const Faq = () => {
  const [active, setActive] = useState(0)

  const handleClick = (i) => {
    setActive(active === i ? "" : i)
  }
  return (
    <div id='faq' className='bg-darkBlue pb-[356px] max-lg:pb-48 max-md:pb-24 max-sm:pb-12'>
      <div id='benefits' className='max-w-[1054px] mx-auto px-4'>
        <Heading text="FAQs" myClass="pb-10 max-sm:pb-6" />
        {FAQ_LIST.map((obj, i) => (
          <div key={i} onClick={() => handleClick(i)} className={`rounded-xl bg-opacity-10 mb-6 ${active === i ? "bg-gradient-to-r from-sky to-lightSky" : "bg-white"} p-[1px]`}>
            <div className={`cursor-pointer p-6 max-md:p-4 flex items-center justify-between w-full bg-darkBlue rounded-t-xl ${active === i ? "" : "rounded-b-xl"}`}>
              <h2 className='text-xl max-sm:text-lg max-sm:leading-6 font-medium leading-6 text-white pr-4'>{obj.title}</h2>
              <Arrow myClass={`transition-all duration-500 ${active === i ? "rotate-180" : ""}`} />
            </div>
            <div className={`bg-darkBlue rounded-b-xl ${active === i ? "pb-4" : ""}`}>
              <Description text={obj.description} myClass={`px-4 transition-all duration-500 ease-linear overflow-y-auto ${active === i ? "h-[120px]" : "h-0 opacity-0"}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq