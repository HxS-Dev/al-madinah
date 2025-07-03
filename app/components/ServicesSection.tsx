'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  icon: string;
  gradient: string;
}

interface ServicesSectionProps {
  showTitle?: boolean;
  isHomepage?: boolean;
  className?: string;
}

const ServicesSection = ({ showTitle = true, isHomepage = false, className = '' }: ServicesSectionProps) => {
  const services: Service[] = [
    {
      id: 'hifz',
      title: 'Hifz Classes',
      description: 'Comprehensive Quran memorization program for students of all ages with qualified instructors',
      image: '/images/dummy_4.png',
      link: '/hifz',
      icon: '📖',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'madrasah',
      title: 'Madrasah Al-Madinah',
      description: 'Traditional Islamic education combining Quranic studies, Arabic language, and Islamic sciences',
      image: '/images/dummy_5.png',
      link: '/madrasah-al-madinah',
      icon: '🕌',
      gradient: 'from-[#1b5e3f] to-[#237a4f]'
    },
    {
      id: 'adult-classes',
      title: 'Adult Islamic Classes',
      description: 'Structured learning programs for adults covering Islamic theology, jurisprudence, and spiritual development',
      image: '/images/dummy_6.png',
      link: '/adult-islamic-studies',
      icon: '👨‍🏫',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'hajj-umrah',
      title: 'Hajj & Umrah',
      description: 'Comprehensive guidance and support for pilgrimage journeys with experienced scholars',
      image: '/images/dummy_7.png',
      link: '/hajj-umrah',
      icon: '🕋',
      gradient: 'from-purple-500 to-violet-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className={`py-16 lg:py-24 ${isHomepage ? 'bg-gradient-to-br from-green-50/30 via-white to-emerald-50/20' : 'bg-white'} ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Our <span className="text-[#1b5e3f]">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive Islamic education and spiritual guidance for our community
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
            </div>
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group"
            >
              <Link
                href={service.link}
                className="block h-full"
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#1b5e3f]/20 overflow-hidden h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative overflow-hidden rounded-t-2xl h-48">
                    <Image
                      width={320}
                      height={200}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      src={service.image}
                      alt={service.title}
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-80 transition-all duration-500`} />
                    
                    {/* Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="text-4xl text-white transform scale-0 group-hover:scale-100 transition-transform duration-500">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1b5e3f] transition-colors duration-300 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:from-[#134d32] hover:to-[#1b5e3f] group"
                      >
                        Learn More
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.span>
                    </div>
                  </div>

                  {/* Background Decoration */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[#1b5e3f]/5 rounded-full blur-2xl group-hover:bg-[#1b5e3f]/10 transition-all duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        {isHomepage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-[#134d32] hover:to-[#1b5e3f]"
            >
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;