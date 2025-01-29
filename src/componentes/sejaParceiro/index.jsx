import React from 'react';
import { useState } from "react";
import heroImageParceiro from './assets/heroImageParceiro.svg';
import Header from '../../componentes/head';
import Footer from '../../componentes/footer';

import './styles.css';

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="parceiroPageDesktop">
      <div className="parceiroPageLeftSideDesktop">
        <div className="container">
          <form className="form" onSubmit={handleSubmit}>
            <h1 className="form-title">ENTRE EM CONTATO</h1>
            <div className="grid-container">
              <div className="grid-item">
                <label htmlFor="firstName" className="label">
                  Nome
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input"
                  placeholder=""
                />
              </div>
              <div className="grid-item">
                <label htmlFor="lastName" className="label">
                  Sobrenome
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="grid-item">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  placeholder=""
                />
              </div>
              <div className="grid-item">
                <label htmlFor="phone" className="label">
                  Telefone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>

            <div className="radio-group">
              <p className="label">Selecione o motivo do contato</p>
              <div className="radio-options">
                {[
                  "Desejo ser parceiro",
                  "Quero saber mais",
                  "Tenho uma sugestão",
                ].map((reason) => (
                  <label key={reason} className="radio-label">
                    <input
                      type="radio"
                      name="reason"
                      value={reason}
                      checked={formData.reason === reason}
                      onChange={handleChange}
                      className="radio-input"
                    />
                    <span className="radio-text">{reason}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="message-container">
              <label htmlFor="message" className="label">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea"
                rows="4"
                placeholder="Escreva sua mensagem"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
      <div className="parceiroPageRightSideDesktop">
        <img src={heroImageParceiro} alt="" />
      </div>
    </div>
  );
};


