import React from 'react';
import { RainbowButton } from "../ui/rainbow-button";

const JoinOurEcosystem = () => {
  return (
    <>
    <section className='bg-[#0C0C0C] pt-24 pb-8'>
      <div className="container bg-[#30303066] rounded-[30px] max-w-[1100px] !relative">
        <div className='relative'>
        <div>
          <img src="/images/bg-gred.svg" alt="" className='absolute rounded-bl-[30px] top-[-6px]' />
        </div>
        <div className='relative'>
          <img src="/images/bg-hunt.svg" alt="" className='absolute left-[240px] max-w-[640px] opacity-50' />
        </div>
        </div>
        <div className='py-12 relative z-20 rounded-[30px]'>
          <img src="/images/product-hunt.svg" alt="" className='mx-auto cursor-pointer' />
          <h1 className='f-Nohemi-Light-BF6438cc583f70b text-[#FCFCD8] text-[60px] leading-[60px] text-center font-normal max-w-[600px] mx-auto my-8'>Are you a designer?
          join our ecosystem of design</h1>
          <p className='mx-auto text-[20px] text-[#FCFCD880] leading-[32px] font-light text-center max-w-[480px]'>Get access to the powerhouse of design system where you <span className='text-[#FCFCD8]'>earn, learn</span> and <span className='text-[#FCFCD8]'>grow</span> together.</p>
          <div className="flex justify-center">
          <RainbowButton
          className="f-Nohemi-Light-BF6438cc583f70b mt-14 pb-[8px] pt-[14px] px-5 border-[1px] border-[#FCFCD80F] text-[18px] md:text-[18px] text-[#0C0C0C] rounded-[14px] bg-[#FCFCD8] hover:border-[1px] hover:border-gray-600 hover:bg-[#1F1F1FEB] hover:text-[#FCFCD8] duration-300"
          >Join our community
          </RainbowButton>
           </div> 
            <div>
              <p className='f-Nohemi-Light-BF6438cc583f70b text-[18px] text-[#FCFCD8] leading-[16px] font-normal text-center mt-8'>
              +10k people joined
              </p>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default JoinOurEcosystem
