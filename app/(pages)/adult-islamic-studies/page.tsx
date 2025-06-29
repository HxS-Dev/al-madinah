import Image from 'next/image'
import React from 'react'
import type { Metadata } from "next";
import AosClient from '@/app/components/AosClient';


export const metadata: Metadata = {
  title: "Adult Islamic Studies | Al-Madinah Institute",
  description: "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};


const page = () => {
  return (
    <main className='overflow-hidden'>
      <AosClient/>
           <section className='w-full py-20 sm:py-32'>
        <div className="w-full max-w-[1440px] px-3 sm:px-5 mx-auto">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20">
            <div className="w-full">
              <h1  className='text-2xl sm:text-3xl md:text-[45px] font-semibold font-poppins text-primary mb-3'>Adult Islamic Studies</h1>
              <p className='text-[15px] text-gray-1000 mb-7'>The Messenger of Allah ﷺ said: "the acquisition of knowledge is incumbent upon every Muslim" (Ibn Majah & Bayhaqi)</p>
              <p className='text-[15px] text-gray-1000 mb-7'>"Do you want to study the <strong>basics</strong> of deen❓" <br/>
              "New to Islam and in need of someone to guide you <strong>step by step❓"</strong> <br/>
              "Do you feel your knowledge of Islam is not sufficient?" <br/>
              "Find yourself in doubt regarding many aspects of Islam?" <br/>
              Or "would you like to <strong>advance in your Islamic knowledge"</strong></p>
              <p className='text-[15px] text-gray-1000 mb-7'>Then these classes are definitely for you‼</p>

              <p className='text-[15px] text-gray-1000'>The <strong>"ADULTS ISLAMIC STUDIES"</strong> course</p>
              <p className='text-[15px] text-gray-1000 mb-7'>(Currently for brothers)</p>
              <h4 className='text-[15px] text-gray-1000 font-bold'>Basics course</h4>
              <ul className='pl-6 list-disc my-2'>
                <li className='text-[15px] text-gray-1000'> Hadīth</li>
                <li className='text-[15px] text-gray-1000'> Aqīdah</li>
                <li className='text-[15px] text-gray-1000'>Fiqh</li>
                <li className='text-[15px] text-gray-1000'>Sīrah</li>
              </ul>
              <p className='text-[15px] text-gray-1000 mb-7'>⌛ 3 x half-hour sessions</p>
              <p className='text-[15px] text-gray-1000 mb-7'>Perfect for those brothers who are new to Islam, those who have not had the opportunity to study when young or even for those who want to <strong>refresh</strong> the core knowledge of Islam.</p>
             
              <h4 className='text-[15px] text-gray-1000 font-bold'>Advanced course</h4>
              <ul className='pl-6 list-disc my-2'>
                <li className='text-[15px] text-gray-1000'> Hadīth</li>
                <li className='text-[15px] text-gray-1000'> Aqīdah</li>
                <li className='text-[15px] text-gray-1000'>Fiqh</li>
                <li className='text-[15px] text-gray-1000'>Sīrah</li>
              </ul>

              <p className='text-[15px] text-gray-1000 my-7'>This course involves a more <strong>detailed study in the above subjects.</strong>
             <br/> ⌛ Two x 45 minute lessons per day.</p>

              <p className='text-[15px] text-gray-1000 my-7'>Both courses takes place only <strong>once a week,</strong> (a very small commitment!) every <strong> Thursday – 8pm to 9.30pm.</strong></p>
              <p className='text-[15px] text-gray-1000 my-7'>These courses are taught by <strong>qualified 'Ulama</strong> and are conducted in the <strong>English language.</strong> Classes run according to the school calendar (holidays etc).</p>
              <p className='text-[15px] text-gray-1000 my-7'><strong>To enrol</strong> or for more info please contact: <br/>
              07542 775651</p>
              <p className='text-[15px] text-gray-1000 my-7'>Induction Date: Date: Thursday 4th May '23</p>

              <p className='text-[15px] text-gray-1000'>Venue:</p>
              <p className='text-[15px] text-gray-1000 font-bold'>Al-Madinah Institute</p>
              <p className='text-[15px] text-gray-1000'>783-785 High Rd,</p>
              <p className='text-[15px] text-gray-1000'>IG3 8RW,</p>
              <p className='text-[15px] text-gray-1000'>Seven Kings,</p>
              <p className='text-[15px] text-gray-1000'>London</p>


            </div>
            <div className="w-full lg:pt-16 pt-6">
              <Image
              width={570}
              height={806}
              className='w-full max-w-[500px] h-auto rounded-lg sticky top-10'
              src={"/images/dummy_8.png"} alt='' />

            </div>


            </div>
          </div>
        </section>
        <section className='w-full lg:pb-32 pt-0 py-10'>
            <div className="w-full max-w-[1440px] px-3 sm:px-5 mx-auto">
                <div className="w-full">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                      <Image
                       data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000"
                      width={360}
                      height={510}
                      className='w-full h-auto mx-auto'
                      src={"/images/dummy_9.png"} alt='no-img' />

                      <Image
                       data-aos="fade-up" data-aos-delay="150" data-aos-offset="100" data-aos-duration="1000"
                      width={360}
                      height={510}
                      className='w-full h-auto mx-auto'
                      src={"/images/dummy_9.png"} alt='no-img' />

                      <Image
                       data-aos="fade-up" data-aos-delay="200" data-aos-offset="100" data-aos-duration="1000"
                      width={360}
                      height={510}
                      className='w-full h-auto mx-auto'
                      src={"/images/dummy_10.png"} alt='no-img' />
                        
                    </div>
                </div>
            </div>
        </section>

   
    </main>
  )
}

export default page