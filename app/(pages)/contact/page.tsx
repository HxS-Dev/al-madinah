import React from 'react'
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: " Contact Us | Al-Madinah Institute",
  description: "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};


const Contact = () => {
  return (
    <main className='overflow-hidden'>
      <section className='w-full py-16 md:py-32'>
        <div className="w-full max-w-[1440px] mx-auto px-3 md:px-5">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5">
            <div className="mb-8 md:mb-0">
              <p className='text-xs text-black font-medium tracking-[4px] uppercase'>Contact</p>
              <h1 className='text-2xl md:text-[65px] font-bold text-primary leading-[110%] font-poppins pb-3 tracking-tight'>For any enquiries please email
              </h1>
              <a className='text-lg md:text-[23px] font-medium text-secondary opacity-50 transition-all duration-300 hover:opacity-100 break-all' href="mailto:info@al-madinah.org.uk">info@al-madinah.org.uk</a>
            </div>

            <div className="w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40070.21158094331!2d-0.1830372!3d51.1197467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875ed930f13ff35%3A0x12f9939e52364adb!2sCrawley%2C%20UK!5e0!3m2!1sen!2s!4v1751021401858!5m2!1sen!2s"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>
          </div>

        </div>
      </section>

      <section className='w-full pb-10 md:pb-14 lg:pb-40'>
        <div className="w-full max-w-[1440px] px-3 md:px-5 mx-auto">
          <div className="w-full flex flex-col md:flex-row gap-10 md:gap-20">
            <div className="w-full md:w-1/3 pt-8 md:pt-12 mb-8 md:mb-0">
            <h3 className='text-xl md:text-[25px] text-primary font-bold mb-2'>Address</h3>
            <p className='text-base text-gray-1000 mb-1'>Al-Madinah Institute
            </p>
            <p className='text-base text-gray-1000 mb-8'>Crawley, West Sussex.</p>

            <h3 className='text-xl md:text-[25px] text-primary font-bold mb-2'>Opening Hours</h3>
            <p className='text-base text-gray-1000 mb-1'>10:00 AM – 22.00 PM
            </p>
            <p className='text-base text-gray-1000 mb-8'>Monday – Sunday</p>

            <h3 className='text-xl md:text-[25px] text-primary font-bold mb-2'>Contact us</h3>
            <p className='text-base text-gray-1000 mb-1'><strong>Phone:</strong> 07353867127
            </p>
            <p className='text-base text-gray-1000'><strong>Email Address: </strong> 
             info@al-madinah.org.uk</p>

            </div>
            <div className="w-full md:w-2/3">

            <h2 className='text-xl md:text-[30px] font-bold text-primary font-poppins text-center pb-4'>Contact Form</h2>
            <form className='w-full space-y-4 md:space-y-6'>
              <input type="text" 
              name='name'
               placeholder='Name'
              className='w-full border border-gray-400 rounded py-2 px-4' />

                <input type="email" 
                name='email'
                required
               placeholder='Email'
              className='w-full border border-gray-400 rounded py-2 px-4' />

              <textarea name="message" id="message"
               className='h-[120px] md:h-[150px] border border-gray-400 rounded py-2 px-4 w-full'
               placeholder='Message'
              ></textarea>

              <button type='submit' className='bg-primary text-white text-base font-medium w-full py-2 rounded transition-all duration-300 hover:bg-transparent border border-primary hover:text-primary cursor-pointer'>Send</button>

            </form>
            
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact