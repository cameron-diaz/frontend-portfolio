import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
    return (
        <section
            id='contact'
            className='mb-20 w-[min(100%,38rem)] 
        sm:mb-28'
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className='text-gray-700'>
                You can contact me directly at{' '}
                <a
                    className='underline'
                    href='mailto:camerondiaz1004@gmail.com'
                >
                    camerondiaz1004@gmail.com
                </a>{' '}
                or through this form
            </p>
            <form className='mt-10 flex flex-col'>
                <input type='email' className='borderBlack h-14 rounded-lg' />
                <textarea className='borderBlack my-3 h-52 rounded-lg p-4' />
                <button
                    type='submit'
                    className='group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-800 text-white outline-none transition-all hover:scale-110 focus:scale-110 active:scale-105 '
                >
                    Submit{' '}
                    <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1' />
                </button>
            </form>
        </section>
    );
}
