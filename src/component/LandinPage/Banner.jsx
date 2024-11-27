import React, { useState, useEffect, useRef } from "react";
import ShinyButton from "../ui/shiny-button";
import { cn } from "../../lib/utils";
import Marquee from "../ui/marquee";
import {motion} from 'framer-motion';
import {fadeIn} from '../../variant'; 
import { RainbowButton } from "../ui/rainbow-button";

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
      <section ref={sectionRef} className="bg-color-b">
        <div className="container pt-[80px] lg:pt-[130px] px-4 md:px-8">
          <div className="text-center">
            <ShinyButton className="f-Nohemi-Light-BF6438cc583f70b cursor-pointer pb-2 pt-3 px-4 opacity-50 mb-4 rounded-[13px] text-[14px] md:text-[15px] bg-[#1B1B1B] text-[#FCFCD8] text-center max-w-[570px] mx-auto">Unmatched quality, efficient processes & transparent pricing.</ShinyButton>
            <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.9}}
            className="!max-w-[900px] mx-auto">
              <h2
                className="f-Nohemi-Light-BF6438cc583f70b text-[32px] md:text-[60px] lg:text-[90px] leading-[40px] md:leading-[70px] lg:leading-[80px] text-center pt-5 text-transparent bg-clip-text bg-gradient-to-r from-[#FCFCD8] via-[#FCFCD8] to-[#7d22ff] pb-2 animate-fadeIn">
                Nex-gen design ecosystem
              </h2>
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 pt-8 md:pt-16">
          <RainbowButton className="f-Nohemi-Light-BF6438cc583f70b hover:border-gray-600 hover:border-[1px] hover:bg-[#1F1F1FEB] hover:text-[#FCFCD8] duration-300 rounded-[14px] text-[#0C0C0C] text-[15px] flex items-center justify-center px-5 pb-2 pt-3 border-[1px] border-[#FCFCD80F]">
          Join Waitlist
          </RainbowButton>
            {/* <button >
              
              </button> */}
            <button className="f-Nohemi-Light-BF6438cc583f70b pt-3 pb-2 px-5 border-[1px] border-gray-600 text-[14px] md:text-[15px] text-[#FCFCD8] rounded-[14px]">
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
             <div className="flex items-center justify-center">
               <button
                className="f-Nohemi-Light-BF6438cc583f70b absolute top-[95px]
                 bg-[#30303066] z-20 backdrop-blur-md border-[1px] border-[#FCFCD817] rounded-[15px] flex items-center gap-2 mt-5 text-[10px] text-[#FCFCD8] pb-1 pt-2 px-3"
              >
                <span>
                  <img src="/images/cohyve-btn-banner.svg" alt="" />
                </span>
                <span>
                  <img src="/images/cohyve-btn-banner-2.svg" alt="" />
                </span>
                <span>Ask RUMI Anything</span>
              </button>
             </div>
            )}
          </div>
          <div className="text-center pt-10 md:pt-20">
            <p className="f-Nohemi-Light-BF6438cc583f70b text-[#FCFCD880] text-[13px] md:text-[14px] leading-[15.7px] pb-4">
              Trusted By
            </p>
            <div className="relative overflow-hidden mt-6 text-white">
            {/* Left Gradient Overlay */}
            <div className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-[#0C0C0C] to-transparent pointer-events-none z-10"></div>

            {/* Right Gradient Overlay */}
            <div className="absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-[#0C0C0C] to-transparent pointer-events-none z-10"></div>

            {/* Scrolling Marquee */}
            <div className="inner-shadow-left-right">
              <Marquee pauseOnHover={true} className="[--duration:20s]">
                <div className="flex items-center justify-center gap-8 mt-5">
                <img
                    src="/images/cohyve-netflix.svg"
                    alt="Netflix"
                    className="h-10 w-[130px] mx-auto cursor-pointer"
                  />
                   <img
                    src="/images/cohyve-netflix.svg"
                    alt="Netflix"
                    className="h-10 w-[130px] mx-auto cursor-pointer"
                  />
                    <img
                    src="/images/cohyve-netflix.svg"
                    alt="Netflix"
                    className="h-10 w-[130px] mx-auto cursor-pointer"
                  />
                  <img
                    src="/images/cohyve-netflix.svg"
                    alt="Netflix"
                    className="h-10 w-[130px] mx-auto cursor-pointer"
                  />
                  <img
                    src="/images/cohyve-netflix.svg"
                    alt="Netflix"
                    className="h-10 w-[130px] mx-auto cursor-pointer"
                  />
                  <img
                    src="/images/cohyve-netflix.svg"
                    alt="Netflix"
                    className="h-10 w-[130px] mx-auto cursor-pointer"
                  />
                </div>
              </Marquee>

              <Marquee reverse pauseOnHover={true} className="[--duration:20s]">
                <div className="flex items-center justify-center gap-8 mt-4">
                <img
                    src="/images/cohyve-netflix.svg"
                    alt="Netflix"
                    className="h-10 w-[130px] mx-auto cursor-pointer"
                  />
                    <img
                    src="/images/cohyve-netflix.svg"
                    alt="Netflix"
                    className="h-10 w-[130px] mx-auto cursor-pointer"
                  />
                   <img
                    src="/images/cohyve-netflix.svg"
                    alt="Netflix"
                    className="h-10 w-[130px] mx-auto cursor-pointer"
                  />
                  <img
                    src="/images/cohyve-netflix.svg"
                    alt="Netflix"
                    className="h-10 w-[130px] mx-auto cursor-pointer"
                  />
                 <img
                    src="/images/cohyve-netflix.svg"
                    alt="Netflix"
                    className="h-10 w-[130px] mx-auto cursor-pointer"
                  />
                    <img
                    src="/images/cohyve-netflix.svg"
                    alt="Netflix"
                    className="h-10 w-[130px] mx-auto cursor-pointer"
                  />
                </div>
              </Marquee>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
