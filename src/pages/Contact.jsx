import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    useRevealOnScroll();
    useDocumentTitle("İletişim");

    return (
        <div>
            <PageHeader
                title="İletişim"
                description="Bize ulaşın, sorularınızı yanıtlayalım."
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
                        <h3>E-posta</h3>
                        <p>Genel sorularınız ve işbirlikleri için:</p>
                        <a href="mailto:info@infoseis.com" style={{ color: '#00ccff', fontWeight: 'bold' }}>info@infoseis.com</a>
                    </div>

                    <div className="card" data-reveal>
                        <FaMapMarkerAlt size={40} color="#0056b3" style={{ marginBottom: '1rem' }} />
                        <h3>Adres</h3>
                        <p>Sakarya Üniversitesi, Esentepe Kampüsü</p>
                        <p>Serdivan / Sakarya</p>
                    </div>

                    <div className="card" data-reveal>
                        <FaInstagram size={40} color="#0056b3" style={{ marginBottom: '1rem' }} />
                        <h3>Sosyal Medya</h3>
                        <p>Etkinliklerimizden haberdar olmak için bizi takip edin.</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                            <a href="https://instagram.com/seis_eu" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FaInstagram /> Instagram
                            </a>
                            <a href="https://www.linkedin.com/company/sakarya-engineering-innovation-society-seis/" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FaLinkedin /> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
