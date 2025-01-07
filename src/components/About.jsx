import React from 'react'
import { ABOUT_LIST } from '../utils/helper'
import Heading from "../common/Heading"
import Description from '../common/Description'

const About = () => {
  return (
    <div id='about' className='pt-14 max-md:pt-0 bg-darkBlue'>
      <div className='max-w-[1170px] px-4 mx-auto'>
        <div className='flex max-sm:flex-wrap text-center'>
          {ABOUT_LIST.map((obj, i) => (
            <div key={i} className={`px-[96px] max-lg:px-16 bg-darkBlue max-md:pb-6 max-md:mx-auto ${i === 2 ? "" : "sm:relative after:absolute after:content-'' after:h-full after:w-[0.5px] after:bg-gradient-to-b after:from-white after:to-darkBlue after:top-0 after:right-0"}`}>
              <Heading text={obj.title} myClass="pb-2 max-md:pb-1 max-lg:!text-4xl max-md:!text-3xl" />
              <Description text={obj.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About