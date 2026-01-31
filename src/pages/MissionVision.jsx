import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import { useLanguage } from "../context/LanguageContext";

export default function MissionVision() {
    useRevealOnScroll();
    const { t } = useLanguage();

    return (
        <div>
            <PageHeader
                title={t('missionVision.title')}
                description={t('missionVision.description')}
            />

            <Section id="misyon-vizyon">
                <CardGrid>
                    <Card
                        title={t('missionVision.missionTitle')}
                        text={t('missionVision.missionText')}
                    />
                    <Card
                        title={t('missionVision.visionTitle')}
                        text={t('missionVision.visionText')}
                    />
                </CardGrid>

                <div style={{ marginTop: '4rem', textAlign: 'center' }} data-reveal>
                    <h3>{t('missionVision.strategicGoalsTitle')}</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                        <div className="card">
                            <h4>{t('missionVision.goals.qualityEducationTitle')}</h4>
                            <p>{t('missionVision.goals.qualityEducationText')}</p>
                        </div>
                        <div className="card">
                            <h4>{t('missionVision.goals.cooperationTitle')}</h4>
                            <p>{t('missionVision.goals.cooperationText')}</p>
                        </div>
                        <div className="card">
                            <h4>{t('missionVision.goals.socialResponsibilityTitle')}</h4>
                            <p>{t('missionVision.goals.socialResponsibilityText')}</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
