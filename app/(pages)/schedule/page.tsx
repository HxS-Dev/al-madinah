'use client';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sanityClient } from '@/app/lib/sanity'
import { allProgrammeQuery } from '@/app/lib/queries'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/app/lib/imageBuilder'
import SubscribeSection from '@/app/components/SubscribeSection'
import { GlassCard } from '@/app/components/GlassCard'
import { FadeInUp } from '@/app/components/AnimationUtils'

interface Programme {
  _id: string;
  title: string;
  isNew: boolean;
  programmeDate?: string;
  programmeStartTime?: string;
  programmeEndTime?: string;
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  publishedAt: string;
  body: any;
}

const SchedulePage = () => {
  const [programmes, setProgrammes] = useState<Programme[]>([]);
  const [expandedProgramme, setExpandedProgramme] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgrammes = async () => {
      try {
        const data = await sanityClient.fetch(allProgrammeQuery);
        setProgrammes(data);
      } catch (error) {
        console.error('Error fetching programmes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgrammes();
  }, []);

  const toggleExpanded = (id: string) => {
    setExpandedProgramme(expandedProgramme === id ? null : id);
  };

  const newProgrammes = programmes.filter(p => p.isNew);
  const allProgrammes = programmes;

  if (loading) {
    return (
      <main className='overflow-hidden bg-gradient-to-br from-green-50/30 via-white to-emerald-50/20 min-h-screen'>
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1b5e3f]"></div>
        </div>
      </main>
    );
  }

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
                Programme Schedule
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Discover our weekly programmes and events schedule
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

      {programmes.length === 0 ? (
        /* Coming Soon Empty State */
        <section className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <FadeInUp>
              <div className="text-center">
                <GlassCard className="py-16 px-8 lg:px-16">
                  {/* Decorative icon */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[#1b5e3f]/10 to-[#237a4f]/5 flex items-center justify-center">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-[#1b5e3f]/15 to-[#237a4f]/10 flex items-center justify-center">
                          <svg className="w-8 h-8 lg:w-10 lg:h-10 text-[#1b5e3f]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                        </div>
                      </div>
                      {/* Subtle animated ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#1b5e3f]/10"
                        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    </div>
                  </div>

                  <h2 className="text-3xl lg:text-4xl text-[#1b5e3f] mb-4 leading-relaxed" style={{ fontFamily: "'Scheherazade New', serif" }}>
                    InshāAllāh coming soon
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                    We are preparing our programme schedule. Please check back soon for upcoming programmes and events.
                  </p>

                  <div className="flex justify-center mb-8">
                    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#1b5e3f]/30 to-transparent"></div>
                  </div>
                </GlassCard>
              </div>
            </FadeInUp>
          </div>
        </section>
      ) : (
        <>
          {/* Latest Programme Section */}
          {newProgrammes.length > 0 && (
            <section className='py-16 lg:py-24'>
              <div className="max-w-7xl mx-auto px-6">
                <FadeInUp>
                  <div className="text-center mb-16">
                    <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                      Latest <span className="text-[#1b5e3f]">Programme</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      Our latest Programme Schedule with detailed timelines and activities.
                    </p>
                    <div className="mt-8 flex justify-center">
                      <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
                    </div>
                  </div>
                </FadeInUp>

                <div className="space-y-8">
                  {newProgrammes.map((programme, index) => (
                    <motion.div
                      key={programme._id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <GlassCard className="overflow-hidden hover:shadow-2xl transition-all duration-500">
                        <div
                          className="cursor-pointer p-8 lg:p-10"
                          onClick={() => toggleExpanded(programme._id)}
                        >
                          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                            {/* Poster Image */}
                            <div className="flex-shrink-0 w-full lg:w-72">
                              {programme.mainImage && (
                                <div className="relative overflow-hidden rounded-xl shadow-lg">
                                  <Image
                                    src={urlFor(programme.mainImage).width(350).height(600).url()}
                                    alt={programme.mainImage.alt || programme.title}
                                    width={350}
                                    height={600}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white px-3 py-1 rounded-full text-sm font-medium">
                                    📅 Programme Poster
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-6">
                                <div className="flex-1">
                                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-[#1b5e3f] transition-colors duration-300 mb-3">
                                    {programme.title}
                                  </h3>

                                  {/* Date/Time Badges */}
                                  <div className="flex flex-wrap gap-3 mb-2">
                                    {programme.programmeDate && (
                                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                                        <span>📅</span>
                                        <span>{programme.programmeDate}</span>
                                      </div>
                                    )}
                                    {(programme.programmeStartTime || programme.programmeEndTime) && (
                                      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                                        <span>⏰</span>
                                        <span>
                                          {programme.programmeStartTime}
                                          {programme.programmeEndTime && ` - ${programme.programmeEndTime}`}
                                        </span>
                                      </div>
                                    )}
                                  </div>

                                  <p className="text-lg text-gray-600">Click to view detailed timeline</p>
                                </div>
                                <motion.div
                                  animate={{ rotate: expandedProgramme === programme._id ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="ml-4 flex-shrink-0"
                                >
                                  <svg className="w-6 h-6 text-[#1b5e3f]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                  </svg>
                                </motion.div>
                              </div>

                              {/* Programme Date & Time */}
                              {(programme.programmeDate || programme.programmeStartTime) && (
                                <div className="bg-gradient-to-r from-[#1b5e3f]/5 to-[#237a4f]/5 p-6 rounded-xl mb-6">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full flex items-center justify-center text-white text-sm font-bold">
                                      📅
                                    </div>
                                    <h4 className="text-lg font-bold text-[#1b5e3f]">Programme Schedule</h4>
                                  </div>
                                  <div className="space-y-2">
                                    {programme.programmeDate && (
                                      <p className="text-gray-700 font-medium">
                                        📅 Date: {programme.programmeDate}
                                      </p>
                                    )}
                                    {(programme.programmeStartTime || programme.programmeEndTime) && (
                                      <p className="text-gray-700 font-medium">
                                        ⏰ Time: {programme.programmeStartTime}
                                        {programme.programmeEndTime && ` - ${programme.programmeEndTime}`}
                                      </p>
                                    )}
                                    <p className="text-gray-600 text-sm mt-3">
                                      Click to expand and view the complete timeline with detailed activities.
                                    </p>
                                  </div>
                                </div>
                              )}

                              {/* Timeline Preview - fallback if no date/time */}
                              {!programme.programmeDate && !programme.programmeStartTime && (
                                <div className="bg-gradient-to-r from-[#1b5e3f]/5 to-[#237a4f]/5 p-6 rounded-xl mb-6">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full flex items-center justify-center text-white text-sm font-bold">
                                      📋
                                    </div>
                                    <h4 className="text-lg font-bold text-[#1b5e3f]">Programme Overview</h4>
                                  </div>
                                  <p className="text-gray-700 leading-relaxed">
                                    This programme contains a detailed timeline of activities, sessions, and events.
                                    Click to expand and view the complete schedule with timings and descriptions.
                                  </p>
                                </div>
                              )}

                              <span className="text-[#1b5e3f] font-medium">
                                Click to {expandedProgramme === programme._id ? 'collapse' : 'view timeline'}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Expanded Timeline Content */}
                        <AnimatePresence>
                          {expandedProgramme === programme._id && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.5, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-8 lg:px-10 pb-8 lg:pb-10 border-t border-gray-200">
                                <div className="pt-8">
                                  <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full flex items-center justify-center text-white font-bold">
                                      ⏰
                                    </div>
                                    <h4 className="text-2xl font-bold text-[#1b5e3f]">Programme Outline</h4>
                                  </div>

                                  {/* Timeline Container */}
                                  <div className="relative">
                                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1b5e3f] to-[#237a4f]"></div>
                                    <div className="space-y-8 ml-16">
                                      <div className="prose prose-lg max-w-none text-gray-700">
                                        <div className="portablecontent2 timeline-content">
                                          <PortableText value={programme.body} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* All Programme Schedules Section */}
          <section className='py-16 lg:py-24 bg-gradient-to-br from-green-50/50 to-emerald-50/30'>
            <div className="max-w-7xl mx-auto px-6">
              <FadeInUp>
                <div className="text-center mb-16">
                  <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                    Programme <span className="text-[#1b5e3f]">Schedules</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Browse all our programme schedules with detailed timelines and activities
                  </p>
                  <div className="mt-8 flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
                  </div>
                </div>
              </FadeInUp>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {allProgrammes.map((programme, index) => (
                  <motion.div
                    key={programme._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <GlassCard className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500">
                      <div
                        className="cursor-pointer p-6 lg:p-8 h-full flex flex-col"
                        onClick={() => toggleExpanded(programme._id)}
                      >
                        {/* Poster Image */}
                        {programme.mainImage && (
                          <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
                            <Image
                              src={urlFor(programme.mainImage).width(400).height(600).url()}
                              alt={programme.mainImage.alt || programme.title}
                              width={400}
                              height={600}
                              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            {programme.isNew && (
                              <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                ✨ Latest
                              </div>
                            )}
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white px-3 py-1 rounded-full text-sm font-medium">
                              📅 Programme
                            </div>
                          </div>
                        )}

                        {/* Content */}
                        <div className="flex-1 flex flex-col">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-[#1b5e3f] transition-colors duration-300 mb-3">
                                {programme.title}
                              </h3>

                              {/* Date/Time Badges */}
                              <div className="flex flex-wrap gap-2 mb-2">
                                {programme.programmeDate && (
                                  <div className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                    <span>📅</span>
                                    <span>{programme.programmeDate}</span>
                                  </div>
                                )}
                                {(programme.programmeStartTime || programme.programmeEndTime) && (
                                  <div className="inline-flex items-center gap-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                    <span>⏰</span>
                                    <span>
                                      {programme.programmeStartTime}
                                      {programme.programmeEndTime && ` - ${programme.programmeEndTime}`}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <motion.div
                              animate={{ rotate: expandedProgramme === programme._id ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-4 flex-shrink-0"
                            >
                              <svg className="w-5 h-5 text-[#1b5e3f]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </motion.div>
                          </div>

                          {/* Programme Date & Time */}
                          <div className="bg-gradient-to-r from-[#1b5e3f]/5 to-[#237a4f]/5 p-4 rounded-lg mb-4 flex-1">
                            {(programme.programmeDate || programme.programmeStartTime) ? (
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-lg">📅</span>
                                  <span className="font-medium text-[#1b5e3f] text-sm">Programme Details</span>
                                </div>
                                {programme.programmeDate && (
                                  <p className="text-gray-700 text-sm font-medium">
                                    📅 {programme.programmeDate}
                                  </p>
                                )}
                                {(programme.programmeStartTime || programme.programmeEndTime) && (
                                  <p className="text-gray-700 text-sm font-medium">
                                    ⏰ {programme.programmeStartTime}
                                    {programme.programmeEndTime && ` - ${programme.programmeEndTime}`}
                                  </p>
                                )}
                                <p className="text-gray-600 text-xs mt-2">
                                  Click to view detailed timeline
                                </p>
                              </div>
                            ) : (
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-lg">⏰</span>
                                  <span className="font-medium text-[#1b5e3f] text-sm">Timeline Available</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                  Detailed programme schedule with timings and activities. Click to view the complete timeline.
                                </p>
                              </div>
                            )}
                          </div>

                          <div className="mt-auto">
                            <span className="text-[#1b5e3f] font-medium text-sm">View Timeline</span>
                          </div>
                        </div>
                      </div>

                      {/* Expanded Timeline Content */}
                      <AnimatePresence>
                        {expandedProgramme === programme._id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-gray-200">
                              <div className="pt-6">
                                <div className="flex items-center gap-3 mb-4">
                                  <div className="w-8 h-8 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    ⏰
                                  </div>
                                  <h4 className="text-lg font-bold text-[#1b5e3f]">Programme Outline</h4>
                                </div>

                                {/* Timeline Container */}
                                <div className="relative">
                                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1b5e3f] to-[#237a4f]"></div>
                                  <div className="space-y-6 ml-12">
                                    <div className="prose max-w-none text-gray-700">
                                      <div className="portablecontent2 timeline-content">
                                        <PortableText value={programme.body} />
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {(programme.programmeDate || programme.programmeStartTime || programme.publishedAt) && (
                                  <div className="mt-4 pt-4 border-t border-gray-100">
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                      {programme.programmeDate ? (
                                        <p>
                                          <strong>Programme Date:</strong> {programme.programmeDate}
                                        </p>
                                      ) : programme.publishedAt && (
                                        <p>
                                          <strong>Published:</strong> {new Date(programme.publishedAt).toLocaleDateString('en-GB', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                          })}
                                        </p>
                                      )}
                                      {(programme.programmeStartTime || programme.programmeEndTime) && (
                                        <p>
                                          <strong>Time:</strong> {programme.programmeStartTime}
                                          {programme.programmeEndTime && ` - ${programme.programmeEndTime}`}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <SubscribeSection />
    </main>
  );
};

export default SchedulePage;
