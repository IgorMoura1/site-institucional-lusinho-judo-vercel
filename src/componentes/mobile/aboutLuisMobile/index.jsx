import "./styles.css";
import sobreLuis from "./assets/aboutLuisMobile.png";
import { Box } from "@mui/material";

export default function AboutLuis() {
    return (
        <div className="aboutLuisMobile">
            <h2 className="aboutLuisMobile__title">Sobre Luis</h2>
            <img src={sobreLuis} alt="Luisinho, um homem de 55 anos, preto, cabelo careca e com cara séria na imagem" />
            <span className="sr-only">
                Frase que eu gosto: "Judo não é uma luta é uma arte".
            </span>
            <span className="sr-only">
                Conquista: Participou de missões no exercíto brasileiro.
            </span>
            <span className="sr-only">
                Superação: Vindo do nordeste, de uma família humilde, realizou seu sonho que é ensinar judô para as pessoas.
            </span>
            <span className="sr-only">
                Curiosidade: Quebrou a clavícula e continuou treinando.
            </span>
            <span className="sr-only">
                Premiação: Campeão Paulista em 2006 e 2008.
            </span>
        </div>
    );
}
