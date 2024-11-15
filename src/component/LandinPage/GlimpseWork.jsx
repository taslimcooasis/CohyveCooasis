import React from 'react'

const GlimpseWork = () => {
  return (
    <>
      <section className='bg-[#0C0C0C] pt-20'>
        <div className="container">
          <h2 className="text-[60px] text-[#FCFCD8] text-center font-semibold leading-[60px] pb-16 mx-auto max-w-[700px]">
          A glimpse of our previous work
          </h2>
         <div className="max-w-[1150px] mx-auto">
         <div className='grid grid-cols-11'>
            <div className='col-span-2'>
              <img src="/images/gallery-img-1.svg" alt="" className='!h-[240px]' />
              <img src="/images/gallery-img-2.svg" alt="" className='mt-3' />
            </div>
            <div className='col-span-3 mx-4'>
              <img src="/images/gallery-img-3.svg" alt="" />
              <img src="/images/gallery-img-4.svg" alt="" className='mt-3' />
            </div>
            <div className='col-span-6'>
              <img src="/images/gallery-img-5.svg" alt="" />
            </div>
          </div>
          <div className='pt-4 grid grid-cols-11 flex gap-4'>
            <div className='col-span-3'>
            <img src="/images/gallery-img-6.svg" alt="" />
            </div>
            <div className='col-span-3'>
            <img src="/images/gallery-img-7.svg" alt="" />
            </div>
            <div className='col-span-5'>
            <img src="/images/gallery-img-8.svg" alt="" />
            </div>
          </div>
         </div>
         <div className='flex justify-center pt-16'>
        <button className='py-3 px-5 border-[1px] border-[#FCFCD80F] text-[15px] text-[#FCFCD8] rounded-[14px] bg-[#1B1B1BBA] font-semibold'>Explore more work</button>
         </div>
        </div>
      </section>
    </>
  )
}

export default GlimpseWork
