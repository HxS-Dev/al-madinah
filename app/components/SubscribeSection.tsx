import React from 'react'

const SubscribeSection = () => {
  return (
    <section  className="w-full lg:py-32 py-14  relative">
      <div className="absolute left-0 top-0 w-full h-full bg-[url(/images/istockphoto-bg.jpg)] opacity-10"></div>

    <div className="max-w-3xl mx-auto px-4 text-center relative z-10 bg-white rounded-[32px]">
      <h2 data-aos="fade-up" data-aos-duration="1000" className="text-3xl md:text-4xl font-semibold text-primary mb-4 font-poppins">
        Subscribe to Our <span className="text-primary">Quarterly Journal</span>
      </h2>
      <p  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="lg:text-lg text-base text-gray-1000 mb-8">
        Stay updated with the latest articles, events, and insights from our institute. Receive our beautifully curated Quarterly Journal directly to your inbox.
      </p>
      <form data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="flex w-full flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          className="w-full max-w-96 px-5  py-3 rounded border border-gray-1400 focus:outline-none focus:ring-2 focus:ring-primary text-gray-1200 bg-white transition-all duration-300"
        />
        <button
          type="submit"
          className="inline-flex bg-gradient-to-l to-blue-cyan from-cyan-1000 cursor-pointer font-medium rounded text-white px-6 py-3 transition-colors duration-500 hover:from-blue-cyan hover:to-cyan-1000"
        >
          Subscribe
        </button>
      </form>
      <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="text-gray-1300 text-sm mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  </section>
  )
}

export default SubscribeSection