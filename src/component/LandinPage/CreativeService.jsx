import React from 'react';
import { cn } from "../../lib/utils";
import Marquee from "../ui/marquee";
import { motion } from 'framer-motion';
import { fadeIn } from '../../variant';

const CreativeService = () => {

  const btn = [
    {
      imgSrc: '/images/btn-images.svg',
      title: 'Ad Creatives',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'App Design',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'Banner',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'Banner',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'Emailer',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'UX Design',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'Branding',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'landing Page',
    },
  ];

  const btnSecondRow = [
    {
      imgSrc: '/images/btn-images.svg',
      title: 'Packaging Design',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'Social Ads',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'Product Design',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'Web Design',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'Illustration',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'Infographics',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'presentation',
    },
  ];
  const btnThirdRow = [
    {
      imgSrc: '/images/btn-images.svg',
      title: 'Invite Design',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'Book Covers',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'Thumbnails',
    },
    {
      imgSrc: '/images/btn-images.svg',
      title: 'Stationary Design',
    },
  ];

  return (
    <>
      <section className='bg-[#0C0C0C] pt-24'>
        <div className="container">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.9 }}
            className="f-Nohemi-Light-BF6438cc583f70b text-[60px] text-[#FCFCD8] text-center font-semibold leading-[60px] mb-16 mx-auto max-w-[800px]">
            All creative service under one roof
          </motion.h2>
          {/* Left Gradient Overlay */}
          <div className='relative overflow-hidden mt-6 text-white'>
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0C0C0C] to-transparent pointer-events-none z-10"></div>
            {/* Right Gradient Overlay */}
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0C0C0C] to-transparent pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0C0C0C] to-transparent pointer-events-none z-10"></div>

            <div className='flex items-center justify-center gap-3'>
              <Marquee pauseOnHover className="[--duration:20s]">
                {btn.map((btn, index) => (
                  <div key={index}>
                    <button className='flex items-center bg-[#1B1B1BBA] border-[1px] border-[#FCFCD80F] rounded-[10px] px-3 py-2 text-[#FCFCD8] text-[15px] font-normal'>
                      <img src={btn.imgSrc} alt="" className='w-[23px]' />
                      <span className='f-Nohemi-Light-BF6438cc583f70b ml-2 pt-1'>{btn.title}</span>
                    </button>
                  </div>
                ))}
              </Marquee>
            </div>
            <div className='flex items-center justify-center gap-3 my-3'>
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                {btnSecondRow.map((btnSecondRow, index) => (
                  <div key={index}>
                    <button className='flex items-center bg-[#1B1B1BBA] border-[1px] border-[#FCFCD80F] rounded-[10px] px-3 py-2 text-[#FCFCD8] text-[15px] font-normal'>
                      <img src={btnSecondRow.imgSrc} alt="" className='w-[23px]' />
                      <span className='f-Nohemi-Light-BF6438cc583f70b ml-2 pt-1'>{btnSecondRow.title}</span>
                    </button>
                  </div>
                ))}
              </Marquee>
            </div>
            <div className='flex items-center justify-center gap-3'>
              <Marquee pauseOnHover className="[--duration:20s]">
                {btnThirdRow.map((btnThirdRow, index) => (
                  <div key={index}>
                    <button className='flex items-center bg-[#1B1B1BBA] border-[1px] border-[#FCFCD80F] rounded-[10px] px-3 py-2 text-[#FCFCD8] text-[15px] font-normal'>
                      <img src={btnThirdRow.imgSrc} alt="" className='w-[23px]' />
                      <span className='f-Nohemi-Light-BF6438cc583f70b ml-2 pt-1'>{btnThirdRow.title}</span>
                    </button>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CreativeService
