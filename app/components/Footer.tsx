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
            <p className="text-white/80 text-sm leading-relaxed text-center md:text-left">
              Al-Madinah Institute is dedicated to providing authentic Islamic education and community services in Crawley, West Sussex.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about-institute" className="text-white/70 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="/donate" className="text-white/70 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Donate
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white/70 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
              <li>
                <a href="/adult-islamic-studies" className="text-white/70 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Adult Islamic Studies
                </a>
              </li>
              <li>
                <a href="/events" className="text-white/70 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Events
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="/madrasah-al-madinah" className="text-white/70 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Madrasah Al-Madinah
                </a>
              </li>
              <li>
                <a href="/hajj-umrah" className="text-white/70 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Hajj & Umrah
                </a>
              </li>
              <li>
                <a href="/hifz" className="text-white/70 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Hifz Programme
                </a>
              </li>
              <li>
                <a href="/islamic-literature" className="text-white/70 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Islamic Literature
                </a>
              </li>
              <li>
                <a href="/schedule" className="text-white/70 hover:text-white text-sm transition-colors duration-300 hover:translate-x-1 inline-block">
                  Programme Schedule
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span className="text-white/70 text-sm">Crawley, West Sussex, UK</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:info@al-madinah.org.uk" className="text-white/70 hover:text-white text-sm transition-colors break-all">
                  info@al-madinah.org.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+447353867127" className="text-white/70 hover:text-white text-sm transition-colors">
                  07353 867127
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <p className="text-white/80 text-sm mb-3">Follow Us</p>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook" 
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.16 8.44 9.93v-7.03h-2.54v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.23 22 17.09 22 12.07z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter" 
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 11.07 9c0 .34.04.67.1.99C7.72 9.8 4.84 8.13 2.98 5.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.85 1.95 3.63-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram" 
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Al-Madinah Institute. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer