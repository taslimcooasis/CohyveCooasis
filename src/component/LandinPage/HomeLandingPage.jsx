import React, { useState, useEffect, useRef } from 'react';
import ShinyButton from "../ui/shiny-button";
import NavBar from './NavBar';
import Banner from './Banner';
import Struggling from './Struggling';
import CreativeService from './CreativeService';
import GlimpseWork from './GlimpseWork';
import FutureOfDesign from './FutureOfDesign';
import FooterFrequently from './FooterFrequently';
import JoinOurEcosystem from './JoinOurEcosystem';
import DesignTeam from './DesignTeam';
import MakesCohyve from './MakesCohyve';
import HyveWallet from './HyveWallet';
import CreativeServiceSlider from './CreativeServiceSlider';

const HomeLandingPage = () => {
  const [showButton, setShowButton] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const bannerVisible = entries.some(
          (entry) => entry.target === bannerRef.current && entry.isIntersecting
        );

        setShowButton(!bannerVisible);
      },
      { threshold: 0.1 }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);

    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
    };
  }, []);

  return (
    <>
    <div>
      <NavBar />
      <div ref={bannerRef}>
        <Banner />
      </div>
      <Struggling />
      <DesignTeam />
      <CreativeService />
      <CreativeServiceSlider />
      <MakesCohyve />
      <GlimpseWork />
      <FutureOfDesign />
      <HyveWallet />
      <JoinOurEcosystem />
      <FooterFrequently />
      <div className="flex justify-center relative">
        <ShinyButton
          className={`f-Nohemi-Light-BF6438cc583f70b fixed bottom-8 bg-[#30303066] z-20 backdrop-blur-md border-[1px] border-[#FCFCD817] rounded-[16px] flex items-center gap-2 text-[14px] text-[#FCFCD8] pb-1 pt-2 px-5
            transition-all duration-1000 ease-in-out transform
            ${showButton ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
        >
          <div className='flex justify-center items-center space-x-3 relative'>
          <span>
            <img src="/images/RUMI.gif" alt="" className='w-[50px] h-[50px]' />
          </span>
          <span>
            <img src="/images/cohyve-beta.svg" alt="" />
          </span>
           <span>Ask RUMI Anything</span>
          </div>
        </ShinyButton>
      </div>
    </div>
    </>
  );
};

export default HomeLandingPage;
