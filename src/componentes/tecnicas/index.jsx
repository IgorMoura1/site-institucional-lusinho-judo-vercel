import React from 'react';
import './styles.css';
import TechniqueCard from './TechniqueCard';

// Importing images statically
import seoiNageImg from './assets/nage_waza/te-waza/seoi-nage.png';
import sumiOtoshiImg from './assets/nage_waza/te-waza/sumi-otoshi.png';
import taiOtoshiImg from './assets/nage_waza/te-waza/tai-otoshi.png';
import kataGurumaImg from './assets/nage_waza/te-waza/kata-guruma.png';
import ukiGoshiImg from './assets/nage_waza/koshi-waza/uki-goshi.png';
import ushiroGoshiImg from './assets/nage_waza/koshi-waza/ushiro-goshi.png';
import haraiGoshiImg from './assets/nage_waza/koshi-waza/harai-goshi.png';
import tsuriKomiGoshiImg from './assets/nage_waza/koshi-waza/tsuri-komi-goshi.png';
import deAshiBaraiImg from './assets/nage_waza/ashi-waza/de-ashi-barai.png';
import osotoGurumaImg from './assets/nage_waza/ashi-waza/osoto-guruma.png';
import hizaGurumaImg from './assets/nage_waza/ashi-waza/hiza-guruma.png';
import oUchiGariImg from './assets/nage_waza/ashi-waza/o-uchi-gari.png';

import kesaGatameImg from './assets/katame_waza/osaekomi-waza/kesa-gatame.png';
import kataGatameImg from './assets/katame_waza/osaekomi-waza/kata-gatame.png';
import kuzureKamiShihoGatameImg from './assets/katame_waza/osaekomi-waza/kuzure-kami-shiho-gatame.png';
import tateShihoGatameImg from './assets/katame_waza/osaekomi-waza/tate-shiho-gatame-min.png';
import doJimeImg from './assets/katame_waza/shime-waza/do-jime.png';
import gyakuJujiJimeImg from './assets/katame_waza/shime-waza/gyaku-Juji-jime.png';
import ryoTeJimeImg from './assets/katame_waza/shime-waza/ryo-te-jime.png';
import tsukkomiJimeImg from './assets/katame_waza/shime-waza/tsukkomi-jime.png';
import ashiGaramiImg from './assets/katame_waza/kansetsu-waza/ashi-garami.png';
import udeGaramiImg from './assets/katame_waza/kansetsu-waza/ude-garami.png';
import udeHishigiSankakuGatameImg from './assets/katame_waza/kansetsu-waza/ude-hishigi-sankaku-gatame.png';
import udeHishigiWakiGatameImg from './assets/katame_waza/kansetsu-waza/ude-hishigi-waki-gatame.png';

const Techniques = () => {
  const nageWazaTechniques = [
    { name: 'Seoi-Nage', imageSrc: seoiNageImg, japaneseLetters: '背負投' },
    { name: 'Sumi-Otoshi', imageSrc: sumiOtoshiImg, japaneseLetters: '隅落' },
    { name: 'Tai-Otoshi', imageSrc: taiOtoshiImg, japaneseLetters: '体落' },
    { name: 'Kata-Guruma', imageSrc: kataGurumaImg, japaneseLetters: '肩車' },
    { name: 'Uki-Goshi', imageSrc: ukiGoshiImg, japaneseLetters: '浮腰' },
    { name: 'Ushiro-Goshi', imageSrc: ushiroGoshiImg, japaneseLetters: '後腰' },
    { name: 'Harai-Goshi', imageSrc: haraiGoshiImg, japaneseLetters: '払腰' },
    { name: 'Tsuri-Komi-Goshi', imageSrc: tsuriKomiGoshiImg, japaneseLetters: '浮腰' },
    { name: 'De-Ashi-Barai', imageSrc: deAshiBaraiImg, japaneseLetters: '出足払' },
    { name: 'Osoto-Guruma', imageSrc: osotoGurumaImg, japaneseLetters: '大外車' },
    { name: 'Hiza-Guruma', imageSrc: hizaGurumaImg, japaneseLetters: '膝車' },
    { name: 'O-Uchi-Gari', imageSrc: oUchiGariImg, japaneseLetters: '大内刈' },
  ];

  const katameWazaTechniques = [
    { name: 'Kesa-Gatame', imageSrc: kesaGatameImg, japaneseLetters: '袈裟固' },
    { name: 'Kata-Gatame', imageSrc: kataGatameImg, japaneseLetters: '肩固' },
    { name: 'Kuzure-Shiho-Gatame', imageSrc: kuzureKamiShihoGatameImg, japaneseLetters: '三角固' },
    { name: 'Tate-Shiho-Gatame', imageSrc: tateShihoGatameImg, japaneseLetters: '縦四方固' },
    { name: 'Do-Jime', imageSrc: doJimeImg, japaneseLetters: '胴絞' },
    { name: 'Gyak-Joji-Jime', imageSrc: gyakuJujiJimeImg, japaneseLetters: '逆十字絞' },
    { name: 'Ryo-Te-Jime', imageSrc: ryoTeJimeImg, japaneseLetters: '両手絞' },
    { name: 'Tsukkomi-Jime', imageSrc: tsukkomiJimeImg, japaneseLetters: '突込絞' },
    { name: 'Ashi-Garami', imageSrc: ashiGaramiImg, japaneseLetters: '足緘' },
    { name: 'Ude-Garami', imageSrc: udeGaramiImg, japaneseLetters: '腕緘' },
    { name: 'Ude-Hishigi-Sankaku-Gatame', imageSrc: udeHishigiSankakuGatameImg, japaneseLetters: '腕挫三角固' },
    { name: 'Ude-Hishigi-Waki-Gatame', imageSrc: udeHishigiWakiGatameImg, japaneseLetters: '腕挫腋固' },
  ];

  return (
    <div className="techniques-container" aria-labelledby="techniques-title">
      <div className="techniques-wrapper">
        <div className="category" aria-labelledby="nage-waza-title">
          <div className="title-category">
            <h2 id="nage-waza-title">NAGE-WAZA</h2>
            <div className="japanese-title" aria-hidden="true">
              <span>投げ技</span>
            </div>
          </div>
          <span>Técnicas de Projeção</span>
          <div className="techniques-layout">
            <div className="techniques-list">
              {nageWazaTechniques.map((technique, index) => (
                <TechniqueCard
                  key={index}
                  name={technique.name}
                  imageSrc={technique.imageSrc}
                  japaneseLetters={technique.japaneseLetters}
                  description={technique.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="category" aria-labelledby="katame-waza-title">
          <div className="title-category">
            <h2 id="katame-waza-title">KATAME-WAZA</h2>
            <div className="japanese-title" aria-hidden="true">
              <span>固め技</span>
            </div>
          </div>
          <span>Técnicas de Solo</span>
          <div className="techniques-layout">
            <div className="techniques-list">
              {katameWazaTechniques.map((technique, index) => (
                <TechniqueCard
                  key={index}
                  name={technique.name}
                  imageSrc={technique.imageSrc}
                  japaneseLetters={technique.japaneseLetters}
                  description={technique.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techniques;
