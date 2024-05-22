import React from 'react'

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customePaddings,
  children
}) => {
  return (
    <div className={`relative ${
      customePaddings || `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""} ${
        className || ""
      }`
      }`}>

      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none "/>
    </div>
  )
}

export default Section