'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AboutAims = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const aims = [
    {
      icon: "💖",
      title: "Charitable Giving & Volunteerism",
      description: "To encourage charitable giving and volunteerism, making a positive impact on the lives of those in need.",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: "📚",
      title: "Educational Foundation",
      description: "The Institute began with a small Hifz class of 10 students, held in the home of a well-wisher. While this marked a valuable start, it naturally limited the range of services and activities the Institute could offer.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: "🏢",
      title: "Growth & Expansion",
      description: "To support the growth of our programmes and provide dedicated salāh and educational facilities, the Institute has been actively seeking a suitable premises to further its objectives.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: "👥",
      title: "Community Development",
      description: "Our aim is to educate people from all walks of life—particularly young Muslims—in all areas of religious, spiritual, and personal development. Our goal is to support the wider community by promoting good character and addressing modern-day challenges such as anti-social behaviour, substance abuse, family breakdown, and the misuse of the internet and social media.",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      icon: "🕌",
      title: "Islamic Knowledge & Values",
      description: "Al-Madinah Institute will serve the community as a welcoming space for worship, devotion, and the pursuit of Islāmic knowledge. We are committed to correcting misunderstandings and misrepresentations of Islām, while striving to preserve and strengthen Islamic values in the lives of current and future generations.",
      gradient: "from-[#1b5e3f] to-[#237a4f]"
    }
  ];

  const getAnimateClass = (slideIdx: number) => {
    return slideIdx === activeIndex
      ? 'translate-y-0 opacity-100 transition-all duration-700 delay-200'
      : 'translate-y-8 opacity-0 transition-all duration-300';
  };

  const getAnimatePClass = (slideIdx: number) => {
    return slideIdx === activeIndex
      ? 'translate-y-0 opacity-100 transition-all duration-700 delay-400'
      : 'translate-y-8 opacity-0 transition-all duration-300';
  };

  return (
    <div className="relative">
      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button className="aims-prev bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button className="aims-next bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: '.aims-prev',
          nextEl: '.aims-next',
        }}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet !bg-white/50 !w-3 !h-3',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-white !scale-125',
        }}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className='aims-slider h-[500px] lg:h-[600px] rounded-2xl overflow-hidden'
      >
        {aims.map((aim, index) => (
          <SwiperSlide key={index}>
            <motion.div 
              className={`relative w-full h-full bg-gradient-to-br ${aim.gradient} flex items-center justify-center overflow-hidden`}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/2 w-20 h-20 border border-white rounded-full"></div>
              </div>

              <div className="relative z-10 w-full max-w-4xl mx-auto px-8 lg:px-16 text-center">
                {/* Icon */}
                <motion.div 
                  className={`text-6xl lg:text-7xl mb-6 ${getAnimateClass(index)}`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {aim.icon}
                </motion.div>

                {/* Title */}
                <motion.h2 
                  className={`text-3xl lg:text-5xl font-bold mb-8 leading-tight ${getAnimateClass(index)}`}
                  style={{ color: '#ffffff' }}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  {aim.title}
                </motion.h2>

                {/* Description */}
                <motion.p 
                  className={`text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto ${getAnimatePClass(index)}`}
                  style={{ color: '#ffffff' }}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {aim.description}
                </motion.p>

                {/* Decorative Element */}
                <motion.div
                  className={`mt-8 flex justify-center ${getAnimatePClass(index)}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <div className="w-16 h-1 bg-white/80 rounded-full"></div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-20 right-20 w-2 h-2 bg-white/30 rounded-full"
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-32 left-16 w-3 h-3 bg-white/40 rounded-full"
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slide Counter */}
      <div className="absolute bottom-4 left-4 z-10 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2">
        <span className="text-white text-sm font-medium">
          {activeIndex + 1} / {aims.length}
        </span>
      </div>

      <style jsx global>{`
        .aims-slider {
          --swiper-pagination-bottom: 20px;
        }
        .aims-slider .swiper-pagination {
          display: flex !important;
          justify-content: center !important;
          gap: 8px !important;
        }
        .aims-slider .swiper-pagination-bullet {
          margin: 0 !important;
          transition: all 0.3s ease !important;
        }
        .aims-slider .swiper-pagination-bullet:hover {
          transform: scale(1.1) !important;
        }
      `}</style>
    </div>
  );
};

export default AboutAims;