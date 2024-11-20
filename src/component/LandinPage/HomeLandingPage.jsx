import React, { useState, useEffect, useRef } from 'react';
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
import { RainbowButton } from "../ui/rainbow-button";

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
    <div>
      <NavBar />
      <div ref={bannerRef}>
        <Banner />
      </div>
      <Struggling />
      <DesignTeam />
      <CreativeService />
      <MakesCohyve />
      <GlimpseWork />
      <FutureOfDesign />
      <JoinOurEcosystem />
      <FooterFrequently />
      {showButton && (
        <div className="flex justify-center">
          <RainbowButton className="f-Nohemi-Light-BF6438cc583f70b fixed bottom-8 bg-[#30303066] z-20 backdrop-blur-md border-[1px] border-[#FCFCD817] rounded-[14px] flex items-center gap-2 mt-5 text-[14px] text-[#FCFCD8] pb-6 pt-7 px-5"><span>
            <img src="/images/cohyve-btn-banner.svg" alt="" />
          </span>
            <span>
              <img src="/images/cohyve-btn-banner-2.svg" alt="" />
            </span>
            <span>Ask RUMI Anything</span></RainbowButton>
        </div>
      )}
    </div>
  );
};

export default HomeLandingPage;
