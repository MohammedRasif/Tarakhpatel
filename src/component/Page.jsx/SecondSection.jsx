import React from 'react'
import img from "../../image/Image (31).png"
function SecondSection() {
  return (
    <div className='bg-black container mx-auto py-10 pt-20'>
      <div className='lg:flex  justify-between '>
        <h1 className='text-white lg:text-[48px] text-[28px] font-medium leading-tight text-center lg:text-start  lg:w-1/2 lg:px-0 px-5 lg:pr-10' >Your Health Data is Scattered. Your Advice is Generic.</h1>
        <p className='text-gray-300 lg:w-1/2 lg:pl-10 px lg:text-start text-center pt-2'>Your wearables track steps. Your lab tests live in portals. Your doctor has notes you can't access. And every app gives cookie-cutter advice. The result? A fragmented health picture and generic guidance that fails to move the needle on longevity.</p>
      </div>
      <img src={img} className='lg:h-96 h-52 w-full mt-10 object-cover lg:rounded-2xl'  alt="" />
    </div>
  )
}

export default SecondSection