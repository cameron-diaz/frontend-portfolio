'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';

export default function Contact() {
    const { ref } = useSectionInView('Contact');
    return (
        <motion.section
            ref={ref}
            id='contact'
            className='mb-20 w-[min(100%,38rem)] 
            text-center sm:mb-28'
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact Me</SectionHeading>

            <p className='-mt-4 text-gray-700'>
                You can contact me directly at{' '}
                <a
                    className='underline'
                    href='mailto:camerondiaz1004@gmail.com'
                >
                    camerondiaz1004@gmail.com
                </a>{' '}
                or through this form
            </p>
            <form
                className='mt-10 flex flex-col'
                action={async (formData) => {
                    await sendEmail(formData);
                }}
            >
                <input
                    type='email'
                    className='borderBlack h-14 rounded-lg px-4'
                    required
                    maxLength={500}
                    placeholder='Your Email'
                    name='senderEmail'
                />
                <textarea
                    className='borderBlack my-3 h-52 rounded-lg p-4'
                    required
                    maxLength={5000}
                    placeholder='Your Message'
                    name='senderMessage'
                />
                <button
                    type='submit'
                    className='group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-800 text-white outline-none transition-all hover:scale-110 hover:bg-gray-900 focus:scale-110 active:scale-105'
                >
                    Submit{' '}
                    <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1' />
                </button>
            </form>
        </motion.section>
    );
}
