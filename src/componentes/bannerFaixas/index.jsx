import { Container } from '@mui/material';
import './styles.css';
import Faixas from '../carousel';

export default function FaixasHero() {
    return (
        <div className="container_faixasHero">
            <div className="image_hero_content">
                <div className="text_faixas">
                    <div className="japonese-letters">
                        <span>柔道の帯</span>
                    </div>
                    <h1 id="carousel-title">FAIXAS DO JUDÔ</h1>
                </div>
                <Faixas />
            </div>
        </div>
    );
}