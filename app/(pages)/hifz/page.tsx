'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { sanityClient } from '@/app/lib/sanity';
import { hifzQuery } from '@/app/lib/queries';
import SubscribeSection from '@/app/components/SubscribeSection';
import { GlassCard } from '@/app/components/GlassCard';
import { FadeInUp, SlideInLeft, SlideInRight } from '@/app/components/AnimationUtils';
import { RA, SAW, SWT } from "@/app/components/IslamicLigatures";

interface HifzData {
  plannerTitle?: string;
  plannerDescription?: string;
  plannerFileUrl?: string;
  applicationFormTitle?: string;
  applicationFormDescription?: string;
  applicationFormFileUrl?: string;
}

const HifzPage = () => {
  const [hifzData, setHifzData] = useState<HifzData | null>(null);

  useEffect(() => {
    const fetchHifzData = async () => {
      try {
        const data = await sanityClient.fetch(hifzQuery);
        if (data) setHifzData(data);
      } catch (error) {
        console.error('Error fetching hifz data:', error);
      }
    };

    fetchHifzData();
  }, []);

  const plannerTitle = hifzData?.plannerTitle || 'Ḥifẓ Planner 2025/26';
  const plannerDescription = hifzData?.plannerDescription || 'Comprehensive memorization schedule and progress tracking for Ḥifẓ students (1447/48 Hijri)';
  const plannerFileUrl = hifzData?.plannerFileUrl;
  const applicationFormTitle = hifzData?.applicationFormTitle || 'Application Form';
  const applicationFormDescription = hifzData?.applicationFormDescription || 'Complete our application form to register for the Ḥifẓ Programme';
  const applicationFormFileUrl = hifzData?.applicationFormFileUrl;

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
              <span className="block bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] bg-clip-text text-transparent leading-tight">
                Ḥifẓ Programme
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
                    Memorising the Noble Qur&apos;ān holds immense reward in Islām and includes one in the select
                    people of Allāh <SWT />. Rasūlullāh <SAW /> has said, &lsquo;Those dedicated to the Qur&apos;ān are truly the
                    friends of Allāh <SWT /> and His special ones.&rsquo; (Aḥmad)
                  </p>

                  <div className="bg-[#1b5e3f]/5 p-6 rounded-xl mb-6">
                    <p className='text-base lg:text-lg text-gray-700 leading-relaxed italic'>
                      Sayyidunā &lsquo;Abdullāh ibn &lsquo;Amr <RA /> narrates that Nabī <SAW /> said, &lsquo;It will be said to the companion of the Qur&apos;ān (the one who memorised it and held on fast to it [together with practising upon it], Recite and ascend, and recite just as you would recite in the world, for your abode (in Jannah) will be the last verse you recite.&rsquo;<br/>
                      (Tirmidhī &amp; Abū Dāwūd)
                    </p>
                  </div>

                  <p className='text-base lg:text-lg text-gray-700 mb-6 leading-relaxed'>
                    &lsquo;Ḥifẓ&rsquo;—an Arabic term—means to &lsquo;preserve&rsquo; and &lsquo;protect.&rsquo; In the context of the Glorious Qur&apos;ān,
                    it refers to the noble act of committing to memory the divine words of the Glorious Qur&apos;ān,
                    comprising over 6,000 verses revealed as guidance for all of humanity. One who accomplishes
                    this blessed task is honoured with the esteemed title of &ldquo;Ḥāfiẓ&rdquo;—a guardian of the Noble Qur&apos;ān.
                  </p>

                  <p className='text-base lg:text-lg text-gray-700 mb-6 leading-relaxed'>
                    At Al-Madīnah Institute, we are humbled to offer a dedicated Ḥifẓ programme, held Monday to
                    Friday from 4:45 PM to 7:15 PM, for students who aspire to embark on this honourable journey.
                    This course is tailored to nurture each student individually, taking into account their unique
                    abilities and learning pace. Great emphasis is placed on the correct recitation of the Qur&apos;ān
                    through Tajwīd (proper phonetics and intonation), as well as on the moral and spiritual
                    development (Tarbiyah) of each student.
                  </p>

                  <p className='text-base lg:text-lg text-gray-700 mb-6 leading-relaxed'>
                    Our carefully structured syllabus is designed to facilitate the memorisation of the entire Glorious
                    Qur&apos;ān within an average period of four years, while instilling the values of discipline, humility,
                    and sincerity.
                  </p>

                  <p className='text-base lg:text-lg text-gray-700 mb-6 leading-relaxed'>
                    We wholeheartedly encourage parents to inspire and support their children in this sacred pursuit.
                    With the grace and mercy of Allāh <SWT />, our aim is to cultivate not only Ḥuffāẓ who have
                    preserved the Noble Qur&apos;ān in their hearts, but also young individuals who reflect its teachings
                    through noble character and righteous conduct.
                  </p>

                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                    <p className='text-base lg:text-lg text-gray-700 leading-relaxed font-medium'>
                      May Allāh <SWT /> make your child&apos;s journey of Ḥifẓ a means of barakah (blessing) in both this world
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
                    src={"/images/hifz.jpg"}
                    alt='Ḥifẓ Programme at Al-Madinah Institute'
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

      {/* Hifz Planner Section */}
      {plannerFileUrl && (
        <section className='py-16 lg:py-24'>
          <div className="max-w-4xl mx-auto px-6">
            <FadeInUp>
              <div className="text-center mb-12">
                <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
                  Ḥifẓ <span className="text-[#1b5e3f]">Planner</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Download our comprehensive Ḥifẓ planner
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
                </div>
              </div>
            </FadeInUp>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group max-w-md mx-auto"
            >
              <GlassCard className="p-8 text-center hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="text-6xl mb-6">📖</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1b5e3f] transition-colors duration-300">
                  {plannerTitle}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {plannerDescription}
                </p>
                <motion.a
                  href={plannerFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 group"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2m-6 0V7" />
                  </svg>
                  Download Planner
                  <span className="text-xs opacity-80">PDF</span>
                </motion.a>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      )}

      {/* How to Apply Section */}
      {applicationFormFileUrl && (
        <section className='py-16 lg:py-24 bg-gradient-to-br from-green-50/50 to-emerald-50/30'>
          <div className="max-w-4xl mx-auto px-6">
            <FadeInUp>
              <div className="text-center mb-12">
                <h2 className='text-3xl lg:text-4xl font-bold text-gray-900 mb-6'>
                  How to <span className="text-[#1b5e3f]">Apply</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Download our application form for Ḥifẓ Programme admission
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
                </div>
              </div>
            </FadeInUp>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group max-w-md mx-auto"
            >
              <GlassCard className="p-8 text-center hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                <div className="text-6xl mb-6">📋</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1b5e3f] transition-colors duration-300">
                  {applicationFormTitle}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {applicationFormDescription}
                </p>
                <motion.a
                  href={applicationFormFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 group"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V9a2 2 0 00-2-2m-6 0V7" />
                  </svg>
                  Download Form
                  <span className="text-xs opacity-80">PDF</span>
                </motion.a>
              </GlassCard>
            </motion.div>
          </div>
        </section>
      )}

      <SubscribeSection />
    </main>
  );
};

export default HifzPage;
