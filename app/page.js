'use client'
import React, { useState } from 'react';
import Header from '@/components/header'
import Banner from '@/components/banner'
import PrimaryButton from '@/components/ui/primaryButton'
import SectionTitle from '@/components/ui/sectionTitle'
import About from '@/components/about'
import { statusData } from '@/components/data'
import Projects from '@/components/projects'
import Testimonial from '@/components/testimonial'
import InputBox from '@/components/ui/inputBox'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

const Home = () => {
  const [signUp, isSignUP] = useState(false)
  return (
    <div>
      <Header 
      signUp={()=>isSignUP(true)}
      />
      <Banner
        title="Explore homes that fit your dreams"
        showBtn={true}
      />
      <About data={statusData} />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
      {/* SignUp DialogBox open  */}
      {signUp &&
        <div className='h-screen bg-black/60 overflow-hidden flex items-center justify-center fixed w-full top-0 bottom-0 z-50'>
          <div className='w-[500px] h-[500px] p-4 bg-red-300 absolute'>
            {/* dialog header  */}
            <div onClick={() => isSignUP(false)} className='text-end mb-4'>
              <span className='bg-white px-4 py-1 rounded-full cursor-pointer'>close</span>
            </div>
            <div
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe eius ipsa autem nulla rem laboriosam nemo voluptatem alias repellat.
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Home
