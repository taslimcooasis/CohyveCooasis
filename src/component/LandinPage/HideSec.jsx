import React from "react";

const HideSec = () => {
  return (
    <>
      <section className="bg-[#0C0C0C] pt-28 absolute left-[40px] z-20">
        <div className="container">
          <div className="bg-[#1F1F1FEB] text-white p-6 pb-14 rounded-[30px] mx-auto">
            {/* Main container */}
            <div className="grid grid-cols-12 gap-6">
              {/* Left Panel */}
              <div className="col-span-3 flex flex-col space-y-6 border-r-[1px] border-r-[#343433]">
                <div>
                  <h2 className="f-Nohemi-Medium-BF6438cc581a509 text-[20px] text-[#FCFCD8] leading-[21px]">Our Ecosystem</h2>
                  <div className="flex items-center pt-10 gap-8 border-b-[1px] border-b-[#343433] pb-2 w-[85%]">
                    <p className="f-Nohemi-Light-BF6438cc583f70b text-[12px] leading-[10px] text-[#FCFCD8]">For Creators</p>
                    <p className="f-Nohemi-Light-BF6438cc583f70b text-[12px] leading-[10px] text-[#FCFCD880]">For Brands</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-[#302F2F] rounded-[15px] p-4"><img src="/images/cohyve-al.svg" alt="" /></span>
                  <div>
                    <h4 className="f-Nohemi-Medium-BF6438cc581a509 flex items-center gap-3 text-[20px] text-[#FCFCD8] leading-[20px]">
                      <span>Cohyve</span>
                      <img src="/images/cohyve-alpha.svg" alt="" />
                    </h4>
                    <p className="f-Nohemi-Regular-BF6438cc4d0e493 text-[11px] mt-1 text-[#FCFCD899] leading-[10px]">Your all-in-one design management tool</p>
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-[20px] text-[#FCFCD8] leading-[21px] f-Nohemi-Light-BF6438cc583f70b">More Product coming soon</h3>
                  <p className="f-Nohemi-Regular-BF6438cc4d0e493 text-[13px] mt-1 text-[#FCFCD899] leading-[15px] max-w-[200px]">Stay up to date about new launches by joining our newsletter  </p>
                </div>
                <div className="pt-4 relative">
                  <input type="text" placeholder="Your Email" className="f-Nohemi-Light-BF6438cc583f70b w-[90%] px-6 pb-4 pt-5 rounded-[25px] bg-[#302F2F] text-[13px] text-[#FFFFFF80]" />
                  <button className="f-Nohemi-Light-BF6438cc583f70b absolute top-[26px] right-10 bg-[#242323F0] border-[0.5px] border-[#FCFCD814] px-3 pb-2 pt-3 rounded-[15px] text-[10px] text-[#FCFCD8]">Join Our Newsletter</button>
                </div>
              </div>

              {/* Middle Panel */}
              <div className="col-span-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="f-Nohemi-Light-BF6438cc583f70b text-[20px] text-[#FCFCD8] leading-[21px]">Initiatives</h2>
                  <div className="flex items-center gap-8">
                    <img src="/images/L-arrow.svg" alt="" className="cursor-pointer" />
                    <img src="/images/R-arrow.svg" alt="" className="cursor-pointer" />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  {/* Card 1 */}
                  <div>
                    <div className="relative">
                      <img src="/images/exp.svg" alt="" />
                      <button className="f-Nohemi-Light-BF6438cc583f70b absolute top-[6px] right-[6px] px-2 pb-1 pt-2 text-[12px] text-[#FCFCD8] bg-[#2E2E2E] rounded-[10px]">Masterclass</button>
                    </div>
                    <p className="f-Nohemi-Light-BF6438cc583f70b text-[20px] text-[#FCFCD8] leading-[22px] pt-5">A Nex-gen experience lab for design students</p>
                    <button className="f-Nohemi-Light-BF6438cc583f70b mt-7 text-[14px] text-[#FCFCD899] leading-[16px]">Know More</button>
                  </div>
                  {/* Card 2 */}
                  <div className="pl-16">
                    <img src="/images/exp-2.JPG" alt="" className="max-h-[230px] w-[310px]" />
                    <p className="f-Nohemi-Light-BF6438cc583f70b text-[20px] text-[#FCFCD8] leading-[22px] pt-5">A Nex-gen experience lab for designers</p>
                    <button className="f-Nohemi-Light-BF6438cc583f70b mt-7 text-[14px] text-[#FCFCD899] leading-[16px]">Know More</button>
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div className="col-span-3 space-y-6 border-l-[1px] border-l-[#343433] pl-6">
                <h2 className="f-Nohemi-Light-BF6438cc583f70b text-[20px] text-[#FCFCD8] leading-[21px]">Updates</h2>
                <div className="bg-[#1B1B1B] p-4 pb-7 rounded-[20px]">
                  <div className="p-[10px] rounded-[10px] bg-[#1E1E1E]">
                    <div className="flex items-center gap-4">
                      <button className="f-Nohemi-Light-BF6438cc583f70b px-3 pb-1 pt-2 text-[12px] text-[#FCFCD8] bg-[#2E2E2E] rounded-[10px]">Update</button>
                      <p className="f-Nohemi-Light-BF6438cc583f70b text-[14px] text-[#FCFCD880] leading-[17px]">1 Dec 2024</p>
                    </div>
                    <div className="flex items-center gap-4 mt-5">
                      <div className="p-4 pb-0 bg-[#383838] rounded-[12px]">
                        <img src="/images/cohyve-ubdate-1.svg" alt="" className="w-[90px]" />
                      </div>
                      <p className="f-Nohemi-Light-BF6438cc583f70b text-[14px] text-[#FCFCD8] leading-[14.50px]">Now Accept payments through our integrated wallet system.</p>
                    </div>
                  </div>
                  <div className="p-[10px] rounded-[10px] bg-[#1E1E1E] mt-4">
                    <div className="flex items-center gap-4">
                      <button className="f-Nohemi-Light-BF6438cc583f70b px-3 pb-1 pt-2 text-[12px] text-[#FCFCD8] bg-[#2E2E2E] rounded-[10px]">Update</button>
                      <p className="f-Nohemi-Light-BF6438cc583f70b text-[14px] text-[#FCFCD880] leading-[17px]">1 Dec 2024</p>
                    </div>
                    <div className="flex items-center gap-4 mt-5">
                      <div className="p-1 bg-[#383838] rounded-[12px] flex items-center">
                        <img src="/images/cohyve-ubdate-2.svg" alt="" className="w-[130px]" />
                      </div>
                      <p className="f-Nohemi-Light-BF6438cc583f70b text-[14px] text-[#FCFCD8] leading-[14.50px]">Introducing RUMI
                        your smartest AI manager.</p>
                    </div>
                  </div>
                  <button className="f-Nohemi-Light-BF6438cc583f70b mt-2 ml-4 text-[14px] text-[#FCFCD880] leading-16px">View All</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HideSec;