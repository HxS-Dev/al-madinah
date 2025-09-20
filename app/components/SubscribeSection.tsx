import React from 'react'

const SubscribeSection = () => {
  return (
    <section className="w-full lg:py-20 py-10 relative">
      <div className="absolute inset-0 bg-[url(/images/bg-2.png)] bg-repeat bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/30 to-orange-50/20"></div>

    <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10 bg-white rounded-3xl shadow-lg py-12 lg:py-16">
      <h2 data-aos="fade-up" data-aos-duration="1000" className="text-3xl md:text-4xl font-semibold text-primary mb-4 font-poppins">
        Subscribe to Our <span className="text-primary">Quarterly Journal</span>
      </h2>
      <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" className="lg:text-lg text-base text-gray-1000 mb-8">
        Increase your awareness and understanding of our beautiful Dīn through a selection of inspirational, thought-provoking and relevant articles.
        <br /><br />
        An essential companion for every household, and for all ages, seeking spiritual growth and guidance.
        <br /><br />
        Receive directly through your letterbox. No Fee. No difficulty
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
    </div>
  </section>
  )
}

export default SubscribeSection