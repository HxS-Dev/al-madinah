'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import ToggleSearch from './ToggleSearch'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleToggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  const handleServicesToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesOpen((prev) => !prev);
  };

  return (
    <header className='w-full py-5'>
        <nav className='w-full max-w-[95%] mx-auto px-0'>
            <div className='flex items-center justify-between'>
            <Link href="/" className={`hover:opacity-80 transition-all duration-300 ${isHomePage ? 'opacity-100' : 'opacity-90'}`} >
            <img
                className="min-w-[120px] md:w-[140px] w-[120px] h-auto"
                src="/logo.png"
                alt="logo"
                />
            </Link>

            {/* Desktop Menu */}
            <ul className='hidden lg:flex items-center xl:gap-10 gap-4'>
                <li>
                    <NavLink href="/about-institute" className='text-base whitespace-nowrap px-4 font-semibold text-black-1000 hover:text-secondary transition-all duration-300' >About The Institute</NavLink>
                </li>
                <li>
                    <NavLink href="/events">Events</NavLink>
                </li>
                <li>
                <NavLink href="/articles" className='px-4'>Articles</NavLink>
                </li>
                <li className='relative group py-2'>
                    <NavLink href="/services">Services</NavLink>
                    <div className="shadow-lg rounded-lg mt-2 p-2.5 bg-white invisible z-40 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 absolute">
                        <ul className=' space-y-2'>
                            <li>
                            <NavLink href="/services" className='text-base whitespace-nowrap px-4 font-semibold text-black-1000 hover:text-secondary transition-all duration-300' >All Services</NavLink>
                            </li>
                            <li>
                            <NavLink href="/madrasah-al-madinah" className='text-base whitespace-nowrap px-4 font-semibold text-black-1000 hover:text-secondary transition-all duration-300' >Madrasah Al-Madinah</NavLink>
                            </li>
                            <li>
                            <NavLink href="/admissions" className='text-base px-4 whitespace-nowrap font-semibold text-black-1000 hover:text-secondary transition-all duration-300' >Admissions</NavLink>
                            </li>
                            <li>
                                <NavLink href="/hajj-umrah" className='text-base px-4 font-semibold text-black-1000 hover:text-secondary transition-all duration-300' >Hajj & Umrah</NavLink>
                            </li>
                            <li>
                            <NavLink href="/adult-islamic-studies" className='text-base px-4 whitespace-nowrap font-semibold text-black-1000 hover:text-secondary transition-all duration-300' >Adult Islamic Classes</NavLink>
                            </li>
                            <li>
                            <NavLink href="/islamic-literature" className='text-base px-4 whitespace-nowrap font-semibold text-black-1000 hover:text-secondary transition-all duration-300' >Islamic Literature</NavLink>
                            </li>
                            <li>
                            <NavLink href="/hifz" className='text-base px-4 whitespace-nowrap font-semibold text-black-1000 hover:text-secondary transition-all duration-300' >Hifz</NavLink>
                            </li>
                            <li>
                            <NavLink href="/revision-hifz" className='text-base px-4 whitespace-nowrap font-semibold text-black-1000 hover:text-secondary transition-all duration-300' >Hifz Revision</NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <NavLink href="/schedule">Programme Schedule</NavLink>
                </li>
                <li>
                    <NavLink href="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink href="/donate">Donate</NavLink>
                </li>
            </ul>

            {/* Hamburger Icon for Mobile */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-50"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={handleToggleMenu}
              type="button"
            >
              <span className={`block w-7 h-0.5 bg-black mb-1.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-7 h-0.5 bg-black mb-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-7 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            <div className="hidden lg:block">
              <ToggleSearch/>
            </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
              className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              onClick={closeMenu}
              aria-hidden={!menuOpen}
            />
            <div
              className={`fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg z-50 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}
              role="menu"
              aria-label="Mobile menu"
            >
              <ul className='flex flex-col gap-4 p-8'>
                <li onClick={closeMenu}>
                  <NavLink href="/about-institute" className='!text-base whitespace-nowrap font-semibold text-black-1000 hover:text-secondary transition-all duration-300'>About The Institute</NavLink>
                </li>
                <li onClick={closeMenu}>
                  <NavLink href="/events" className='!text-base'>Events</NavLink>
                </li>
                <li onClick={closeMenu}>
                  <NavLink href="/articles" className='!text-base'>Articles</NavLink>
                </li>
                <li>
                  <button
                    className='w-full flex items-center text-base justify-between font-semibold text-black-1000 focus:outline-none'
                    onClick={handleServicesToggle}
                    aria-expanded={servicesOpen}
                    aria-controls='mobile-services-submenu'
                    type='button'
                  >
                    <span>Services</span>
                    <svg className={`w-4 h-4 ml-2 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  <div
                    id='mobile-services-submenu'
                    className={`overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}`}
                  >
                    <ul className='flex flex-col gap-2 pl-2'>
                      <li onClick={closeMenu}><NavLink href="/services" className='!text-base'>All Services</NavLink></li>
                      <li onClick={closeMenu}><NavLink href="/madrasah-al-madinah" className='!text-base'>Madrasah Al-Madinah</NavLink></li>
                      <li onClick={closeMenu}><NavLink href="/admissions" className='!text-base'>Admissions</NavLink></li>
                      <li onClick={closeMenu}><NavLink href="/hajj-umrah" className='!text-base'>Hajj & Umrah</NavLink></li>
                      <li onClick={closeMenu}><NavLink href="/adult-islamic-studies" className='!text-base'>Adult Islamic Classes</NavLink></li>
                      <li onClick={closeMenu}><NavLink href="/islamic-literature" className='!text-base'>Islamic Literature</NavLink></li>
                      <li onClick={closeMenu}><NavLink href="/hifz" className='!text-base'>Hifz</NavLink></li>
                      <li onClick={closeMenu}><NavLink href="/revision-hifz" className='!text-base'>Hifz Revision</NavLink></li>
                    </ul>
                  </div>
                </li>
                <li onClick={closeMenu}>
                  <NavLink href="/schedule" className='!text-base'>Programme Schedule</NavLink>
                </li>
                <li onClick={closeMenu}>
                  <NavLink href="/contact" className='!text-base'>Contact</NavLink>
                </li>
                <li onClick={closeMenu}>
                  <NavLink href="/donate" className='!text-base'>Donate</NavLink>
                </li>
                <li className="block lg:hidden mt-4">
                  <ToggleSearch/>
                </li>
              </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header