import React from 'react';
import heroImageParceiro from './assets/heroImageParceiro.png';
import Header from '../../componentes/head';
import Footer from '../../componentes/footer';
import SejaParceiro from '../../componentes/sejaParceiro';
import './styles.css';

const ContactComponent = () => {
  return (
    <>
        <Header />
        <SejaParceiro />
        <Footer />
    </>
  );
};

export default ContactComponent;
