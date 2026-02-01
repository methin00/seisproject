import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import SEO from "../components/SEO";
import { useLanguage } from "../context/LanguageContext";

export default function Apply() {
    useRevealOnScroll();
    const { t } = useLanguage();

    const handleApplyClick = () => {
        window.location.href = "https://kulup.infoseis.com/register";
    };

    const whyList = t('applyPage.whyList');

    return (
        <div>
            <SEO
                title={t('applyPage.seo.title')}
                description={t('applyPage.seo.description')}
                keywords={t('applyPage.seo.keywords')}
            />
            <PageHeader
                title={t('applyPage.title')}
                description={t('applyPage.description')}
            />

            <Section id="apply">
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    backgroundColor: '#fff',
                    padding: '3rem',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    textAlign: 'center'
                }} data-reveal>
                    <h2 style={{ color: '#0056b3', marginBottom: '1.5rem' }}>{t('applyPage.whyTitle')}</h2>
                    <ul style={{ textAlign: 'left', marginBottom: '2rem', lineHeight: '1.8' }}>
                        {Array.isArray(whyList) && whyList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                        {t('applyPage.ctaText')}
                    </p>

                    <button className="btn btn-primary" onClick={handleApplyClick} style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
                        {t('applyPage.btnText')}
                    </button>

                    <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#777' }}>
                        {t('applyPage.contactText')} <a href="mailto:info@infoseis.com" style={{ color: '#00ccff' }}>info@infoseis.com</a>
                    </p>
                </div>
            </Section>
        </div>
    );
}
