import React from 'react';
import clsx from 'clsx';

const PrimaryButton = ({variant, size, children, onClick, className}) => {

  const baseStyle = "text-lg px-8 py-3 rounded leading-none"

  const variants = {
    primary:"border border-white text-white",
    secondary:"bg-blue-600 border border-blue-500 text-white",
    tertary: "rounded-full bg-white text-black text-base",
  }

  const sizes = {
    sm:"px-3",
    md:"px-12",
    'w-fit':"w-fit"
  }

  const buttonClass = clsx(baseStyle, variants[variant], sizes[size], className);

  return ( 
   <button className={buttonClass} onClick={onClick}>
      {children}
   </button>
  )
}

export default PrimaryButton
