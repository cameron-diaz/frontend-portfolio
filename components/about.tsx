'use client'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'

export default function About() {
    return <motion.section className='mb-28 sm:mb-40 max-w-[45rem] text-center leading-8'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .175 }}
    >
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>

        </p>
        <p>

        </p>
    </motion.section>
}
