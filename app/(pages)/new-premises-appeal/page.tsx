'use client';
import SubscribeSection from '@/app/components/SubscribeSection';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NewPremisesAppeal = () => {
  const urgentNeeds = [
    {
      icon: "🕌",
      title: "Dedicated Prayer Space",
      description: "A proper mosque facility for our growing community's daily prayers and congregational worship"
    },
    {
      icon: "📚",
      title: "Educational Facilities",
      description: "Classrooms and learning spaces to expand our Islamic education programmes"
    },
    {
      icon: "👥",
      title: "Community Hall",
      description: "A multipurpose space for community events, lectures, and social gatherings"
    },
    {
      icon: "🏠",
      title: "Administrative Offices",
      description: "Professional workspace for our growing team and administrative needs"
    }
  ];

  const impactGoals = [
    {
      icon: "📖",
      title: "Expand Hifz Programme",
      description: "Increase capacity from 10 to 100+ students with dedicated memorization halls"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Services",
      description: "Provide comprehensive Islamic education for all family members"
    },
    {
      icon: "🌟",
      title: "Youth Development",
      description: "Create safe spaces for young Muslims to learn and grow in their faith"
    },
    {
      icon: "🤝",
      title: "Community Integration",
      description: "Bridge cultural gaps and promote understanding within the wider community"
    }
  ];

  return (
    <main className='overflow-hidden bg-gradient-to-br from-green-50/30 via-white to-emerald-50/20 min-h-screen'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-16 lg:pt-32 lg:pb-20'>
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
              <span className="block">New Premises</span>
              <span className="block bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] bg-clip-text text-transparent">
                Appeal
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Help us establish a permanent home for Al-Madinah Institute to better serve our growing community
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

      {/* Geographical Location Section */}
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
              Geographical <span className="text-[#1b5e3f]">Location</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding our community and the urgent need for Islamic facilities in Crawley
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-[#1b5e3f] mb-6 text-center">About Crawley</h3>
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  Crawley is a town and borough in West Sussex, England. It is <span className="font-semibold text-[#1b5e3f]">28 miles south of London</span>, <span className="font-semibold text-[#1b5e3f]">18 miles north of Brighton</span> and has a population of <span className="font-semibold text-[#1b5e3f]">118,493</span> at the time of the 2021 Census.
                </p>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  Southern parts of the borough lie immediately next to the High Weald National Landscape. From 1974 it is home to <span className="font-semibold text-[#1b5e3f]">Gatwick Airport</span>, Britain's 2nd busiest International Airport and in 2024, the 10th largest in Europe.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Muslims in Crawley Section */}
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
              Muslims in <span className="text-[#1b5e3f]">Crawley</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The urgent need for accessible Islamic education and prayer facilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="text-4xl mb-4">🕌</div>
              <h3 className="text-3xl font-bold text-[#1b5e3f] mb-2">1,000</h3>
              <p className="text-gray-600">Muslims in Three Bridges area alone</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-3xl font-bold text-[#1b5e3f] mb-2">2,500</h3>
              <p className="text-gray-600">Additional Muslims in neighbouring wards</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-3xl font-bold text-[#1b5e3f] mb-2">24.1%</h3>
              <p className="text-gray-600">Of local Muslim population (2021 census)</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-[#1b5e3f] mb-6 text-center">The Urgent Need</h3>
            <p className='text-lg text-gray-700 leading-relaxed mb-6'>
              The need for a prayer and educational facility in the Three Bridges area is both <span className="font-semibold text-[#1b5e3f]">evident and urgent</span>. It is alone home to approximately <span className="font-semibold text-[#1b5e3f]">1,000 Muslims</span>, with an additional <span className="font-semibold text-[#1b5e3f]">2,500 residing in neighbouring wards</span> such as Tilgate, Furnace Green, Pound Hill (South and North), Forgewood, and Maidenbower—representing <span className="font-semibold text-[#1b5e3f]">24.1% of the local Muslim population</span> according to the 2021 census, with the Muslim population increasing rapidly.
            </p>
            <p className='text-lg text-gray-700 leading-relaxed mb-8'>
              Currently, there is a <span className="font-semibold text-red-600">marked lack of accessible, Islamic educational and spiritual services</span> in the area, often compelling families—particularly mothers without transport—to travel significant distances to access basic religious education for their children.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-[#1b5e3f]"
            >
              <div className="text-center">
                <p className='text-lg text-gray-800 leading-relaxed italic mb-4'>
                  "ʿĀ'ishah رضي الله عنها narrates that Nabī ﷺ ordered that a masjid be built in a residential area and that it be cleaned and perfumed"
                </p>
                <p className="text-[#1b5e3f] font-semibold">
                  (Abū Dawūd, Tirmidhī & Ibn Mājah)
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Need Section */}
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
              What We <span className="text-[#1b5e3f]">Need</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential facilities to serve our growing community effectively
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {urgentNeeds.map((need, index) => (
              <motion.div
                key={need.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1b5e3f]/20 h-full">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {need.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1b5e3f] mb-4">{need.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{need.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Impact Section */}
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
              Our <span className="text-[#1b5e3f]">Vision</span> & Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With your support, we can transform our community's Islamic education and worship experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {impactGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100 hover:border-[#1b5e3f]/30 transition-all duration-300 h-full">
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {goal.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1b5e3f] mb-4">{goal.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* How to Support Section */}
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
              How You Can <span className="text-[#1b5e3f]">Help</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every contribution, no matter the size, brings us closer to our goal
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                <div className="text-5xl mb-6">💰</div>
                <h3 className="text-2xl font-bold text-[#1b5e3f] mb-4">Financial Donation</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Direct monetary contributions to help us secure and set up our new premises
                </p>
                <Link
                  href="/donate"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Donate Now
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                <div className="text-5xl mb-6">🤲</div>
                <h3 className="text-2xl font-bold text-[#1b5e3f] mb-4">Du'ā & Support</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Keep us in your prayers for the success and acceptance of this noble cause
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 border-2 border-[#1b5e3f] text-[#1b5e3f] rounded-full font-semibold hover:bg-[#1b5e3f] hover:text-white transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
                <div className="text-5xl mb-6">📢</div>
                <h3 className="text-2xl font-bold text-[#1b5e3f] mb-4">Spread the Word</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Share our appeal with your family, friends, and community networks
                </p>
                <button className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-all duration-300">
                  Share Appeal
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 lg:p-12 text-center shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">May Allāh Accept Our Efforts</h3>
            <p className='text-lg text-gray-700 leading-relaxed italic'>
              "And whoever builds a mosque for Allāh, Allāh will build for him a house in Paradise."
              <span className="block mt-2 text-[#1b5e3f] font-semibold">- Prophet Muhammad ﷺ</span>
            </p>
          </motion.div>
        </div>
      </section>

      <SubscribeSection/>
    </main>
  )
}

export default NewPremisesAppeal