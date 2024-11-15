import React from 'react'

const JoinOurEcosystem = () => {
  return (
    <>
    <section className='bg-[#0C0C0C] pt-24 pb-8'>
      <div className="container bg-[#30303066] rounded-[20px] max-w-[1100px] relative bg-gred">
        <div className='relative'>
          <img src="/images/bg-hunt.svg" alt="" className='absolute left-[240px] max-w-[640px]' />
        </div>
        <div className='p-12 relative z-20 bg-gred-2 rounded-[20px]'>
          <img src="/images/product-hunt.svg" alt="" className='mx-auto cursor-pointer' />
          <h1 className='f-HelveticaNeue text-[#FCFCD8] text-[60px] leading-[60px] text-center font-normal max-w-[600px] mx-auto my-8'>Are you a designer?
          join our ecosystem of design</h1>
          <p className='mx-auto text-[20px] text-[#FCFCD880] leading-[32px] font-light text-center max-w-[480px]'>Get access to the powerhouse of design system where you <span className='text-[#FCFCD8]'>earn, learn</span> and <span className='text-[#FCFCD8]'>grow</span> together.</p>
          <div className="flex justify-center">
          <button className="mt-16 py-3 px-5 border-[1px] border-[#FCFCD80F] text-[18px] md:text-[18px] text-[#FCFCD8] rounded-[14px] bg-[#1B1B1BBA]">
          Join our community
            </button>
          </div>
            <div>
              <p className='text-[20px] text-[#FCFCD8] leading-[16px] font-normal text-center mt-8'>
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
