'use client';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView('About');

    return (
        <motion.section
            ref={ref}
            className='mb-28 max-w-[45rem] scroll-mt-[12rem] text-center leading-8 sm:mb-40'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id='about'
        >
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3'></p>
            <p>
                {' '}
                Dynamic and adaptable{' '}
                <span className='font-bold'> Software Engineer </span> with a
                proven track record of success in diverse client projects.
                Specialized in{' '}
                <span className='font-bold'>Front-End development </span> , with
                recent focus on enhancing proficiency in React and TypeScript,
                while expanding skills to encompass Back-End tasks using
                Node.js, AWS, and serverless technologies. Experienced in
                designing and building UI for innovative applications, such as a
                Generative AI Chat application using Next.js. Proficient in
                utilizing contemporary development tools, methodologies, and
                industry best practices to deliver exceptional results.
            </p>
        </motion.section>
    );
}
