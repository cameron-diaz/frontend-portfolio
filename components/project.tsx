'use client'
import React from 'react';
import { projectsData } from "@/lib/data";
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';


type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.30 1'],
    // ^ begins when bottom of viewport meets top of target
    // ends when the bottom of the viewport has gone 33% past the end of the target
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.80, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div ref={ref} style={{
      scale: scaleProgress,
      opacity: opacityProgress
    }}
    className='mb-[20rem] sm:mb-8 last:mb-0'
    >
    <section 
    className='group relative max-w-[42rem] overflow-hidden border-black/5 bg-gray-100 transition even:pl-8 hover:bg-gray-200 sm:h-[20rem] sm:pr-8 '>
      <div className='flex h-full flex-col px-5 pb-6 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
        <ul className='mt-4 flex flex-wrap gap-2 sm:mt-auto'>
          {tags.map((tag, index) => (
            <li
              className='rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white'
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        quality={95}
        className='absolute -right-40 top-8 w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-2 group-hover:translate-y-2 group-hover:-rotate-2 group-hover:scale-105
        group-even:group-hover:translate-x-2 group-even:group-hover:translate-y-2 group-even:group-hover:rotate-2'
      />
    </section>
  </motion.div>
  );
}
