import React from 'react'
import InputBox from '@/components/ui/inputBox'
import PrimaryButton from '@/components/ui/primaryButton'
import SectionTitle from '../ui/sectionTitle'

const Contact = () => {
  return (
      <div className="flex flex-col container mx-auto justify-center sm:w-1/2 space-y-6 px-14 sm:px-0">
          <SectionTitle
              title1="Contact"
              title2="With Us"
              disc="Ready to Make a Move? Let’s Build Your Future Together"
          />
          <div className='flex flex-col sm:flex-row gap-y-4 gap-x-4'>
              <InputBox
                  label="Your Name"
                  placeholder="Your Name"
                  textarea={false}
              />
              <InputBox
                  label="Your Email"
                  placeholder="Your Email"
                  textarea={false}
              />
          </div>
          <InputBox
              label="Message"
              placeholder="Write something..."
              textarea={true}
          />
          <div className='mx-auto'>
              <PrimaryButton variant="secondary" size="md">
                  Send Message
              </PrimaryButton>
          </div>
      </div>
  )
}

export default Contact
