import React from 'react'
import 'remixicon/fonts/remixicon.css'

const CenterFlex = () => {
  return (
    <div className='relative z-10 flex items-end justify-between w-11/12 text-white mt-80'>
      <div className='flex items-center justify-center gap-5 px-10 py-3 pl-10 bg-black rounded-e-full'>
        <h2 className='text-xl leading-none'>Located <br /> in the <br /> India</h2>
        <div className='flex items-center justify-center w-16 h-16 bg-gray-400 rounded-full'>
            
        <i className="text-4xl font-thin ri-global-line rotate-12"></i>
        </div>
      </div>
      <div className='flex flex-col gap-20 text-4xl'>
      <i className="text-5xl ri-arrow-right-down-line"></i>
      <h1 className='text-5xl font-normal leading-normal'>FreeLance <br /> Designer and Developer</h1>
      </div>
    </div>
  )
}

export default CenterFlex
