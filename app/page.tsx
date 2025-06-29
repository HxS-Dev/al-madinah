import Image from "next/image";
import PrimaryLink from "./components/PrimaryLink";
import Link from "next/link";
import { sanityClient } from "./lib/sanity";
import { allEventsQuery, salatTimetableQuery } from "./lib/queries";
import { PortableText } from "next-sanity";
import { urlFor } from "./lib/imageBuilder";
import LightboxTimeTable from "./components/LightboxTimeTable";
import DonationProgress from "./components/DonationProgress";
import type { Metadata } from "next";
import SubscribeSection from "./components/SubscribeSection";
import AosClient from "./components/AosClient";

export const metadata: Metadata = {
  title: " Home | Al-Madinah Institute",
  description:
    "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};

export default async function Home() {
  const timetable = await sanityClient.fetch(salatTimetableQuery);
  const allEvents = await sanityClient.fetch(allEventsQuery);

  return (
    <main className="w-full overflow-hidden">
      <AosClient />

      <section className="w-full lg:pt-28 lg:pb-10 pt-14 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-5">
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 items-center">
            <div className="w-full">
              <h1
                data-aos="fade-right"
                data-aos-duration="1000"
                className="lg:text-[50px] lg:text-5xl text-4xl text-primary font-poppins font-bold leading-none"
              >
                Welcome to <br /> Al-Madinah Institute
              </h1>
              <p
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="text-gray-1000 lg:mt-5 mt-3 mb-1"
              >
                Al-Madinah Institute is a UK registered charity based in
                Crawley, West Sussex.
              </p>
              <p
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="text-gray-1000 lg:mb-10 mb-4"
              >
                Charity No. 1203391
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="1000"
              >
                <PrimaryLink href="/about-institute" className="mb-10 md:mb-0">
                  About Al-Madinah Institute
                </PrimaryLink>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="md:w-[565px] mx-auto md:h-[565px] w-[260px] h-[260px] lg:scale-100 md:scale-75 scale-90 flex items-center justify-center relative"
            >
              <Image
                className="absolute md:max-w-[400px] max-w-[200px] md:mb-20 mb-10"
                src={"/images/hero-img.png"}
                alt="no-img"
                width={560}
                height={352}
              />
              <div className="w-full h-full rounded-full right-border"></div>
              <div className="md:w-24 md:h-24 w-14 h-14 p-3 absolute md:-left-12 -left-8 bg-white shadow-lg rounded-full flex items-center justify-center">
                <Image
                  src={"/images/ihsaan-img-1.png"}
                  width={45}
                  height={45}
                  alt="no-img"
                />
              </div>
              <div className="md:w-24 md:h-24 w-14 h-14 p-3 absolute -left-3 md:top-20 top-7 shadow-lg bg-white rounded-full flex items-center justify-center">
                <Image
                  src={"/images/ihsaan-img-2.png"}
                  width={45}
                  height={45}
                  alt="no-img"
                />
              </div>
              <div className="md:w-24 md:h-24 w-14 h-14 p-3 absolute md:left-28 left-[150px] -top-5 shadow-lg bg-white rounded-full flex items-center justify-center">
                <Image
                  src={"/images/ihsaan-img-3.png"}
                  width={66}
                  height={45}
                  alt="no-img"
                />
              </div>
              <div className="md:w-24 md:h-24 w-14 h-14 p-3 absolute md:right-32 right-38 -top-5 shadow-lg bg-white rounded-full flex items-center justify-center">
                <Image
                  src={"/images/ihsaan-img-4.png"}
                  width={50}
                  height={45}
                  alt="no-img"
                />
              </div>
              <div className="md:w-24 md:h-24 w-14 h-14 p-3 absolute md:right-0 -right-1 md:top-20 top-7 shadow-lg bg-white rounded-full flex items-center justify-center">
                <Image
                  src={"/images/ihsaan-img-5.png"}
                  width={45}
                  height={45}
                  alt="no-img"
                />
              </div>
              <div className="md:w-24 md:h-24 w-14 h-14 p-3 absolute md:-right-12 -right-7  shadow-lg bg-white rounded-full flex items-center justify-center">
                <Image
                  src={"/images/ihsaan-img-6.png"}
                  width={50}
                  height={45}
                  alt="no-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:py-40 py-14">
        <div className="w-full max-w-[1440px] mx-auto px-5">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-28 gap-6 items-center">
            <div className="w-full">
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="lg:lg:text-[45px] text-3xl font-bold text-primary mb-3"
              >
                About Us
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="lg:text-lg text-base text-gray-1000  mb-5"
              >
                Our journey began with the distribution of quarterly journals to
                over 1,200 homes in the local area. These publications aimed to
                provide authentic, accessible Islamic literature with content
                suitable for the entire household. Alongside these journals, we
                also shared timely, free literature with friends and
                well-wishers, tailored to the season or occasion.
              </p>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="lg:text-lg text-base text-gray-1000  lg:mb-6 mb-4"
              >
                The Institute began with a small Hifz class of 10 students, held
                in the home of a well-wisher. While this marked a valuable
                start, it naturally limited the range of services and activities
                the Institute could offer.
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="1000"
                className=""
              >
                <Link
                  className="inline-flex bg-gradient-to-l to-blue-cyan from-cyan-1000 cursor-pointer font-medium rounded text-white px-6 py-3 transition-colors duration-500 hover:from-blue-cyan hover:to-cyan-1000"
                  href="/about-institute"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
              className=""
            >
              <Image
                src={"/images/dummy-about-img.png"}
                width={600}
                height={400}
                alt="img"
              />
            </div>
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

      <section className="w-full lg:pt-40 lg:pb-0 py-14">
        <div className="w-full max-w-[1100px] mx-auto px-5 grid md:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
          <div className="w-full">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="lg:text-[45px] text-3xl leading-none mb-3 font-bold text-primary font-poppins"
            >
              Salat Timetable
            </h2>
            {timetable.map((items: any) => (
              <div key={items._id}>
                <h4
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1000"
                  className="text-[31px] leading-none font-bold text-primary font-poppins pb-4"
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
          </div>
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

      <section className="w-full lg:py-40 py-14">
        <div className="w-full max-w-[1440px] mx-auto px-5">
          <div className="text-center pb-16">
            <h2
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1000"
              className="lg:text-[45px] text-3xl font-bold text-primary text-center mb-4"
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
              className="inline-flex uppercase bg-gradient-to-l to-blue-cyan from-cyan-1000 cursor-pointer font-medium rounded text-white px-6 py-3 transition-colors duration-500 hover:from-blue-cyan hover:to-cyan-1000"
              href="/events"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full lg:pt-0 lg:pb-32 py-14 overflow-hidden">
        <div className="w-full mx-auto max-w-[1400px] px-5">
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
                className="md:text-4xl text-3xl font-bold text-primary md:mb-6 mb-4"
              >
                GIFT AID AND GIVE MORE!
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
                  className="inline-flex uppercase bg-gradient-to-l to-blue-cyan from-cyan-1000 cursor-pointer font-medium rounded text-white px-6 py-3 transition-colors duration-500 hover:from-blue-cyan hover:to-cyan-1000"
                  href="/donate"
                >
                  Donate Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:pb-40 lg:pt-0 py-14 relative">
        <div className="w-full max-w-[1440px] mx-auto px-5 relative z-10">
          <div className="w-full">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              className="lg:text-[45px] text-3xl font-bold text-center text-primary mb-16"
            >
              Our Services
            </h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 lg:gap-y-16 gap-y-10">
              <Link
                data-aos="fade-up"
                data-aos-duration="1000"
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
                  <svg
                    className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Learn More
                </span>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-cyan/10 rounded-full blur-2xl z-0"></div>
              </Link>

              <Link
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
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
                  <svg
                    className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Learn More
                </span>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-cyan/10 rounded-full blur-2xl z-0"></div>
              </Link>

              <Link
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="1000"
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
                  <svg
                    className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Learn More
                </span>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-cyan/10 rounded-full blur-2xl z-0"></div>
              </Link>

              <Link
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
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
                  <svg
                    className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Learn More
                </span>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-cyan/10 rounded-full blur-2xl z-0"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full lg:py-[100px] py-16 bg-[url(/images/bg-2.png)] bg-repeat bg-center">
        <div className="w-full max-w-[1440px] mx-auto px-5">
          <div className="w-full items-center gap-20 flex lg:flex-row flex-col-reverse">
            <div className="w-full lg:w-[45%]">
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="lg:text-4xl text-3xl font-bold text-primary lg:mb-6 mb-3"
              >
                THE DEBT HAS NOW BEEN CLEARED
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="lg:text-lg text-base leading-loose text-gray-1000 mb-6"
              >
                Al-Madinah Institute would like to extend its heartfelt
                gratitude to all who assisted in the repayment of its qardh
                through their continued du'as, moral and financial support. We
                request you to keep supporting the Academy's ongoing activities
                and future projects through your participation, precious du'as
                and valuable donations.
              </p>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                className=""
              >
                <Link
                  className="inline-flex  bg-gradient-to-l to-blue-cyan from-cyan-1000 cursor-pointer font-medium rounded text-white px-6 py-3 transition-colors duration-500 hover:from-blue-cyan hover:to-cyan-1000"
                  href="/donate"
                >
                  Donate Here
                </Link>
              </div>
            </div>
            <DonationProgress />
          </div>
        </div>
      </section>

      <SubscribeSection />
    </main>
  );
}
