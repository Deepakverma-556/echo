import React from 'react'
import Header from '../common/Header'
import Description from "../common/Description"
import CustomButton from '../common/CustomButton'
import hero from "../assets/images/webp/hero.webp"
import ball from "../assets/images/webp/ball.webp"

const Hero = () => {
  return (
    <div className='bg-heroBg bg-cover bg-no-repeat pb-[118px] max-md:pb-16 max-sm:pb-10'>
      <div className='max-w-[1243px] mx-auto px-4 relative'>
        <Header />
        <div className='flex max-md:flex-wrap items-center pt-[120px] max-lg:pt-20 justify-between'>
          <div className='text-center max-md:mx-auto'>
            <h1 className='max-w-[705px] text-white font-bold text-7xl leading-[86px] max-lg:text-6xl max-md:text-4xl'>Innovate, Automate, Accelerate</h1>
            <Description text="Next Gen AI Automation to Scale Your Business." myClass="py-6 max-sm:py-3" />
            <CustomButton text="Book A Call Now!" myClass="py-[19.5px] px-[38.75px]" />
          </div>
          <img src={hero} alt="hero" className='h-[476px] max-lg:h-96 object-cover max-md:mx-auto max-md:mt-3' />
        </div>
        <img src={ball} alt="ball" className='absolute -left-[31%] -bottom-[37%] h-[600px] object-cover max-sm:hidden' />
      </div>
    </div>
  )
}

export default Hero