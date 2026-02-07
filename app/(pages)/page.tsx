'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import PrimaryLink from "../components/PrimaryLink";
import Link from "next/link";
import { sanityClient } from "../lib/sanity";
import { allEventsQuery, salatTimetableQuery } from "../lib/queries";
import { PortableText } from "next-sanity";
import { urlFor } from "../lib/imageBuilder";
import LightboxTimeTable from "../components/LightboxTimeTable";
import FundraisingProgress from "../components/FundraisingProgress";
import type { Metadata } from "next";
import SubscribeSection from "../components/SubscribeSection";
import AosClient from "../components/AosClient";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import { IslamicPattern1, AnimatedIslamicPattern } from "../components/IslamicPatterns";
import { FadeInUp, FadeInScale, SlideInLeft, SlideInRight, FloatingElement } from "../components/AnimationUtils";
import { GlassCard, FloatingCard } from "../components/GlassCard";
import AnimatedIslamicBackground from "../components/AnimatedIslamicBackground";
import { SWT } from "../components/IslamicLigatures";
import { motion } from "framer-motion";

export default function Home() {
  const [timetable, setTimetable] = useState([]);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timetableData = await sanityClient.fetch(salatTimetableQuery);
        const eventsData = await sanityClient.fetch(allEventsQuery);
        setTimetable(timetableData);
        setAllEvents(eventsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="w-full overflow-hidden relative">
      <AosClient />
      
      {/* Animated Islamic Background - Behind all content */}
      <AnimatedIslamicBackground />

      {/* Hero Section */}
      <HeroSection />

      <section className="relative w-full lg:py-40 py-14 z-10">
        <div className="relative w-full max-w-[1440px] mx-auto px-5">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-28 gap-6 items-center">
            <SlideInLeft>
              <GlassCard pattern className="p-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b5e3f] mb-4">
                  About Us
                </h2>
                <p className="lg:text-lg text-base text-gray-1000 mb-5">
                  Our journey began with the distribution of quarterly journals to
                  over 1,200 homes in the local area. These publications aimed to
                  provide authentic, accessible Islamic literature with content
                  suitable for the entire household. Alongside these journals, we
                  also shared timely, free literature with friends and
                  well-wishers, tailored to the season or occasion.
                </p>
                <p className="lg:text-lg text-base text-gray-1000 lg:mb-6 mb-4">
                  The Institute began with a small Ḥifẓ class of 10 students, held
                  in the home of a well-wisher. While this marked a valuable
                  start, it naturally limited the range of services and activities
                  the Institute could offer.
                </p>
                <Link
                  className="inline-flex bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] cursor-pointer font-medium rounded-full text-white px-8 py-4 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:from-[#237a4f] hover:to-[#1b5e3f]"
                  href="/about-institute"
                >
                  Read More
                </Link>
              </GlassCard>
            </SlideInLeft>
            <SlideInRight delay={0.2}>
              <FloatingElement>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={"/images/collage.png"}
                    width={600}
                    height={400}
                    alt="img"
                    className="transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent pointer-events-none" />
                </div>
              </FloatingElement>
            </SlideInRight>
          </div>
        </div>
      </section>

      <section className="relative w-full lg:pt-40 lg:pb-0 py-14 z-10">
        <div className="relative w-full max-w-[1100px] mx-auto px-5 grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
          <FadeInUp>
            <GlassCard className="h-full">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b5e3f] mb-4">
                Salat Timetable
              </h2>
              {timetable.map((items: any) => (
                <div key={items._id}>
                  <h4
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    className="text-2xl md:text-3xl font-bold text-[#1b5e3f] mb-4"
                  >
                    {items?.title}
                  </h4>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                    className="portablecontent"
                  >
                    <PortableText
                      value={items.body}
                      components={{
                        types: {
                          image: ({ value }: any) =>
                            value?.asset?._ref ? (
                              <div className="my-8">
                                <img
                                  src={urlFor(value).width(450).url()}
                                  alt={value.alt || "Image"}
                                  className="rounded-lg"
                                />
                                {value.caption && (
                                  <p className="text-sm text-gray-600 mt-2 text-center">
                                    {value.caption}
                                  </p>
                                )}
                              </div>
                            ) : null,
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </GlassCard>
          </FadeInUp>
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-offset="300"
            data-aos-duration="1000"
          >
            {timetable.map((items: any) => (
              <div key={items._id}>
                <LightboxTimeTable
                  images={items?.mainImage ? [items.mainImage] : []}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full lg:py-40 py-14 z-10">
        <div className="relative w-full max-w-[1440px] mx-auto px-5">
          <div className="text-center pb-16">
            <h2
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1000"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b5e3f] text-center mb-6"
            >
              Events
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="max-w-4xl mx-auto text-gray-1000 md:text-lg text-base mb-8"
            >
              Upcoming Programmes at Al-Madinah Institute. Please attend, bring others and benefit.
            </p>

            <h3
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8"
            >
              Weekly And <span className="text-[#1b5e3f]">Daily Programmes</span>
            </h3>
          </div>
          <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-10">
            {allEvents
              .filter((item: any) => item.isFeatured)
              .slice(0, 3)
              .map((item: any, idx: number) => (
                <div key={item._id} className="">
                  {item.mainImage && (
                    <Image
                      data-aos="fade-up"
                      data-aos-delay={100 + idx * 100}
                      data-aos-duration="1000"
                      data-aos-offset="200"
                      src={urlFor(item.mainImage).width(450).url()}
                      width={460}
                      height={614}
                      className="w-full"
                      alt="no-img"
                    />
                  )}
                </div>
              ))}
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            className="text-center pt-16"
          >
            <Link
              className="inline-flex bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] cursor-pointer font-medium rounded-full text-white px-8 py-4 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:from-[#237a4f] hover:to-[#1b5e3f]"
              href="/events"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Our Premises Section */}
      <section className="relative w-full lg:py-40 py-14 z-10">
        <div className="relative w-full max-w-[1440px] mx-auto px-5">
          <div className="text-center pb-16">
          <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Our <span className="text-[#1b5e3f]">Premises</span>
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              className="max-w-4xl mx-auto text-gray-1000 md:text-lg text-base"
            >
              Discover our beautiful facilities designed to serve the community with worship spaces,
              educational areas, and gathering places for Islamic learning and spiritual growth.
            </p>
          </div>
          <div className="w-full grid md:grid-cols-4 grid-cols-1 gap-6">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-offset="200"
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <Image
                  src={"/images/dummy_2.png"}
                  width={320}
                  height={240}
                  className="w-full h-48 object-cover"
                  alt="Premises view 1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent pointer-events-none" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-offset="200"
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <Image
                  src={"/images/dummy_3.png"}
                  width={320}
                  height={240}
                  className="w-full h-48 object-cover"
                  alt="Premises view 2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent pointer-events-none" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-offset="200"
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <Image
                  src={"/images/dummy-about-img.png"}
                  width={320}
                  height={240}
                  className="w-full h-48 object-cover"
                  alt="Premises view 3"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent pointer-events-none" />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-offset="200"
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <Image
                  src={"/images/dummy_3.png"}
                  width={320}
                  height={240}
                  className="w-full h-48 object-cover"
                  alt="Premises view 4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b5e3f]/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full lg:pt-0 lg:pb-32 py-14 z-10">
        <div className="relative w-full mx-auto max-w-[1400px] px-5">
          <div className="w-full items-center grid lg:grid-cols-2 grid-cols-1 md:gap-28 gap-10">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="w-full"
            >
              <Image
                width={1024}
                height={491}
                className="w-full md:h-[491px] h-auto object-cover"
                src={"/images/dummy_3.png"}
                alt="no-img"
              />
            </div>
            <div className="w-full">
              <h2
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1000"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b5e3f] mb-4"
              >
                Gift Aid and Give More!
              </h2>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="bg-gradient-to-r from-[#1b5e3f]/10 to-[#237a4f]/5 p-6 rounded-xl mb-6"
              >
                <p className="text-lg font-semibold text-[#1b5e3f] mb-2">
                  Increase your donation by 25p of every £1 you donate, if you are a UK taxpayer.
                </p>
                <p className="text-base text-gray-700">
                  Kindly complete the online gift aid form to gift aid your donation.
                </p>
              </div>
              <p
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="text-base text-gray-1000 md:mb-6 mb-4"
              >
                Al-Madinah Institute was initiated to offer a place of worship
                where Muslims can gather to perform acts of devotion and
                religious study.
              </p>
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="text-base text-gray-1000 mb-8"
              >
                Help support Al-Madinah Institute by donating to its current
                projects.
              </p>
              <div
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="150"
                data-aos-duration="1000"
                className=""
              >
                <Link
                  className="inline-flex bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] cursor-pointer font-medium rounded-full text-white px-8 py-4 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:from-[#237a4f] hover:to-[#1b5e3f]"
                  href="/donate"
                >
                  Donate Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection isHomepage={true} />

      <section className="w-full lg:py-[100px] py-16 bg-[url(/images/bg-2.png)] bg-repeat bg-center">
        <div className="w-full max-w-[1440px] mx-auto px-5">
          <div className="w-full items-center gap-20 flex lg:flex-row flex-col-reverse">
            <div className="w-full lg:w-[45%]">
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b5e3f] mb-6"
              >
                Our New Premises Appeal
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="lg:text-lg text-base leading-loose text-gray-1000 mb-6"
              >
                Alhamdulillāh, through the grace of Allah <SWT></SWT>, the du’ās of
elders, teachers, well-wishers, Al-Madinah Institute has
acquired the Holly Lodge Premises in Three Bridges,
Crawley, West Sussex.
<br />
Al-Madinah Institute Urgently requires £980,000 by the
end of September 2025. (As of 12/07/2025)
Every donation, no matter the size, makes a meaningful
difference in supporting our mission to serve the
community with authentic Islamic knowledge and
guidance.
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  className="inline-flex bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] cursor-pointer font-medium rounded-full text-white px-8 py-4 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:from-[#237a4f] hover:to-[#1b5e3f]"
                  href="/donate"
                >
                  Donate Here
                </Link>
                <Link
                  className="inline-flex border-2 border-[#1b5e3f] text-[#1b5e3f] cursor-pointer font-medium rounded-full px-8 py-4 transition-all duration-300 hover:bg-[#1b5e3f] hover:text-white hover:shadow-lg hover:scale-105"
                  href="/new-premises-appeal"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <FundraisingProgress />
          </div>

          {/* Appeal Text - Tighter Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-md border border-gray-200">
              <p className="text-base lg:text-lg text-gray-800 leading-relaxed mb-5 text-center">
                We humbly appeal to all Muslim brothers and sisters to assist us in this endeavour.
                Your Institute requires your support urgently. Collectively even a small amount will make a
                huge difference.
              </p>
              <div className="bg-gradient-to-r from-[#1b5e3f]/10 to-[#237a4f]/5 rounded-lg p-4 border-l-4 border-[#1b5e3f] text-center">
                <p className="text-base lg:text-lg font-semibold text-[#1b5e3f] mb-1">
                  We need 980 people to donate £1,000 each
                </p>
                <p className="text-sm lg:text-base text-gray-700">
                  or 1960 people to donate £500 each.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SubscribeSection />
    </main>
  );
}
