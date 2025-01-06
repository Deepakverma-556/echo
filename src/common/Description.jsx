import React from 'react'

const Description = ({myClass, text}) => {
  return (
      <p className={`${myClass} text-base text-white leading-6 max-sm:text-sm`}>{text}</p>
  )
}

export default Description