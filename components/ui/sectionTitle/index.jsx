import React from 'react'
import { motion } from "motion/react"

const SectionTitle = ({ title1, title2, disc }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center mb-8'>
            <h2 className='text-2xl sm:text-4xl font-bold mb-2'>
                {title1} <span className='font-light underline decoration-1 underline-offset-4'>{title2}</span>
            </h2>
            <p className='text-gray-500 max-w-80 mx-auto'>{disc}</p>
        </motion.div>
    )
}

export default SectionTitle
