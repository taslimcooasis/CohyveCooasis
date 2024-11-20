import React from 'react';
import { RainbowButton } from "../ui/rainbow-button";

const FutureOfDesign = () => {
  return (
    <>
      <section className='bg-[#0C0C0C] pt-24 relative'>
        <div className="container">
          <div>
            <img src="/images/plug-bg.svg" alt="" className='mx-auto max-w-[380px]' />
          </div>
          <div className='absolute top-[230px] left-[27%]'>
            <h2 className="f-Nohemi-Light-BF6438cc583f70b text-[50px] text-[#FCFCD8] text-center font-bold leading-[50px] pb-16 mx-auto max-w-[600px]">
              Plug into the future of design today !
            </h2>
            <div className='flex justify-center'>
            <RainbowButton className='f-Nohemi-Light-BF6438cc583f70b pb-2 pt-3 px-4 border-[1px] border-[#FCFCD80F] text-[14px] text-[#FCFCD8] rounded-[14px] bg-[#1B1B1BBA] font-semibold mt-10'>Book Demo Now</RainbowButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FutureOfDesign
