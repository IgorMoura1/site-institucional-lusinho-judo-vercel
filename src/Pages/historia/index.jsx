import React, { useState, useEffect } from 'react';
import Header from '../../componentes/head';
import HistoriaHero from '../../componentes/historiaHero'
import Tecnicas from '../../componentes/bannerTecnicas'
import Faixas from '../../componentes/bannerFaixas'
import Lutas from '../../componentes/bannerLutas'
import Footer from '../../componentes/footer'

// mobile imports
import HeaderMobile from '../../componentes/mobile/headerMobile'
import HistoriaHeroMobile from '../../componentes/mobile/historiaHeroMobile'
import TecnicasMobile from '../../componentes/mobile/bannerTecnicasMobile'
import FaixasMobile from '../../componentes/mobile/bannerFaixasMobile'

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <HeaderMobile /> : <Header />}
      {isMobile ? <HistoriaHeroMobile/> : <HistoriaHero />}
      {isMobile ? <TecnicasMobile/> : <Tecnicas /> }
      {isMobile ? <FaixasMobile/> : <Faixas />}
      <Lutas />
      <Footer />
    </>
  );
}
