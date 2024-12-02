import React from 'react'
import { projectsData } from '../data'
import Image from 'next/image'
import SectionTitle from '../ui/sectionTitle'
const Projects = () => {
    return (
        <section className='overflow-hidden container py-4 sm:pt-20 sm:my-20 px-14 sm:px-0'>
            <SectionTitle
                title1="Projects"
                title2="Completed"
                disc="Crafting Spaces, Building Legacies—Explore Our Portfolio"
            />
            <div className='mb-8 text-end'>
                <button className='p-3 bg-gray-200 rounded mr-2'>
                    <Image
                        src="/images/left_arrow.svg"
                        width={9}
                        height={14}
                        alt='not found'
                    />
                </button>
                <button className='p-3 bg-gray-200 rounded'>
                    <Image
                        src="/images/right_arrow.svg"
                        width={9}
                        height={14}
                        alt='not found'
                    />
                </button>
            </div>
            <div className='flex flex-col md:flex-row gap-8'>
                {
                    projectsData.map((item, index) => (
                        <div key={index} className='flex-shrink-0 w-full md:w-1/4 relative flex justify-center'>
                            <Image
                                src={item.image}
                                width={316}
                                height={406}
                                alt={item.altTxt}
                                className='mb-14 w-full'
                            />
                            <div className='shadow-md bg-white py-2 px-4 absolute w-3/4 sm:w-full sm:max-w-56  bottom-5'>
                                <h3 className='text-xl text-gray-800 font-semibold'>{item.title}</h3>
                                <p className='text-gray-500 text-sm leading-none flex mt-1'>
                                    <span className='border-r border-gray-400 inline-block pr-2'>{item.price}</span>
                                    <span className='pl-2'>{item.place}</span>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects
