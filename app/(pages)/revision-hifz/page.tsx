'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import type { Metadata } from "next";
import SubscribeSection from '@/app/components/SubscribeSection';
import { GlassCard, FloatingCard } from '@/app/components/GlassCard';
import { FadeInUp, SlideInLeft, SlideInRight, FloatingElement } from '@/app/components/AnimationUtils';
import { RA, SAW, SWT } from "@/app/components/IslamicLigatures";

const HifzRevisionPage = () => {
  const revisionFeatures = [
    {
      icon: "🎯",
      title: "Personalised Service",
      description: "Flexible revision sessions tailored to your individual needs and schedule"
    },
    {
      icon: "🔗",
      title: "Strengthen Connection",
      description: "Maintain and deepen your relationship with the Noble Qur'ān"
    },
    {
      icon: "📚",
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
                Ḥifẓ Revision
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Sayyidunā ‘Abdullāh ibn ‘Amr <RA /> narrates that Nabī <SAW /> said, ’The likeness of the one who memorises the Qur’ān is that of the owner of a hobbled camel. If he looks after it, he will hold on to it, but if he lets it free, he will lose it.’ <br />(Bukhārī)
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

      {/* Hifz Course Info Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-green-50/30 to-emerald-50/20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-gray-100">
              <div className="text-4xl mb-6">📚</div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1b5e3f] mb-6">Hifz Course</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                This course has been designed for those enthusiastic to memorise the Noble Qur'ān but are constrained with time commitment due to work, university or college. The students have the option of agreeing a time of their choice on a weekly basis with their teacher in order to balance their learning with other commitments. Time slots are available from <span className="font-bold">7am to 10pm seven days a week</span> to suit one's availability.
              </p>
            </div>
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
                      Alḥamdulillāh, by the infinite grace of Allāh <SWT />, you have achieved one of the greatest
                      honours — the memorisation of the Noble Qur'ān. This sacred gift places you among those
                      specially chosen to preserve the divine speech of Allāh <SWT />.
                    </p>
                  </div>
                  
                  <p className='text-base lg:text-lg text-gray-700 mb-6 leading-relaxed'>
                    But memorisation is only the beginning. Rasūlullāh <SAW /> likened the memorisation of the Glorious
                    Qur'ān to a hobbled camel — if cared for, it remains; if neglected, it escapes. Without regular
                    revision, what was once firmly held can be lost.
                  </p>

                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl mb-8">
                    <h3 className="text-xl font-bold text-[#1b5e3f] mb-4 flex items-center gap-2">
                      <span className="text-2xl">🎯</span>
                      Dear Ḥuffāẓ, Recognise Your Worth!
                    </h3>
                    <p className='text-base lg:text-lg text-gray-700 leading-relaxed'>
You have been given something most precious — and in the sight of Allāh <SWT />, your value is immense. What greater honour is there than having the divine speech of Allāh <SWT /> stored within your heart? Every blessing demands shukr — sincere gratitude. This means staying on top of your revision, living a life of Taqwa, Humility, Submission, and Obedience to Allāh <SWT />.
                    </p>
                  </div>
                  
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
              <div className="sticky top-8 mt-18 space-y-6">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={"/images/revision-hifz.webp"}
                    alt='Ḥifẓ Revision Programme at Al-Madinah Institute'
                    className='transform hover:scale-105 transition-transform duration-700 w-full h-auto'
                    width={570}
                    height={428}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent pointer-events-none" />
                </div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={"/images/green-dome-blue-sky.jpg"}
                    alt='The Green Dome of Masjid an-Nabawi in Madinah'
                    className='transform hover:scale-105 transition-transform duration-700 w-full h-auto'
                    width={570}
                    height={428}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent pointer-events-none" />
                </div>
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
                Our comprehensive revision programme offers personalised support for Ḥuffāẓ
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
              <p className="text-lg text-gray-600 max-w-5xl mx-auto">
                Whether you are a Ḥāfiẓ or wish to revise some selected chapters of the Noble Qur’ān get in touch now.
              </p>
            </div>
          </FadeInUp>
          <div className="center">
            <motion.div
              key="hifz-revision-contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="group items-center justify-center flex"
            >
                <GlassCard className="p-6 h-full hover:shadow-2xl transition-all duration-500 text-center group-hover:scale-105">
                  <div className="text-4xl mb-4"></div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-[#1b5e3f] transition-colors duration-300">
                    For more information or to enrol call us on 07353 867 127 or email us on admin@al-madinah.org.uk
                  </h3>
                </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      <SubscribeSection />
    </main>
  );
};

export default HifzRevisionPage;