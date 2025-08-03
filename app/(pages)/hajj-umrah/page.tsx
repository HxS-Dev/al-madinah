'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Metadata } from "next";
import SubscribeSection from '@/app/components/SubscribeSection';
import { GlassCard, FloatingCard } from '@/app/components/GlassCard';
import { FadeInUp, SlideInLeft, SlideInRight, FloatingElement } from '@/app/components/AnimationUtils';

const hajjImages = [
  '/images/Hajj-3.jpg',
  '/images/photo_2022-07-04_06-19-48.jpg',
  '/images/photo_2022-07-04_06-20-01.jpg',
];

const umrahImages = [
  '/images/photo_2022-07-04_06-19-16.jpg',
  '/images/photo_2022-07-04_06-19-55.jpg',
  '/images/photo_2022-07-04_06-20-01.jpg',
];

const HajjUmrahPage = () => {
  const services = [
    {
      icon: "🕌",
      title: "Hajj Guidance Seminars",
      description: "Comprehensive workshops covering essential rituals, travel tips, and spiritual preparation for the sacred journey.",
      features: ["Spiritual & Physical Preparation prior to departure", "Iḥram & its rulings", "Different types of Ḥajj", "In-depth rulings of the 5-days of Hajj", "Practical Advices", "Visiting Madīnah Munawwarah", "Literature available"]
    },
    {
      icon: "🌙",
      title: "Umrah Workshops",
      description: "Go through the Umrah method step-by-step with practical advices to increase your understanding and confidence. Group sessions and individual sessions available.",
      features: ["Travel Tips & Advice", "Spiritual & Physical Preparation prior to departure", "Iḥram & its rulings", "In-dept rulings of Umrah", "How to use the Nusuk app to obtain Rawdah permit", "Literature available"]
    },
    {
      icon: "👨‍🏫",
      title: "Expert Guidance",
      description: "Learn from experienced ‘ulamā who are well versed regarding the rulings, rights & requirements of the Pilgrimage.",
      features: ["Qualified instructors", "Personal consultation", "Group support", "Ongoing assistance"]
    }
  ];

  const benefits = [
    { icon: "📅", title: "Regular Updates", detail: "Stay informed with the latest requirements and regulations" },
    { icon: "👥", title: "Group Support", detail: "Connect with fellow pilgrims and share experiences" },
    { icon: "📞", title: "Ongoing Support", detail: "Continuous guidance before, during, and after your journey" },
    { icon: "🌍", title: "Comprehensive Info", detail: "Everything you need to know for a successful pilgrimage" }
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
                Hajj & Umrah
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Guidance and support for your sacred pilgrimage journey
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

      {/* Services Section */}
      <section className='py-16 lg:py-24'>
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                Our <span className="text-[#1b5e3f]">Services</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive support and guidance for your blessed journey to the Haramain Sharīfain
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <em>‘And as a right of Allah, it is obligatory upon the people to perform Hajj of the House - whoever has the ability to manage (his) way to it’<br /></em>(3:97)
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <GlassCard className="p-8 h-full hover:shadow-2xl transition-all duration-500 text-center group-hover:scale-105">
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1b5e3f] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.description }}>
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-left">
                        <div className="w-2 h-2 bg-[#1b5e3f] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='py-16 lg:py-24'>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInUp>
            <GlassCard className="p-8 lg:p-12">
              <div className="text-6xl mb-6">📞</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ready to Begin Your Journey of A Lifetime?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Contact us for more information on our Ḥajj & ‘Umrah guidance programmes, or any questions you may have related to the masaa’il (rulings) of Ḥajj, ’Umrah and/or Ziyārah.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#1b5e3f]/5 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#1b5e3f] mb-2">Visit Our Events Page</h3>
                  <p className="text-gray-700">Check for upcoming programmes</p>
                </div>
                <div className="bg-[#1b5e3f]/5 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#1b5e3f] mb-2">Contact Our Office</h3>
                  <p className="text-gray-700">Speak directly with one of our qualified ‘ulamā</p>
                </div>
              </div>
            </GlassCard>
          </FadeInUp>
        </div>
      </section>

      <SubscribeSection />
    </main>
  );
};

export default HajjUmrahPage;