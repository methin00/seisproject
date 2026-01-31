import React from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import useDocumentTitle from "../hooks/useDocumentTitle";

const boardMembers = [
    { name: "Ensar Davut", role: "President", img: "https://via.placeholder.com/200", bio: "ensar.davut@infoseis.com" },
    { name: "Gökhan Batın Uygun", role: "Vice President", img: "https://via.placeholder.com/200", bio: "gokhan.uygun@infoseis.com" },
    { name: "Gürsel Gecir", role: "Recruitment & Development Executive", img: "https://via.placeholder.com/200", bio: "gursel.gecir@infoseis.com" },
    { name: "Enes Ataman", role: "Event Coordinator", img: "https://via.placeholder.com/200", bio: "enes.ataman@infoseis.com" },
    { name: "Halil Bodur", role: "Fundraising Coordinator", img: "https://via.placeholder.com/200", bio: "halil.bodur@infoseis.com" },
];

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

            <Section id="board" title="Yönetim Kurulu">
                <div className="card-grid" style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {boardMembers.map((member, index) => (
                        <div key={index} className="card board-card" data-reveal style={{
                            textAlign: 'center',
                            padding: '3rem 2rem',
                            border: '1px solid #bfdbfe',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                        }}>
                            <div style={{
                                width: '150px',
                                height: '150px',
                                borderRadius: '50%',
                                backgroundColor: '#e0f2fe',
                                margin: '0 auto 1.5rem',
                                overflow: 'hidden',
                                border: '4px solid #fff',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                            }}>
                                {/* Placeholder for member image */}
                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0056b3', fontSize: '3rem', fontWeight: 'bold' }}>
                                    {member.name.charAt(0)}
                                </div>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1e40af' }}>{member.name}</h3>
                            <p style={{ fontWeight: 'bold', color: '#0056b3', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{member.role}</p>
                            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>{member.bio}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section id="team-members" title="Ekip Üyeleri" style={{ backgroundColor: '#f8fafc' }}>
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
