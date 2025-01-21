import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from "../headerMobile/assets/logo.svg";
import './styles.css';

import { useNavigate } from "react-router-dom";

const HeaderMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [menuOpen]);
    

const navigate = useNavigate();

    return (
        <header className="header-mobile">
            <div className="logo"><img src={Logo} alt="Logo do Instituto de Judô" /></div>
            <div className="menu-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </div>
            {menuOpen && (
                <nav className="mobile-nav">
                    <ul>
                        <li><a href="#" onClick={() => navigate("/")} aria-label="Sobre o Instituto">O Instituto</a></li>
                        <li><a href="#" onClick={() => navigate("/historia-judo")} aria-label="História do Judô">História</a></li>
                        <li><a href="#" onClick={() => navigate("/seja-parceiro")} aria-label="Fale conosco">Fale Conosco</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default HeaderMobile;