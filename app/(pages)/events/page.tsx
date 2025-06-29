import Image from 'next/image'
import React from 'react'
import LightboxEvents from '@/app/components/LightboxEvents'
import { allEventsQuery } from '@/app/lib/queries'
import { sanityClient } from '@/app/lib/sanity'
import { PortableText } from 'next-sanity'
import { urlFor } from '@/app/lib/imageBuilder'
import type { Metadata } from "next";
import AosClient from '@/app/components/AosClient'


export const metadata: Metadata = {
  title: " Events | Al-Madinah Institute",
  description: "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};


const Events = async () => {
  const allEvents = await sanityClient.fetch(allEventsQuery) 

  return (
    <main  className='overflow-hidden'>
      <AosClient/>
      <section className='w-full py-16 sm:py-24 md:py-32'>
        <div className="w-full max-w-[1440px] px-3 sm:px-5 mx-auto">
          <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-20">
            <div className="lg:w-1/3 w-full mb-8 lg:mb-0">
              <span data-aos="fade-right" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className='uppercase text-gray-1000 text-[13px] sm:text-[15px]'>Events</span>
              <h1 data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className='text-[28px] sm:text-[36px] md:text-[43px] leading-none text-primary font-poppins font-bold'>Weekly Programmes</h1>
            </div>
            <div data-aos="fade-left" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className="lg:w-2/3 w-full flex flex-col gap-8">
            {allEvents
              .filter((item: any) => item.isNew)
              .map((item: any) => (
                <div className="w-full flex flex-col md:flex-row gap-6 md:gap-12" key={item._id}>
                  <div className="flex-shrink-0 flex justify-center md:justify-start">
                    <LightboxEvents
                      images={
                        item?.mainImage?.asset?.url && item.mainImage.asset.url.startsWith('http')
                          ? [item.mainImage.asset.url]
                          : []
                      }
                      imageClassName="min-w-[220px] sm:min-w-[330px] max-w-[330px] h-auto object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[15px] font-bold mb-4 sm:mb-6 text-gray-1000">{item?.title}</h4>
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

      <section className='w-full lg:pb-36 pb-10 sm:pb-14'>
        <div className="w-full max-w-[1200px] px-3 sm:px-5 mx-auto">
            <h2 data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className='text-[26px] sm:text-[32px] md:text-[40px] pb-8 sm:pb-12 text-primary font-bold text-center font-poppins'>Past Events</h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {allEvents
              .map((item: any) => (
                <div data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" key={item._id} className="px-2 sm:px-6 md:px-14 py-4 sm:py-6">
                {item.mainImage && (
                  <Image src={urlFor(item.mainImage).width(450).url()} width={460} height={614} className='w-full h-auto object-cover rounded-md' alt='no-img' />
                )}
                <h3 className='text-[18px] sm:text-[22px] md:text-[25px] font-poppins font-bold text-primary pt-4 sm:pt-6 md:pt-8 pb-2 sm:pb-3'>{item?.title}</h3>
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