import React from 'react'

const SectionTitle = ({title1, title2, disc}) => {
    return (
        <div className='text-center mb-8'>
            <h2 className='text-2xl sm:text-4xl font-bold mb-2'>
                {title1} <span className='font-light underline decoration-1 underline-offset-4'>{title2}</span>
            </h2>
            <p className='text-gray-500 max-w-80 mx-auto'>{disc}</p>
        </div>
    )
}

export default SectionTitle
