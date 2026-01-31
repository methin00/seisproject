import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

export default function MissionVision() {
    useRevealOnScroll();

    return (
        <div>
            <PageHeader
                title="Misyon & Vizyon"
                description="Amacımız ve hedeflediğimiz gelecek."
            />

            <Section id="misyon-vizyon">
                <CardGrid>
                    <Card
                        title="Misyonumuz"
                        text="Öğrencilerin teknik bilgi, liderlik, iletişim ve takım çalışması becerilerini geliştirebilecekleri bir ortam yaratmak; mühendislikte yenilikçi ve sürdürülebilir çözümler üretmelerine destek olmak. Küresel ölçekte rekabet edebilecek donanımlı bireyler yetiştirmek için gereken tüm imkanları sağlamak."
                    />
                    <Card
                        title="Vizyonumuz"
                        text="Sakarya Üniversitesi’ni ulusal ve uluslararası platformlarda mühendislikte öncü bir marka haline getirmek ve geleceğin lider mühendislerini yetiştirmek. Teknolojiyi sadece tüketen değil, aynı zamanda üreten ve yön veren bir topluluk olmak."
                    />
                </CardGrid>

                <div style={{ marginTop: '4rem', textAlign: 'center' }} data-reveal>
                    <h3>Stratejik Hedeflerimiz</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                        <div className="card">
                            <h4>Eğitimde Kalite</h4>
                            <p>Sektörün ihtiyaç duyduğu yetkinliklere yönelik eğitimler düzenlemek.</p>
                        </div>
                        <div className="card">
                            <h4>Sektör İşbirlikleri</h4>
                            <p>Öncü firmalarla ortak projeler ve staj imkanları geliştirmek.</p>
                        </div>
                        <div className="card">
                            <h4>Sosyal Sorumluluk</h4>
                            <p>Mühendislik çözümleriyle toplumsal fayda sağlayan projeler üretmek.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
