import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import { useLanguage } from "../context/LanguageContext";

const sponsors = [
    "Sponsor 1", "Sponsor 2", "Sponsor 3", "Sponsor 4",
    "Sponsor 5", "Sponsor 6", "Sponsor 7", "Sponsor 8"
];

export default function Sponsors() {
    useRevealOnScroll();
    const { t } = useLanguage();

    return (
        <div>
            <PageHeader
                title={t('sponsors.title')}
                description={t('sponsors.description')}
            />

            <Section id="sponsors">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '2rem',
                    textAlign: 'center'
                }}>
                    {sponsors.map((sponsor, index) => (
                        <div key={index} data-reveal style={{
                            padding: '2rem',
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            backgroundColor: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '120px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}>
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#aaa' }}>{sponsor} Logo</span>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }} data-reveal>
                    <h3>{t('sponsors.becomeSponsorTitle')}</h3>
                    <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
                        {t('sponsors.becomeSponsorText')}
                    </p>
                    <a href="mailto:info@infoseis.com" className="btn btn-primary">{t('sponsors.contactBtn')}</a>
                </div>
            </Section>
        </div>
    );
}
