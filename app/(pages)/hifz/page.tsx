import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: " Hifz | Al-Madinah Institute",
  description: "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};


const page = () => {
  return (
    <main>
        <section className='w-full lg:py-32 py-14'>
            <div className="w-full max-w-[1440px] mx-auto px-5">
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:gap-14">
                <div className="w-full">
                    <h1 className='md:text-[45px] text-4xl mb-2 font-poppins font-bold text-primary'>Hifz</h1>
                    <p className='text-[15px] text-gray-1000 mb-4'>
                    Memorising the Noble Qur'ān holds immense reward in Islām and includes one in the select
people of Allāh Ta'ālā. Rasūlullāh صلى الله عليه وسلم has said, 'Those dedicated to the Qur'ān are truly the
friends of Allāh and His special ones.' (Aḥmad)
                    </p>
                    <p className='text-[15px] text-gray-1000 mb-4'>
                    Shaykh Fuḍayl ibn 'Iyāḍ Raḥimahullāh Ta'ālā has said, 'The bearer of the Qur'ān is the flagbearer of Islām.'
                    </p>
                    <p className='text-[15px] text-gray-1000 mb-4'>
                    'Ḥifẓ'—an Arabic term—means to 'preserve' and 'protect.' In the context of the Glorious Qur'ān,
it refers to the noble act of committing to memory the divine words of the Glorious Qur'ān,
comprising over 6,000 verses revealed as guidance for all of humanity. One who accomplishes
this blessed task is honoured with the esteemed title of "Ḥāfiẓ"—a guardian of the Noble Qur'ān.
                    </p>
                    <p className='text-[15px] text-gray-1000 mb-4'>
                    At Al-Madīnah Institute, we are humbled to offer a dedicated Ḥifẓ programme, held Monday to
Friday from 4:45 PM to 7:15 PM, for students who aspire to embark on this honourable journey.
This course is tailored to nurture each student individually, taking into account their unique
abilities and learning pace. Great emphasis is placed on the correct recitation of the Qur'ān
through Tajwīd (proper phonetics and intonation), as well as on the moral and spiritual
development (Tarbiyah) of each student. 
                    </p>
                    <p className='text-[15px] text-gray-1000 mb-4'>
                    Our carefully structured syllabus is designed to facilitate the memorisation of the entire Glorious
Qur'ān within an average period of four years, while instilling the values of discipline, humility,
and sincerity. 
                    </p>

                    <p className='text-[15px] text-gray-1000 mb-4'>
                    We wholeheartedly encourage parents to inspire and support their children in this sacred pursuit.
With the grace and mercy of Allāh Ta'ālā, our aim is to cultivate not only Ḥuffāẓ who have
preserved the Noble Qur'ān in their hearts, but also young individuals who reflect its teachings
through noble character and righteous conduct. 
                    </p>
                    <p className='text-[15px] text-gray-1000 mb-4'>
                    May Allāh make your child's journey of Ḥifẓ a means of barakah (blessing) in both this world
                    and the Hereafter. Their success, InshāAllāh, is our success. 
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