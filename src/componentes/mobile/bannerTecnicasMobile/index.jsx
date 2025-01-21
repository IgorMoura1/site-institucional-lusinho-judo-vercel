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
                <header className="text_techniques">
                    <Typography
                        variant="h2"
                        id="techniques-hero-title"
                        sx={{ fontSize: '36px', fontWeight: 'bold' }}
                    >
                        TÉCNICAS DO JUDÔ
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        sx={{ fontSize: '10px', color: 'text.secondary' }}
                    >
                        Podemos dividir as técnicas do judô em 2 grandes grupos:
                    </Typography>
                </header>
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
