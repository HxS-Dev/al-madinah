import Image from 'next/image'
import React from 'react'
import LightboxEvents from '@/app/components/LightboxEvents'
import { sanityClient } from '@/app/lib/sanity'
import { allScheduleQuery } from '@/app/lib/queries'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/app/lib/imageBuilder'
import type { Metadata } from "next";
import AosClient from '@/app/components/AosClient'


export const metadata: Metadata = {
  title: " Programme Schedule | Al-Madinah Institute",
  description: "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};


const Events = async () => {
    const allSchedule = await sanityClient.fetch(allScheduleQuery) 

  return (
    <main className='overflow-hidden'>
      <AosClient/>
      <section className='w-full py-16 md:py-32'>
        <div className="w-full max-w-[1440px] px-3 md:px-5 mx-auto">
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-16">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <span  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className='uppercase text-gray-1000 text-[15px]'>Latest Programme</span>
              <h1  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className='text-2xl md:text-[43px] leading-none text-primary font-poppins font-bold'>Weekly Programmes</h1>
            </div>
            <div  data-aos="fade-left" data-aos-delay="200" data-aos-offset="100" data-aos-duration="1000" className="w-full md:w-2/3 gap-6 md:gap-12 flex flex-col md:flex-row">
            {allSchedule
              .filter((item: any) => item.isNewSchedule)
              .map((item: any) => (
                <div className="w-full gap-6 md:gap-12 flex flex-col md:flex-row" key={item._id}>
                  <div className="w-full md:w-auto">
                    <LightboxEvents
                      images={
                        item?.mainImage?.asset?.url && item.mainImage.asset.url.startsWith('http')
                          ? [item.mainImage.asset.url]
                          : []
                      }
                      imageClassName="w-full min-w-[220px] md:min-w-[330px] max-w-[330px] h-auto object-cover"
                    />
                  </div>
                  <div className="w-full md:w-auto">
                    <h4 className="text-[15px] font-bold mb-4 md:mb-6 text-gray-1000">{item?.title}</h4>
                    <div className="portablecontent2">
                      <PortableText 
                        value={item.body}
                      />
                    </div>
                  </div>
                </div>
            ))}
             
            </div>
          </div>
        </div>
      </section>

      <section className='w-full lg:pb-36 pb-10 md:pb-14'>
        <div className="w-full max-w-[1200px] px-3 md:px-5 mx-auto">
            <h2  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className='text-2xl md:text-[40px] pb-8 md:pb-16 text-primary font-bold text-center font-poppins'>Programme Schedules</h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {allSchedule
              .map((item: any) => (
                <div  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" key={item._id} className="px-4 md:px-14 py-4 md:py-6">
                {item.mainImage && (
                  <Image src={urlFor(item.mainImage).width(450).url()} width={460} height={614} className='w-full h-auto' alt='no-img' />
                )}
                <h3 className='text-xl md:text-[25px] font-poppins font-bold text-primary pt-4 md:pt-8 pb-2 md:pb-3'>{item?.title}</h3>
                <div className="portablecontent2">
                 <PortableText  value={item.body}  />
                </div>
              </div>
            ))}

        
          </div>
        </div>
      </section>

    </main>
  )
}

export default Events