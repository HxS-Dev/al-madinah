'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AboutAims = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const getAnimateClass = (slideIdx: number) => {
    if (slideIdx === activeIndex && slideIdx === 0) {
      return 'translate-y-0 opacity-100 transition-all duration-500';
    }
    return slideIdx === activeIndex
      ? 'translate-y-0 opacity-100 transition-all duration-500'
      : 'translate-y-20 opacity-0';
  };

  const getAnimatePClass = (slideIdx: number) => {
    if (slideIdx === activeIndex && slideIdx === 0) {
      return 'translate-y-0 opacity-100 transition-all duration-700';
    }
    return slideIdx === activeIndex
      ? 'translate-y-0 opacity-100 transition-all duration-700'
      : 'translate-y-20 opacity-0';
  };

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1.2}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      initialSlide={2}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className='aims-slider'
    >
      <SwiperSlide>
        <div className={`w-full h-full bg-blue-1100 p-[50px] flex flex-col items-center justify-center`}>
          <div className="w-full max-w-[1000px] mx-auto">
            <h2 className={`text-[35px] font-nunito-sans text-white text-center font-bold mb-4 ${getAnimateClass(0)}`}>Our Aims</h2>
            <p className={`text-base text-white font-nunito-sans font-medium text-center ${getAnimatePClass(0)}`}>To encourage charitable giving and volunteerism, making a positive impact on the lives of those in need.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`w-full h-full bg-purple-1000 p-[50px] flex flex-col items-center justify-center `}>
          <div className="w-full max-w-[1000px] mx-auto">
            <h2 className={`text-[35px] font-nunito-sans text-white text-center font-bold mb-4 ${getAnimateClass(1)}`}>Our Aims</h2>
            <p className={`text-base font-nunito-sans text-white font-medium text-center ${getAnimatePClass(1)}`}>The Institute began with a small Hifz class of 10 students, held in the home of a well-wisher.
                  While this marked a valuable start, it naturally limited the range of services and activities the
                  Institute could offer.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`w-full h-full bg-green-cyan p-[50px] flex flex-col items-center justify-center `}>
          <div className="w-full max-w-[1000px] mx-auto">
            <h2 className={`text-[35px] font-nunito-sans text-white text-center font-bold mb-4 ${getAnimateClass(2)}`}>Our Aims</h2>
            <p className={`text-base font-nunito-sans text-white font-medium text-center ${getAnimatePClass(2)}`}>To support the growth of our programmes and provide dedicated salāh and educational facilities,
            the Institute has been actively seeking a suitable premises to further its objectives.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`w-full h-full bg-gray-1400 p-[50px] flex flex-col items-center justify-center`}>
          <div className="w-full max-w-[1000px] mx-auto">
            <h2 className={`text-[35px] font-nunito-sans text-white text-center font-bold mb-4 ${getAnimateClass(3)}`}>Our Aims</h2>
            <p className={`text-base font-nunito-sans text-white font-medium text-center ${getAnimatePClass(3)}`}>Our aim is to educate people from all walks of life—particularly young Muslims—in all areas of
                    religious, spiritual, and personal development. Our goal is to support the wider community by
                    promoting good character and addressing modern-day challenges such as anti-social behaviour,
                    substance abuse, family breakdown, and the misuse of the internet and social media. </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={`w-full h-full bg-green-1000 p-[50px] flex flex-col items-center justify-center`}>
          <div className="w-full max-w-[1000px] mx-auto">
            <h2 className={`text-[35px] font-nunito-sans text-white text-center font-bold mb-4 ${getAnimateClass(4)}`}>Our Aims</h2>
            <p className={`text-base font-nunito-sans text-white font-medium text-center ${getAnimatePClass(4)}`}>Al-Madinah Institute will serve the community as a welcoming space for worship, devotion, and
                      the pursuit of Islāmic knowledge. We are committed to correcting misunderstandings and
                      misrepresentations of Islām, while striving to preserve and strengthen Islamic values in the lives
                      of current and future generations.</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default AboutAims; 