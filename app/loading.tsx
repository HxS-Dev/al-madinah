import React from 'react'

const loading = () => {
  return (
    <div className='flex fixed top-0 left-0 z-50 bg-white items-center justify-center w-full h-screen text-3xl text-primary font-semibold text-center'>
      <div className="flex flex-col items-center gap-6">
        <span className="relative inline-block w-16 h-16">
          <span className="absolute inset-0 w-full h-full border-4 border-primary border-t-transparent rounded-full animate-spin"></span>
          <span className="absolute inset-2 w-12 h-12 border-4 border-primary border-b-transparent rounded-full animate-spin-reverse"></span>
        </span>
      </div>
    </div>
  )
}


export default loading