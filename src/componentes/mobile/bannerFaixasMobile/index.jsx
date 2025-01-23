import { Container } from '@mui/material';
import faixasHeroImage from './assets/secondpart.svg'
import Faixas from '../carouselMobile'
import './styles.css';

export default function faixasHero() {
    return (
        <div className="containerFaixasHeroMobile">
            <div className="imageHeroContentMobile">
                <div className="textFaixasMobile">
                    <div className="japonese-letters">
                        <span>柔道の帯</span>
                    </div>
                    <h1>FAIXAS DO JUDÔ</h1>
                </div>
                <Faixas />
            </div>
        </div>
    );
}