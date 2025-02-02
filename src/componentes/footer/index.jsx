import "./styles.css";
import Logo from "./assets/logo.png";
import { Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();
    
    return (
        <div
            className="container_footer"
            role="contentinfo"
            aria-label="Rodapé do site"
        >
            <div className="logoFooterBackground">
                <img src={Logo} alt="" />
            </div>
            <div className="leftSection_footerDesktop">
                <img
                    src={Logo}
                    alt="Logo do Instituto Luisinho Judô"
                />
                <div className="text">
                    <p>INSTITUTO LUISINHO JUDO</p>
                </div>
            </div>

            <div className="rightSectionFooterDesktop">
                <div className="info">
                    <div className="title-footerDesktop">
                        <h3 id="map-title">Mapa do site</h3>
                    </div>
                    <div
                        className="containerInfoDesktop"
                        role="navigation"
                        aria-labelledby="map-title"
                    >
                        <p onClick={() => navigate("/")} aria-label="Ir para a página do Instituto">
                            Instituto
                        </p>
                        <p onClick={() => navigate("/historia-judo")} aria-label="Ir para a página da História do Judô">
                            História do Judô
                        </p>
                        <p onClick={() => navigate("/seja-parceiro")} aria-label="Ir para a página de Fale Conosco">
                            Fale Conosco
                        </p>
                    </div>
                </div>

                <div className="info">
                    <div className="title-footerDesktop">
                        <h3 id="partners-title">Parceiros</h3>
                    </div>
                    <div
                        className="containerInfoDesktop"
                        role="list"
                        aria-labelledby="partners-title"
                    >
                        <a>Instituto Life</a>
                        <a>Associação Shiroma de Judô</a>
                        <a>CE Tiradentes</a>
                    </div>
                </div>

                <div className="info">
                    <div className="title-footerDesktop">
                        <h3 id="social-title">Redes Sociais</h3>
                    </div>
                    <div
                        className="containerInfoDesktop"
                        role="list"
                        aria-labelledby="social-title"
                    >
                        <div className="socialIcons">
                            <span role="listitem">
                                <InstagramIcon
                                    sx={{ marginRight: '8px', verticalAlign: 'middle' }}
                                    aria-label="Instagram"
                                />
                                @institutosenseiluisinho2015
                            </span>
                        </div>
                        <div className="socialIcons">
                            <span role="listitem">
                                <WhatsAppIcon
                                    sx={{ marginRight: '8px', verticalAlign: 'middle' }}
                                    aria-label="WhatsApp"
                                />
                                (11) 991473505
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
