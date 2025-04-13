'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import React from 'react'

const Photo = () => {
  return (
    <div className="relative">
      {/* image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.6, duration: 0.4, ease: 'easeIn' },
        }}
        className="w-[298px] h-[298px] xl:w-[533px] xl:h-[533px]"
      >
        <Image
          src="/assets/me.png"
          priority
          quality={100}
          fill
          alt="Profile Pic"
          className="object-contain overflow-hidden"
        />
      </motion.div>

      {/* Circle */}
      {/* <motion.svg
        className="w-[298px] h-[298px] xl:w-[547px] xl:h-[547px]"
        fill="transparent"
        // viewBox="0 0 547 547"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="280"
          cy="300"
          r="250"
          stroke="#00ff99"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: '24 10 0 0' }}
          animate={{
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.circle>
      </motion.svg> */}
    </div>
  )
}

export default Photo
