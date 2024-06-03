'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import { useFormStatus } from 'react-dom';
import SubmitButton from './submit-button';
import toast from 'react-hot-toast';

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
                    const { data, error } = await sendEmail(formData);
                    if (error) {
                        toast.error(error);
                        return;
                    }
                    toast.success('email sent successfully');
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
                <SubmitButton />
            </form>
        </motion.section>
    );
}
