import React from 'react'

const SubHeading = ({text,myClass}) => {
  return (
      <p className={`${myClass} font-medium text-2xl leading-6 text-white max-sm:text-xl`}>{text}</p>
  )
}

export default SubHeading