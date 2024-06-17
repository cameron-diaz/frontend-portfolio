'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitButton from './submit-button';
import toast from 'react-hot-toast';
import { useFormState } from 'react-dom';

// type SendEmailActionType = (formData: FormData) => Promise<void>;

export default function Contact() {
    const { ref } = useSectionInView('Contact');
    // const sendEmailAction = async (formData: FormData) => {
    //     const { data, error } = await sendEmail(formData);
    //     if (error) {
    //         toast.error(error);
    //         return;
    //     }
    //     toast.success('email sent successfully');
    // }
    // const [state, action] = useFormState(sendEmailAction: SendEmailActionType, { error: null })

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

            <p className='-mt-4 text-gray-700 dark:text-white/80'>
                You can contact me directly at{' '}
                <a
                    className='underline'
                    href='mailto:camerondiaz1994@gmail.com'
                >
                    camerondiaz1994@gmail.com
                </a>{' '}
                or through this form
            </p>
            <form
                className='mt-10 flex flex-col dark:text-black'
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
                    className='borderBlack h-14 rounded-lg px-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100'
                    required
                    maxLength={500}
                    placeholder='Your Email'
                    name='senderEmail'
                />
                <textarea
                    className='borderBlack my-3 h-52 rounded-lg p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100'
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
