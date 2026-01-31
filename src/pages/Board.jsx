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

export default function Board() {
    useRevealOnScroll();
    useDocumentTitle("Yönetim Kurulu");

    return (
        <div>
            <PageHeader
                title="Yönetim Kurulu"
                description="Kulübümüzün stratejik kararlarını alan yönetim kadrosu."
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
        </div>
    );
}
