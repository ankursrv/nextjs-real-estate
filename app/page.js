'use client'
import React from 'react'
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
  return (
    <div>
      <Header />

      <Banner
        title="Explore homes that fit your dreams"
        showBtn={true}
      />

      <About data={statusData} />

      <Projects />

      <Testimonial />

      <Contact />

      <Footer />

    </div>
  )
}

export default Home
