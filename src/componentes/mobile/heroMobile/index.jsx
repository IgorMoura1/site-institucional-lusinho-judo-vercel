import './styles.css';
import { Container } from '@mui/material';
import Hero from './assets/hero.png';

export default function HeroMobile() {
    return (
        <Container className="container_hero_mobile">
            <img src={Hero} alt="Imagem de dois lutadores de judô, onde um lutador está aplicando o golpe Seoi-Nage e em baixo há uma frase do criador do Judô, Jigoro Kano, dizendo o seguinte, 'somente se aproxima da perfeição quem a procura com constância sabedoria e sobretudo humildade'." />
            <button className="button_hero_mobile">CONHEÇA MAIS</button>
        </Container>
    );
}