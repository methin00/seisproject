import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import Footer from "../components/Footer";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import "../styles/seis.css";

export default function SeisLanding() {
    useRevealOnScroll();

    const handleApplyClick = () => {
        alert("Üyelik formu yakında aktif olacak!");
    };

    return (
        <div>
            <Header />
            <Hero />

            {/* Hakkında */}
            <Section
                id="hakkinda"
                title="Hakkımızda"
                lead={
                    "SEIS, mühendislik öğrencilerinin teknik, kişisel ve uluslararası gelişimini destekleyen bir topluluktur. Üyelerimize mühendislik alanındaki güncel gelişmeleri takip etme, ulusal ve uluslararası etkinliklere katılma, proje geliştirme ve farklı kültürlerden insanlarla iş birliği yapma fırsatları sunuyoruz."
                }
            />

            {/* Misyon & Vizyon */}
            <Section id="misyon-vizyon" title="Misyon & Vizyon">
                <CardGrid>
                    <Card
                        title="Misyonumuz"
                        text="Öğrencilerin teknik bilgi, liderlik, iletişim ve takım çalışması becerilerini geliştirebilecekleri bir ortam yaratmak; mühendislikte yenilikçi ve sürdürülebilir çözümler üretmelerine destek olmak."
                    />
                    <Card
                        title="Vizyonumuz"
                        text="Sakarya Üniversitesi’ni ulusal ve uluslararası platformlarda mühendislikte öncü bir marka haline getirmek ve geleceğin lider mühendislerini yetiştirmek."
                    />
                </CardGrid>
            </Section>

            {/* BEST */}
            <Section
                id="best"
                title="BEST Hakkında"
                lead={
                    "BEST (Board of European Students of Technology), Avrupa genelindeki mühendislik öğrencilerini bir araya getiren uluslararası bir organizasyondur. Öğrencilere kültürel değişim, teknik kurslar, kariyer fırsatları ve geniş bir sosyal ağ sunar.\n SEIS olarak, BEST’e Observer (Gözlemci) üye olmak için resmi başvuru sürecimizi yürütüyoruz. Bu süreçte amacımız, topluluğumuzu Avrupa çapında temsil etmek, öğrencilerimize uluslararası etkinliklere katılma imkânı sağlamak ve global arenada kendilerini geliştirebilecekleri bir yapı oluşturmaktır."
                }
            />

            {/* Etkinlikler */}
            <Section id="etkinlikler" title="Etkinlikler">
                <CardGrid>
                    <Card title="Teknoloji Zirvesi 2025" text="Alanında uzman konuşmacılarla teknoloji trendlerini keşfedeceğimiz büyük buluşma." />
                    <Card title="MUN’26 – Model United Nations
" text="SEIS olarak düzenleyeceğimiz MUN’26 etkinliğinde; öğrenciler uluslararası diplomasi, kriz yönetimi ve müzakere becerilerini deneyimleyecekleri komitelerde bir araya geliyor." />
                    <Card title="Atölye & Workshop" text="Pratik mühendislik becerileri kazanmanız için uygulamalı eğitimler." />
                </CardGrid>
            </Section>

            {/* Üye Ol */}
            <Section
                id="uye-ol"
                title="Üye Ol"
                lead="SEIS ailesine katılmak, etkinliklere katılmak ve kendini geliştirmek için başvurunu hemen yap."
            >
                <div style={{ textAlign: "center", marginTop: 16 }}>
                    <button className="btn" onClick={handleApplyClick}>Başvuru Yap</button>
                </div>
            </Section>

            {/* İletişim */}
            <Section id="iletisim" title="İletişim">
                <p className="section__lead" data-reveal>
                    E-posta: <a href="mailto:info@infoseis.com">info@infoseis.com</a>
                </p>
                <p className="section__lead" data-reveal>
                    Instagram: <a href="https://instagram.com/seis_eu" target="_blank" rel="noreferrer">@seis_eu</a>
                </p>
            </Section>

            <Footer />
        </div>
    );
}