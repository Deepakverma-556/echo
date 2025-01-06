import React from 'react'

const Heading = ({myClass, text}) => {
  return (
      <h2 className={`${myClass} text-center font-semibold text-5xl max-sm:text-4xl leading-[57px] text-white`}>{text}</h2>
  )
}

export default Heading