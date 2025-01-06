import React from 'react'
import { ABOUT_LIST } from '../utils/helper'
import Heading from "../common/Heading"
import Description from '../common/Description'

const About = () => {
  return (
    <div className='pt-14 bg-darkBlue'>
      <div className='max-w-[1170px] px-4 mx-auto'>
        <div className='flex max-md:flex-wrap text-center'>
          {ABOUT_LIST.map((obj, i) => (
            <div key={i} className={`px-[96px] max-lg:px-16 bg-darkBlue max-md:pb-6 max-md:mx-auto ${i === 2 ? "" : ""}`}>
              <Heading text={obj.title} myClass="pb-2 max-md:pb-1" />
              <Description text={obj.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About