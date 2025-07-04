'use client';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sanityClient } from '@/app/lib/sanity'
import { allScheduleQuery } from '@/app/lib/queries'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/app/lib/imageBuilder'
import SubscribeSection from '@/app/components/SubscribeSection'
import { GlassCard } from '@/app/components/GlassCard'
import { FadeInUp, SlideInLeft, SlideInRight } from '@/app/components/AnimationUtils'

interface Schedule {
  _id: string;
  title: string;
  slug: any;
  isNewSchedule: boolean;
  programmeDate?: string;
  programmeStartTime?: string;
  programmeEndTime?: string;
  author?: {
    name: string;
  };
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  categories?: Array<{
    title: string;
  }>;
  publishedAt: string;
  body: any;
}

const SchedulePage = () => {
  const [allSchedule, setAllSchedule] = useState<Schedule[]>([]);
  const [expandedSchedule, setExpandedSchedule] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const schedules = await sanityClient.fetch(allScheduleQuery);
        setAllSchedule(schedules);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  const toggleExpanded = (scheduleId: string) => {
    setExpandedSchedule(expandedSchedule === scheduleId ? null : scheduleId);
  };

  const newSchedules = allSchedule.filter(schedule => schedule.isNewSchedule);
  const allSchedules = allSchedule;

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

      {/* Latest Programme Section */}
      {newSchedules.length > 0 && (
        <section className='py-16 lg:py-24'>
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                  Latest <span className="text-[#1b5e3f]">Programme</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our newest programme schedule with detailed timeline and activities
                </p>
                <div className="mt-8 flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
                </div>
              </div>
            </FadeInUp>

            <div className="space-y-8">
              {newSchedules.map((schedule, index) => (
                <motion.div
                  key={schedule._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <GlassCard className="overflow-hidden hover:shadow-2xl transition-all duration-500">
                    <div 
                      className="cursor-pointer p-8 lg:p-10"
                      onClick={() => toggleExpanded(schedule._id)}
                    >
                      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                        {/* Poster Image */}
                        <div className="flex-shrink-0 w-full lg:w-72">
                          {schedule.mainImage && (
                            <div className="relative overflow-hidden rounded-xl shadow-lg">
                              <Image 
                                src={urlFor(schedule.mainImage).width(350).height(600).url()}
                                alt={schedule.mainImage.alt || schedule.title}
                                width={350}
                                height={600}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              {/* Poster Label */}
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
                                {schedule.title}
                              </h3>
                              
                              {/* Date/Time Badges */}
                              <div className="flex flex-wrap gap-3 mb-2">
                                {schedule.programmeDate && (
                                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                                    <span>📅</span>
                                    <span>{schedule.programmeDate}</span>
                                  </div>
                                )}
                                {(schedule.programmeStartTime || schedule.programmeEndTime) && (
                                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                                    <span>⏰</span>
                                    <span>
                                      {schedule.programmeStartTime}
                                      {schedule.programmeEndTime && ` - ${schedule.programmeEndTime}`}
                                    </span>
                                  </div>
                                )}
                              </div>
                              
                              <p className="text-lg text-gray-600">Click to view detailed timeline</p>
                            </div>
                            <motion.div
                              animate={{ rotate: expandedSchedule === schedule._id ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-4 flex-shrink-0"
                            >
                              <svg className="w-6 h-6 text-[#1b5e3f]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </motion.div>
                          </div>
                          
                          {/* Programme Date & Time */}
                          {(schedule.programmeDate || schedule.programmeStartTime) && (
                            <div className="bg-gradient-to-r from-[#1b5e3f]/5 to-[#237a4f]/5 p-6 rounded-xl mb-6">
                              <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full flex items-center justify-center text-white text-sm font-bold">
                                  📅
                                </div>
                                <h4 className="text-lg font-bold text-[#1b5e3f]">Programme Schedule</h4>
                              </div>
                              <div className="space-y-2">
                                {schedule.programmeDate && (
                                  <p className="text-gray-700 font-medium">
                                    📅 Date: {schedule.programmeDate}
                                  </p>
                                )}
                                {(schedule.programmeStartTime || schedule.programmeEndTime) && (
                                  <p className="text-gray-700 font-medium">
                                    ⏰ Time: {schedule.programmeStartTime}
                                    {schedule.programmeEndTime && ` - ${schedule.programmeEndTime}`}
                                  </p>
                                )}
                                <p className="text-gray-600 text-sm mt-3">
                                  Click to expand and view the complete timeline with detailed activities.
                                </p>
                              </div>
                            </div>
                          )}
                          
                          {/* Timeline Preview - fallback if no date/time */}
                          {!schedule.programmeDate && !schedule.programmeStartTime && (
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

                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            {schedule.categories && schedule.categories.length > 0 && (
                              <div className="flex gap-2">
                                {schedule.categories.map((category, idx) => (
                                  <span key={idx} className="bg-[#1b5e3f]/10 text-[#1b5e3f] px-3 py-1 rounded-full text-xs font-medium">
                                    {category.title}
                                  </span>
                                ))}
                              </div>
                            )}
                            <span className="text-[#1b5e3f] font-medium">
                              Click to {expandedSchedule === schedule._id ? 'collapse' : 'view timeline'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Timeline Content */}
                    <AnimatePresence>
                      {expandedSchedule === schedule._id && (
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
                                {/* Timeline Line */}
                                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1b5e3f] to-[#237a4f]"></div>
                                
                                {/* Timeline Content */}
                                <div className="space-y-8 ml-16">
                                  <div className="prose prose-lg max-w-none text-gray-700">
                                    <div className="portablecontent2 timeline-content">
                                      <PortableText value={schedule.body} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              {schedule.author && (
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full flex items-center justify-center text-white font-bold">
                                      {schedule.author.name.charAt(0)}
                                    </div>
                                    <div>
                                      <p className="text-sm text-gray-600">Programme organized by</p>
                                      <p className="font-medium text-gray-900">{schedule.author.name}</p>
                                    </div>
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
            {allSchedules.map((schedule, index) => (
              <motion.div
                key={schedule._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <GlassCard className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div 
                    className="cursor-pointer p-6 lg:p-8 h-full flex flex-col"
                    onClick={() => toggleExpanded(schedule._id)}
                  >
                    {/* Poster Image */}
                    {schedule.mainImage && (
                      <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
                        <Image 
                          src={urlFor(schedule.mainImage).width(400).height(600).url()}
                          alt={schedule.mainImage.alt || schedule.title}
                          width={400}
                          height={600}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* New Badge */}
                        {schedule.isNewSchedule && (
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            ✨ Latest
                          </div>
                        )}
                        {/* Poster Label */}
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
                            {schedule.title}
                          </h3>
                          
                          {/* Date/Time Badges */}
                          <div className="flex flex-wrap gap-2 mb-2">
                            {schedule.programmeDate && (
                              <div className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                <span>📅</span>
                                <span>{schedule.programmeDate}</span>
                              </div>
                            )}
                            {(schedule.programmeStartTime || schedule.programmeEndTime) && (
                              <div className="inline-flex items-center gap-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                <span>⏰</span>
                                <span>
                                  {schedule.programmeStartTime}
                                  {schedule.programmeEndTime && ` - ${schedule.programmeEndTime}`}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedSchedule === schedule._id ? 180 : 0 }}
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
                        {(schedule.programmeDate || schedule.programmeStartTime) ? (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-lg">📅</span>
                              <span className="font-medium text-[#1b5e3f] text-sm">Programme Details</span>
                            </div>
                            {schedule.programmeDate && (
                              <p className="text-gray-700 text-sm font-medium">
                                📅 {schedule.programmeDate}
                              </p>
                            )}
                            {(schedule.programmeStartTime || schedule.programmeEndTime) && (
                              <p className="text-gray-700 text-sm font-medium">
                                ⏰ {schedule.programmeStartTime}
                                {schedule.programmeEndTime && ` - ${schedule.programmeEndTime}`}
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
                        <div className="flex items-center justify-between">
                          {schedule.categories && schedule.categories.length > 0 && (
                            <div className="flex gap-2 flex-wrap">
                              {schedule.categories.slice(0, 2).map((category, idx) => (
                                <span key={idx} className="bg-[#1b5e3f]/10 text-[#1b5e3f] px-2 py-1 rounded-full text-xs font-medium">
                                  {category.title}
                                </span>
                              ))}
                              {schedule.categories.length > 2 && (
                                <span className="text-xs text-gray-500">+{schedule.categories.length - 2} more</span>
                              )}
                            </div>
                          )}
                          <span className="text-[#1b5e3f] font-medium text-sm">View Timeline</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Timeline Content */}
                  <AnimatePresence>
                    {expandedSchedule === schedule._id && (
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
                              {/* Timeline Line */}
                              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1b5e3f] to-[#237a4f]"></div>
                              
                              {/* Timeline Content */}
                              <div className="space-y-6 ml-12">
                                <div className="prose max-w-none text-gray-700">
                                  <div className="portablecontent2 timeline-content">
                                    <PortableText value={schedule.body} />
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            {(schedule.programmeDate || schedule.programmeStartTime || schedule.publishedAt) && (
                              <div className="mt-4 pt-4 border-t border-gray-100">
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                  {schedule.programmeDate ? (
                                    <p>
                                      <strong>Programme Date:</strong> {schedule.programmeDate}
                                    </p>
                                  ) : schedule.publishedAt && (
                                    <p>
                                      <strong>Published:</strong> {new Date(schedule.publishedAt).toLocaleDateString('en-GB', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                      })}
                                    </p>
                                  )}
                                  {(schedule.programmeStartTime || schedule.programmeEndTime) && (
                                    <p>
                                      <strong>Time:</strong> {schedule.programmeStartTime}
                                      {schedule.programmeEndTime && ` - ${schedule.programmeEndTime}`}
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

      <SubscribeSection />
    </main>
  );
};

export default SchedulePage;