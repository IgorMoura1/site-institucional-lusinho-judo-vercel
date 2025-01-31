import './styles.css';
import fotoInstituto1 from './assets/instituto1img.png';
import fotoInstituto2 from './assets/instituto2img.png';
import { Container } from '@mui/material';
import HeroImage from './assets/Hero.png';

export default function SecondarySection() {
    return (
        <div className="container_section">
            <div className="leftSection">
                <div className="text_institute">
                    <div className="title-secondary">
                        <h1>O INSTITUTO</h1>
                    </div>
                    <p>Com mais de uma década de dedicação e impacto na comunidade, o Instituto Sensei Luisinho é um espaço onde o judô vai além do esporte e se transforma em uma ferramenta de educação, disciplina e inclusão. Localizado na Av. dos Metalúrgicos, 2255 - Cidade Tiradentes, dentro do Centro de Esportes e Lazer André Vital Ribeiro Soares (CE Tiradentes), o instituto já foi lar de aprendizado para mais de 200 alunos ao longo dos anos, sendo que atualmente cerca de 70 praticantes estão ativos. Acessível para todos, o instituto oferece aulas totalmente gratuitas, abraçando pessoas de todas as idades e promovendo o esporte como um direito e não como um privilégio. Para atender a diferentes necessidades, as aulas são realizadas em três períodos, manhã, tarde e noite, possibilitando a flexibilidade necessária para quem quer aprender e crescer no esporte.</p>
                    <p>Além do renomado Sensei Luisinho, o instituto conta com uma equipe dedicada formada por mais 5 professores e 2 monitores, que juntos garantem a qualidade e o cuidado nas práticas e no desenvolvimento dos alunos. O Instituto Sensei Luisinho não é apenas um lugar para aprender judô, mas um verdadeiro pilar na comunidade, incentivando valores como respeito, perseverança e espírito de equipe. Venha conhecer, praticar e se inspirar! 🥋.</p>
                </div>
                <div className="images-secondary">
                    <img src={fotoInstituto1} alt="Crianças praticando Judô num tatami azul, na instituição Luisinho Judo" />
                    <img src={fotoInstituto2} alt="Alunos e convidados posam para uma foto na instituição Luisinho Judo" />
                </div>
            </div>
            <div className="hero">
                <img src={HeroImage} alt="Logo da Instituição Luisinho" />
            </div>
        </div>
    )
}

