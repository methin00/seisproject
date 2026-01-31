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

    return (
        <div>
            <SEO
                title={t('seo.contact.title') + " - Başvuru"}
                description="SEIS ailesine katılmak için başvuru yapın. Geleceğin mühendisleri arasına katılın."
                keywords="Başvuru, Üye Ol, Kayıt Formu"
            />
            <PageHeader
                title="Başvuru Yap"
                description="SEIS ailesinin bir parçası olmak için ilk adımı atın."
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
                    <h2 style={{ color: '#0056b3', marginBottom: '1.5rem' }}>Neden SEIS?</h2>
                    <ul style={{ textAlign: 'left', marginBottom: '2rem', lineHeight: '1.8' }}>
                        <li>🚀 Aktif projelerde yer alma imkanı</li>
                        <li>🤝 Geniş bir network ağı</li>
                        <li>🎓 Teknik ve mesleki eğitimler</li>
                        <li>🌍 Uluslararası etkinliklere katılım</li>
                        <li>🎉 Sosyal aktiviteler ve eğlenceli kulüp ortamı</li>
                    </ul>

                    <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
                        Aşağıdaki butona tıklayarak başvuru formuna ulaşabilir ve kayıt işleminizi gerçekleştirebilirsiniz.
                    </p>

                    <button className="btn btn-primary" onClick={handleApplyClick} style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
                        Başvuru Formuna Git
                    </button>

                    <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#777' }}>
                        Sorularınız için <a href="mailto:info@infoseis.com" style={{ color: '#00ccff' }}>info@infoseis.com</a> adresinden bize ulaşabilirsiniz.
                    </p>
                </div>
            </Section>
        </div>
    );
}
