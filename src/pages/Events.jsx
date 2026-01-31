import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import SEO from "../components/SEO";
import CardGrid from "../components/CardGrid";
import { useLanguage } from "../context/LanguageContext";

export default function Events() {
    useRevealOnScroll();
    const { t } = useLanguage();

    const upcomingEvents = t('eventsPage.upcoming');
    const pastEvents = t('eventsPage.past');

    return (
        <div>
            <SEO
                title={t('seo.events.title')}
                description={t('seo.events.description')}
                keywords={t('seo.events.keywords')}
            />
            <PageHeader
                title={t('eventsPage.title')}
                description={t('eventsPage.description')}
            />

            {/* Gelecek Etkinlikler */}
            <Section id="upcoming-events" title={t('eventsPage.upcomingTitle')}>
                {upcomingEvents && upcomingEvents.length > 0 ? (
                    <CardGrid>
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="card" data-reveal style={{ borderLeft: '4px solid #2563EB' }}>
                                <h3>{event.title}</h3>
                                <p>{event.desc}</p>
                            </div>
                        ))}
                    </CardGrid>
                ) : (
                    <p style={{ textAlign: 'center', color: '#64748B' }}>{t('eventsPage.noEvents')}</p>
                )}
            </Section>

            {/* Geçmiş Etkinlikler */}
            <Section id="past-events" title={t('eventsPage.pastTitle')} style={{ backgroundColor: '#F8FAFC' }}>
                <CardGrid>
                    {pastEvents && pastEvents.map((event, index) => (
                        <div key={index} className="card" data-reveal style={{ opacity: 0.8 }}>
                            <h3 style={{ fontSize: '1.3rem', color: '#475569' }}>{event.title}</h3>
                            <p style={{ color: '#64748B' }}>{event.desc}</p>
                        </div>
                    ))}
                </CardGrid>
            </Section>
        </div>
    );
}
