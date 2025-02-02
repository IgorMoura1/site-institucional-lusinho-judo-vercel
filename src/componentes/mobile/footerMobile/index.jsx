import "./styles.css";
import Logo from "./assets/logo.png";
import { Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useNavigate } from 'react-router-dom';

const FooterMobile = () => {
    const navigate = useNavigate();

    return (
        <div className="containerFooterMobile"
            role="contentinfo"
            aria-label="Rodapé do site"
        >
            <div className="leftSection_footer">
                <img
                    src={Logo}
                    alt="Logo do Instituto Luisinho Judô"
                />
                <div className="text">
                    <p>INSTITUTO LUISINHO JUDO</p>
                </div>
            </div>

            <div className="rightSection_footer">
                <div className="infoMobile">
                    <div className="title-footer">
                        <h3 id="map-title">Mapa do site</h3>
                    </div>
                    <div
                        className="containerInfoMobile"
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

                <div className="infoMobile">
                    <div className="title-footer">
                        <h3 id="partners-title">Parceiros</h3>
                    </div>
                    <div
                        className="containerInfoMobile"
                        role="list"
                        aria-labelledby="partners-title"
                    >
                        <span role="listitem">Instituto Life</span>
                        <span role="listitem">Associação Shiroma de Judô</span>
                        <span role="listitem">CE Tiradentes</span>
                    </div>
                </div>

                <div className="infoMobile">
                    <div className="title-footer">
                        <h3 id="social-title">Redes Sociais</h3>
                    </div>
                    <div
                        className="container_infoMobile"
                        role="list"
                        aria-labelledby="social-title"
                    >
                        <span role="listitem">
                            <InstagramIcon
                                sx={{ marginRight: '8px', verticalAlign: 'middle' }}
                                aria-label="Instagram"
                            />
                            @institutosenseiluisinho2015
                        </span>
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
    );
}

export default FooterMobile;