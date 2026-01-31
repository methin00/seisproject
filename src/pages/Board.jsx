import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import MemberDialog from "../components/MemberDialog";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useLanguage } from "../context/LanguageContext";

const boardMembers = [
    {
        id: "ensarDavut",
        name: "Ensar Davud",
        role: "president",
        department: "Elektrik Elektronik Mühendisliği",
        email: "Mailim de ensar.davud@ogr.sakarya.edu.tr",
        img: "https://via.placeholder.com/200",
        bio: "Mailim de ensar.davud@ogr.sakarya.edu.tr"
    },
    {
        id: "gokhanBatinUygun",
        name: "Gökhan Batın Uygun",
        role: "vicePresident",
        department: "Elektrik Elektronik Mühendisliği",
        email: "gokhan.uygun@ogr.sakarya.edu.tr",
        img: "https://via.placeholder.com/200",
        bio: "gokhan.uygun@ogr.sakarya.edu.tr"
    },
    {
        id: "gurselGecir",
        name: "Gürsel Gecir",
        role: "hr",
        department: "Elektrik Elektronik Mühendisliği",
        email: "gursel.gecir@infoseis.com",
        img: "https://via.placeholder.com/200",
        bio: "gursel.gecir@infoseis.com"
    },
    {
        id: "enesAtaman",
        name: "Enes Ataman",
        role: "event",
        department: "Elektrik Elektronik Mühendisliği",
        email: "enes.ataman@infoseis.com",
        img: "https://via.placeholder.com/200",
        bio: "enes.ataman@infoseis.com"
    },
    {
        id: "halilBodur",
        name: "Halil Bodur",
        role: "fund",
        department: "Makine Mühendisliği",
        email: "halil.bodur@infoseis.com",
        img: "https://via.placeholder.com/200",
        bio: "halil.bodur@infoseis.com"
    },
];

export default function Board() {
    useRevealOnScroll();
    useDocumentTitle("Yönetim Kurulu");
    const [selectedMember, setSelectedMember] = useState(null);
    const { t } = useLanguage();

    const openMemberDetails = (member) => {
        setSelectedMember({
            ...member,
            about: t(`board.members.${member.id}.about`)
        });
    };

    const closeMemberDetails = () => {
        setSelectedMember(null);
    };

    return (
        <div>
            <PageHeader
                title={t('board.title')}
                description={t('board.description')}
            />

            <Section id="board" title={t('board.title')}>
                <div className="card-grid" style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {boardMembers.map((member, index) => (
                        <div
                            key={index}
                            className="card board-card clickable-card"
                            data-reveal
                            onClick={() => openMemberDetails(member)}
                            style={{
                                textAlign: 'center',
                                padding: '3rem 2rem',
                                border: '1px solid #bfdbfe',
                                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                            }}
                        >
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
                            <p style={{ fontWeight: 'bold', color: '#0056b3', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{t(`board.roles.${member.role}`)}</p>
                            <p style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '400' }}>{t('board.clickInfo')}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <MemberDialog
                member={selectedMember}
                isOpen={!!selectedMember}
                onClose={closeMemberDetails}
            />
        </div>
    );
}
