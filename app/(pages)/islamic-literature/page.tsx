import Image from 'next/image'
import React from 'react'
import type { Metadata } from "next";
import AosClient from '@/app/components/AosClient';


export const metadata: Metadata = {
  title: " Islamic Literature | Al-Madinah Institute",
  description: "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};


const page = () => {
  return (
    <main className='overflow-hidden'>
        <AosClient/>
        <section className='w-full relative lg:py-32 py-10 sm:py-14'>
        <div className="absolute left-0 top-0 w-full h-full bg-[url(/images/istockphoto-bg.jpg)] opacity-10"></div>
            <div className="w-full max-w-[1440px] px-3 sm:px-5 mx-auto relative">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                    <div  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className='w-full group overflow-hidden bg-gray-50 rounded-lg'>
                        <div className="w-full">
                            <div className='relative overflow-hidden after:absolute after:w-full after:h-full after:bg-black/10 after:group-hover:bg-black/50 after:left-0 after:top-0 rounded-t-lg'>
                            <Image
                            width={360}
                            height={200}
                            className='w-full group-hover:scale-110 transition-all duration-500 h-[180px] sm:h-[200px] object-cover'
                            src={"/images/dummy_3.png"} alt='no-img' />
                            </div>
                         
                            <div className="p-5 sm:p-8 text-center">
                            <h3 className='text-xl sm:text-2xl text-center text-gray-1200 font-bold font-poppins'>Worried About Your Sustenance?</h3>
                            <p className='text-base text-gray-1200 text-center italic py-3 sm:py-4'>By Shaykh Muhammad Saleem Dhorat Hafizahullah
                            </p>
                            <a href="#" className='transition-all duration-300 text-gray-1200 border-2 inline-flex mx-auto border-gray-1200 px-4 sm:px-6 py-2 rounded text-sm sm:text-base'>Download</a>
                            </div>
                        </div>

                    </div>

                    <div  data-aos="fade-up" data-aos-delay="150" data-aos-offset="100" data-aos-duration="1000" className='w-full group overflow-hidden bg-gray-50 rounded-lg'>
                        <div className="w-full">
                            <div className='relative overflow-hidden after:absolute after:w-full after:h-full after:bg-black/10 after:group-hover:bg-black/50 after:left-0 after:top-0 rounded-t-lg'>
                            <Image
                            width={360}
                            height={200}
                            className='w-full group-hover:scale-110 transition-all duration-500 h-[180px] sm:h-[200px] object-cover'
                            src={"/images/dummy_3.png"} alt='no-img' />
                            </div>
                         
                            <div className="p-5 sm:p-8 text-center">
                            <h3 className='text-xl sm:text-2xl text-center text-gray-1200 font-bold font-poppins'>Consequences of Withholding Zakah
                            </h3>
                            <p className='text-base text-gray-1200 text-center italic py-3 sm:py-4'>By Shaykh Muhammad Saleem Dhorat Hafizahullah
                            </p>
                            <a href="#" className='transition-all duration-300 text-gray-1200 border-2 inline-flex mx-auto border-gray-1200 px-4 sm:px-6 py-2 rounded text-sm sm:text-base'>Download</a>
                            </div>
                        </div>

                    </div>

                    <div  data-aos="fade-up" data-aos-delay="200" data-aos-offset="100" data-aos-duration="1000" className='w-full group overflow-hidden bg-gray-50 rounded-lg'>
                        <div className="w-full">
                            <div className='relative overflow-hidden after:absolute after:w-full after:h-full after:bg-black/10 after:group-hover:bg-black/50 after:left-0 after:top-0 rounded-t-lg'>
                            <Image
                            width={360}
                            height={200}
                            className='w-full group-hover:scale-110 transition-all duration-500 h-[180px] sm:h-[200px] object-cover'
                            src={"/images/dummy_3.png"} alt='no-img' />
                            </div>
                         
                            <div className="p-5 sm:p-8 text-center">
                            <h3 className='text-xl sm:text-2xl text-center text-gray-1200 font-bold font-poppins'>The Legacy of The Madrasah
                            </h3>
                            <p className='text-base text-gray-1200 text-center italic py-3 sm:py-4'>By Shaykh Muhammad Saleem Dhorat Hafizahullah
                            </p>
                            <a href="#" className='transition-all duration-300 text-gray-1200 border-2 inline-flex mx-auto border-gray-1200 px-4 sm:px-6 py-2 rounded text-sm sm:text-base'>Download</a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    </main>
  )
}

export default page