import React from 'react';
import SectionHeading from './section-heading';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id='contact' className='mb-20 sm:mb-28 
        w-[min(100%,38rem)]'>
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
                <input type="email" className="h-14 rounded-lg borderBlack" />
                <textarea className='h-52 my-3 rounded-lg borderBlack p-4' />
                <button type='submit' className='flex group justify-center items-center gap-2 h-[3rem] w-[8rem] bg-gray-800 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 '>
                    Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>
                </button>
            </form>
        </section>
    );
}
