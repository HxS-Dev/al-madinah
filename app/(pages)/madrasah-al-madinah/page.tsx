'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { sanityClient } from '@/app/lib/sanity';
import { madrasahYearlyPlannerQuery, hifzYearlyPlannerQuery } from '@/app/lib/queries';
import SubscribeSection from '@/app/components/SubscribeSection';
import { GlassCard, FloatingCard } from '@/app/components/GlassCard';
import { FadeInUp, SlideInLeft, SlideInRight, FloatingElement } from '@/app/components/AnimationUtils';
import { RA, SAW, TAWJ, SWT } from '@/app/components/IslamicLigatures';

interface YearlyPlanner {
  title: string;
  url?: string;
  fileUrl?: string;
}

// Prefer a PDF uploaded in Sanity; fall back to an externally hosted link.
const plannerHref = (planner: YearlyPlanner | null) => planner?.fileUrl || planner?.url;

const MadrasahPage = () => {
  const [madrasahPlanner, setMadrasahPlanner] = useState<YearlyPlanner | null>(null);
  const [hifzPlanner, setHifzPlanner] = useState<YearlyPlanner | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [madrasah, hifz] = await Promise.all([
          sanityClient.fetch(madrasahYearlyPlannerQuery),
          sanityClient.fetch(hifzYearlyPlannerQuery),
        ]);
        setMadrasahPlanner(madrasah);
        setHifzPlanner(hifz);
      } catch (error) {
        console.error('Error fetching planner data:', error);
      }
    };
    fetchData();
  }, []);

  const subjects = [
    { icon: "📖", title: "Qur'an Recitation", description: "Proper pronunciation and Tajweed" },
    { icon: "/images/icon-salah.png", title: "Ṣalāh", description: "Learn how to establish ṣalāh" },
    { icon: "💫", title: "Aqidah", description: "Integral Islamic beliefs" },
    { icon: "📚", title: "Sīrah", description: (<>Know your Nabī <SAW /> and Islamic History</>) },
    { icon: "⚖️", title: "Fiqh", description: "Islamic jurisprudence and rulings" },
    { icon: "📿", title: "Duas", description: "Verbal forms of worship and supplication" },
    { icon: "💎", title: "Akhlāq", description: "Learn to fulfil the rights of others" },
    { icon: "🕋", title: "Sūrahs", description: "Learn by heart selected chapters from the Noble Qur'ān" },
    { icon: "🕌", title: "Practical", description: "5 daily ṣalāh, Janāzah, 'Īd" }
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
                Madrasah Al-Madinah
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Evening Islamic education for children aged 5-15
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

      {/* Islamic Quotations Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-green-50/30 to-emerald-50/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* First Hadith */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col justify-center">
                <div className="text-3xl mb-6">📚</div>
                <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                  "Nabī <SAW /> said, 'Whoever treads a path in which he seeks knowledge, Allāh makes the path to Jannah easy for him'"
                </p>
                <p className="text-sm text-gray-500">
                  (Muslim)
                </p>
              </div>
            </motion.div>

            {/* Second Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col justify-center">
                <div className="text-3xl mb-6">🌟</div>
                <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                  "Teaching children the Qur'ān is a fundamental duty from the fundamentals of Islām. As a result, they will grow up with fiṭrah (a pure nature which is not influenced by unnatural factors). Added to that, the anwār (spiritual light) of wisdom will reach their hearts before desires overcome it and it becomes tainted with the stains of sin and deviation."<br />
                  -- Allāmah Suyūṭī rahimahullāh --
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10 text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-700 leading-relaxed italic">
              The madrasah is not an insignificant institute. The flame of Īmān (faith) is first kindled in the madrasah. The light of Īmān first permeates the heart of a Muslim child in this environment. It teaches our young children moral values.
            </p>
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
                <div className="text-6xl mb-6 text-center">🕌</div>
                
                <div className="prose prose-lg max-w-none">
                  <p className='text-base lg:text-lg text-gray-700 mb-6 leading-relaxed'>
                    The core objective of the Madrasah is to ignite in young hearts the flame of Īmān and instill in them the foundational teachings of Islām. Through nurturing good akhlāq (character), respect for others we aim to raise youngsters who are academically and spiritually enriched and valuable contributors to society. The Madrasah serves as a vital bridge, bringing Dīnī environment into our homes and communities.
                  </p>

                  <p className='text-base lg:text-lg text-gray-700 mb-8 leading-relaxed'>
                    To fulfill this vision, we plan to establish an evening Madrasah, operating from <span className="font-bold">4:45pm–7:00pm</span> on weekdays, InshāAllāh. Students will be guided through essential Islamic subjects including Qur'ān recitation with tajwīd, ṣalāh (prayer), Aqīdah (core beliefs), Sīrah and Islamic history, Fiqh (Islamic rulings), and Du'ās (verbal supplications) with a strong emphasis on Tarbiyah (nurturing sound character) and spiritual development.
                  </p>
                  
                  <div className="bg-gradient-to-r from-[#1b5e3f]/5 to-[#237a4f]/5 p-6 rounded-xl mb-8">
                    <div className="text-center">
                      <div className="text-3xl mb-4">📖</div>
                      <p className='text-base lg:text-lg text-gray-700 leading-relaxed italic mb-3'>
                        "Sayyidunā 'Uthmān رضي الله عنه narrates that Nabī ﷺ said, 'The best amongst you is he who learns the Qur'ān and teaches it.'"
                      </p>
                      <p className="text-sm text-gray-500">
                        (Bukhārī)
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </SlideInLeft>
            
            {/* Image Column */}
            <SlideInRight delay={0.2}>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl sticky top-8 mt-18">
                  <Image
                    src={"/images/madrasah-rihals.jpg"}
                    alt='Madrasah Al-Madinah at Al-Madinah Institute'
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

      {/* Subjects Section */}
      <section className='py-16 lg:py-24 bg-gradient-to-br from-green-50/50 to-emerald-50/30'>
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                Curriculum <span className="text-[#1b5e3f]">Subjects</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive Islamic education covering essential aspects of faith and practice
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
              </div>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <GlassCard className="p-6 h-full hover:shadow-2xl transition-all duration-500 text-center group-hover:scale-105">
                  <div className="mb-4 flex justify-center items-center h-12">
                    {typeof subject.icon === 'string' && subject.icon.startsWith('/') ? (
                      <Image
                        src={subject.icon}
                        alt={subject.title}
                        width={48}
                        height={48}
                        className="h-12 w-auto object-contain"
                      />
                    ) : (
                      <span className="text-4xl leading-none">{subject.icon}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1b5e3f] transition-colors duration-300">
                    {subject.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {subject.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Info */}
      <section className='py-16 lg:py-24'>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInUp>
            <GlassCard className="p-8 lg:p-12">
              <div className="text-6xl mb-6">⏰</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Class Schedule
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-[#1b5e3f]/5 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#1b5e3f] mb-2">Age Group</h3>
                  <p className="text-lg text-gray-700 font-medium">5-15 years old</p>
                </div>
                <div className="bg-[#1b5e3f]/5 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#1b5e3f] mb-2">Schedule</h3>
                  <p className="text-lg text-gray-700 font-medium">Monday - Friday</p>
                </div>
                <div className="bg-[#1b5e3f]/5 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#1b5e3f] mb-2">Timing</h3>
                  <p className="text-lg text-gray-700 font-medium"><span className="font-bold">4:45 PM - 7:00 PM</span></p>
                </div>
              </div>
            </GlassCard>
          </FadeInUp>
        </div>
      </section>

      {/* Year Planners Section */}
      <section className='py-16 lg:py-24'>
        <div className="max-w-6xl mx-auto px-6">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
                Academic <span className="text-[#1b5e3f]">Year Planners</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Download our comprehensive year planners for the 2025/2026 academic year
              </p>
              <div className="mt-6 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
              </div>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Madrasah Calendar Planner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <GlassCard className="p-8 text-center hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="text-6xl mb-6">🕌</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1b5e3f] transition-colors duration-300">
                  {madrasahPlanner?.title || 'Madrasah Yearly Planner'}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Complete term dates, holidays, and academic calendar for Madrasah students
                </p>
                {plannerHref(madrasahPlanner) ? (
                  <motion.a
                    href={plannerHref(madrasahPlanner)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2m-6 0V7" />
                    </svg>
                    Download Calendar
                  </motion.a>
                ) : (
                  <p className="text-gray-400 italic text-sm">Coming soon</p>
                )}
              </GlassCard>
            </motion.div>

            {/* Hifz Yearly Planner */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <GlassCard className="p-8 text-center hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="text-6xl mb-6">📖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1b5e3f] transition-colors duration-300">
                  {hifzPlanner?.title || 'Hifz Yearly Planner'}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Comprehensive yearly schedule and calendar for Ḥifẓ students
                </p>
                {plannerHref(hifzPlanner) ? (
                  <motion.a
                    href={plannerHref(hifzPlanner)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 group"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2m-6 0V7" />
                    </svg>
                    Download Planner
                  </motion.a>
                ) : (
                  <p className="text-gray-400 italic text-sm">Coming soon</p>
                )}
              </GlassCard>
            </motion.div>
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
                Access our comprehensive educational resources and join our community.
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

export default MadrasahPage;