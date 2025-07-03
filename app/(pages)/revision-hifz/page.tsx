'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import type { Metadata } from "next";
import SubscribeSection from '@/app/components/SubscribeSection';
import { GlassCard, FloatingCard } from '@/app/components/GlassCard';
import { FadeInUp, SlideInLeft, SlideInRight, FloatingElement } from '@/app/components/AnimationUtils';

const HifzRevisionPage = () => {
  const revisionFeatures = [
    {
      icon: "🎯",
      title: "Personalised Service",
      description: "Flexible revision sessions tailored to your individual needs and schedule"
    },
    {
      icon: "💪",
      title: "Strengthen Connection",
      description: "Maintain and deepen your relationship with the Noble Qur'ān"
    },
    {
      icon: "🧠",
      title: "Memory Retention",
      description: "Proven techniques to preserve and strengthen your memorisation"
    },
    {
      icon: "📈",
      title: "Continuous Progress",
      description: "Regular assessment and guidance to ensure steady improvement"
    }
  ];

  const journalFeatures = [
    {
      icon: "📖",
      title: "Qur'anic Reflections",
      description: "Deep insights from the Glorious Qur'ān and Hadith"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Content",
      description: "Something meaningful for every family member"
    },
    {
      icon: "🏆",
      title: "Youth Competitions",
      description: "Quarterly competitions with prizes for young readers"
    },
    {
      icon: "🌟",
      title: "Righteous Examples",
      description: "Lessons from the lives of the pious predecessors"
    }
  ];

  const plannerLinks = [
    {
      title: "Click Here for Admissions",
      href: "/admissions",
      color: "from-emerald-500 to-teal-600",
      icon: "🎓"
    }
  ];

  return (
    <main className='overflow-hidden bg-gradient-to-br from-green-50/30 via-white to-emerald-50/20 min-h-screen'>
      {/* Hero Section */}
      <section className='relative pt-24 pb-16 lg:pt-32 lg:pb-20'>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b5e3f]/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6'
            >
              <span className="block bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] bg-clip-text text-transparent">
                Hifz Revision
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Maintain and strengthen your connection with the Noble Qur'ān
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className='py-16 lg:py-24'>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Content Column */}
            <SlideInLeft>
              <GlassCard className="p-8 lg:p-10">
                <div className="text-6xl mb-6 text-center">🔄</div>
                
                <div className="prose prose-lg max-w-none">
                  <div className="bg-gradient-to-r from-[#1b5e3f]/10 to-[#237a4f]/10 p-6 rounded-xl mb-8">
                    <p className='text-base lg:text-lg text-gray-700 leading-relaxed font-medium'>
                      Alḥamdulillāh, by the infinite grace of Allāh Taʿālā, you have achieved one of the greatest
                      honours — the memorisation of the Noble Qur'ān. This sacred gift places you among those
                      specially chosen to preserve the divine speech of Allāh Ta'ālā.
                    </p>
                  </div>
                  
                  <p className='text-base lg:text-lg text-gray-700 mb-6 leading-relaxed'>
                    But memorisation is only the beginning. Rasūlullāh صلى الله عليه وسلم likened the memorisation of the Glorious
                    Qur'ān to a hobbled camel — if cared for, it remains; if neglected, it escapes. Without regular
                    revision, what was once firmly held can be lost.
                  </p>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl mb-8">
                    <h3 className="text-xl font-bold text-[#1b5e3f] mb-4 flex items-center gap-2">
                      <span className="text-2xl">🎯</span>
                      Our Revision Facility
                    </h3>
                    <p className='text-base lg:text-lg text-gray-700 leading-relaxed'>
                      To support the beloved Ḥuffāẓ, Al-Madinah Institute is pleased to offer a Ḥifẓ Revision Facility
                      — a flexible, personalised service designed to help you maintain and strengthen your connection
                      with the Noble Qur'ān.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </SlideInLeft>
            
            {/* Image Column */}
            <SlideInRight delay={0.2}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl sticky top-8 mt-18">
                  <Image 
                    src={"/images/ihsaan-academy-premises-2.jpg"} 
                    alt='Hifz Revision Programme at Al-Madinah Institute'
                    className='transform hover:scale-105 transition-transform duration-700 w-full h-auto'
                    width={570}
                    height={428}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent pointer-events-none" />
                </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Revision Features */}
      <section className='py-16 lg:py-24 bg-gradient-to-br from-green-50/50 to-emerald-50/30'>
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                Revision <span className="text-[#1b5e3f]">Benefits</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive revision programme offers personalised support for Huffāẓ
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
              </div>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {revisionFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <GlassCard className="p-6 h-full hover:shadow-2xl transition-all duration-500 text-center group-hover:scale-105">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1b5e3f] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Resources Section */}
      <section className='py-16 lg:py-24 bg-gradient-to-br from-green-50/50 to-emerald-50/30'>
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                Sign up <span className="text-[#1b5e3f]">Now</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access our comprehensive 
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
              </div>
            </div>
          </FadeInUp>

          <div className="center">
            {plannerLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group items-center justify-center flex"
              >
                <Link href={link.href}>
                  <GlassCard className="p-6 h-full hover:shadow-2xl transition-all duration-500 text-center group-hover:scale-105">
                    <div className="text-4xl mb-4">{link.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-[#1b5e3f] transition-colors duration-300">
                      {link.title}
                    </h3>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${link.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group`}
                    >
                      Sign up
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </motion.div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SubscribeSection />
    </main>
  );
};

export default HifzRevisionPage;