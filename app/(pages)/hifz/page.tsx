'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import type { Metadata } from "next";
import SubscribeSection from '@/app/components/SubscribeSection';
import { GlassCard, FloatingCard } from '@/app/components/GlassCard';
import { FadeInUp, SlideInLeft, SlideInRight, FloatingElement } from '@/app/components/AnimationUtils';

const HifzPage = () => {
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
                Hifz Programme
              </span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
                <div className="prose prose-lg max-w-none">
                  <div className="text-6xl mb-6 text-center">📖</div>
                  
                  <p className='text-base lg:text-lg text-gray-700 mb-6 leading-relaxed'>
                    Memorising the Noble Qur'ān holds immense reward in Islām and includes one in the select
                    people of Allāh Ta'ālā. Rasūlullāh صلى الله عليه وسلم has said, 'Those dedicated to the Qur'ān are truly the
                    friends of Allāh and His special ones.' (Aḥmad)
                  </p>
                  
                  <div className="bg-[#1b5e3f]/5 p-6 rounded-xl mb-6">
                    <p className='text-base lg:text-lg text-gray-700 leading-relaxed italic'>
                      Shaykh Fuḍayl ibn 'Iyāḍ Raḥimahullāh Ta'ālā has said, 'The bearer of the Qur'ān is the flagbearer of Islām.'
                    </p>
                  </div>
                  
                  <p className='text-base lg:text-lg text-gray-700 mb-6 leading-relaxed'>
                    'Ḥifẓ'—an Arabic term—means to 'preserve' and 'protect.' In the context of the Glorious Qur'ān,
                    it refers to the noble act of committing to memory the divine words of the Glorious Qur'ān,
                    comprising over 6,000 verses revealed as guidance for all of humanity. One who accomplishes
                    this blessed task is honoured with the esteemed title of "Ḥāfiẓ"—a guardian of the Noble Qur'ān.
                  </p>
                  
                  <p className='text-base lg:text-lg text-gray-700 mb-6 leading-relaxed'>
                    At Al-Madīnah Institute, we are humbled to offer a dedicated Ḥifẓ programme, held Monday to
                    Friday from 4:45 PM to 7:15 PM, for students who aspire to embark on this honourable journey.
                    This course is tailored to nurture each student individually, taking into account their unique
                    abilities and learning pace. Great emphasis is placed on the correct recitation of the Qur'ān
                    through Tajwīd (proper phonetics and intonation), as well as on the moral and spiritual
                    development (Tarbiyah) of each student.
                  </p>
                  
                  <p className='text-base lg:text-lg text-gray-700 mb-6 leading-relaxed'>
                    Our carefully structured syllabus is designed to facilitate the memorisation of the entire Glorious
                    Qur'ān within an average period of four years, while instilling the values of discipline, humility,
                    and sincerity.
                  </p>
                  
                  <p className='text-base lg:text-lg text-gray-700 mb-6 leading-relaxed'>
                    We wholeheartedly encourage parents to inspire and support their children in this sacred pursuit.
                    With the grace and mercy of Allāh Ta'ālā, our aim is to cultivate not only Ḥuffāẓ who have
                    preserved the Noble Qur'ān in their hearts, but also young individuals who reflect its teachings
                    through noble character and righteous conduct.
                  </p>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                    <p className='text-base lg:text-lg text-gray-700 leading-relaxed font-medium'>
                      May Allāh make your child's journey of Ḥifẓ a means of barakah (blessing) in both this world
                      and the Hereafter. Their success, InshāAllāh, is our success.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </SlideInLeft>
            
            {/* Image Column */}
            <SlideInRight delay={0.2}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl sticky mt-18">
                  <Image 
                    src={"/images/ihsaan-academy-premises-2.jpg"} 
                    alt='Hifz Programme at Al-Madinah Institute'
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

      {/* Resources Section */}
      <section className='py-16 lg:py-24 bg-gradient-to-br from-green-50/50 to-emerald-50/30'>
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                Sign up <span className="text-[#1b5e3f]">Now</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access our comprehensive educational resources and join our community of learners dedicated to the memorisation and understanding of the Qur'ān.
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

export default HifzPage;