'use client';
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleToggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };
  const handleServicesToggle = () => {
    setServicesOpen((prev) => !prev);
  };

  return (
    <>
      <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white/80 backdrop-blur-sm py-5'
      }`}>
          <nav className='w-full max-w-7xl mx-auto px-6'>
              <div className='flex items-center justify-between'>
              <Link href="/" className={`hover:opacity-80 transition-all duration-300 mr-8 lg:mr-16 ${isHomePage ? 'opacity-100' : 'opacity-90'}`} >
              <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="min-w-[120px] md:w-[140px] w-[120px] h-auto"
                  src="/logo.png"
                  alt="logo"
                  />
              </Link>

              {/* Desktop Menu */}
              <ul className='hidden lg:flex items-center xl:gap-8 gap-4'>
                  <li>
                      <NavLink href="/about-institute" className='text-base whitespace-nowrap px-4 font-medium text-gray-700 hover:text-[#1b5e3f] transition-all duration-300 relative group' >
                          About The Institute
                          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#1b5e3f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </NavLink>
                  </li>
                  <li>
                      <NavLink href="/events" className='text-base whitespace-nowrap px-4 font-medium text-gray-700 hover:text-[#1b5e3f] transition-all duration-300 relative group'>
                          Events
                          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#1b5e3f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </NavLink>
                  </li>
                  <li>
                      <NavLink href="/articles" className='text-base whitespace-nowrap px-4 font-medium text-gray-700 hover:text-[#1b5e3f] transition-all duration-300 relative group'>
                          Articles
                          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#1b5e3f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </NavLink>
                  </li>
                  <li className='relative group py-2'>
                      <button className='text-base whitespace-nowrap px-4 font-medium text-gray-700 hover:text-[#1b5e3f] transition-all duration-300 flex items-center gap-1'>
                          Services
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 invisible opacity-0 transform -translate-y-2 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                          <ul className='py-2'>
                              <li>
                                  <NavLink href="/services" className='block px-6 py-3 text-base font-medium text-gray-700 hover:text-[#1b5e3f] hover:bg-green-50 transition-all duration-300'>
                                      All Services
                                  </NavLink>
                              </li>
                              <li>
                                  <NavLink href="/madrasah-al-madinah" className='block px-6 py-3 text-base font-medium text-gray-700 hover:text-[#1b5e3f] hover:bg-green-50 transition-all duration-300'>
                                      Madrasah Al-Madinah
                                  </NavLink>
                              </li>
                              <li>
                                  <NavLink href="/admissions" className='block px-6 py-3 text-base font-medium text-gray-700 hover:text-[#1b5e3f] hover:bg-green-50 transition-all duration-300'>
                                      Admissions
                                  </NavLink>
                              </li>
                              <li>
                                  <NavLink href="/hajj-umrah" className='block px-6 py-3 text-base font-medium text-gray-700 hover:text-[#1b5e3f] hover:bg-green-50 transition-all duration-300'>
                                      Hajj & Umrah
                                  </NavLink>
                              </li>
                              <li>
                                  <NavLink href="/adult-islamic-studies" className='block px-6 py-3 text-base font-medium text-gray-700 hover:text-[#1b5e3f] hover:bg-green-50 transition-all duration-300'>
                                      Adult Islamic Classes
                                  </NavLink>
                              </li>
                              <li>
                                  <NavLink href="/islamic-literature" className='block px-6 py-3 text-base font-medium text-gray-700 hover:text-[#1b5e3f] hover:bg-green-50 transition-all duration-300'>
                                      Islamic Literature
                                  </NavLink>
                              </li>
                              <li>
                                  <NavLink href="/hifz" className='block px-6 py-3 text-base font-medium text-gray-700 hover:text-[#1b5e3f] hover:bg-green-50 transition-all duration-300'>
                                      Hifz
                                  </NavLink>
                              </li>
                              <li>
                                  <NavLink href="/revision-hifz" className='block px-6 py-3 text-base font-medium text-gray-700 hover:text-[#1b5e3f] hover:bg-green-50 transition-all duration-300'>
                                      Hifz Revision
                                  </NavLink>
                              </li>
                          </ul>
                      </div>
                  </li>
                  <li>
                      <NavLink href="/schedule" className='text-base whitespace-nowrap px-4 font-medium text-gray-700 hover:text-[#1b5e3f] transition-all duration-300 relative group'>
                          Programme Schedule
                          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#1b5e3f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </NavLink>
                  </li>
                  <li>
                      <NavLink href="/contact" className='text-base whitespace-nowrap px-4 font-medium text-gray-700 hover:text-[#1b5e3f] transition-all duration-300 relative group'>
                          Contact
                          <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#1b5e3f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </NavLink>
                  </li>
                  <li>
                      <Link href="/donate" className='ml-4 px-6 py-2.5 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white rounded-full font-semibold text-base hover:shadow-lg hover:scale-105 transition-all duration-300'>
                          Donate
                      </Link>
                  </li>
              </ul>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative w-12 h-12 flex flex-col justify-center items-center focus:outline-none z-[60] hover:bg-gray-100 rounded-lg transition-colors"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={handleToggleMenu}
                type="button"
              >
                <span className={`block w-6 h-0.5 bg-[#1b5e3f] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : 'mb-1.5'}`} />
                <span className={`block w-6 h-0.5 bg-[#1b5e3f] transition-all duration-300 ${menuOpen ? 'opacity-0' : 'mb-1.5'}`} />
                <span className={`block w-6 h-0.5 bg-[#1b5e3f] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </button>

              </div>
          </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/70 cursor-pointer"
            onClick={closeMenu}
          />
          {/* Side Drawer */}
          <div 
            className={`ml-auto relative h-full w-4/5 max-w-xs bg-white shadow-2xl flex flex-col overflow-y-auto transition-transform duration-300 ease-out ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <img src="/logo.png" alt="logo" className="w-20" />
                <button
                  onClick={closeMenu}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="space-y-2 flex-1">
                <Link href="/about-institute" onClick={closeMenu} className="block py-3 px-4 text-gray-700 hover:text-[#1b5e3f] hover:bg-green-50 rounded-lg transition-all duration-300">
                  About The Institute
                </Link>
                <Link href="/events" onClick={closeMenu} className="block py-3 px-4 text-gray-700 hover:text-[#1b5e3f] hover:bg-green-50 rounded-lg transition-all duration-300">
                  Events
                </Link>
                <Link href="/articles" onClick={closeMenu} className="block py-3 px-4 text-gray-700 hover:text-[#1b5e3f] hover:bg-green-50 rounded-lg transition-all duration-300">
                  Articles
                </Link>
                <div>
                  <button
                    className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:text-[#1b5e3f] hover:bg-green-50 rounded-lg transition-all duration-300 focus:outline-none"
                    onClick={handleServicesToggle}
                    aria-expanded={servicesOpen}
                    type="button"
                  >
                    <span>Services</span>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      servicesOpen ? 'max-h-[1000px] opacity-100 mt-2 ml-2' : 'max-h-0 opacity-0'
                    } bg-gray-50 rounded-lg`}
                  >
                    <div className="p-2">
                      <Link href="/services" onClick={closeMenu} className="block py-2 px-3 text-sm text-gray-600 hover:text-[#1b5e3f] hover:bg-white rounded transition-all duration-300">
                        All Services
                      </Link>
                      <Link href="/madrasah-al-madinah" onClick={closeMenu} className="block py-2 px-3 text-sm text-gray-600 hover:text-[#1b5e3f] hover:bg-white rounded transition-all duration-300">
                        Madrasah Al-Madinah
                      </Link>
                      <Link href="/admissions" onClick={closeMenu} className="block py-2 px-3 text-sm text-gray-600 hover:text-[#1b5e3f] hover:bg-white rounded transition-all duration-300">
                        Admissions
                      </Link>
                      <Link href="/hajj-umrah" onClick={closeMenu} className="block py-2 px-3 text-sm text-gray-600 hover:text-[#1b5e3f] hover:bg-white rounded transition-all duration-300">
                        Hajj & Umrah
                      </Link>
                      <Link href="/adult-islamic-studies" onClick={closeMenu} className="block py-2 px-3 text-sm text-gray-600 hover:text-[#1b5e3f] hover:bg-white rounded transition-all duration-300">
                        Adult Islamic Classes
                      </Link>
                      <Link href="/islamic-literature" onClick={closeMenu} className="block py-2 px-3 text-sm text-gray-600 hover:text-[#1b5e3f] hover:bg-white rounded transition-all duration-300">
                        Islamic Literature
                      </Link>
                      <Link href="/hifz" onClick={closeMenu} className="block py-2 px-3 text-sm text-gray-600 hover:text-[#1b5e3f] hover:bg-white rounded transition-all duration-300">
                        Hifz
                      </Link>
                      <Link href="/revision-hifz" onClick={closeMenu} className="block py-2 px-3 text-sm text-gray-600 hover:text-[#1b5e3f] hover:bg-white rounded transition-all duration-300">
                        Hifz Revision
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href="/schedule" onClick={closeMenu} className="block py-3 px-4 text-gray-700 hover:text-[#1b5e3f] hover:bg-green-50 rounded-lg transition-all duration-300">
                  Programme Schedule
                </Link>
                <Link href="/contact" onClick={closeMenu} className="block py-3 px-4 text-gray-700 hover:text-[#1b5e3f] hover:bg-green-50 rounded-lg transition-all duration-300">
                  Contact
                </Link>
                <div className="pt-4">
                  <Link href="/donate" onClick={closeMenu} className="block w-full text-center py-3 px-6 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                    Donate
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header