import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-black-1200 pt-10 pb-4 border-t border-gray-1300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row md:justify-between md:items-start items-center pb-8 border-b border-gray-1300">
          <div className="flex flex-col items-center md:items-start w-full sm:w-auto mb-6 md:mb-0">
            <div className="w-32 sm:w-36 md:w-40">
              <Image
                src="/images/logo-2.png"
                alt="Al-Madinah Institute Logo"
                className="h-auto mb-3 object-contain invert"
                width={160}
                height={60}
                sizes="(max-width: 640px) 128px, (max-width: 768px) 140px, 160px"
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
            <p className="text-gray-1100 text-sm max-w-xs text-center md:text-left mt-2">
              Al-Madinah Institute is dedicated to providing authentic Islamic education and community services in Crawley, West Sussex.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start w-full sm:w-auto">
            <h4 className="text-white font-semibold mb-2 text-base">Quick Links</h4>
            <a href="/about-institute" className="text-gray-1100 hover:text-blue-cyan text-sm transition-colors">About Us</a>
            <a href="/donate" className="text-gray-1100 hover:text-blue-cyan text-sm transition-colors">Donate</a>
            <a href="/contact" className="text-gray-1100 hover:text-blue-cyan text-sm transition-colors">Contact</a>
            <a href="/adult-islamic-studies" className="text-gray-1100 hover:text-blue-cyan text-sm transition-colors">Adult Islamic Studies</a>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start w-full sm:w-auto">
            <h4 className="text-white font-semibold mb-2 text-base">Contact</h4>
            <p className="text-gray-1100 text-sm">Crawley, West Sussex, UK</p>
            <a href="mailto:info@al-madinah.org.uk" className="text-gray-1100 hover:text-blue-cyan text-sm transition-colors break-all">info@al-madinah.org.uk</a>
            <a href="tel:+07353867127" className="text-gray-1100 hover:text-blue-cyan text-sm transition-colors">07353867127</a>
          </div>
          <div className="flex flex-col items-center md:items-start w-full sm:w-auto mt-4 md:mt-0">
            <h4 className="text-white font-semibold mb-2 text-base">Follow Us</h4>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-1100 hover:text-blue-cyan transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.16 8.44 9.93v-7.03h-2.54v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34v7.03C18.34 21.23 22 17.09 22 12.07z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-1100 hover:text-blue-cyan transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 11.07 9c0 .34.04.67.1.99C7.72 9.8 4.84 8.13 2.98 5.7c-.37.64-.58 1.39-.58 2.19 0 1.51.77 2.85 1.95 3.63-.72-.02-1.4-.22-1.99-.55v.06c0 2.11 1.5 3.87 3.5 4.27-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.12 2.94 3.99 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-1100 hover:text-blue-cyan transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <p className="text-gray-1100 md:text-sm text-center text-xs font-nunito-sans font-medium">
            © {new Date().getFullYear()} | Al-Madinah Institute | All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  )
}

export default Footer