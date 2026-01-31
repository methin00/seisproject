import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Section from "../components/Section";
import CardGrid from "../components/CardGrid";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import SEO from "../components/SEO";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
    useRevealOnScroll();
    const { t } = useLanguage();

    return (
        <div>
            <SEO
                title={t('seo.home.title')}
                description={t('seo.home.description')}
                keywords={t('seo.home.keywords')}
            />
            <Hero />

            <Section id="welcome" title={t('home.welcomeTitle')} lead={t('home.welcomeLead')}>
                <CardGrid>
                    <div className="card" data-reveal>
                        <h3>{t('home.cards.about.title')}</h3>
                        <p>{t('home.cards.about.text')}</p>
                        <Link to="/hakkimizda" className="btn btn-secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>{t('home.cards.about.btn')}</Link>
                    </div>
                    <div className="card" data-reveal>
                        <h3>{t('home.cards.events.title')}</h3>
                        <p>{t('home.cards.events.text')}</p>
                        <Link to="/etkinlikler" className="btn btn-secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>{t('home.cards.events.btn')}</Link>
                    </div>
                    <div className="card" data-reveal>
                        <h3>{t('home.cards.join.title')}</h3>
                        <p>{t('home.cards.join.text')}</p>
                        <Link to="/basvuru" className="btn btn-secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>{t('home.cards.join.btn')}</Link>
                    </div>
                </CardGrid>
            </Section>
        </div>
    );
}
