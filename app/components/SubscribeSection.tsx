import Image from 'next/image'
import React from 'react'

const SubscribeSection = () => {
  return (
    <section className="w-full lg:py-12 py-8 relative">
      <div className="absolute inset-0 bg-[url(/images/bg-2.png)] bg-repeat bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 to-orange-50/20"></div>

    <div className="max-w-xl mx-auto px-5 lg:px-6 text-center relative z-10 bg-white rounded-2xl shadow-lg py-8 lg:py-10">
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="relative mx-auto mb-4 h-28 w-24 rounded-xl overflow-hidden shadow-md ring-1 ring-black/5"
      >
        <Image
          src="/images/green-dome.jpeg"
          alt="The Green Dome of Masjid an-Nabawi in Madinah"
          fill
          quality={95}
          sizes="96px"
          className="object-cover object-center"
        />
      </div>
      <h2 data-aos="fade-up" data-aos-duration="1000" className="text-2xl md:text-3xl font-semibold text-primary mb-3 font-poppins">
        Subscribe to Our <span className="text-primary">Quarterly Journal</span>
      </h2>
      <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="text-sm md:text-base text-gray-1000 mb-6">
        Increase your awareness and understanding of our beautiful Dīn through a selection of inspirational, thought-provoking and relevant articles.
        <br /><br />
        An essential companion for every household, and for all ages, seeking spiritual growth and guidance.
        <br /><br />
        Receive directly through your letterbox. No Fee. No difficulty
      </p>
      <form data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="flex w-full flex-col sm:flex-row items-center justify-center gap-3">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="w-full max-w-80 px-4 py-2.5 rounded border border-gray-1400 focus:outline-none focus:ring-2 focus:ring-primary text-gray-1200 bg-white transition-all duration-300 text-sm"
        />
        <button
          type="submit"
          className="inline-flex bg-gradient-to-l to-blue-cyan from-cyan-1000 cursor-pointer font-medium rounded text-white px-5 py-2.5 text-sm transition-colors duration-500 hover:from-blue-cyan hover:to-cyan-1000"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
  )
}

export default SubscribeSection