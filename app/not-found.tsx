import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div className='flex flex-col gap-6 items-center justify-center h-screen w-full'>
        <h1 className='text-3xl text-primary text-center font-bold leading-normal'>404  <br></br>
        This page could not be found.
        </h1>
        <Link href={'/'} className='px-6 border border-primary hover:bg-transparent hover:text-primary transition-all duration-500 py-2 bg-primary text-white font-medium' >Back to home</Link>
        </div>
  )
}

export default NotFoundPage