import React from 'react';
import { RainbowButton } from "../ui/rainbow-button";
import { TextHoverEffect } from "../ui/text-hover-effect";
import 'flowbite';

const FooterFrequently = () => {
  

  return (
    <>
      <section className="bg-col-footer pt-20 pb-5">
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
        <footer className="pt-20">
          <div className="container">
            <div className='ml-0 lg:ml-[-28px]'>
              <TextHoverEffect text="cohyve" />
            </div>

            {/* <img src="/images/cohyve-footer.svg" alt="" /> */}
            <div className="flex justify-between items-center">
              <div>
                <p className="f-Nohemi-Light-BF6438cc583f70b text-[15px] text-[#FFFFFF40] leading-[14px] font-light flex items-center">
                  Proudly Made in India{' '}
                  <span className="ml-2 mb-[2px]">
                    <img src="/images/full-sentence.svg" alt="" />
                  </span>
                </p>
                <p className="f-Nohemi-Light-BF6438cc583f70b text-[15px] text-[#FFFFFF40] leading-[14px] font-light mt-3">
                  All Rights & Wrongs Reserved , 2024
                </p>
              </div>
              <div>
                <p className="f-Nohemi-Light-BF6438cc583f70b text-[15px] text-[#FFFFFF40] leading-[14px] font-light">
                  Contact | For Creator | For Business
                </p>
                <p className="f-Nohemi-Light-BF6438cc583f70b text-[15px] text-[#FFFFFF40] leading-[14px] font-light mt-3">
                  Terms & Conditions | Privacy Policy | Disclaimer
                </p>
              </div>
            </div>
            <div className="border-b-[1px] border-b-[#FCFCD817] mt-10"></div>
            <div className="sub-footer mt-10">
              <div className="flex items-center justify-between">
                <div>
                  <img src="/images/sub-footer-1.svg" alt="" />
                </div>
                <div className="flex items-center gap-5">
                  <h3 className="f-Nohemi-Light-BF6438cc583f70b text-[17px] text-[#FFFFFF40] leading-[17px] mr-3">
                    Backed by:
                  </h3>
                  <img src="/images/sub-footer-2.svg" className="w-[60px]" alt="" />
                  <img src="/images/sub-footer-3.svg" className="w-[60px]" alt="" />
                  <img src="/images/sub-footer-4.svg" className="w-[60px]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default FooterFrequently;
