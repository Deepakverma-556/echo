import React, { useState, useEffect } from 'react'
import logo from "../assets/images/webp/logo.webp"
import { HEADER_LIST } from '../utils/helper'
import CustomButton from './CustomButton'

const Header = () => {
  const [open, setOpen] = useState()
  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 780) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    return () => {
      window.removeEventListener("resize", handleOverflow);
    };
  }, [open]);

  return (
    <>
      <div className='flex items-center w-full justify-between pt-[14px] max-w-[1172px]'>
        <a href="#logo"><img src={logo} alt="logo" className='h-[72px] max-lg:h-10 pointer-events-none' /></a>
        <ul className='flex items-center gap-8 max-md:hidden max-lg:gap-6'>
          {HEADER_LIST.map((obj, i) => (
            <li key={i}><a href={obj.link} className='text-base leading-5 text-white transition-all duration-300 hover:text-lightSky'>{obj.title}</a></li>
          ))}
        </ul>
        <CustomButton text="Get Started" myClass="py-[13.5px] px-[32.48px] max-md:hidden" />
        <div
          className={`md:hidden z-30 cursor-pointer`}
          onClick={() => setOpen(!open)}
        >
          <div className={`flex flex-col gap-3 items-center cursor-pointer ${open ? "!gap-0 transition-all duration-300" : "transition-all duration-300"}`}>
            <div className={`h-[2px] bg-white w-8 transition-all duration-300 rounded-lg ${open ? "rotate-[50deg] origin-center" : ""} `}></div>
            <div className={`h-[2px] bg-white w-8 transition-all duration-300 rounded-lg ${open ? "-rotate-[53deg] origin-center" : ""} `}></div>
          </div>
        </div>
      </div>
      <div className={`w-full h-full bg-black transition-all duration-500 left-0 md:-top-full z-20 fixed flex flex-col justify-center items-center ${open ? "top-0 left-0" : "-top-full"
        }`}>
        <ul className='flex flex-col items-center gap-8'>
          {HEADER_LIST.map((obj, i) => (
            <li key={i}><a onClick={() => setOpen(false)} href={obj.link} className='text-base leading-5 text-white'>{obj.title}</a></li>
          ))}
          <CustomButton customOnClick={() => setOpen(false)} text="Get Started" myClass="py-[13.5px] px-[32.48px]" />
        </ul>
      </div>
    </>

  )
}

export default Header