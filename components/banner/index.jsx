import React from 'react'
import "../banner/banner.scss"
import PrimaryButton from '../ui/primaryButton'

const Banner = ({ title, showBtn }) => {
  return (
    <div className='bg-img flex flex-col items-center justify-center bg-cover bg-center h-dvh mb-20'>
      {
        title && (
          <h1 className='text-5xl sm:text-6xl md:text-[82px] text-white font-semibold max-w-3xl text-center pt-20'>{title}</h1>
        )
      }
      {
        showBtn ? (
          <div className='space-x-6 mt-16'>
            <PrimaryButton variant='primary' onClick={() => alert("hello")}>
              Projects
            </PrimaryButton>

            <PrimaryButton variant='secondary'>
              Contact Us
            </PrimaryButton>
          </div>
        ):
        null
      }
      
    </div>
  )
}

export default Banner
