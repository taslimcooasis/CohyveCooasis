import React from 'react'

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
     <h2 className="f-Nohemi-Light-BF6438cc583f70b text-[60px] text-[#FCFCD8] text-center font-semibold leading-[60px] mb-16 mx-auto max-w-[800px]">
     All creative service under one roof
      </h2>
       <marquee behavior="" direction="right">
       <div className='flex items-center justify-start gap-3'>
        {btn.map((btn, index) => (
          <div key={index}>
            <button className='flex items-center bg-[#1B1B1BBA] border-[1px] border-[#FCFCD80F] rounded-[10px] px-3 py-2 text-[#FCFCD8] text-[16px] font-normal'>
            <img src={btn.imgSrc} alt="" className='w-[23px]' />
            <span className='f-Nohemi-Light-BF6438cc583f70b ml-2 pt-1'>{btn.title}</span>
            </button>
          </div>
        ))}
       </div>
       </marquee>
       <marquee behavior="" direction="left">
       <div className='flex items-center justify-center gap-3 my-3'>
        {btnSecondRow.map((btnSecondRow, index) => (
          <div key={index}>
            <button className='flex items-center bg-[#1B1B1BBA] border-[1px] border-[#FCFCD80F] rounded-[10px] px-3 py-2 text-[#FCFCD8] text-[16px] font-normal'>
            <img src={btnSecondRow.imgSrc} alt="" className='w-[23px]' />
            <span className='f-Nohemi-Light-BF6438cc583f70b ml-2 pt-1'>{btnSecondRow.title}</span>
            </button>
          </div>
        ))}
       </div>
       </marquee>
       <marquee behavior="" direction="right">
       <div className='flex items-center justify-start gap-3'>
        {btnThirdRow.map((btnThirdRow, index) => (
          <div key={index}>
            <button className='flex items-center bg-[#1B1B1BBA] border-[1px] border-[#FCFCD80F] rounded-[10px] px-3 py-2 text-[#FCFCD8] text-[16px] font-normal'>
            <img src={btnThirdRow.imgSrc} alt="" className='w-[23px]' />
            <span className='f-Nohemi-Light-BF6438cc583f70b ml-2 pt-1'>{btnThirdRow.title}</span>
            </button>
          </div>
        ))}
       </div>
       </marquee>
     </div>
     </section>
    </>
  )
}

export default CreativeService
