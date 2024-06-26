'use client';
import Image from 'next/image';
import photo from '@/public/cropped.jpeg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5);
    const { activeSection, setActiveSection, setTimeOfLastClick } =
        useActiveSectionContext();

    return (
        <section
            ref={ref}
            id='home'
            className='sm: mb-28 max-w-[50rem] scroll-mt-[100rem] text-center'
        >
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'tween',
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src={photo}
                            alt='Cameron photo'
                            width={192}
                            height={192}
                            quality={95}
                            priority={true}
                            className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
                        />
                    </motion.div>
                    <motion.span
                        className='absolute bottom-0 right-0 text-4xl'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        💻
                    </motion.span>
                </div>
            </div>
            {/* <span className='font-bold mb-1'>Hello, I am Cameron, {" "}</span> */}
            <motion.p
                className='mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                Cameron Diaz - Front-end Developer specializing in React/Next.js
            </motion.p>

            <motion.div
                className='flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                {/* use <Link> because nagivation */}
                <Link
                    href='#contact'
                    className='group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-90'
                    onClick={() => {
                        setActiveSection('Contact');
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    Contact me here{' '}
                    <BsArrowRight className='opacity-70 transition group-hover:translate-x-1' />
                </Link>

                <a
                    className='borderBlack group flex  cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 text-gray-900 outline-none transition hover:scale-110 focus:scale-110 active:scale-90 dark:bg-white/10 dark:text-white'
                    href='/CameronDiaz_Resume24.pdf'
                    download
                >
                    Download Resume{' '}
                    <HiDownload className='opacity-60 transition group-hover:translate-y-1' />
                </a>

                <a
                    className='borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-90 dark:bg-white/10 dark:text-white/60'
                    href='https://linkedin.com/in/camerondiaz'
                    target='_blank'
                >
                    <BsLinkedin />
                </a>

                <a
                    className='borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.30rem] text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-90 dark:bg-white/10 dark:text-white/60'
                    href='https://github.com/cameron-diaz'
                    target='_blank'
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}
