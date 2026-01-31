import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
    useRevealOnScroll();
    useDocumentTitle("İletişim");
    const { t } = useLanguage();

    return (
        <div>
            <PageHeader
                title={t('contact.title')}
                description={t('contact.description')}
            />

            <Section id="contact-content">
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    display: 'grid',
                    gap: '2rem',
                    textAlign: 'center'
                }}>
                    <div className="card" data-reveal>
                        <FaEnvelope size={40} color="#0056b3" style={{ marginBottom: '1rem' }} />
                        <h3>{t('contact.emailTitle')}</h3>
                        <p>{t('contact.emailText')}</p>
                        <a href="mailto:info@infoseis.com" style={{ color: '#00ccff', fontWeight: 'bold' }}>info@infoseis.com</a>
                    </div>

                    <div className="card" data-reveal>
                        <FaMapMarkerAlt size={40} color="#0056b3" style={{ marginBottom: '1rem' }} />
                        <h3>{t('contact.addressTitle')}</h3>
                        <p>{t('contact.addressText1')}</p>
                        <p>{t('contact.addressText2')}</p>
                    </div>

                    <div className="card" data-reveal>
                        <FaInstagram size={40} color="#0056b3" style={{ marginBottom: '1rem' }} />
                        <h3>{t('contact.socialMediaTitle')}</h3>
                        <p>{t('contact.socialMediaText')}</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                            <a href="https://instagram.com/seis_eu" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FaInstagram /> <span className="social-text">Instagram</span>
                            </a>
                            <a href="https://www.linkedin.com/company/sakarya-engineering-innovation-society-seis/" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FaLinkedin /> <span className="social-text">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
