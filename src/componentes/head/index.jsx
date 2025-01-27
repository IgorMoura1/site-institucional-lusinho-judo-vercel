import React, { useEffect } from "react";
import "./styles.css";
import Logo from "./assets/logo.png";
import { useNavigate, Link } from "react-router-dom";

export default function Header() {
    useEffect(() => {
        const header = document.querySelector(".headerDesktop");
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

    const navigate = useNavigate();

    return (
        <header className="headerDesktop top" role="banner">
            <div className="logo">
                <img src={Logo} alt="Logo do Instituto de Judô" />
            </div>
            <nav
                className="nav-menu"
                role="navigation"
                aria-label="Menu principal"
            >
                <Link to="/" aria-label="Sobre o Instituto">O Instituto</Link>
                <Link to="/historia-judo" aria-label="História do Judô">História</Link>
                <Link to="/seja-parceiro" aria-label="Fale conosco">Fale Conosco</Link>
            </nav>
        </header>
    );
}
