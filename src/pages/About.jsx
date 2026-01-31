import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

export default function About() {
    useRevealOnScroll();

    return (
        <div>
            <PageHeader
                title="Hakkımızda"
                description="Mühendislikte yenilikçi ve sürdürülebilir bir gelecek için çalışıyoruz."
            />

            <div className="container">
                <Section id="about-content">
                    <p className="lead-text" data-reveal>
                        SEIS, mühendislik öğrencilerinin teknik, kişisel ve uluslararası gelişimini destekleyen bir topluluktur.
                        Üyelerimize mühendislik alanındaki güncel gelişmeleri takip etme, ulusal ve uluslararası etkinliklere katılma,
                        proje geliştirme ve farklı kültürlerden insanlarla iş birliği yapma fırsatları sunuyoruz.
                    </p>
                    <div style={{ marginTop: '2rem' }} data-reveal>
                        <h3>Değerlerimiz</h3>
                        <ul style={{ listStyle: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                            <li>Sürekli Gelişim</li>
                            <li>Takım Ruhu</li>
                            <li>Yenilikçilik</li>
                            <li>Toplumsal Sorumluluk</li>
                        </ul>
                    </div>
                </Section>
            </div>
        </div>
    );
}
