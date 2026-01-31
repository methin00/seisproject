import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import useDocumentTitle from "../hooks/useDocumentTitle";

const teamMembers = [
    { name: "Berat Kaan Aydın", role: "Discipline & Internal Relations Executive" },
    { name: "Metin Çakmak", role: "IT Coordinator" },
    { name: "Esad Bal", role: "Innovation & Project Development Specialist" },
    { name: "Mehmet Zahid Görgeç", role: "UI/UX & Digital Experience Specialist" },
    { name: "Zeynep Cenik", role: "PR Coordinator" },
    { name: "Yağmur Karakaya", role: "Social Media Executive" },
    { name: "Aleyna Kaya", role: "Design & Copywriting Executive" },
    { name: "Emre Türk", role: "Operations & Coordination Executive" },
    { name: "Senanur Bektaş", role: "CCER Coordinator" },
    { name: "Yağmur Aktaş", role: "Event Documentation & Coordination" },
];

export default function Team() {
    useRevealOnScroll();
    useDocumentTitle("Ekibimiz");

    return (
        <div>
            <PageHeader
                title="Ekibimiz"
                description="Yenilikçi projelerin arkasındaki dinamik kadro."
            />

            <Section id="team-members" title="Ekip Üyeleri">
                <div className="card-grid" style={{
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="card team-card" data-reveal style={{
                            textAlign: 'center',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: '#f1f5f9',
                                marginBottom: '1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#94a3b8',
                                fontSize: '1.5rem',
                                fontWeight: '600'
                            }}>
                                {member.name.charAt(0)}
                            </div>
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: '#334155' }}>{member.name}</h4>
                            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
