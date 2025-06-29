import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { Metadata } from "next";
import SubscribeSection from '@/app/components/SubscribeSection';
import AosClient from '@/app/components/AosClient';



export const metadata: Metadata = {
  title: " Services | Al-Madinah Institute",
  description: "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};


const Services = () => {
  return (
    <main className='overflow-hidden'>
      <AosClient/>
      <section className='w-full py-14 lg:pb-40 pt-32  relative'>
      <div className="absolute left-0 top-0 w-full h-full bg-[url(/images/istockphoto-bg.jpg)] opacity-10"></div>

        <div className="w-full max-w-[1440px] px-5 mx-auto relative z-10">
        
          <div className="w-full">
            <div className="pb-10">
            <h1 data-aos="fade-right" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className="lg:text-[50px] lg:text-5xl text-4xl text-primary font-poppins font-bold leading-none">Services</h1>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 lg:gap-y-16 gap-y-10">
                  <Link
                  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000"
                    href={"/"}
                    className="w-full group relative text-center transition-all duration-500 bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200 pb-5 overflow-hidden"
                  >
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <Image
                        width={280}
                        height={200}
                        className="w-full h-[200px] object-cover transition-all duration-700 group-hover:scale-105"
                        src={"/images/dummy_4.png"}
                        alt="no-img"
                      />
                      <div className="absolute inset-0 bg-blue-cyan/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                    <h3 className="text-2xl font-bold transition-all duration-500 group-hover:text-blue-cyan text-gray-1200 text-center pt-4 pb-3 tracking-wide">
                      Hifdh Class
                    </h3>
                    <span className="inline-flex items-center gap-2 transition-all duration-500 group-hover:bg-blue-cyan group-hover:text-white group-hover:border-blue-cyan py-2 px-6 rounded-full border-2 border-gray-1200 text-gray-1200 bg-white shadow group-hover:shadow-lg">
                      <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      Learn More
                    </span>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-cyan/10 rounded-full blur-2xl z-0"></div>
                  </Link>

                  <Link
                   data-aos="fade-up" data-aos-delay="150" data-aos-offset="100" data-aos-duration="1000"
                    href={"/"}
                    className="w-full group relative text-center transition-all duration-500 bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200 pb-5 overflow-hidden"
                  >
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <Image
                        width={280}
                        height={200}
                        className="w-full h-[200px] object-cover transition-all duration-700 group-hover:scale-105"
                        src={"/images/dummy_5.png"}
                        alt="no-img"
                      />
                      <div className="absolute inset-0 bg-blue-cyan/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                    <h3 className="text-2xl font-bold transition-all duration-500 group-hover:text-blue-cyan text-gray-1200 text-center pt-4 pb-3 tracking-wide">
                      Jumuah Khateeb
                    </h3>
                    <span className="inline-flex items-center gap-2 transition-all duration-500 group-hover:bg-blue-cyan group-hover:text-white group-hover:border-blue-cyan py-2 px-6 rounded-full border-2 border-gray-1200 text-gray-1200 bg-white shadow group-hover:shadow-lg">
                      <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      Learn More
                    </span>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-cyan/10 rounded-full blur-2xl z-0"></div>
                  </Link>

                  <Link
                   data-aos="fade-up" data-aos-delay="200" data-aos-offset="100" data-aos-duration="1000"
                    href={"/"}
                    className="w-full group relative text-center transition-all duration-500 bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200 pb-5 overflow-hidden"
                  >
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <Image
                        width={280}
                        height={200}
                        className="w-full h-[200px] object-cover transition-all duration-700 group-hover:scale-105"
                        src={"/images/dummy_6.png"}
                        alt="no-img"
                      />
                      <div className="absolute inset-0 bg-blue-cyan/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                    <h3 className="text-2xl font-bold transition-all duration-500 group-hover:text-blue-cyan text-gray-1200 text-center pt-4 pb-3 tracking-wide">
                      Further Education
                    </h3>
                    <span className="inline-flex items-center gap-2 transition-all duration-500 group-hover:bg-blue-cyan group-hover:text-white group-hover:border-blue-cyan py-2 px-6 rounded-full border-2 border-gray-1200 text-gray-1200 bg-white shadow group-hover:shadow-lg">
                      <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      Learn More
                    </span>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-cyan/10 rounded-full blur-2xl z-0"></div>
                  </Link>

                  <Link
                   data-aos="fade-up" data-aos-delay="250" data-aos-offset="100" data-aos-duration="1000"
                    href={"/adult-islamic-studies"}
                    className="w-full group relative text-center transition-all duration-500 bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200 pb-5 overflow-hidden"
                  >
                    <div className="relative overflow-hidden rounded-t-2xl">
                      <Image
                        width={280}
                        height={200}
                        className="w-full h-[200px] object-cover transition-all duration-700 group-hover:scale-105"
                        src={"/images/dummy_7.png"}
                        alt="no-img"
                      />
                      <div className="absolute inset-0 bg-blue-cyan/20 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                    <h3 className="text-2xl font-bold transition-all duration-500 group-hover:text-blue-cyan text-gray-1200 text-center pt-4 pb-3 tracking-wide">
                      Adult Islamic Studies
                    </h3>
                    <span className="inline-flex items-center gap-2 transition-all duration-500 group-hover:bg-blue-cyan group-hover:text-white group-hover:border-blue-cyan py-2 px-6 rounded-full border-2 border-gray-1200 text-gray-1200 bg-white shadow group-hover:shadow-lg">
                      <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                      Learn More
                    </span>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-cyan/10 rounded-full blur-2xl z-0"></div>
                  </Link>

              </div>

          </div>
        </div>
      </section>

      <SubscribeSection/>
    </main>
  )
}

export default Services