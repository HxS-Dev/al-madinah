import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { Metadata } from "next";
import AosClient from '@/app/components/AosClient';


export const metadata: Metadata = {
  title: " Madrasah-Al-Madinah | Al-Madinah Institute",
  description: "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};


const page = () => {
  return (
    <main className='overflow-hidden'>
        <AosClient/>
        <section className='w-full lg:py-32 py-10 sm:py-14'>
            <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-14">
                <div className="w-full">
                    <h1  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className='text-2xl sm:text-3xl md:text-[45px] mb-2 font-poppins font-bold text-primary'>Madrasah Al-Ihsaan</h1>
                    <p  data-aos="fade-up" data-aos-delay="150" data-aos-offset="100" data-aos-duration="1000" className='text-[15px] text-gray-1000'>One of the fundamental aims of the Academy is to equip young people with the basics and essentials of their religion so they may establish a connection with their Lord through worship. To achieve this; a Maktab (evening Madrasah) was initiated in October 2014 for children aged 5-15 operating between 5pm-7pm on weekdays wherein children are taught the essentials of worship such as Qur'an recitation, establishing prayer, alongside many other subjects including Aqidah (integral beliefs), Seerah (Islamic History), Fiqh (Islamic Rulings) and Duas (verbal form of worship), with a key focus on Tarbiyyah (sound nurturing and upbringing) of the child in aspects of their religious and moral development. The Evening Madrasah facilitates this for 300 children.</p>
                        <ul  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className='space-y-3 mt-8 sm:mt-10 flex flex-col'>
                            <li>
                                <Link href={"/"} 
                                className='px-6 sm:px-12 transition-all duration-300 inline-flex flex-wrap justify-center hover:scale-105 hover:bg-primary/80 py-2.5 bg-primary text-white font-medium text-sm sm:text-base'
                                >MAKTAB 2024/25 YEAR PLANNER</Link>
                            </li>
                            <li>
                                <Link href={"/"} 
                                className='px-6 sm:px-12 transition-all duration-300 inline-flex flex-wrap justify-center hover:scale-105 hover:bg-primary/80 py-2.5 bg-primary text-white font-medium text-sm sm:text-base'
                                >HIFZ 2024/25 YEAR PLANNER</Link>
                            </li>
                            <li>
                                <Link href={"/"} 
                                className='px-6 sm:px-12 transition-all duration-300 inline-flex flex-wrap justify-center hover:scale-105 hover:bg-secondary/80 py-2.5 bg-secondary text-white font-medium text-sm sm:text-base'
                                >MAKTAB 2025/26 YEAR PLANNER</Link>
                            </li>
                            <li>
                                <Link href={"/"} 
                                className='px-6 sm:px-12 transition-all duration-300 inline-flex flex-wrap justify-center hover:scale-105 hover:bg-secondary/80 py-2.5 bg-secondary text-white font-medium text-sm sm:text-base'
                                >HIFZ 2025/26 YEAR PLANNER</Link>
                            </li>
                            <li>
                                <Link href={"/"} 
                                className='px-6 sm:px-12 transition-all duration-300 inline-flex flex-wrap justify-center hover:scale-105 hover:bg-green-500/80 py-2.5 bg-green-500 text-white font-medium text-sm sm:text-base'
                                >Click Here for Admissions</Link>
                            </li>
                        </ul>
                </div>
                <div  data-aos="fade-left" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className="pt-6 md:pt-0 flex justify-center">
                        <Image src={"/images/ihsaan-academy-premises-2.jpg"} alt='no-img'
                        className='w-full h-auto max-w-[400px] md:max-w-none md:w-auto md:sticky md:top-10 rounded-lg'
                        width={570}
                        height={428}
                        />
                </div>
                </div>

            </div>
        </section>
    </main>
  )
}

export default page