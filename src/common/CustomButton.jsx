import React from 'react'

const CustomButton = ({ myClass, text,customOnClick }) => {
  return (
    <button onClick={customOnClick} className={`text-nowrap rounded-full text-white font-semibold text-xl max-lg:text-lg max-md:text-base leading-[25px] bg-gradient-to-br from-sky to-lightSky max-md:py-4 max-md:px-7 hover:from-black hover:to-gray-800 ${myClass}`}>{text}</button>
  )
}

export default CustomButton