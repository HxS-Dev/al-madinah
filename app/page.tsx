import Image from "next/image";
import PrimaryLink from "./components/PrimaryLink";
import Link from "next/link";
import { sanityClient } from "./lib/sanity";
import { allEventsQuery, salatTimetableQuery } from "./lib/queries";
import { PortableText } from "next-sanity";
import { urlFor } from "./lib/imageBuilder";
import LightboxTimeTable from "./components/LightboxTimeTable";
import FundraisingProgress from "./components/FundraisingProgress";
import type { Metadata } from "next";
import SubscribeSection from "./components/SubscribeSection";
import AosClient from "./components/AosClient";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import { IslamicPattern1, AnimatedIslamicPattern } from "./components/IslamicPatterns";
import { FadeInUp, FadeInScale, SlideInLeft, SlideInRight, FloatingElement } from "./components/AnimationUtils";
import { GlassCard, FloatingCard } from "./components/GlassCard";
import AnimatedIslamicBackground from "./components/AnimatedIslamicBackground";

export const metadata: Metadata = {
  title: " Home | Al-Madinah Institute",
  description:
    "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};

export default async function Home() {
  const timetable = await sanityClient.fetch(salatTimetableQuery);
  const allEvents = await sanityClient.fetch(allEventsQuery);

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
                  The Institute began with a small Hifz class of 10 students, held
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
                    src={"/images/dummy-about-img.png"}
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

      <section
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
        className="w-full flex items-center justify-center"
      >
        <div className="w-full max-w-[2280px] mx-auto">
          <Image
            className="w-full"
            src={"/images/dummy_2.png"}
            alt="no-img"
            width={2280}
            height={780}
          />
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
              className="max-w-4xl mx-auto text-gray-1000 md:text-lg text-base"
            >
              Stay tuned for special programmes during Ramadan, youth
              activities, and family events. Everyone is welcome to join and
              benefit from our diverse range of activities at Al-Madinah
              Institute.
            </p>
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
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b5e3f] mb-6"
              >
                Gift Aid and Give More!
              </h2>
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
                className="text-base text-gray-1000 md:mb-6 mb-4"
              >
                To address misinterpretation, misunderstanding and
                misrepresentation of the Islamic faith.
              </p>
              <p
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="text-base text-gray-1000 md:mb-6 mb-4"
              >
                To address misinterpretation, misunderstanding and
                misrepresentation of the Islamic faith.
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
                Supporting Our Mission
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="lg:text-lg text-base leading-loose text-gray-1000 mb-6"
              >
                Your generous contributions help us maintain and expand our 
                educational programs, community services, and spiritual activities. 
                Every donation, no matter the size, makes a meaningful difference 
                in supporting our mission to serve the community with authentic 
                Islamic knowledge and guidance.
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
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
            <FundraisingProgress />
          </div>
        </div>
      </section>

      <SubscribeSection />
    </main>
  );
}
