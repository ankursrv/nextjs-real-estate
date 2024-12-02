import React from 'react'
import { testimonialData } from '../data'
import Image from 'next/image'
import SectionTitle from '../ui/sectionTitle'

const Testimonial = () => {
  return (
    <section className='container mx-auto py-10 my-20 px-14 sm:px-0'>
      <SectionTitle
        title1="Customer"
        title2="Testimonials"
        disc="Real Stories from Those Who Found Home with Us"
      />
      <div className='flex flex-col sm:flex-row gap-8 justify-center'>
        {
          testimonialData.map((testi, index) => (
            <div key={index} className='border shadow-lg rounded px-8 py-12 text-center w-full sm:max-w-[340px]'>
              <Image
                src={testi.image}
                width={80}
                height={80}
                alt="not found"
                className='mx-auto mb-4 rounded-full'
              />
              <h4 className='text-xl text-gray-700 font-medium'>{testi.title}</h4>
              <small className='text-gray-500 mb-4 text-sm inline-block'>{testi.skill}</small>
              <figure className='flex gap-2 justify-center mb-4'>
                {
                  testi.ratings.map((star, index) => (
                    <Image
                      key={index}
                      src={star}
                      width={16}
                      height={15}
                      alt='not found'

                    />
                  ))
                }
              </figure>
              <p className='text-gray-600'>{testi.discription}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonial
