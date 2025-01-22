import React from 'react';
import { Container, Typography } from '@mui/material';
import Tecnicas from '../tecnicasMobile';
import './styles.css';

export default function TecnicaHero() {
    return (
        <div
            component="main"
            className="container_tecniqueHero"
            role="region"
            aria-labelledby="techniques-hero-title"
        >
            <div className="image_hero_content">
                <div className="text_techniques">
                    <h1>TÉCNICAS DO JUDÔ</h1>
                    <p>Podemos dividir as técnicas do judô em 2 grandes grupos:</p>
                </div>
            </div>
            <section aria-labelledby="techniques-section-title">
                <Typography variant="h2" id="techniques-section-title" sx={{ display: 'none' }}>
                    Lista de Técnicas
                </Typography>
                <Tecnicas />
            </section>
        </div>
    );
}
