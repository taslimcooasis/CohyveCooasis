import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variant'; 

const GlimpseWork = () => {
  return (
    <>
      <section className='bg-[#0C0C0C] pt-20'>
        <div className="container">
          <motion.h2 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.9}}
          className="f-Nohemi-Light-BF6438cc583f70b text-[60px] text-[#FCFCD8] text-center font-semibold leading-[60px] pb-16 mx-auto max-w-[600px]">
          A glimpse of our previous work
          </motion.h2>
         <div className="max-w-[1150px] mx-auto">
         <div className='grid grid-cols-11'>
            <div className='col-span-2'>
              <img src="/images/gallery-img-1.svg" alt="" className='!h-[240px]' />
              <img src="/images/gallery-img-2.svg" alt="" />
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
         </div>
        </div>
      </section>
    </>
  )
}

export default GlimpseWork
