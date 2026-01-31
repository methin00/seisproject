import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import { useLanguage } from "../context/LanguageContext";
import Card from "../components/Card";
import CardGrid from "../components/CardGrid";

export default function About() {
    useRevealOnScroll();
    const { t } = useLanguage();

    const aboutContent = t('about.content');
    const valuesList = t('about.valuesList');

    return (
        <div>
            <PageHeader
                title={t('about.title')}
                description={t('about.description')}
            />

            <div className="container">
                <Section id="about-content">
                    <div data-reveal className="about-text-container" style={{ marginBottom: '3rem' }}>
                        {Array.isArray(aboutContent) && aboutContent.map((paragraph, index) => (
                            <p key={index} className="lead-text" style={{ marginBottom: '1.5rem', textAlign: 'justify' }}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div style={{ marginTop: '4rem' }} data-reveal>
                        <h3 className="section__title">{t('about.valuesTitle')}</h3>
                        <p className="section__lead">{t('about.valuesIntro')}</p>

                        <CardGrid>
                            {valuesList && valuesList.map((value, index) => (
                                <Card
                                    key={index}
                                    title={value.title}
                                    text={value.desc}
                                />
                            ))}
                        </CardGrid>
                    </div>
                </Section>
            </div>
        </div>
    );
}
