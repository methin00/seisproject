import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import MemberDialog from "../components/MemberDialog";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import SEO from "../components/SEO";
import { useLanguage } from "../context/LanguageContext";

const teamMembers = [
    {
        id: "beratKaanAydin",
        name: "Berat Kaan Aydın",
        role: "Discipline & Internal Relations Executive",
        department: "Elektrik Elektronik Mühendisliği",
        email: "berat.aydin@infoseis.com",
    },
    {
        id: "metinCakmak",
        name: "Metin Çakmak",
        role: "IT Coordinator",
        department: "Yazılım Mühendisliği",
        email: "metin-cakmak2005@hotmail.com",
    },
    {
        id: "esadBal",
        name: "Esad Bal",
        role: "Innovation & Project Development Specialist",
        department: "Elektrik Elektronik Mühendisliği",
        email: "esad.bal@infoseis.com",
    },
    {
        id: "mehmetZahidGorgec",
        name: "Mehmet Zahid Görgeç",
        role: "UI/UX & Digital Experience Specialist",
        department: "Bilgisayar Mühendisliği",
        email: "mehmet.gorgec@infoseis.com",
    },
    {
        id: "zeynepCenik",
        name: "Zeynep Cenik",
        role: "PR Coordinator",
        department: "Kimya",
        email: "zeynep.cenik@infoseis.com",
    },
    {
        id: "yagmurKarakaya",
        name: "Yağmur Karakaya",
        role: "Social Media Executive",
        department: "Kimya",
        email: "yagmur.karakaya@infoseis.com",
    },
    {
        id: "aleynaKaya",
        name: "Aleyna Kaya",
        role: "Design & Copywriting Executive",
        department: "Yeni Medya ve İletişim",
        email: "aleyna.kaya@infoseis.com",
    },
    {
        id: "emreTurk",
        name: "Emre Türk",
        role: "Operations & Coordination Executive",
        department: "Bilgisayar Mühendisliği",
        email: "emre.turk@infoseis.com",
    },
    {
        id: "senanurBektas",
        name: "Senanur Bektaş",
        role: "External Relations & Corporate Communications Coordinator",
        department: "İngilizce Mütercim ve Tercümanlık",
        email: "senanur.bektas@infoseis.com",
    },
    {
        id: "yagmurAktas",
        name: "Yağmur Aktaş",
        role: "Event Documentation & Coordination",
        department: "İngilizce Mütercim ve Tercümanlık",
        email: "yagmur.aktas@infoseis.com",
    },
];

export default function Team() {
    useRevealOnScroll();
    const [selectedMember, setSelectedMember] = useState(null);
    const { t } = useLanguage();

    const openMemberDetails = (member) => {
        setSelectedMember({
            ...member,
            about: t(`team.members.${member.id}.about`)
        });
    };

    const closeMemberDetails = () => {
        setSelectedMember(null);
    };

    return (
        <div>
            <SEO
                title={t('seo.team.title')}
                description={t('seo.team.description')}
                keywords={t('seo.team.keywords')}
            />
            <PageHeader
                title={t('team.title')}
                description={t('team.description')}
            />

            <Section id="team-members" title={t('team.sectionTitle')}>
                <div className="card-grid" style={{
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="card team-card clickable-card"
                            data-reveal
                            onClick={() => openMemberDetails(member)}
                            style={{
                                textAlign: 'center',
                                padding: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
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
                            <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.5rem', fontWeight: '400' }}>{t('team.clickInfo')}</p>
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
