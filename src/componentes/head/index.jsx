import React, { useEffect } from "react";
import "./styles.css";
import Logo from "./assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
    useEffect(() => {
        const header = document.querySelector(".header");
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                header.classList.add("hidden");
            } else {
                header.classList.remove("hidden");
                if (window.scrollY > 0) {
                    header.classList.add("scrolled");
                    header.classList.remove("top");
                } else {
                    header.classList.remove("scrolled");
                    header.classList.add("top");
                }
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navigateHome = useNavigate();
    function home() {
        navigateHome("/");
    }

    const navigateHistoria = useNavigate();
    function historia() {
        navigateHistoria("/historia-judo");
    }

    const navigateSejaParceiro = useNavigate();
    function sejaparceiro() {
        navigateSejaParceiro("/seja-parceiro");
    }

    return (
        <header className="header top" role="banner">
            <div className="logo">
                <img src={Logo} alt="Logo do Instituto de Judô" />
            </div>
            <nav
                className="nav-menu"
                role="navigation"
                aria-label="Menu principal"
            >
                <a href="#" onClick={home} aria-label="Sobre o Instituto">O Instituto</a>
                <a href="#" onClick={historia} aria-label="História do Judô">História</a>
                <a href="#" onClick={sejaparceiro} aria-label="Fale conosco">Fale Conosco</a>
            </nav>
        </header>
    );
}