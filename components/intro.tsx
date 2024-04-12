'use client';
import Image from 'next/image';
import photo from '@/public/cropped.jpeg';
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section>
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
          {/* <span className="absolute text-4xl bottom-0 right-0">
                        🫡
                    </span> */}
        </div>
      </div>
    </section>
  );
}
