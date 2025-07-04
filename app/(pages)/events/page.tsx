'use client';
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sanityClient } from '@/app/lib/sanity'
import { allEventsQuery } from '@/app/lib/queries'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/app/lib/imageBuilder'
import SubscribeSection from '@/app/components/SubscribeSection'
import { GlassCard } from '@/app/components/GlassCard'
import { FadeInUp, SlideInLeft, SlideInRight } from '@/app/components/AnimationUtils'

interface Event {
  _id: string;
  title: string;
  slug: any;
  isNew: boolean;
  isFeatured?: boolean;
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

const EventsPage = () => {
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await sanityClient.fetch(allEventsQuery);
        setAllEvents(events);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const toggleExpanded = (eventId: string) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const newEvents = allEvents.filter(event => event.isNew);
  const pastEvents = allEvents.filter(event => !event.isNew);

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
                Events
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Stay connected with our community through weekly programmes and special events
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

      {/* Current Events Section */}
      {newEvents.length > 0 && (
        <section className='py-16 lg:py-24'>
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                  Current <span className="text-[#1b5e3f]">Events</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Join our latest events and activities designed to strengthen your connection with the community
                </p>
                <div className="mt-8 flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
                </div>
              </div>
            </FadeInUp>

            <div className="space-y-8">
              {newEvents.map((event, index) => (
                <motion.div
                  key={event._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <GlassCard className="overflow-hidden hover:shadow-2xl transition-all duration-500">
                    <div 
                      className="cursor-pointer p-8 lg:p-10"
                      onClick={() => toggleExpanded(event._id)}
                    >
                      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                        {/* Event Poster */}
                        <div className="flex-shrink-0 w-full lg:w-72">
                          {event.mainImage && (
                            <div className="relative overflow-hidden rounded-xl shadow-lg">
                              <Image 
                                src={urlFor(event.mainImage).width(350).height(600).url()}
                                alt={event.mainImage.alt || event.title}
                                width={350}
                                height={600}
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              {/* Event Poster Label */}
                              <div className="absolute top-4 left-4 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white px-3 py-1 rounded-full text-sm font-medium">
                                🎪 Event Poster
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-[#1b5e3f] transition-colors duration-300">
                              {event.title}
                            </h3>
                            <motion.div
                              animate={{ rotate: expandedEvent === event._id ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-4 flex-shrink-0"
                            >
                              <svg className="w-6 h-6 text-[#1b5e3f]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </motion.div>
                          </div>
                          
                          {/* Preview content */}
                          <div className="text-gray-600 leading-relaxed mb-4">
                            <div className="portablecontent2">
                              <PortableText value={event.body} />
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            {event.categories && event.categories.length > 0 && (
                              <div className="flex gap-2">
                                {event.categories.map((category, idx) => (
                                  <span key={idx} className="bg-[#1b5e3f]/10 text-[#1b5e3f] px-3 py-1 rounded-full text-xs font-medium">
                                    {category.title}
                                  </span>
                                ))}
                              </div>
                            )}
                            <span className="text-[#1b5e3f] font-medium">Click to {expandedEvent === event._id ? 'collapse' : 'expand'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedEvent === event._id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 lg:px-10 pb-8 lg:pb-10 border-t border-gray-200">
                            <div className="pt-6">
                              <h4 className="text-xl font-bold text-[#1b5e3f] mb-4">Event Details</h4>
                              <div className="prose prose-lg max-w-none text-gray-700">
                                <div className="portablecontent2">
                                  <PortableText value={event.body} />
                                </div>
                              </div>
                              
                              {event.author && (
                                <div className="mt-6 pt-6 border-t border-gray-100">
                                  <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full flex items-center justify-center text-white font-bold">
                                      {event.author.name.charAt(0)}
                                    </div>
                                    <div>
                                      <p className="text-sm text-gray-600">Event by</p>
                                      <p className="font-medium text-gray-900">{event.author.name}</p>
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

      {/* Other Events Section */}
      {pastEvents.length > 0 && (
        <section className='py-16 lg:py-24 bg-gradient-to-br from-green-50/50 to-emerald-50/30'>
          <div className="max-w-7xl mx-auto px-6">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                  Other <span className="text-[#1b5e3f]">Events</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Explore our other events and programmes that bring our community together
                </p>
                <div className="mt-8 flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
                </div>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <GlassCard className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500">
                    <div 
                      className="cursor-pointer p-6 lg:p-8 h-full flex flex-col"
                      onClick={() => toggleExpanded(event._id)}
                    >
                      {/* Event Poster */}
                      {event.mainImage && (
                        <div className="relative overflow-hidden rounded-xl shadow-lg mb-6">
                          <Image 
                            src={urlFor(event.mainImage).width(400).height(600).url()}
                            alt={event.mainImage.alt || event.title}
                            width={400}
                            height={600}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          {/* Event Poster Label */}
                          <div className="absolute top-4 left-4 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white px-3 py-1 rounded-full text-sm font-medium">
                            🎪 Event
                          </div>
                        </div>
                      )}

                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-[#1b5e3f] transition-colors duration-300 flex-1">
                            {event.title}
                          </h3>
                          <motion.div
                            animate={{ rotate: expandedEvent === event._id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-4 flex-shrink-0"
                          >
                            <svg className="w-5 h-5 text-[#1b5e3f]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.div>
                        </div>
                        
                        {/* Preview */}
                        <div className="text-gray-600 leading-relaxed mb-4 flex-1">
                          <div className="portablecontent2 line-clamp-3">
                            <PortableText value={event.body} />
                          </div>
                        </div>

                        <div className="mt-auto">
                          <div className="flex items-center justify-between">
                            {event.categories && event.categories.length > 0 && (
                              <div className="flex gap-2 flex-wrap">
                                {event.categories.slice(0, 2).map((category, idx) => (
                                  <span key={idx} className="bg-[#1b5e3f]/10 text-[#1b5e3f] px-2 py-1 rounded-full text-xs font-medium">
                                    {category.title}
                                  </span>
                                ))}
                                {event.categories.length > 2 && (
                                  <span className="text-xs text-gray-500">+{event.categories.length - 2} more</span>
                                )}
                              </div>
                            )}
                            <span className="text-[#1b5e3f] font-medium text-sm">Click to expand</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedEvent === event._id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-gray-200">
                            <div className="pt-6">
                              <h4 className="text-lg font-bold text-[#1b5e3f] mb-4">Event Details</h4>
                              <div className="prose max-w-none text-gray-700">
                                <div className="portablecontent2">
                                  <PortableText value={event.body} />
                                </div>
                              </div>
                              
                              {event.publishedAt && (
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                  <p className="text-sm text-gray-500">
                                    Event Date: {new Date(event.publishedAt).toLocaleDateString('en-GB', {
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric'
                                    })}
                                  </p>
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

      <SubscribeSection />
    </main>
  );
};

export default EventsPage;