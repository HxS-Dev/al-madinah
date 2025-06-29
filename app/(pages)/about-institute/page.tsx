import SubscribeSection from '@/app/components/SubscribeSection';
import AboutAims from '../../components/AboutAims';

import type { Metadata } from "next";
import AosClient from '@/app/components/AosClient';


export const metadata: Metadata = {
  title: " About Us | Al-Madinah Institute",
  description: "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};


const AboutAia = () => {

  return (
    <main className='font-nunito-sans overflow-hidden'>
      <AosClient/>
      <section className='w-full lg:pb-24 lg:pt-32 py-12 sm:py-16 md:py-20'>
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-5">
          <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className='text-[24px] sm:text-[28px] md:text-[30px] md:pb-10 pb-4 text-center text-blue-2000 font-berkshire_swash'>Welcome to Al-Madinah Institute</h1>
            <div className="w-full">
              <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="flex flex-col gap-1">
                <p className='text-base text-gray-1000 mb-4'>Our journey began with the distribution of quarterly journals to over 1,200 homes in the local
                  area. These publications aimed to provide authentic, accessible Islamic literature with content
                  suitable for the entire household. Alongside these journals, we also shared timely, free literature
                  with friends and well-wishers, tailored to the season or occasion </p>
                  <p className='text-base text-gray-1000 mb-4'>The Institute began with a small Hifz class of 10 students, held in the home of a well-wisher.
                  While this marked a valuable start, it naturally limited the range of services and activities the
                  Institute could offer.</p>
                  <p className='text-base text-gray-1000 mb-4'>To support the growth of our programmes and provide dedicated salāh and educational facilities,
                  the Institute has been actively seeking a suitable premises to further its objectives.</p>
                  <p className='text-base text-gray-1000 mb-4'>Our aim is to educate people from all walks of life—particularly young Muslims—in all areas of
                    religious, spiritual, and personal development. Our goal is to support the wider community by
                    promoting good character and addressing modern-day challenges such as anti-social behaviour,
                    substance abuse, family breakdown, and the misuse of the internet and social media. </p>
                    <p className='text-base text-gray-1000 mb-4'>Al-Madinah Institute will serve the community as a welcoming space for worship, devotion, and
                      the pursuit of Islāmic knowledge. We are committed to correcting misunderstandings and
                      misrepresentations of Islām, while striving to preserve and strengthen Islamic values in the lives
                      of current and future generations. </p>
                      <p className='text-base text-gray-1000 mb-4'>Through authentic knowledge and tarbiyah, we endeavour to connect the next generation with the
                      legacy of the pious, inspiring unwavering faith and righteous character </p>
              </div>
              <div className="flex flex-col">
                <h3 data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className='text-xl sm:text-2xl max-w-3xl my-8 sm:my-10 mx-auto text-primary text-center font-poppins font-semibold'>How You Can Support Al-Madinah Institute</h3>
                <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className='text-base text-gray-1000'>Your support enables us to continue our work and expand our reach. You can help by: </p>
                  <ul data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className='space-y-2 mt-4'>
                    <li>
                      <p className='text-base text-gray-1000'>- Continuously making Du'ā for the acceptance and success of the institute. </p>
                    </li>
                    <li>
                      <p className='text-base text-gray-1000'>- Donating generously to support the services of the Institute. (Donations can be made online or
                        in person) </p>
                    </li>
                    <li>
                      <p className='text-base text-gray-1000'>- Distributing our literature in your area.</p>
                    </li>
                    <li>
                      <p className='text-base text-gray-1000'>- Spreading awareness about our mission and activities. </p>
                    </li>
                  </ul>
                  <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className='text-base text-gray-1000 pt-8 sm:pt-10'>We hope and pray that, with the assistance of Allāh Taʿālā, we can continue to sow the seeds—
                  nurturing future generations who will be a source of goodness for us all. </p>

              </div>
            </div>
        </div>
      </section>
      <section className=''>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="w-full mx-auto">
          <AboutAims />
        </div>
      </section>

      <SubscribeSection/>
    </main>
  )
}

export default AboutAia