'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Donate = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    contact: '',
    address: '',
    postCode: '',
    cause: '',
    donationAmount: '',
    modeOfDonation: '',
    dateOfDonation: '',
    giftAidConsent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const donationMethods = [
    {
      title: "Bank Transfer",
      subtitle: "Lillāh Donations (For Al-Madinah Institute)",
      description: "Most Preferred Method For Al-Madinah Institute As No Transaction Fee Is Deducted From Your Donation",
      details: [
        "Account name: Al-Madinah Institute",
        "Sort code: 20-88-13",
        "Account no: 33421732 (Lillāh only)",
        "Reference: Your name"
      ],
      footer: "In Person: To arrange in person please call 07353867127",
      icon: "🏦",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      title: "Standing Order",
      subtitle: "Regular Weekly or Monthly Donations",
      description: "To make regular donations, weekly or monthly to Al-Madinah Institute you can set up a standing order directly through your bank using our bank details given below.",
      details: [
        "Account name: Al-Madinah Institute",
        "Sort code: 20-88-13",
        "Account no: 33421732 (Lillāh only)",
        "Reference: Your name"
      ],
      icon: "🔄",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "PayPal",
      subtitle: "Quick & Secure Online Donation",
      description: "Donate via PayPal and Please tick the \"share your name and email address\" box when donating. Also follow the gift aid link if you qualify. JazakAllah.",
      link: "https://pay.sumup.com/b2c/QGG3VV8R",
      icon: "💳",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Golden Giving",
      subtitle: "Easy Online Regular Donations",
      description: "Setup a regular donations via Golden Giving and reap reward continuously. A very easy online option to donate.",
      link: "https://givealittle.co/c/7doBUit5CUQjFkAwc9qBN7",
      icon: "✨",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <main className='overflow-hidden bg-gradient-to-br from-green-50/30 via-white to-emerald-50/20 min-h-screen'>
      {/* Hero Section */}
      <section className='relative pt-24 pb-16 lg:pt-32 lg:pb-20'>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b5e3f]/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6'
            >
              <span className="block">Support Our</span>
              <span className="block bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] bg-clip-text text-transparent">
                Sacred Mission
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Your generous donations help us continue serving our community with Islamic education, spiritual guidance, and compassionate support
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Donation Methods Section */}
      <section className='py-16 lg:py-24'>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Ways to <span className="text-[#1b5e3f]">Donate</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the method that works best for you. Every contribution, no matter the size, makes a meaningful difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {donationMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1b5e3f]/20 h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-4xl mb-4">{method.icon}</div>
                  
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className='text-2xl font-bold text-gray-900 mb-2'>{method.title}</h3>
                    <p className='text-sm text-[#1b5e3f] font-medium mb-4'>{method.subtitle}</p>
                    <p className='text-gray-600 leading-relaxed'>{method.description}</p>
                  </div>

                  {/* Details */}
                  {method.details && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Bank Details:</h4>
                      {method.details.map((detail, idx) => {
                        const [key, value] = detail.split(': ');
                        return (
                          <p key={idx} className='text-sm text-gray-700 mb-2'>
                            <span className="font-semibold">{key}:</span> {value}
                          </p>
                        );
                      })}
                    </div>
                  )}

                  {/* Footer */}
                  {method.footer && (
                    <div className="text-sm text-gray-600 mb-6">
                      <strong>In Person:</strong> To arrange in person please call{' '}
                      <a href="tel:07353867127" className="text-[#1b5e3f] font-semibold hover:underline">
                        07353867127
                      </a>
                    </div>
                  )}

                  {/* Spacer to push button to bottom */}
                  <div className="flex-grow"></div>

                  {/* Action Button */}
                  {method.link && (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-flex items-center justify-center w-full px-8 py-4 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:from-[#134d32] hover:to-[#1b5e3f] group'
                      >
                        Donate Now
                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Aid Form Section */}
      <section className='py-16 lg:py-24 bg-gradient-to-br from-green-50/50 to-emerald-50/30'>
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
              Gift Aid <span className="text-[#1b5e3f]">My Donation</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Increase the value of your donation by 25% at no extra cost to you through Gift Aid
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className='block text-gray-700 font-semibold mb-2'>
                    First Name *
                  </label>
                  <input 
                    type="text"
                    id='firstName' 
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder='Enter your first name'
                    className='w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:border-[#1b5e3f] focus:outline-none transition-colors'
                    required
                  />
                </div>

                <div>
                  <label htmlFor="surname" className='block text-gray-700 font-semibold mb-2'>
                    Surname *
                  </label>
                  <input 
                    type="text" 
                    id='surname'
                    name='surname'
                    value={formData.surname}
                    onChange={handleInputChange}
                    placeholder='Enter your surname'
                    className='w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:border-[#1b5e3f] focus:outline-none transition-colors'
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className='block text-gray-700 font-semibold mb-2'>
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder='Enter your email'
                    className='w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:border-[#1b5e3f] focus:outline-none transition-colors'
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contact" className='block text-gray-700 font-semibold mb-2'>
                    Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    id='contact'
                    name='contact'
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder='Enter your phone number'
                    className='w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:border-[#1b5e3f] focus:outline-none transition-colors'
                    required
                  />
                </div>
              </div>

              {/* Address Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="address" className='block text-gray-700 font-semibold mb-2'>
                    Address *
                  </label>
                  <input 
                    type="text" 
                    id='address'
                    name='address'
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder='Enter your address'
                    className='w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:border-[#1b5e3f] focus:outline-none transition-colors'
                    required
                  />
                </div>

                <div>
                  <label htmlFor="postCode" className='block text-gray-700 font-semibold mb-2'>
                    Post Code
                  </label>
                  <input 
                    type="text" 
                    id='postCode'
                    name='postCode'
                    value={formData.postCode}
                    onChange={handleInputChange}
                    placeholder='Enter your post code'
                    className='w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:border-[#1b5e3f] focus:outline-none transition-colors'
                  />
                </div>
              </div>

              {/* Donation Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="cause" className='block text-gray-700 font-semibold mb-2'>
                    Cause
                  </label>
                  <select 
                    name="cause" 
                    id="cause"
                    value={formData.cause}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:border-[#1b5e3f] focus:outline-none transition-colors"
                  >
                    <option value="">Select a cause</option>
                    <option value="Lillah - Al-Madinah Institute">Lillāh - Al-Madinah Institute</option>
                    <option value="Sadaqatul Fitr">Sadaqatul Fitr</option>
                    <option value="Gaza - Zakah/Sadaqah">Gaza - Zakah/Sadaqah</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="donationAmount" className='block text-gray-700 font-semibold mb-2'>
                    Donation Amount *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold">£</span>
                    <input 
                      type="number" 
                      id='donationAmount'
                      name='donationAmount'
                      value={formData.donationAmount}
                      onChange={handleInputChange}
                      placeholder='0.00'
                      className='w-full border-2 border-gray-200 rounded-xl py-3 pl-8 pr-4 focus:border-[#1b5e3f] focus:outline-none transition-colors'
                      required
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="modeOfDonation" className='block text-gray-700 font-semibold mb-2'>
                    Mode of Donation
                  </label>
                  <select 
                    name="modeOfDonation" 
                    id="modeOfDonation"
                    value={formData.modeOfDonation}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:border-[#1b5e3f] focus:outline-none transition-colors"
                  >
                    <option value="">Select donation method</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                    <option value="Cash">Cash</option>
                    <option value="Paypal">PayPal</option>
                    <option value="Card machine">Card machine</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="dateOfDonation" className='block text-gray-700 font-semibold mb-2'>
                    Date of Donation
                  </label>
                  <input 
                    type="date" 
                    id='dateOfDonation'
                    name='dateOfDonation'
                    value={formData.dateOfDonation}
                    onChange={handleInputChange}
                    className='w-full border-2 border-gray-200 rounded-xl py-3 px-4 focus:border-[#1b5e3f] focus:outline-none transition-colors'
                  />
                </div>
              </div>

              {/* Gift Aid Consent */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <input 
                    type="checkbox" 
                    name="giftAidConsent" 
                    id="giftAidConsent"
                    checked={formData.giftAidConsent}
                    onChange={handleInputChange}
                    className="mt-1 h-5 w-5 text-[#1b5e3f] border-2 border-gray-300 rounded focus:ring-[#1b5e3f] focus:ring-2"
                    required
                  />
                  <div>
                    <label htmlFor="giftAidConsent" className='text-gray-900 font-semibold text-lg mb-2 block'>
                      Gift Aid My Donation
                    </label>
                    <p className='text-sm text-gray-700 leading-relaxed'>
                      I want to gift aid all donations made in the past or I make in the future to Al-Madinah Institute since 6th April 2017. I am a UK taxpayer and understand that if I pay less income tax and/or capital gains than the amount of gift aid on all my donations in that tax year it is my responsibility to pay any difference.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className='w-full py-4 px-8 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white font-bold text-lg rounded-xl hover:shadow-lg transition-all duration-300 hover:from-[#134d32] hover:to-[#1b5e3f]'
              >
                Submit Gift Aid Form
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

export default Donate