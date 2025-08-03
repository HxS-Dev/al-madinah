'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import type { Metadata } from "next";
import SubscribeSection from '@/app/components/SubscribeSection';
import { GlassCard, FloatingCard } from '@/app/components/GlassCard';
import { FadeInUp, SlideInLeft, SlideInRight, FloatingElement } from '@/app/components/AnimationUtils';

const AdultStudiesPage = () => {
  const courses = [
    {
      title: "Basics Course",
      description: "Perfect for those new to Islam, those who haven't had the opportunity to study when young, or those who want to refresh their core knowledge of Islam.",
      duration: "3 x half an hour sessions",
      color: "from-[#1b5e3f] to-[#237a4f]",
      icon: "📚",
      subjects: ["Hadīth", "Aqīdah", "Fiqh", "Sīrah"]
    },
    {
      title: "Advanced Course", 
      description: "A more detailed study in Islamic subjects for those seeking to advance their Islamic knowledge.",
      duration: "2 x 45 minutes sessions",
      color: "from-blue-500 to-indigo-600",
      icon: "🎓",
      subjects: ["Hadīth", "Aqīdah", "Fiqh", "Sīrah"]
    },
    {
      title: "Tajweed Course", 
      description: "Learn the Arabic alphabet with the correct makhārij (pronunciation). Learn to recite the Qur’an confidently and fluently whilst applying the rules of tajweed in your recitation.",
      duration: "1 x 1 hour session",
      color: "from-green-500 to-teal-600",
      icon: "📖",
      subjects: ["Makhārij", "Tajweed Rules", "Fluency", "Recitation"]
    }
  ];

  const keyPoints = [
    { icon: "📅", title: "Weekly Schedule", detail: "Timings to be confirmed - Look out for the Posters." },
    { icon: "👨‍🏫", title: "Expert Teachers", detail: "Experienced ‘Ulamā - All our courses are taught by qualified ‘Ulamā with teaching experience" },
    { icon: "🌍", title: "English Language", detail: "All our courses are taught in English to accommodate all parts of society" },
    { icon: "📞", title: "Contact", detail: "To enrol, for further information or a friendly chat contact us on 07353868127 or info@al-madinah.org.uk" }
  ];

  const images = [
    '/images/dummy_11.png',
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
                Adult Islamic Studies
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Comprehensive structured Islamic education for adults
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
                <div className="text-6xl mb-6 text-center">👨‍🎓</div>
                
                {/* Hadith Quote */}
                <div className="bg-gradient-to-r from-[#1b5e3f]/10 to-[#237a4f]/10 p-6 rounded-xl mb-8">
                  <p className='text-base lg:text-lg text-gray-700 leading-relaxed italic text-center'>
                    The Messenger of Allah ﷺ said: "the acquisition of knowledge is incumbent upon every Muslim" (Ibn Majah & Bayhaqi)
                  </p>
                </div>
                
                {/* Questions Section */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#1b5e3f] mb-4">Are You:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#1b5e3f] text-xl mt-1">❓</span>
                      <span className="text-base lg:text-lg text-gray-700">Seeking to learn the fundamentals of the Dīn?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1b5e3f] text-xl mt-1">❓</span>
                      <span className="text-base lg:text-lg text-gray-700">New to Islām and in need of sincere step-by-step guidance?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1b5e3f] text-xl mt-1">❓</span>
                      <span className="text-base lg:text-lg text-gray-700">Feeling that your Islamic knowledge is limited or needs refreshing?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1b5e3f] text-xl mt-1">❓</span>
                      <span className="text-base lg:text-lg text-gray-700">Experiencing doubts and looking for clarity?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1b5e3f] text-xl mt-1">❓</span>
                      <span className="text-base lg:text-lg text-gray-700">Eager to grow spiritually and strengthen your relationship with Allah ﷻ?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1b5e3f] text-xl mt-1">❓</span>
                      <span className="text-base lg:text-lg text-gray-700">Wanting to increase your preparation for the Hereafter?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1b5e3f] text-xl mt-1">❓</span>
                      <span className="text-base lg:text-lg text-gray-700">Desirous of acquiring pious environment or sitting in meaningful company?</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                  <p className='text-base lg:text-lg text-gray-700 leading-relaxed font-medium text-center'>
                    If so, these courses are for you
                  </p>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-base lg:text-lg text-gray-700">
                    The <strong>"ADULT ISLAMIC STUDIES"</strong> course
                  </p>
                  <p className="text-sm text-gray-600 mt-2">(Currently for brothers)</p>
                </div>
              </GlassCard>
            </SlideInLeft>
            
            {/* Image Column */}
            <SlideInRight delay={0.2}>
              <FloatingElement>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl sticky top-8">
                  <Image 
                    src={images[0]}
                    alt='Adult Islamic Studies at Al-Madinah Institute'
                    className='transform hover:scale-105 transition-transform duration-700 w-full h-auto'
                    width={570}
                    height={806}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent pointer-events-none" />
                </div>
              </FloatingElement>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className='py-16 lg:py-24 bg-gradient-to-br from-green-50/50 to-emerald-50/30'>
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                Course <span className="text-[#1b5e3f]">Options</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Al-Madinah Institute will be offering a variety of courses tailored for adults in college, university, full-time employment or with other commitments, making it easier for them to take out time and prioritise learning their Dīn. These programmes are ideal for those who wish to increase their knowledge in an accessible, traditional manner, combining academic learning with spiritual development.
                <br /><br />
                Classes will take place in a supportive and structured classroom environment, by qualified and reliable ‘Ulamā, committed to your personal growth and understanding, with a strong focus on Akhlāq and self-reformation.
                <br /><br />
                Make your home a cradle of knowledge and ‘amal — nurture an environment where Imān, love, understanding and righteous actions flourish.
                <br /><br />
                You are warmly invited to enroll and take that meaningful step towards seeking sacred knowledge.
                <br /><br />
                Sayyidunā Abū Hurairah narrates that Nabī ﷺ said, ‘Whoever treads a path in search of knowledge Allah makes the way to Jannah easy for him’ (Muslim)
                <br /><br />
                For more info or to register, please contact 07353867127
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
              </div>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <GlassCard className="p-8 h-full hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{course.icon}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1b5e3f] transition-colors duration-300">
                      {course.title}
                    </h3>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${course.color} text-white rounded-full text-sm font-semibold`}>
                      <span>⌛</span>
                      {course.duration}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-center">
                    {course.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-bold text-[#1b5e3f] text-center mb-4">Subjects Covered:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {course.subjects.map((subject, idx) => (
                        <div key={idx} className="bg-[#1b5e3f]/5 p-3 rounded-lg text-center">
                          <span className="text-gray-700 font-medium">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Information */}
      <section className='py-16 lg:py-24'>
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                Course <span className="text-[#1b5e3f]">Information</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Essential details about our adult Islamic studies programme
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{point.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{point.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.detail}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <SlideInLeft>
            <GlassCard className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-[#1b5e3f] mb-6">Additional Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-[#1b5e3f] text-xl">✓</span>
                      <span className="text-gray-700">Classes run according to the school calendar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1b5e3f] text-xl">✓</span>
                      <span className="text-gray-700">Very small time commitment - once a week</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1b5e3f] text-xl">✓</span>
                      <span className="text-gray-700">Taught by qualified 'Ulama in English</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1b5e3f] text-xl">✓</span>
                      <span className="text-gray-700">We cater for people of all levels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#1b5e3f] text-xl">✓</span>
                      <span className="text-gray-700">Traditional classroom environment</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-[#1b5e3f]/5 to-[#237a4f]/5 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-[#1b5e3f] mb-4 text-center">Venue</h4>
                  <div className="text-center space-y-1">
                    <p className="font-bold text-gray-900">Al-Madinah Institute</p>
                    <p className="text-gray-700">PO BOX 1408</p>
                    <p className="text-gray-700">Crawley</p>
                    <p className="text-gray-700">RH10 0TD</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </SlideInLeft>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='py-16 lg:py-24 bg-gradient-to-br from-green-50/50 to-emerald-50/30'>
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                Courses Coming Soon…
              </h2>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.slice(1).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <Image 
                    src={image}
                    alt={`Learning environment ${index + 1}`}
                    className='transform group-hover:scale-105 transition-transform duration-700 w-full h-auto'
                    width={360}
                    height={510}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SubscribeSection />
    </main>
  );
};

export default AdultStudiesPage;