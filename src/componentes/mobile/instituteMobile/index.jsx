import './styles.css';
import fotoInstituto1 from './assets/instituto1img.png';
import fotoInstituto2 from './assets/instituto2img.png';
import Logo from './assets/logocircle.png';
import { Container } from '@mui/material';

export default function SecondarySection() {
    return (
        <div className="instituteSection">
            <div className="logoInstitute">
                <img src={Logo} alt="" />
            </div>
            <div className="instituteText">
                <div className="titleInstitute">
                    <h1>
                        INSTITUTO<br />
                        SENSEI LUISINHO
                    </h1>
                </div>
                <div className="textInstitute">
                    Com mais de uma década de dedicação e impacto na comunidade, o Instituto Sensei Luisinho é um espaço onde o judô vai além do esporte e se transforma em uma ferramenta de educação, disciplina e inclusão. O instituto já foi lar de aprendizado para mais de 200 alunos ao longo dos anos, sendo que atualmente cerca de 70 praticantes estão ativos. Acessível para todos, o instituto oferece aulas totalmente gratuitas, abraçando pessoas de todas as idades e promovendo o esporte como um direito e não como um privilégio.
                </div>
            </div>
            <div className="photoInstitute">
                <div className="mainPhoto">
                    <img src={fotoInstituto1} alt="fotoInstituto1" />
                </div>
                <div className="secondaryPhotos">
                    <img src={fotoInstituto2} alt="fotoInstituto2" />
                    <img src={fotoInstituto2} alt="fotoInstituto2" />
                </div>
            </div>
        </div>
    )
}

