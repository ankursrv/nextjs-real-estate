import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InputBox from '../ui/inputBox'
import PrimaryButton from '../ui/primaryButton'

const footerLink = [
  {
    item:"Home",
    href:"/",
  },
  {
    item: "About us",
    href: "/",
  },
  {
    item: "Contact us",
    href: "/",
  },
  {
    item: "Privacy Policy",
    href: "/",
  },
]

const Footer = () => {
  return (
    <footer className='bg-gray-900 py-10 px-4 md:px-20 lg:px-32 mt-40'>
      <div className='container mx-auto flex justify-between'>
      <div className='w-full md:w-1/3'>
        <Image
          src="/images/logo_dark.svg"
          width={131}
          height={39}
          alt='not found'
        />
        <p className='text-gray-400 mt-4'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text.
        </p>
      </div>
      <div className='text-gray-400 w-full md:w-1/5'>
        <h4 className='text-white font-bold text-lg mb-4'>Company</h4>
        <ul className='space-y-2'>
          {
            footerLink.map((items,index)=>(
              <li key={index} className='hover:text-white'>
                <Link href={items.href}>{items.item}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='md:w-1/3 pr-16'>
        <h4 className='text-white font-bold text-lg mb-4'>Subscribe to our newsletter</h4>
        <p className='text-gray-400'>
          The latest news, articles, and resources, sent to your inbox weekly.
        </p>
          <div className='flex items-center gap-2 mt-4'>
          <InputBox
            placeholder="Enter your Email"
            className="bg-gray-800 h-full border-none focus:ring-0"
          />
          <PrimaryButton variant="secondary" className="!px-4">
            Subscribe
          </PrimaryButton>
       </div>
      </div>
      </div>

    </footer>
  )
}

export default Footer
