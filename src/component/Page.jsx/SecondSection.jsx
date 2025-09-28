import React from 'react'
import img from "../../image/image1.png"
function SecondSection() {
  return (
    <div className='bg-black container mx-auto py-10 pt-20'>
      <div className='flex  justify-between '>
        <h1 className='text-white text-[48px] font-medium leading-tight  w-1/2 pr-10' >Your Health Data is Scattered. Your Advice is Generic.</h1>
        <p className='text-gray-300 w-1/2 pl-10 pt-2'>Your wearables track steps. Your lab tests live in portals. Your doctor has notes you can't access. And every app gives cookie-cutter advice. The result? A fragmented health picture and generic guidance that fails to move the needle on longevity.</p>
      </div>
      <img src={img} className='h-96 w-full mt-10'  alt="" />
    </div>
  )
}

export default SecondSection
