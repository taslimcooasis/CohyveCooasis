import React, { useState, useEffect, useRef } from "react";
import { RainbowButton } from "../ui/rainbow-button";
import GradualSpacing from "../ui/gradual-spacing";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false); // Added state to track visibility
  const sectionRef = useRef(null); // Reference for the section

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Intersection Observer to detect visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust for fine-grained control
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="bg-color-b min-h-screen">
        <div className="container pt-[80px] lg:pt-[160px] px-4 md:px-8">
          <div className="text-center">
            <RainbowButton className="f-Nohemi-Light-BF6438cc583f70b cursor-pointer opacity-80 pb-2 pt-3 px-2 rounded-[13px] text-[14px] md:text-[15px] bg-[#1B1B1B] text-[#FCFCD8] text-center max-w-[465px] mx-auto">Unmatched quality, efficient processes & transparent pricing.</RainbowButton>
           <div className="!max-w-[900px] mx-auto">
           <GradualSpacing
              className="f-Nohemi-Light-BF6438cc583f70b text-[32px] md:text-[60px] lg:text-[90px] leading-[40px] md:leading-[70px] lg:leading-[80px] text-center pt-5 text-transparent bg-clip-text bg-gradient-to-r from-[#FCFCD8] via-[#FCFCD8] to-[#7d22ff] pb-2"
              text="Nex-gen design ecosystem"
            />
           </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 pt-8 md:pt-16">
            <RainbowButton className="f-Nohemi-Light-BF6438cc583f70b rounded-[14px] text-[#FCFCD8] text-[15px] flex items-center justify-center px-5 pb-2 pt-3 border-[1px] border-[#FCFCD80F] backdrop-blur-lg bg-[#1B1B1BBA]">Join Waitlist</RainbowButton>
            <button className="f-Nohemi-Light-BF6438cc583f70b pt-3 pb-2 px-5 border-[1px] border-[#9393710f] text-[14px] md:text-[15px] text-[#FCFCD8] rounded-[14px]">
              How It Works
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center pt-10 md:pt-12 gap-4 text-center">
            <p className="f-Nohemi-Light-BF6438cc583f70b flex items-center text-[14px] md:text-[15px] text-[#FCFCD8] leading-[20px] md:leading-[30px]">
              <span className="mr-2">
                <img src="/images/cohyve-right.svg" alt="" className="mb-1" />
              </span>
              Superfast turnaround time
            </p>
            <p className="f-Nohemi-Light-BF6438cc583f70b flex items-center text-[14px] md:text-[15px] text-[#FCFCD8] leading-[20px] md:leading-[30px]">
              <span className="mr-2">
                <img src="/images/cohyve-right.svg" alt="" className="mb-1" />
              </span>
              Unlimited Designs
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
            <p className="f-Nohemi-Light-BF6438cc583f70b flex items-center text-[14px] md:text-[15px] text-[#FCFCD8] leading-[20px] md:leading-[30px]">
              <span className="mr-2">
                <img src="/images/cohyve-right.svg" alt="" className="mb-1" />
              </span>
              Manage everything at one place
            </p>
            <p className="f-Nohemi-Light-BF6438cc583f70b flex items-center text-[14px] md:text-[15px] text-[#FCFCD8] leading-[20px] md:leading-[30px]">
              <span className="mr-2">
                <img src="/images/cohyve-right.svg" alt="" className="mb-1" />
              </span>
              Work with top 1% talent Pan India
            </p>
          </div>
          <div className="relative">
            <div className="pt-10 md:pt-20 flex justify-center">
              <img src="/images/bord.svg" alt="" className="w-full md:w-auto" />
            </div>
            {isVisible && (
              <button
                className="f-Nohemi-Light-BF6438cc583f70b absolute top-[95px] left-[520px]
                 bg-[#30303066] z-20 backdrop-blur-md border-[1px] border-[#FCFCD817] rounded-[20px] flex items-center gap-2 mt-5 text-[14px] text-[#FCFCD8] pb-2 pt-3 px-4"
              >
                <span>
                  <img src="/images/cohyve-btn-banner.svg" alt="" />
                </span>
                <span>
                  <img src="/images/cohyve-btn-banner-2.svg" alt="" />
                </span>
                <span>Ask RUMI Anything</span>
              </button>
            )}
          </div>
          <div className="text-center pt-10 md:pt-20">
            <p className="f-Nohemi-Light-BF6438cc583f70b text-[#FCFCD880] text-[13px] md:text-[14px] leading-[15.7px] pb-4">
              Trusted By
            </p>
            <marquee behavior="" direction="left">
              <img
                src="/images/trusted-1.svg"
                alt=""
                className="mx-auto cursor-pointer w-full md:w-auto mt-4 animate"
              />
            </marquee>
            <marquee behavior="" direction="right">
              <img
                src="/images/trusted-2.svg"
                alt=""
                className="cursor-pointer mx-auto w-full md:w-auto animate-right"
              />
            </marquee>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
