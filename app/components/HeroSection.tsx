'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-emerald-50/30 via-white to-green-50/20 pt-20 md:pt-24">
      {/* Content and Image Container */}
      <div className="relative w-full min-h-[calc(100vh-5rem)] flex items-center">
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-8 lg:px-16">
          <div className="relative flex flex-col lg:block">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-20 lg:z-10 lg:pr-8 w-full lg:w-1/2 order-2 lg:order-1"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-900 mb-6"
            >
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
                Welcome to
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] bg-clip-text text-transparent">
                Al-Madinah
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-600 text-base md:text-lg lg:text-xl xl:text-2xl font-normal mb-8 leading-relaxed max-w-lg"
            >
              A beacon of Islamic knowledge and spiritual growth serving our community with wisdom and compassion
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/schedule" className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white rounded-full font-semibold text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:from-[#134d32] hover:to-[#1b5e3f] shadow-lg inline-block">
                Explore Programs
              </Link>
              <Link href="/contact" className="px-6 md:px-8 py-3 md:py-4 bg-white/80 backdrop-blur-sm text-[#1b5e3f] rounded-full font-semibold text-base md:text-lg border-2 border-[#1b5e3f]/20 hover:bg-[#1b5e3f] hover:text-white hover:border-[#1b5e3f] hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg inline-block">
                Visit Us
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Hero Image - Mobile stacked, desktop absolute */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative lg:absolute lg:top-0 lg:right-0 w-full lg:w-[75%] xl:w-[70%] 2xl:w-[65%] lg:h-full flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[1400px] xl:max-w-[1600px] h-[300px] sm:h-[350px] md:h-[450px] lg:h-[900px] xl:h-[1200px]">
              <Image
                src="/images/hero-bg.jpg"
                alt="Al-Madinah Institute"
                fill
                className="object-contain"
                priority
                quality={100}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 60vw"
              />
            </div>
          </motion.div>
          
          </div>
        </div>
      </div>

      
      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#1b5e3f]/40 rounded-full flex justify-center p-2"
        >
          <div className="w-1 h-2 bg-[#1b5e3f]/60 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}