import Image from 'next/image'
import React from 'react'
import PrimaryButton from '../ui/primaryButton'
import SectionTitle from '../ui/sectionTitle'


const About = ({data}) => {
    return (
        <section className='lg:container xl:container p-14 md:px-20 lg:px-32'>
            <SectionTitle
                title1="About"
                title2="Our Brand"
                disc="Passionate About Properties, Dedicated to Your Vision"
            />
            <div className='flex flex-col md:flex-row md:gap-20 items-start justify-center'>
                <Image
                    src="/images/brand_img.png"
                    width={512}
                    height={522}
                    alt='brand'
                    className='w-full sm:w-1/2 max-w-lg mx-auto'
                />

                <div className='w-full text-gray-600 flex flex-col mt-10 items-center md:items-start'>
                    
                    <ul className='grid grid-cols-2 gap-6 md:gap-10 w-full text-center sm:text-start'>
                        {
                            data.stats.map((item, index) => (
                                <li key={index}>
                                    <h4 className='text-4xl font-medium text-gray-800'>{item.value}</h4>
                                    <span>{item.title}</span>
                                </li>
                            ))
                        }
                    </ul>
                    <p className='max-w-lg my-10'>
                        {data.discription}
                    </p>
                    <PrimaryButton variant="secondary" size="w-fit">
                        Learn More
                    </PrimaryButton>
                </div>
            </div>
        </section>
    )
}

export default About