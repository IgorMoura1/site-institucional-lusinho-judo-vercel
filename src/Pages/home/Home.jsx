import React, { useState, useEffect } from "react";
import Header from "../../componentes/head";
import Hero from "../../componentes/hero";
import SecondarySection from "../../componentes/secondarySection";
import Footer from "../../componentes/footer";
import AboutLuis from "../../componentes/aboutLuis";
import Teachers from "../../componentes/teachers";
import HowParticipate from "../../componentes/comoParticipar";

// mobile imports
import MobileHeader from "../../componentes/mobile/headerMobile";
import HeroMobile from "../../componentes/mobile/heroMobile";
import InstituteMobile from "../../componentes/mobile/instituteMobile";
import SobreLuisMobile from "../../componentes/mobile/aboutLuisMobile";
import ProfessoresMobile from "../../componentes/mobile/professoresMobile";
import HowParticipateMobile from "../../componentes/mobile/comoParticiparMobile";
import FooterMobile from "../../componentes/mobile/footerMobile";
import "../home/Home.module.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="headerDiv">
        {isMobile ? <MobileHeader /> : <Header />}
      </div>
      <div className="fullContainerPage">
        {isMobile ? <HeroMobile /> : <Hero />}
        {isMobile ? <InstituteMobile /> : <SecondarySection id="secondary-section" />} 
        {isMobile ? <SobreLuisMobile /> : <AboutLuis />}
        {isMobile ? <ProfessoresMobile /> : <Teachers />}
        {isMobile ? <HowParticipateMobile /> : <HowParticipate />}
        {isMobile ? <FooterMobile/> : <Footer />}
      </div>
    </>
  );
}