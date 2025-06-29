import React from 'react'
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: " Admissions | Al-Madinah Institute",
  description: "Al-Madinah Institute is a UK registered charity based in Crawley, West Sussex. Discover our services, events, and resources for the community.",
};


const page = () => {
  return (
    <main className='overflow-hidden'>
        <section className='w-full lg:py-32 py-10 sm:py-14'>
            <div className="w-full max-w-[1120px] mx-auto px-3 sm:px-5">
                <div className="w-full">
                    <div className="w-full mb-6">
                    <div className="w-full bg-primary py-8 sm:py-12 md:py-16 lg:py-[50px]">
                        <h1 className='text-xl sm:text-2xl font-semibold font-poppins text-white text-center'>Submit an Admission Request</h1>
                    </div>
                    <div className="bg-gray-100 py-8 sm:py-10 px-3 xs:px-2 sm:px-4 md:px-8 lg:px-24">
                        <ul>
                            <li className='text-center pb-5'>
                                <div className="flex items-center mb-2 justify-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={22}
                                    height={22}
                                    fill="#61CE70"
                                    viewBox="0 0 256 256"
                                    >
                                    <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
                                    </svg>
                                <p className='text-sm text-black-1100'> 
                                Step 1: Submit an Admission Request 
                                   
                                </p>
                                </div>
                           
                                <p className='text-sm text-black-1100'>
                                Click the link below to send an SMS indicating your interest in admission. <br/> (This should take them to their sms page with our number in the 'To' field - 07353867127 and it
                                    should say Admission in the message section) 
                                </p>
                            </li>

                            <li className='text-center py-5 border-y border-gray-300'>
                                <div className="flex items-center mb-2 justify-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={22}
                                    height={22}
                                    fill="#E82020"
                                    viewBox="0 0 256 256"
                                    >
                                    <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
                                    </svg>
                                <p className='text-sm text-black-1100'>  Step 2: Provide Student Information
                                </p>
                                </div>
                           
                                <p className='text-sm text-black-1100'>Our admissions team will contact you to request your child's details
                                </p>
                            </li>

                            <li className='text-center py-5 border-b border-gray-300'>
                                <div className="flex items-center mb-2 justify-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={22}
                                    height={22}
                                    fill="#000"
                                    viewBox="0 0 256 256"
                                    >
                                    <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
                                    </svg>
                                <p className='text-sm text-black-1100'> Step 3: Allocation of Placement
                                </p>
                                </div>
                           
                                <p className='text-sm text-black-1100 mb-2'>Your child's place will be offered based on our official Admissions Policy.
                                </p>
                               
                            </li>

                        </ul>

                    </div>
                    </div>

                    {/* <div className="w-full mb-6">
                    <div className="w-full bg-primary py-[50px]">
                        <h2 className='text-2xl font-semibold font-poppins text-white text-center'>In Year Admissions
                        </h2>
                    </div>
                    <div className="bg-gray-100 py-10 px-24">
                        <ul>
                            <li className='text-center pb-5'>
                                <div className="flex items-center mb-2 justify-center gap-2">
                                <svg width={18} fill='#fe2d2d' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
                                </svg>

                                <p className='text-sm text-black-1100'>  Current Foundational Class (Year 1)
                                </p>
                                </div>
                           
                                <p className='text-sm text-red-500'>Currently Full - Not Taking Anymore
                                </p>
                            </li>

                            <li className='text-center py-5 border-t border-gray-300'>
                                <div className="flex items-center mb-1 justify-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="#6EC1E4"
                                    viewBox="0 0 256 256"
                                    >
                                    <path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
                                    </svg>
                                <p className='text-sm text-black-1100 '>Application Requests For Year 2
                                </p>
                                </div>
                           
                                <p className='text-sm text-black-1100 mb-1.5 leading-[200%]'>& Above Can Be Submitted (Via Text <br></br>
                                    Message) Throughout The Year.
                                </p>
                                <p className='text-sm text-black-1100'>Please See The "How To Apply" Section Below
                                </p>
                            </li>
                         
                        </ul>

                    </div>
                    </div> */}
                    <div className="w-full bg-primary py-8 sm:py-12 md:py-16 lg:py-[50px]">
                        <h2 className='text-xl sm:text-2xl font-semibold font-poppins text-white text-center'>To Apply Please Follow The Following Three Steps
                        </h2>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 mt-3">
                        <div className="bg-secondary text-base sm:text-lg md:text-xl text-white leading-none text-center py-2 px-3 sm:px-4 rounded-lg">
                            <p>Click Here to Send an SMS
                            (Admission)</p>
                        </div>

                        <div className="bg-secondary text-base sm:text-lg md:text-xl text-white leading-none text-center py-2 px-3 sm:px-4 rounded-lg">
                            <p>Applicant Will Receive Child's Info Request From Admin
                            </p>
                        </div>

                        <div className="bg-secondary text-base sm:text-lg md:text-xl text-white leading-none text-center py-2 px-3 sm:px-4 rounded-lg">
                            <p>Child's Space Will Be Allocated Based on Admissions Policy</p>
                        </div>
                    </div>
                    <div className="text-center flex items-center justify-center my-6">
                        <a target='_blank' href='' className='flex items-center gap-2 rounded transition-all duration-300 hover:bg-green-1000 cursor-pointer animate-buzz bg-yellow-1000 py-2 px-4 sm:px-6 text-sm sm:text-base'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            fill="#000000"
                            viewBox="0 0 256 256"
                            >
                            <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34Zm-56,83.32-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L120,164.69V120a8,8,0,0,1,16,0v44.69l10.34-10.35a8,8,0,0,1,11.32,11.32ZM152,88V44l44,44Z" />
                            </svg>

                            Admission Policy</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default page