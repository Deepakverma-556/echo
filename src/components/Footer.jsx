import React from 'react'
import footerLogo from "../assets/images/webp/footer-logo.webp"
import { HEADER_LIST, SOCIAL_MEDIA_LIST } from '../utils/helper'
import line from "../assets/images/png/footer-border.png"
import Description from '../common/Description'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className='pb-[30px]'>
      <div className='max-w-[1172px] mx-auto px-4'>
        <div className='flex items-start sm:justify-between pb-[60px] max-sm:pb-8 max-sm:flex-wrap'>
          <div className='max-sm:w-full'>
            <a href="#footer-logo"><img src={footerLogo} alt="footer-logo" className='h-[190px] max-md:h-32 max-sm:h-24 pointer-events-none' /></a>
          </div>
          <ul className='flex flex-col gap-[14px] max-md:gap-2 max-sm:pt-6 max-sm:w-1/2'>
            <li className='text-base leading-5 text-white'>Quick Links</li>
            {HEADER_LIST.map((obj, i) => (
              <li key={i}><a href={obj.link} className='text-base leading-5 text-white transition-all duration-300 hover:text-lightSky opacity-70'>{obj.title}</a></li>
            ))}
          </ul>
          <div className='max-sm:pt-6'>
            <p className='text-base leading-5 text-white pb-3'>Send Us An E-mail</p>
            <a href="mailto:info@echoai.ai" className='text-base leading-5 text-white transition-all duration-300 hover:text-lightSky opacity-70'>info@echoai.ai</a>
            <p className='text-base leading-5 text-white pt-8 pb-[18px]'>Follow Us On</p>
            <div className='flex items-center gap-3'>
              {SOCIAL_MEDIA_LIST.map((obj, i) => (
                <div key={i} className='h-10 w-10 max-sm:h-8 max-sm:w-8 hover:from-black hover:to-gray-800 rounded-full bg-gradient-to-r from-sky to-lightSky flex items-center justify-center'><a target='blank' href={obj.link} className='w-full h-full flex justify-center items-center'>{obj.icon}</a></div>
              ))}
            </div>
          </div>
        </div>
        <img src={line} alt="footer-border" />
        <Description text={`Copyright ECHO AI © ${year} | All Rights Reserved`} myClass="text-center pt-5" />
      </div>
    </div>
  )
}

export default Footer