import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: " Hifz Revisions | Al-Madinah Institute",
  description: "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};


const page = () => {
  return (
    <main>
        <section className='w-full lg:py-32 py-14'>
            <div className="w-full max-w-[1440px] mx-auto px-5">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:gap-14">
                <div className="w-full">
                    <h1 className='md:text-[45px] text-4xl mb-2 font-poppins font-bold text-primary'>Hifz Revision</h1>
                    <p className='text-[15px] text-gray-1000 mb-4'>
                    Alḥamdulillāh, by the infinite grace of Allāh Taʿālā, you have achieved one of the greatest
honours — the memorisation of the Noble Qur'ān. This sacred gift places you among those
specially chosen to preserve the divine speech of Allāh Ta'ālā.
                    </p>
                    <p className='text-[15px] text-gray-1000 mb-4'>
                    But memorisation is only the beginning. Rasūlullāh صلى الله عليه وسلم likened the memorisation of the Glorious
Qur'ān to a hobbled camel — if cared for, it remains; if neglected, it escapes. Without regular
revision, what was once firmly held can be lost. 
                    </p>
                    <p className='text-[15px] text-gray-1000 mb-4'>
                    To support the beloved Ḥuffāẓ, Al-Madinah Institute is pleased to offer a Ḥifẓ Revision Facility
— a flexible, personalised service designed to help you maintain and strengthen your connection
with the Noble Qur'ān. Whether you're facing the demands … 
                    </p>
                    <p className='text-[15px] text-gray-1000 mb-4'>
                    Since February 2023, Al-Madinah Institute has been distributing a quarterly journal across
                    Crawley, delivering authentic Islamic literature to over 1200 homes. 
                    </p>
                    <p className='text-[15px] text-gray-1000 mb-4'>
                    Our aim is to foster understanding of Dīn, uphold Islamic values, dispel misconceptions, and
nurture the next generation through sound knowledge and tarbiyah based on the legacy of the
Pious Predecessors.
                    </p>

                    <p className='text-[15px] text-gray-1000 mb-4'>
                    Each issue offers something for the entire family—reflections from the Glorious Qur'ān and
Hadith, lessons from the lives of the righteous, engaging children's stories, and a quarterly
competition with prizes for young readers. 
                    </p>
                    <p className='text-[15px] text-gray-1000 mt-10'>
                    To receive your free copy, please email your name and address to: <strong>info@al-madinah.org.uk</strong> 
                    </p>
                    <ul className='space-y-3 mt-10'>
                        <li>
                            <Link href={"/"} 
                            className='md:px-12 px-6 transition-all duration-300 inline-flex hover:scale-105 hover:bg-primary/80 py-2.5 bg-primary text-white font-medium'
                            >MAKTAB 2024/25 YEAR PLANNER</Link>
                        </li>
                        <li>
                            <Link href={"/"} 
                            className='md:px-12 px-6 transition-all duration-300 inline-flex hover:scale-105 hover:bg-primary/80 py-2.5 bg-primary text-white font-medium'
                            >HIFZ 2024/25 YEAR PLANNER</Link>
                        </li>
                        <li>
                            <Link href={"/"} 
                            className='md:px-12 px-6 transition-all duration-300 inline-flex hover:scale-105 hover:bg-secondary/80 py-2.5 bg-secondary text-white font-medium'
                            >MAKTAB 2025/26 YEAR PLANNER</Link>
                        </li>
                        <li>
                            <Link href={"/"} 
                            className='md:px-12 px-6 transition-all duration-300 inline-flex hover:scale-105 hover:bg-secondary/80 py-2.5 bg-secondary text-white font-medium'
                            >HIFZ 2025/26 YEAR PLANNER</Link>
                        </li>
                        <li>
                            <Link href={"/"} 
                            className='md:px-12 px-6 transition-all duration-300 inline-flex hover:scale-105 hover:bg-green-500/80 py-2.5 bg-green-500 text-white font-medium'
                            >Click Here for Admissions</Link>
                        </li>
                    </ul>
                </div>
                <div className="pt-10 md:pt-0">
                        <Image src={"/images/ihsaan-academy-premises-2.jpg"} alt='no-img'
                        className='w-auto sticky top-10'
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