'use client';
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlassCard } from '@/app/components/GlassCard';
import { FadeInUp, SlideInLeft, SlideInRight } from '@/app/components/AnimationUtils';

const AdmissionsClient = () => {
  const handleSmsClick = () => {
    const phoneNumber = '07353867127';
    const message = 'Admission';
    const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
    window.open(smsUrl, '_self');
  };

  const steps = [
    {
      id: 1,
      title: "Submit Admission Request",
      description: "Click the SMS button to send a quick message indicating your interest in admission. This will open your messaging app with our number and 'Admission' pre-filled.",
      icon: "📱",
      status: "start",
      color: "from-[#1b5e3f] to-[#237a4f]",
      details: [
        "Opens your SMS app automatically",
        "Pre-filled with our contact number",
        "Quick and convenient process"
      ]
    },
    {
      id: 2,
      title: "Provide Student Information",
      description: "Our dedicated admissions officer will contact you to request your child's details and discuss their educational needs and background.",
      icon: "📝",
      status: "process",
      color: "from-blue-500 to-indigo-600",
      details: [
        "Personal consultation with our team",
        "Discussion of your child's needs",
        "Assessment of suitable class"
      ]
    },
    {
      id: 3,
      title: "Placement Allocation",
      description: "Your child's place will be offered based on our comprehensive Admissions Policy, ensuring fair and transparent allocation.",
      icon: "🎓",
      status: "complete",
      color: "from-emerald-500 to-teal-600",
      details: [
        "Fair allocation based on policy",
        "Transparent selection process",
        "Welcome to our community"
      ]
    },
        {
      id: 4,
      title: "Confirm Your Space",
      description: "",
      icon: "✅",
      status: "confirm",
      color: "from-emerald-500 to-teal-600",
      details: [
        "Parents will be requested to come into the Madrasah to process their application",
        "All Madrasah related information will be shared",
        "Forms will be filled and fees set up via bank transfer on the day"
      ]
    },
        {
      id: 5,
      title: "First day at Madrasah",
      description: "Date & Time will be shared with the Parents.",
      icon: "🎓",
      status: "first-day",
      color: "from-emerald-500 to-teal-600",
      details: []
    }
  ];

  const benefits = [
    {
      icon: "🕌",
      title: "Islamic Environment",
      description: "Learn in a structured traditional Islamic environment with qualified teachers"
    },
    {
      icon: "🌟",
      title: "Quality Education",
      description: "Benefit from our comprehensive curriculum including the Noble Qur’ān, memorisation of Du’ās and Sūrahs and Islamic Studies"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Character Development",
      description: "Encouraging our students to become living examples of the sublime Islamic teachings of Nabī ﷺ"
    },
    {
      icon: "📚",
      title: "Spiritual Growth",
      description: "Instil self discipline and develop brotherhood, compassion, fairness, tolerance and other beautiful teachings of Islām in one’s private and public life"
    }
  ];

  return (
    <div className='overflow-hidden bg-gradient-to-br from-green-50/30 via-white to-emerald-50/20 min-h-screen'>
      {/* Hero Section */}
      <section className='relative pt-24 pb-16 lg:pt-32 lg:pb-20'>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b5e3f]/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6'
            >
              <span className="block">Join</span>
              <span className="block bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] bg-clip-text text-transparent">
                Al-Madinah Institute
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              <em>Connecting Future Generations with the Legacy of the Pious through Knowledge & Tarbiyah</em>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
            </motion.div>
            
            {/* Quick Action Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-4"
            >
              <button
                onClick={handleSmsClick}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-[#134d32] hover:to-[#1b5e3f] group"
              >
                <span className="text-2xl">📱</span>
                Start Application via SMS
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="text-sm text-gray-500"
            >
              One click opens your SMS app with our details pre-filled
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Application Process Steps */}
      <section className='py-16 lg:py-24'>
        <div className="max-w-7xl mx-auto px-6">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                Simple <span className="text-[#1b5e3f]">Application Process</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our streamlined 3-step process makes applying for admission quick and straightforward
              </p>
              <div className="mt-8 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
              </div>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <GlassCard className="h-full p-8 text-center hover:shadow-2xl transition-shadow duration-500">
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className="text-6xl mb-6 mt-4">
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details List */}
                  <ul className="space-y-2 text-sm text-gray-500">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#1b5e3f] rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Special action for step 1 */}
                  {step.id === 1 && (
                    <div className="mt-6">
                      <button
                        onClick={handleSmsClick}
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${step.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 group`}
                      >
                        Send SMS Now
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  )}
                </GlassCard>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-0.5 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f]"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='py-16 lg:py-24 bg-gradient-to-br from-green-50/50 to-emerald-50/30'>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Why Choose <span className="text-[#1b5e3f]">Our Institute</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover some the benefits of joining our Madrasah
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Policy Section */}
      <section className='py-16 lg:py-24'>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SlideInLeft>
            <GlassCard className="p-8 lg:p-12">
              <div className="text-6xl mb-6">📋</div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Admission Policy
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive admission policy ensures fair and transparent allocation of places. 
                Download our policy document to understand our criteria and procedures.
              </p>
              <Link
                href="#" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-[#134d32] hover:to-[#1b5e3f] group"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Admission Policy
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </GlassCard>
          </SlideInLeft>
        </div>
      </section>

      {/* Contact Information */}
      <section className='py-16 lg:py-24 bg-gradient-to-br from-green-50/50 to-emerald-50/30'>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Have Questions?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our admissions team is here to help you through every step of the process. 
                  Don't hesitate to reach out with any questions about our programmes or admission requirements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1b5e3f] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email Us</p>
                      <p className="text-gray-600">admin@al-madinah.org.uk</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#1b5e3f] rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Call or Text</p>
                      <p className="text-gray-600">07353 867 127</p>
                    </div>
                  </div>
                </div>
              </div>
            </SlideInLeft>
            
            <SlideInRight>
              <GlassCard className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Begin?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Take the first step towards your child's Islamic education journey
                  </p>
                  <button
                    onClick={handleSmsClick}
                    className="w-full px-6 py-4 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Send Admission SMS
                  </button>
                </div>
              </GlassCard>
            </SlideInRight>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsClient;