'use client';
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { sanityClient } from '@/app/lib/sanity';
import { islamicLiteratureQuery } from '@/app/lib/queries';
import { urlFor } from '@/app/lib/imageBuilder';
import SubscribeSection from '@/app/components/SubscribeSection';
import { GlassCard } from '@/app/components/GlassCard';
import { FadeInUp } from '@/app/components/AnimationUtils';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';

interface Category {
  _id: string;
  title: string;
  order: number;
}

interface Publication {
  _id: string;
  title: string;
  category?: Category;
  coverImage?: {
    asset: { _id: string; url: string };
    alt?: string;
  };
  link: string;
  note?: string;
  order: number;
}

interface GroupedCategory {
  category: Category;
  publications: Publication[];
}

interface BookRow {
  bookTitle: string;
  quantity: number;
}

function generateCaptcha() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { question: `What is ${a} + ${b}?`, answer: a + b };
}

const inputClass =
  'w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[#1b5e3f] focus:ring-2 focus:ring-[#1b5e3f]/20 outline-none transition-all duration-200';

const BookTitleCombobox = ({
  value,
  onChange,
  titles,
  required,
}: {
  value: string;
  onChange: (val: string) => void;
  titles: string[];
  required?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (!value) return titles;
    const lower = value.toLowerCase();
    return titles.filter((t) => t.toLowerCase().includes(lower));
  }, [value, titles]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <input
        type="text"
        required={required}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        className={inputClass}
        placeholder="Search or type book title"
        autoComplete="off"
      />
      {open && filtered.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg">
          {filtered.map((title) => (
            <li
              key={title}
              onMouseDown={() => {
                onChange(title);
                setOpen(false);
              }}
              className="px-4 py-2 text-sm text-gray-800 hover:bg-[#1b5e3f]/10 cursor-pointer"
            >
              {title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const IslamicLiteraturePage = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [showModal, setShowModal] = useState(false);

  // Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [cityTown, setCityTown] = useState('');
  const [county, setCounty] = useState('');
  const [postCode, setPostCode] = useState('');
  const [books, setBooks] = useState<BookRow[]>([{ bookTitle: '', quantity: 1 }]);
  const [honeypot, setHoneypot] = useState('');
  const [captcha, setCaptcha] = useState(generateCaptcha);
  const [captchaInput, setCaptchaInput] = useState('');
  const [loadedAt, setLoadedAt] = useState(0);

  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pubs = await sanityClient.fetch(islamicLiteratureQuery);
        setPublications(pubs);
      } catch (error) {
        console.error('Error fetching islamic literature:', error);
      }
    };
    fetchData();
  }, []);

  const grouped = useMemo(() => {
    const map = new Map<string, GroupedCategory>();
    for (const pub of publications) {
      const catId = pub.category?._id || 'uncategorised';
      const existing = map.get(catId);
      if (existing) {
        existing.publications.push(pub);
      } else {
        map.set(catId, {
          category: pub.category || { _id: 'uncategorised', title: 'Other', order: 999 },
          publications: [pub],
        });
      }
    }
    return Array.from(map.values()).sort((a, b) => a.category.order - b.category.order);
  }, [publications]);

  const allTitles = useMemo(
    () => publications.map((p) => p.title).filter(Boolean),
    [publications]
  );

  const openModal = useCallback(() => {
    setFullName('');
    setEmail('');
    setMobile('');
    setStreetAddress('');
    setCityTown('');
    setCounty('');
    setPostCode('');
    setBooks([{ bookTitle: '', quantity: 1 }]);
    setHoneypot('');
    setCaptcha(generateCaptcha());
    setCaptchaInput('');
    setLoadedAt(Date.now());
    setSubmitStatus('idle');
    setErrorMessage('');
    setShowModal(true);
  }, []);

  const addBook = () => setBooks((prev) => [...prev, { bookTitle: '', quantity: 1 }]);

  const removeBook = (index: number) =>
    setBooks((prev) => prev.filter((_, i) => i !== index));

  const updateBook = (index: number, field: keyof BookRow, value: string | number) =>
    setBooks((prev) => prev.map((b, i) => (i === index ? { ...b, [field]: value } : b)));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (parseInt(captchaInput) !== captcha.answer) {
      setErrorMessage('Incorrect answer to the security question. Please try again.');
      setCaptcha(generateCaptcha());
      setCaptchaInput('');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          mobile,
          streetAddress,
          cityTown,
          county,
          postCode,
          books,
          captchaQuestion: captcha.question,
          captchaAnswer: captchaInput,
          website: honeypot,
          loadedAt,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.error || 'Something went wrong.');
        setSubmitting(false);
        return;
      }
      setSubmitStatus('success');
    } catch {
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    } finally {
      setSubmitting(false);
    }
  };

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
            className="text-center mb-12"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6'
            >
              <span className="block bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] bg-clip-text text-transparent">
                Islamic Literature
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Download comprehensive Islamic publications and resources
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Publications by Category */}
      {grouped.length > 0 ? (
        grouped.map((group, groupIndex) => (
          <section
            key={group.category._id}
            className={`py-16 lg:py-24 ${groupIndex % 2 === 0 ? 'bg-gradient-to-b from-white to-green-50/30' : ''}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <FadeInUp>
                <div className="text-center mb-12">
                  <h2 className='text-3xl lg:text-5xl font-bold text-gray-900 mb-6'>
                    {group.category.title}
                  </h2>
                  <div className="flex justify-center">
                    <div className="w-24 h-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] rounded-full"></div>
                  </div>
                </div>
              </FadeInUp>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {group.publications.map((pub, index) => (
                  <motion.div
                    key={pub._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard className="p-3 h-full hover:shadow-xl transition-all duration-300 group">
                      <div className="relative mb-2 overflow-hidden rounded-lg">
                        <Image
                          src={pub.coverImage ? urlFor(pub.coverImage).width(200).height(280).url() : `https://image.thum.io/get/width/200/crop/280/${pub.link}`}
                          alt={pub.coverImage?.alt || pub.title}
                          width={200}
                          height={280}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">{pub.title}</h3>
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white font-medium text-xs px-3 py-2 rounded-lg hover:shadow-lg transition-all duration-300 w-full"
                      >
                        <span>📥</span>
                        <span>{pub.note ? pub.note : 'Download'}</span>
                      </a>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))
      ) : (
        <section className='py-16 lg:py-24 bg-gradient-to-b from-white to-green-50/30'>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center py-12">
              <GlassCard className="py-12 px-8 max-w-md mx-auto">
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-xl text-[#1b5e3f] mb-2" style={{ fontFamily: "'Scheherazade New', serif" }}>
                  InshāAllāh coming soon
                </h3>
                <p className="text-gray-600 text-sm">Publications will be available shortly</p>
              </GlassCard>
            </div>
          </div>
        </section>
      )}

      {/* How to Order Button */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeInUp>
            <p className="text-lg text-gray-600 mb-6">
              Want a printed copy? Order your books below and we&apos;ll deliver them to your door.
            </p>
            <motion.button
              onClick={openModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white font-semibold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              How to Order
            </motion.button>
          </FadeInUp>
        </div>
      </section>

      {/* Order Modal */}
      <AnimatePresence>
        {showModal && (
          <Dialog open={showModal} onClose={() => setShowModal(false)} className="relative z-50">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
            />
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-start justify-center p-4 pt-12 sm:pt-20">
                <DialogPanel
                  as={motion.div}
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.97 }}
                  className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                  {/* Modal Header */}
                  <div className="bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] px-6 py-5 flex items-center justify-between">
                    <DialogTitle className="text-xl font-bold text-white">
                      Order Books
                    </DialogTitle>
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-white/80 hover:text-white transition-colors text-2xl leading-none"
                    >
                      &times;
                    </button>
                  </div>

                  {submitStatus === 'success' ? (
                    <div className="p-8 text-center">
                      <div className="text-5xl mb-4">&#10003;</div>
                      <h3 className="text-2xl font-bold text-[#1b5e3f] mb-2">Order Submitted</h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for your order. We will be in touch shortly via email.
                      </p>
                      <button
                        onClick={() => setShowModal(false)}
                        className="bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                      >
                        Close
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                      {/* Honeypot — hidden from humans */}
                      <div className="absolute" style={{ left: '-9999px', position: 'absolute' }} aria-hidden="true">
                        <label>
                          Website
                          <input
                            type="text"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            value={honeypot}
                            onChange={(e) => setHoneypot(e.target.value)}
                          />
                        </label>
                      </div>

                      {/* Personal Details */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Your Details</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={fullName}
                              onChange={(e) => setFullName(e.target.value)}
                              className={inputClass}
                              placeholder="e.g. Muhammad Ali"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Email <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className={inputClass}
                              placeholder="you@example.com"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Mobile Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              required
                              value={mobile}
                              onChange={(e) => setMobile(e.target.value)}
                              className={inputClass}
                              placeholder="07xxx xxxxxx"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Delivery Details */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Where should we deliver?</h4>
                        <div className="border border-gray-200 rounded-xl p-4 space-y-4 bg-gray-50/50">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Street Address <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={streetAddress}
                              onChange={(e) => setStreetAddress(e.target.value)}
                              className={inputClass}
                              placeholder="e.g. 10 Downing Street"
                            />
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                City / Town <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                required
                                value={cityTown}
                                onChange={(e) => setCityTown(e.target.value)}
                                className={inputClass}
                                placeholder="e.g. Crawley"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">County</label>
                              <input
                                type="text"
                                value={county}
                                onChange={(e) => setCounty(e.target.value)}
                                className={inputClass}
                                placeholder="e.g. West Sussex"
                              />
                            </div>
                          </div>
                          <div className="sm:w-1/2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Post Code <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              required
                              value={postCode}
                              onChange={(e) => setPostCode(e.target.value)}
                              className={inputClass}
                              placeholder="e.g. RH10 1AA"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Books */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Books</h4>
                        <div className="space-y-3">
                          {books.map((book, index) => (
                            <div key={index} className="flex items-end gap-3">
                              <div className="flex-1">
                                {index === 0 && (
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Book Title <span className="text-red-500">*</span>
                                  </label>
                                )}
                                <BookTitleCombobox
                                  value={book.bookTitle}
                                  onChange={(val) => updateBook(index, 'bookTitle', val)}
                                  titles={allTitles}
                                  required
                                />
                              </div>
                              <div className="w-20">
                                {index === 0 && (
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Qty <span className="text-red-500">*</span>
                                  </label>
                                )}
                                <input
                                  type="number"
                                  required
                                  min={1}
                                  value={book.quantity}
                                  onChange={(e) => updateBook(index, 'quantity', parseInt(e.target.value) || 1)}
                                  className={inputClass + ' text-center'}
                                />
                              </div>
                              {books.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeBook(index)}
                                  className="text-red-400 hover:text-red-600 transition-colors pb-2.5 text-xl leading-none"
                                  title="Remove book"
                                >
                                  &times;
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                        <button
                          type="button"
                          onClick={addBook}
                          className="mt-3 text-sm font-medium text-[#1b5e3f] hover:text-[#237a4f] transition-colors flex items-center gap-1"
                        >
                          <span className="text-lg leading-none">+</span> Add Another Book
                        </button>
                      </div>

                      {/* Captcha */}
                      <div className="border border-gray-200 rounded-xl p-4 bg-amber-50/50">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Security Check: <span className="font-bold text-gray-900">{captcha.question}</span>
                        </label>
                        <input
                          type="text"
                          inputMode="numeric"
                          required
                          value={captchaInput}
                          onChange={(e) => setCaptchaInput(e.target.value)}
                          className={inputClass + ' max-w-[120px]'}
                          placeholder="Your answer"
                        />
                      </div>

                      {/* Error */}
                      {errorMessage && (
                        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3">
                          {errorMessage}
                        </div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-gradient-to-r from-[#1b5e3f] to-[#237a4f] text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {submitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          'Submit Order'
                        )}
                      </button>
                    </form>
                  )}
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>

      <SubscribeSection />
    </main>
  );
};

export default IslamicLiteraturePage;
