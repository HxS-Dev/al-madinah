'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Metadata } from "next";
import SubscribeSection from '@/app/components/SubscribeSection';
import { GlassCard, FloatingCard } from '@/app/components/GlassCard';
import { FadeInUp, SlideInLeft, SlideInRight, FloatingElement } from '@/app/components/AnimationUtils';
import { RA, SAW, TAWJ, SWT } from '@/app/components/IslamicLigatures';

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
              <em>‘And as a right of Allah <SWT />, it is obligatory upon the people to perform Hajj of the House - whoever has the ability to manage (his) way to it’<br /></em>(3:97)
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
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-left">
                        <div className="w-2 h-2 bg-[#1b5e3f] rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {index === 1 && (
                    <motion.a
                      href="mailto:info@al-madinah.org.uk"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
                    >
                      <span>📧</span>
                      <span>Book Your Session Now</span>
                    </motion.a>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className='py-16 lg:py-24 bg-gradient-to-b from-white to-green-50/30'>
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                Free <span className="text-[#1b5e3f]">Literature</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Download comprehensive guides and resources to prepare for your sacred journey
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
              </div>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { title: "How to Perform Hajj", img: "170523_how_to_perform_hajj.jpg", pdf: "https://www.idauk.org/pdf/200319_hajj.pdf", size: "1.7 MB" },
              { title: "Tashīlul-Hajj", img: "tashilul-hajj.jpg", pdf: "https://www.at-tazkiyah.com/publications/booklet_urdu/tashilul-hajj_part-1_130624.pdf", size: "21.7 MB", note: "Part 1" },
              { title: "How to Perform 'Umrah", img: "170523_umrah.jpg", pdf: "https://www.idauk.org/pdf/170523_umrah.pdf", size: "1.3 MB" },
              { title: "Tashīlul-'Umrah", img: "tashilul_umrah.jpg", pdf: "https://at-tazkiyah.com/publications/booklet_urdu/tashilul_umrah_020724.pdf", size: "15.7 MB" },
              { title: "How to Perform Ziyārah", img: "200319_ziyarah.jpg", pdf: "https://www.idauk.org/pdf/200319_ziyarah.pdf", size: "1.3 MB" },
              { title: "Tashīluz-Ziyārah", img: "tashiluz_ziyarah.jpg", pdf: "https://www.at-tazkiyah.com/publications/booklet_urdu/tashiluz_ziyarah_170624.pdf", size: "11 MB" },
              { title: "Sanctity of Haramayn Sharīfayn", img: "haramayn_211217.jpg", pdf: "https://www.idauk.org/pdf/haramayn_211217.pdf", size: "2.4 MB" },
              { title: "Useful Advice for Travellers", img: "useful_advices_160123.jpg", pdf: "https://www.idauk.org/pdf/useful_advices_160123.pdf", size: "1.9 MB" },
              { title: "Salāt & Salām", img: "salaat_and_salaam_290420.jpg", pdf: "https://www.at-tazkiyah.com/publications/booklet_eng/salaat_and_salaam_220322.pdf", size: "1.5 MB" },
              { title: "100 Durūd", img: "100_durood_230822.jpg", pdf: "https://www.at-tazkiyah.com/publications/booklet_eng/100_durood_eng_230724.pdf", size: "4.3 MB" },
              { title: "Gift of Salām", img: "gift_of_salam_210724.jpg", pdf: "https://www.at-tazkiyah.com/publications/booklet_eng/gift_of_salam_210724.pdf", size: "10.8 MB" },
              { title: "Luminous Prayers", img: "luminous_prayers_200419.jpg", pdf: "https://www.at-tazkiyah.com/publications/booklet_eng/luminous_prayers_250419.pdf", size: "2.7 MB" },
              { title: "Jāmi'ud-Du'ā", img: "jamiud_dua_280420.jpg", pdf: "https://www.at-tazkiyah.com/publications/booklet_eng/jamiud_dua_210524.pdf", size: "5.4 MB" },
              { title: "Istighfār", img: "istighfar.jpg", pdf: "https://www.at-tazkiyah.com/publications/booklet_eng/istighfar_230322.pdf", size: "2.2 MB" },
              { title: "Hizbul-A'zam", img: "hizbul_azam_120719.jpg", pdf: "https://www.at-tazkiyah.com/publications/booklet_eng/hizbul_azam_210524.pdf", size: "2.4 MB" },
              { title: "Mu'awwadhāt", img: "muawwadhat_120719.jpg", pdf: "https://at-tazkiyah.com/publications/booklet_eng/muawwadhat_210524.pdf", size: "4.3 MB" },
            ].map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-3 h-full hover:shadow-xl transition-all duration-300 group">
                  <div className="relative mb-2 overflow-hidden rounded-lg">
                    <Image
                      src={`/images/${pub.img}`}
                      alt={pub.title}
                      width={200}
                      height={280}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">{pub.title}</h3>
                  <a
                    href={pub.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white font-medium text-xs px-3 py-2 rounded-lg hover:shadow-lg transition-all duration-300 w-full"
                  >
                    <span>📥</span>
                    <span>{pub.note ? `${pub.note} - ` : ''}{pub.size}</span>
                  </a>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Audio Section */}
          <div className="mt-16">
            <FadeInUp>
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Audio <span className="text-[#1b5e3f]">Resources</span>
                </h3>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
                </div>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">🎧</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">Hajj Guidance Seminar 2023</h4>
                      <a
                        href="https://www.idauk.org/audio/hajj-guidance-seminar-22/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#1b5e3f] hover:underline font-medium text-sm"
                      >
                        <span>▶️</span>
                        <span>Listen Now</span>
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">🎧</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-2">Hajj Guidance Seminar 2022</h4>
                      <a
                        href="https://www.idauk.org/audio/hajj-guidance-seminar-22/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#1b5e3f] hover:underline font-medium text-sm"
                      >
                        <span>▶️</span>
                        <span>Listen Now</span>
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </div>
          </div>

          <div className="mt-12 text-center space-y-3">
            <p className="text-sm text-gray-600 italic">
              The above publications are also available to purchase in print format.
            </p>
            <p className="text-sm text-gray-500">
              Resources courtesy of <a href="https://www.idauk.org" target="_blank" rel="noopener noreferrer" className="text-[#1b5e3f] hover:underline font-medium">Islāmic Da'wah Academy</a>
            </p>
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
                Contact us for more information on our Ḥajj & 'Umrah guidance programmes, or any questions you may have related to the masaa'il (rulings) of Ḥajj, 'Umrah and/or Ziyārah.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#1b5e3f]/5 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#1b5e3f] mb-2">Visit Our Events Page</h3>
                  <p className="text-gray-700">Check for upcoming programmes</p>
                </div>
                <div className="bg-[#1b5e3f]/5 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-[#1b5e3f] mb-4">Contact Our Office</h3>
                  <p className="text-gray-700 mb-4">Speak directly with one of our qualified 'ulamā</p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="tel:07353867127"
                      className="inline-flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-lg hover:bg-[#1b5e3f] hover:text-white transition-all duration-300 text-gray-700 font-medium shadow-sm"
                    >
                      <span>📞</span>
                      <span>07353867127</span>
                    </a>
                    <a
                      href="mailto:info@al-madinah.org.uk"
                      className="inline-flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-lg hover:bg-[#1b5e3f] hover:text-white transition-all duration-300 text-gray-700 font-medium shadow-sm"
                    >
                      <span>📧</span>
                      <span className="text-sm">info@al-madinah.org.uk</span>
                    </a>
                  </div>
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