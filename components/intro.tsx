'use client';
import Image from 'next/image';
import photo from '@/public/cropped.jpeg';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
  return (
    <section className='sm: mb-28 max-w-[50rem] text-center'>
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
        Dynamic and adaptable{' '}
        <span className='font-bold'> Software Engineer </span> with a proven
        track record of success in diverse client projects. Specialized in{' '}
        <span className='font-bold'>Front-End development </span> , with recent
        focus on enhancing proficiency in React and TypeScript, while expanding
        skills to encompass Back-End tasks using Node.js, AWS, and serverless
        technologies. Experienced in designing and building UI for innovative
        applications, such as a Generative AI Chat application using Next.js.
        Proficient in utilizing contemporary development tools, methodologies,
        and industry best practices to deliver exceptional results.
      </motion.p>

      <div>
        {/* use <Link> because nagivation */}
        <Link
          href='#contact'
          className='flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white'
        >
          Contact me here <BsArrowRight />
        </Link>
        <a className='flex items-center  gap-2 rounded-full bg-white px-7 py-3 text-gray-900'>
          Download Resume <HiDownload />
        </a>
        <a className='flex items-center gap-2 rounded-full bg-white p-4 text-gray-700'>
          <BsLinkedin />
        </a>
      </div>
    </section>
  );
}
