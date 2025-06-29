import Link from 'next/link'
import React from 'react'
import type { Metadata } from "next";
import AosClient from '@/app/components/AosClient';


export const metadata: Metadata = {
  title: " Donate | Al-Madinah Institute",
  description: "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};


const Donate = () => {
  return (
    <main className='overflow-hidden'>
      <AosClient/>
      <section className='w-full lg:py-40 py-14'>
        <div className="w-full max-w-[1440px] px-3 md:px-5 mx-auto">
          <div className="w-full"  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000">
            <h1  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000"  className='text-2xl md:text-[50px] text-center font-bold text-primary font-poppins pb-8 md:pb-11'>Ways to Donate</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-[30px]">
              <div  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className="w-full flex flex-col items-center justify-center bg-gray-50 border border-gray-200 lg:p-[55px] md:p-8 p-5 transition-all duration-300 hover:border-green-500">
                  <h2 className='text-lg md:text-[26px] text-center text-primary font-poppins font-medium'>Bank Transfer</h2>
                  <p className='text-center text-xs md:text-sm text-gray-1000 pb-2 md:pb-4'>Lillāh Donations (For Al-Madinah Institute) </p>
                  <p className='text-center text-sm md:text-base leading-loose text-gray-1500'>
                  Most Preferred Method For Al-Madinah Institute As No Transaction Fee Is Deducted From Your
                  Donation
                  </p>

                  <p className='text-sm md:text-base  font-poppins text-center text-gray-1500 mt-4 md:mt-6'>Account name: Al-Madinah Institute</p>
                  <p className='text-sm md:text-base  font-poppins text-center text-gray-1500 '>Sort code: 20-88-13
                  </p>
                  <p className='text-sm md:text-base  font-poppins text-center text-gray-1500 '>Account no:  33421732 (Lillāh only) 
                  </p>
                  <p className='text-sm md:text-base  font-poppins text-center text-gray-1500 '>Reference: Your name.
                  </p>

                  <p className='text-gray-1000 text-xs md:text-sm pt-2 md:pt-4'>In Person</p>
                  <p className='text-gray-1000 text-xs md:text-sm'>To arrange in person please call <strong>07353867127</strong></p>
              </div>

              <div  data-aos="fade-up" data-aos-delay="150" data-aos-offset="100" data-aos-duration="1000" className="w-full flex flex-col items-center justify-center bg-gray-50 border border-gray-200 lg:p-[55px] md:p-8 p-5 transition-all duration-300 hover:border-green-500">
                  <h2 className='text-lg md:text-[26px] text-center text-primary font-poppins font-medium pb-2 md:pb-4'>Standing Order
                  </h2>
                  <p className='text-center text-sm md:text-base leading-loose text-gray-1500'>
                  To make regular donations, weekly or monthly to Al-Madinah Institute you can set up a standing
                  order directly through your bank using our bank details given below.
                  </p>

                  <p className='text-sm md:text-base  font-poppins text-center text-gray-1500 mt-4 md:mt-6'>Account name: Al-Madinah Institute</p>
                  <p className='text-sm md:text-base  font-poppins text-center text-gray-1500 '>Sort code: 20-88-13
                  </p>
                  <p className='text-sm md:text-base  font-poppins text-center text-gray-1500 '>Account no: 33421732 (Lillāh only)
                  </p>
                  <p className='text-sm md:text-base  font-poppins text-center text-gray-1500 '>Reference: Your name.
                  </p>
                
              </div>

              <div  data-aos="fade-up" data-aos-delay="200" data-aos-offset="100" data-aos-duration="1000" className="w-full flex flex-col items-center justify-center text-center bg-gray-50 border border-gray-200 lg:p-[55px] md:p-8 p-5 transition-all duration-300 hover:border-green-500">
                  <h2 className='text-lg md:text-[26px] text-center text-primary font-poppins font-medium pb-2 md:pb-4'>Paypal
                  </h2>
                  <p className='text-center mb-3 md:mb-5 text-sm md:text-base leading-loose text-gray-1500'>
                  Donate via Paypal and Please tick the "share your name and email address" box when donating. Also follow the gift aid link if you qualify. JazakAllah.
                  </p>

                  <Link href={"https://pay.sumup.com/b2c/QGG3VV8R"} className='uppercase text-sm md:text-base font-poppins px-6 md:px-10 transition-all duration-300 hover:bg-primary/80 py-2.5 bg-primary text-white' >Donate</Link>

              </div>

              {/* <div className="w-full flex flex-col items-center justify-center text-center bg-gray-50 border border-gray-200 lg:p-[55px] md:p-8 p-5 transition-all duration-300 hover:border-green-500">
                  <h2 className='text-lg md:text-[26px] text-center text-primary font-poppins font-medium pb-2 md:pb-4'>Paypal Recurring Donations
                  </h2>
                  <p className='text-center mb-3 md:mb-5 text-sm md:text-base leading-loose text-gray-1500'>
                  For recurring donations via PayPal please click below.
                  </p>

                  <Link href={"https://pay.sumup.com/b2c/QGG3VV8R"} className='uppercase text-sm md:text-base font-poppins px-6 md:px-10 transition-all duration-300 hover:bg-primary/80 py-2.5 bg-primary text-white' >Read More</Link>

              </div> */}

              
              <div  data-aos="fade-up" data-aos-delay="250" data-aos-offset="100" data-aos-duration="1000" className="w-full flex flex-col items-center justify-center text-center bg-gray-50 border border-gray-200 lg:p-[55px] md:p-8 p-5 transition-all duration-300 hover:border-green-500">
                  <h2 className='text-lg md:text-[26px] text-center text-primary font-poppins font-medium pb-2 md:pb-4'>Golden Giving
                  </h2>
                  <p className='text-center mb-3 md:mb-5 text-sm md:text-base leading-loose text-gray-1500'>
                  Setup a regular donations via Golden Giving and reap reward continously. A very easy online option to donate.
                  </p>

                  <Link href={"https://givealittle.co/c/7doBUit5CUQjFkAwc9qBN7"} className='uppercase text-sm md:text-base font-poppins px-6 md:px-10 transition-all duration-300 hover:bg-primary/80 py-2.5 bg-primary text-white' >Donate</Link>

              </div>

              {/* <div className="w-full flex flex-col items-center justify-center text-center bg-gray-50 border border-gray-200 lg:p-[55px] md:p-8 p-5 transition-all duration-300 hover:border-green-500">
                  <h2 className='text-lg md:text-[26px] text-center text-primary font-poppins font-medium pb-2 md:pb-4'>Loan (30 Days Return Policy)
                  </h2>
                  <p className='text-center mb-3 md:mb-5 text-sm md:text-base leading-loose text-gray-1500'>
                  We are looking for brothers & sisters to come forward with their savings and loan it to us. This will help us pay back those individuals who need their money sooner. We have a policy that inshaAllah whoever loans us any amount then we will return this back to them with only 30 days of notice from the creditor. Please call 0203 422 5440 or email contact@al-ihsaan.org for more information or to arrange your qardh giving.
                  </p>

              </div> */}

            </div>
          </div>
        </div>
      </section>

      <section className='w-full lg:pb-24 pb-10'>
        <div className="w-full max-w-[1440px] mx-auto px-3 md:px-5">
          <div className="w-full"  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000">
            <h2  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000" className='text-2xl md:text-[43px] pb-6 md:pb-8 font-semibold font-poppins text-center text-primary'>Gift Aid <span className='text-gray-1300'>My Donation</span></h2>
              <form className='w-full space-y-4'>
                <div className="w-full"  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000">
                  <label htmlFor="name" className='text-gray-1200 font-medium font-poppins pb-1 block'>First Name</label>
                  <input type="text"
                  id='name' 
                  name='name'
                  placeholder='Name'
                  className='w-full border border-gray-400 rounded py-2 px-4' />
                </div>

                <div className="w-full"  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000">
                  <label htmlFor="Surname" className='text-gray-1200 font-medium font-poppins pb-1 block'>Surname</label>
                  <input type="text" 
                  id='Surname'
                  name='Surname'
                  placeholder='Surname'
                  className='w-full border border-gray-400 rounded py-2 px-4' />
                </div>

                <div className="w-full"  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000">
                  <label htmlFor="email" className='text-gray-1200 font-medium font-poppins pb-1 block'>Email</label>
                  <input type="email" 
                  id='email'
                  name='email'
                  required
                  placeholder='Email'
                  className='w-full border border-gray-400 rounded py-2 px-4' />
                </div>

                <div className="w-full"  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000">
                  <label htmlFor="Contact" className='text-gray-1200 font-medium font-poppins pb-1 block'>Contact</label>
                  <input type="number" 
                  id='Contact'
                  name='contact'
                  required
                  placeholder='Mobile Number'
                  className='w-full border border-gray-400 rounded py-2 px-4' />
                </div>

                <div className="w-full"  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000">
                  <label htmlFor="Address" className='text-gray-1200 font-medium font-poppins pb-1 block'>Address 1</label>
                  <input type="text" 
                  id='Address'
                  name='Address'
                  required
                  placeholder='Address 1'
                  className='w-full border border-gray-400 rounded py-2 px-4' />
                </div>

                <div className="w-full"  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000">
                  <label htmlFor="PostCode" className='text-gray-1200 font-medium font-poppins pb-1 block'>Post Code
                  </label>
                  <input type="number" 
                  id='PostCode'
                  name='post-code'
                  placeholder='Post Code'
                  className='w-full border border-gray-400 rounded py-2 px-4' />
                </div>

          
                  <div className="form-group w-full">
                    <label htmlFor="Cause" className='text-gray-1200 font-medium font-poppins pb-1 block'>Cause</label>
                    <select className="w-full border border-gray-400 rounded py-2 px-4" name="Cause" id="Cause">
                      <option selected></option>
                      <option value="Lillah - Al-Ihsaan Appeal">Lillah - Al-Ihsaan Appeal</option>
                      <option value="Sadaqatul Fitr">Sadaqatul Fitr</option>
                      <option value="Gaza - Zakah/Sadaqah">Gaza - Zakah/Sadaqah</option>
                    </select>
                  </div>

                  <div className="w-full"  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000">
                  <label htmlFor="DonationAmount" className='text-gray-1200 font-medium font-poppins pb-1 block'>Donation Amount
                  </label>
                  <input type="text" 
                  id='DonationAmount'
                  name='DonationAmount'
                  placeholder='£'
                  required
                  className='w-full border border-gray-400 rounded py-2 px-4' />
                </div>

                <div className="form-group w-full">
                    <label htmlFor="ModeofDonation" className='text-gray-1200 font-medium font-poppins pb-1 block'>Mode of Donation                    </label>
                    <select className="w-full border border-gray-400 rounded py-2 px-4" name="ModeofDonation" id="ModeofDonation">
                      <option selected></option>
                      <option value="Bank Transfer">Bank Transfer</option>
                      <option value="Cash">Cash</option>
                      <option value="Paypal">Paypal</option>
                      <option value="Card machine">Card machine</option>
                    </select>
                  </div>

                  <div className="w-full"  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000">
                  <label htmlFor="DateofDonation" className='text-gray-1200 font-medium font-poppins pb-1 block'>Date of Donation
                  </label>
                  <input type="date" 
                  id='DateofDonation'
                  name='DateofDonation'
                  placeholder='Date'
                  className='w-full border border-gray-400 rounded py-2 px-4' />
                </div>

                <div className="w-full"  data-aos="fade-up" data-aos-delay="100" data-aos-offset="100" data-aos-duration="1000">
                  <label htmlFor="checkbox" className='text-gray-1200 font-medium font-poppins'>Gift Aid My Donation</label>
                  <br/>
                  <input type="checkbox" name="checkbox" className='-mt-1' required id="checkbox" />
                  <label htmlFor="checkbox" className='ml-2 text-sm font-medium font-poppins'>I want to gift aid all donations made in the past or i make in the future to Al-Madinah Institute since 6th April 2017. I am a UK taxpayer and understand that if i pay less income tax and/or capital gains than the amount of gift aid on all my donations in that tax year it is my responsibility to pay any difference.</label>
                </div>

                <button type="submit" className='w-full py-2 px-10 bg-primary text-white text-base transition-all duration-300 hover:bg-transparent border border-primary hover:text-primary cursor-pointer'>Submit</button>


              </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Donate