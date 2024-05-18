'use client';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { delay, motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {
    const { ref } = useSectionInView('Skills', 0.5);

    return (
        <section
            ref={ref}
            id='skills'
            className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
        >
            <SectionHeading>Skills</SectionHeading>
            <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
                {skillsData.map((skill, index) => (
                    <motion.li
                        variants={fadeInAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                        key={index}
                        className='rounded-xl border border-black/[.10] bg-white px-5 py-3'
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
