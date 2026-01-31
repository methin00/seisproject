import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Card from "../components/Card";
import CardGrid from "../components/CardGrid";

// Dummy Data
const upcomingEvents = [
    { title: "Teknoloji Zirvesi 2026", date: "15 Mayıs 2026", desc: "Sektör liderlerinin katılımıyla gerçekleşecek büyük teknoloji buluşması." },
    { title: "React Workshop", date: "22 Mayıs 2026", desc: "Modern web geliştirme üzerine uygulamalı eğitim." },
];

const pastEvents = [
    { title: "Kariyer Günleri '25", date: "10 Kasım 2025", desc: "Profesyonel ağınızı genişletme fırsatı bulduğumuz etkinlik." },
    { title: "Hackathon 2025", date: "25 Ekim 2025", desc: "48 saat süren kodlama maratonu ve harika projeler." },
    { title: "Yapay Zeka Semineri", date: "15 Eylül 2025", desc: "AI dünyasındaki son gelişmelerin konuşulduğu seminer." },
];

export default function Events() {
    useRevealOnScroll();
    useDocumentTitle("Etkinlikler");

    return (
        <div>
            <PageHeader
                title="Etkinlikler"
                description="Teknoloji, kariyer ve sosyal alanda düzenlediğimiz etkinlikler."
            />

            {/* Gelecek Etkinlikler */}
            <Section id="upcoming-events" title="Gelecek Etkinlikler">
                {upcomingEvents.length > 0 ? (
                    <CardGrid>
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="card" data-reveal style={{ borderLeft: '4px solid #2563EB' }}>
                                <span style={{ display: 'block', fontSize: '0.9rem', color: '#64748B', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                    {event.date}
                                </span>
                                <h3>{event.title}</h3>
                                <p>{event.desc}</p>
                            </div>
                        ))}
                    </CardGrid>
                ) : (
                    <p style={{ textAlign: 'center', color: '#64748B' }}>Şu an planlanmış yeni bir etkinlik bulunmamaktadır. Takipte kalın!</p>
                )}
            </Section>

            {/* Geçmiş Etkinlikler */}
            <Section id="past-events" title="Geçmiş Etkinlikler" style={{ backgroundColor: '#F8FAFC' }}>
                <CardGrid>
                    {pastEvents.map((event, index) => (
                        <div key={index} className="card" data-reveal style={{ opacity: 0.8 }}>
                            <span style={{ display: 'block', fontSize: '0.9rem', color: '#94A3B8', marginBottom: '0.5rem' }}>
                                {event.date}
                            </span>
                            <h3 style={{ fontSize: '1.3rem', color: '#475569' }}>{event.title}</h3>
                            <p style={{ color: '#64748B' }}>{event.desc}</p>
                        </div>
                    ))}
                </CardGrid>
            </Section>
        </div>
    );
}
