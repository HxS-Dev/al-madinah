import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#1b5e3f] via-[#1a5739] to-[#134d32] pt-16 pb-6 relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 pb-12 border-b border-white/20">
          
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-36 md:w-44 mb-4">
              <Image
                src="/images/logo-2.png"
                alt="Al-Madinah Institute Logo"
                className="h-auto object-contain brightness-0 invert"
                width={176}
                height={66}
                priority
              />
            </div>
            <p className="!text-white text-sm leading-relaxed text-center md:text-left" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
              Al-Madinah Institute is dedicated to providing authentic Islamic education and community services in Crawley, West Sussex.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="!text-white font-semibold mb-4 text-lg" style={{color: '#ffffff'}}>Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about-institute" className="!text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/donate" className="!text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  Donate
                </a>
              </li>
              <li>
                <a href="/contact" className="!text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/adult-islamic-studies" className="!text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  Adult Islamic Studies
                </a>
              </li>
              <li>
                <a href="/events" className="!text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  Events
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="!text-white font-semibold mb-4 text-lg" style={{color: '#ffffff'}}>Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/madrasah-al-madinah" className="!text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  Madrasah Al-Madinah
                </a>
              </li>
              <li>
                <a href="/hajj-umrah" className="!text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  Hajj & Umrah
                </a>
              </li>
              <li>
                <a href="/hifz" className="!text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  Hifz Programme
                </a>
              </li>
              <li>
                <a href="/islamic-literature" className="!text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  Islamic Literature
                </a>
              </li>
              <li>
                <a href="/schedule" className="!text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  Programme Schedule
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="!text-white font-semibold mb-4 text-lg" style={{color: '#ffffff'}}>Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="!text-white text-sm" style={{color: 'rgba(255, 255, 255, 0.9)'}}>Crawley, West Sussex, UK</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:info@al-madinah.org.uk" className="!text-white text-sm transition-colors break-all" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  info@al-madinah.org.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+447353867127" className="!text-white text-sm transition-colors" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
                  07353 867127
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="!text-white text-sm text-center md:text-left" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
            © {new Date().getFullYear()} Al-Madinah Institute. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="!text-white text-sm transition-colors" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              Privacy Policy
            </a>
            <a href="/terms" className="!text-white text-sm transition-colors" style={{color: 'rgba(255, 255, 255, 0.8)'}}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer