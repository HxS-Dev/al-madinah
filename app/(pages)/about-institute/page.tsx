'use client';
import SubscribeSection from '@/app/components/SubscribeSection';
import AboutAims from '../../components/AboutAims';
import { motion } from 'framer-motion';
import type { Metadata } from "next";

const AboutAia = () => {
  const milestones = [
    {
      icon: "📚",
      title: "1,200+ Homes",
      description: "Quarterly journals distributed to families in the local area"
    },
    {
      icon: "👥",
      title: "Started with 10",
      description: "Initial Hifz class held in a well-wisher's home"
    },
    {
      icon: "🏢",
      title: "Growing Vision",
      description: "Actively seeking dedicated premises for expansion"
    },
    {
      icon: "🌟",
      title: "Community Impact",
      description: "Supporting all walks of life with Islamic values"
    }
  ];

  const supportWays = [
    {
      icon: "🤲",
      title: "Make Du'ā",
      description: "Continuously pray for the acceptance and success of the institute"
    },
    {
      icon: "💝",
      title: "Donate Generously",
      description: "Support our services through online or in-person donations"
    },
    {
      icon: "📖",
      title: "Distribute Literature",
      description: "Help spread our authentic Islamic literature in your area"
    },
    {
      icon: "📢",
      title: "Spread Awareness",
      description: "Share our mission and activities with your community"
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
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6'
            >
              <span className="block">Welcome to</span>
              <span className="block bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] bg-clip-text text-transparent">
                Al-Madinah Institute
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              A beacon of Islamic knowledge and spiritual growth, nurturing generations with authentic teachings and compassionate guidance
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className='py-16 lg:py-24'>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Our <span className="text-[#1b5e3f]">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to a growing community institution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  Our journey began with the distribution of quarterly journals to over <span className="font-semibold text-[#1b5e3f]">1,200 homes</span> in the local area. These publications aimed to provide authentic, accessible Islamic literature with content suitable for the entire household.
                </p>
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  The Institute started with a small Hifz class of <span className="font-semibold text-[#1b5e3f]">10 students</span>, held in the home of a well-wisher. While this marked a valuable start, it naturally limited the range of services and activities the Institute could offer.
                </p>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  To support the growth of our programmes and provide dedicated salāh and educational facilities, the Institute has been actively seeking a suitable premises to further its objectives.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center"
                >
                  <div className="text-3xl mb-3">{milestone.icon}</div>
                  <h3 className="font-bold text-[#1b5e3f] text-lg mb-2">{milestone.title}</h3>
                  <p className="text-sm text-gray-600">{milestone.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
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
              Our <span className="text-[#1b5e3f]">Mission</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-4xl mb-6 text-center">🎯</div>
              <h3 className="text-2xl font-bold text-[#1b5e3f] mb-6 text-center">Education & Development</h3>
              <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                Our aim is to educate people from all walks of life—particularly young Muslims—in all areas of religious, spiritual, and personal development.
              </p>
              <p className='text-lg text-gray-700 leading-relaxed'>
                Our goal is to support the wider community by promoting good character and addressing modern-day challenges such as anti-social behaviour, substance abuse, family breakdown, and the misuse of the internet and social media.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-4xl mb-6 text-center">🕌</div>
              <h3 className="text-2xl font-bold text-[#1b5e3f] mb-6 text-center">Community Service</h3>
              <p className='text-lg text-gray-700 leading-relaxed mb-4'>
                Al-Madinah Institute will serve the community as a welcoming space for worship, devotion, and the pursuit of Islāmic knowledge.
              </p>
              <p className='text-lg text-gray-700 leading-relaxed'>
                We are committed to correcting misunderstandings and misrepresentations of Islām, while striving to preserve and strengthen Islamic values in the lives of current and future generations.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-2xl p-8 text-center"
          >
            <div className="text-4xl mb-6">🌱</div>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#f3f4f6' }}>Legacy & Future</h3>
            <p className='text-lg leading-relaxed' style={{ color: '#ffffff' }}>
              Through authentic knowledge and tarbiyah, we endeavour to connect the next generation with the legacy of the pious, inspiring unwavering faith and righteous character.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How You Can Support Section */}
      <section className='py-16 lg:py-24'>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
              How You Can <span className="text-[#1b5e3f]">Support</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your support enables us to continue our work and expand our reach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportWays.map((way, index) => (
              <motion.div
                key={way.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1b5e3f]/20 text-center h-full">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {way.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1b5e3f] mb-4">{way.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{way.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Prayer</h3>
            <p className='text-lg text-gray-700 leading-relaxed italic'>
              "We hope and pray that, with the assistance of Allāh Taʿālā, we can continue to sow the seeds—nurturing future generations who will be a source of goodness for us all."
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Aims Section */}
      <section className='py-16 lg:py-24 bg-gradient-to-br from-green-50/50 to-emerald-50/30'>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-6"
          >
            <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Our <span className="text-[#1b5e3f]">Aims & Vision</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive objectives through our interactive presentation
            </p>
          </motion.div>
          <AboutAims />
        </div>
      </section>

      <SubscribeSection/>
    </main>
  )
}

export default AboutAia