import React from 'react'
import Image from 'next/image'
import type { Metadata } from "next";
import AosClient from '@/app/components/AosClient';


export const metadata: Metadata = {
  title: " Hajj & Umrah | Al-Madinah Institute",
  description: "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};


const hajjImages = [
  '/images/Hajj-3.jpg',
  '/images/photo_2022-07-04_06-19-48.jpg',
  '/images/photo_2022-07-04_06-20-01.jpg',
]

const umrahImages = [
  '/images/photo_2022-07-04_06-19-16.jpg',
  '/images/photo_2022-07-04_06-19-55.jpg',
  '/images/photo_2022-07-04_06-20-32.jpg',
]

const HajjUmrah = () => {
  return (
    <main className='overflow-hidden'>
      <AosClient/>
      <section className="w-full py-10 sm:py-14 lg:py-24 bg-gray-50">
        <div className="w-full max-w-[1100px] mx-auto px-3 sm:px-5">
          <h1  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-8 font-poppins">Hajj & Umrah</h1>
          <div className="mb-12">
            <h2  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className="text-xl sm:text-2xl font-semibold text-primary mb-4">Latest Hajj Updates</h2>
            <p  data-aos="fade-up" data-aos-delay="150" data-aos-offset="100" data-aos-duration="1000" className="text-base text-gray-900 mb-6">
              Al-Madinah Institute regularly organises Hajj guidance seminars and provides up-to-date information for prospective pilgrims. Our latest Hajj session covered essential rituals, travel tips, and spiritual preparation. We also offer support for group bookings and connect attendees with experienced guides. For the 2024 season, please check our events page for upcoming seminars and registration details.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {hajjImages.map((src, idx) => (
                <div  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" key={idx} className="w-full h-[220px] sm:h-[200px] relative rounded-lg overflow-hidden shadow">
                  <Image src={src} alt={`Hajj ${idx+1}`} fill className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-12">
            <h2  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className="text-xl sm:text-2xl font-semibold text-primary mb-4">Latest Umrah Updates</h2>
            <p  data-aos="fade-up" data-aos-delay="150" data-aos-offset="100" data-aos-duration="1000" className="text-base text-gray-900 mb-6">
              Our Umrah workshops provide step-by-step guidance, practical advice, and spiritual insights for all ages. The most recent Umrah event included a Q&A with scholars, travel checklists, and a review of the latest Saudi regulations. For group Umrah trips and one-to-one support, please contact our office or visit the events page for more information.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {umrahImages.map((src, idx) => (
                <div  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" key={idx} className="w-full h-[220px] sm:h-[200px] relative rounded-lg overflow-hidden shadow">
                  <Image src={src} alt={`Umrah ${idx+1}`} fill className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HajjUmrah