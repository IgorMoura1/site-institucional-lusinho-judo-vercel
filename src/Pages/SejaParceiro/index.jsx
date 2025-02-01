import React from 'react';
import { useEffect, useState } from 'react';
import SejaParceiro from '../../componentes/sejaParceiro';
import heroImageParceiro from './assets/heroImageParceiro.png';
import Header from '../../componentes/head';
import Footer from '../../componentes/footer';

// mobile imports
import HeaderMobile from '../../componentes/mobile/headerMobile';
import SejaParceiroMobile from '../../componentes/mobile/sejaParceiroMobile';
import FooterMobile from '../../componentes/mobile/footerMobile';
import './styles.css';

export default function ContactComponent() {
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
      {isMobile ? <HeaderMobile /> : <Header />}
      {isMobile ? <SejaParceiroMobile /> : <SejaParceiro />}
      {isMobile ? <FooterMobile /> : <Footer />}
    </>
  );
};

