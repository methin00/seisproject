import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import MemberDialog from "../components/MemberDialog";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useLanguage } from "../context/LanguageContext";

const boardMembers = [
    {
        name: "Ensar Davut",
        role: "president",
        department: "Elektrik Elektronik Mühendisliği",
        email: "Mailim de ensar.davud@ogr.sakarya.edu.tr",
        about: "Ensar Davud, Sakarya Üniversitesi Elektrik-Elektronik Mühendisliği öğrencisi ve Sakarya Engineering & Innovation Society (SEIS)’in kurucusu ile 1. dönem başkanıdır. SEIS’i; öğrencilerin yalnızca akademik değil, aynı zamanda vizyon, liderlik ve üretkenlik açısından da gelişebileceği bir yapı oluşturmak amacıyla kurmuştur. Hedefi, öğrencileri potansiyellerini keşfeden, sorumluluk alan ve kariyerlerini bilinçli şekilde inşa eden bireyler haline getirmektir.",
        img: "https://via.placeholder.com/200",
        bio: "Mailim de ensar.davud@ogr.sakarya.edu.tr"
    },
    {
        name: "Gökhan Batın Uygun",
        role: "vicePresident",
        department: "Elektrik Elektronik Mühendisliği",
        email: "gokhan.uygun@ogr.sakarya.edu.tr",
        about: "İstanbul doğumlu, Karadenizli bir EEM öğrencisi ve SEIS Başkan Yardımcısı. Mühendislik eğitimini futbol ve fitness ile kazandığı disiplinle destekleyen; enerjisini ve teknik vizyonunu kulübünün geleceği için kullanan bir teknoloji tutkunu.",
        img: "https://via.placeholder.com/200",
        bio: "gokhan.uygun@ogr.sakarya.edu.tr"
    },
    {
        name: "Gürsel Gecir",
        role: "hr",
        department: "Elektrik Elektronik Mühendisliği",
        email: "gursel.gecir@infoseis.com",
        about: "İnsan kaynakları ve yetenek yönetimi süreçlerini yönetmektedir. Yeni üyelerin adaptasyonu ve kişisel gelişimleri için eğitimler düzenler. Ekip dinamiklerini analiz ederek verimliliği artırmayı hedefler. Kariyer planlaması ve mentorluk konularında deneyimlidir. Pozitif bir çalışma ortamı oluşturmak için çaba sarf etmektedir.",
        img: "https://via.placeholder.com/200",
        bio: "gursel.gecir@infoseis.com"
    },
    {
        name: "Enes Ataman",
        role: "event",
        department: "Elektrik Elektronik Mühendisliği",
        email: "enes.ataman@infoseis.com",
        about: "Etkinlik planlama ve uygulama süreçlerinin lideridir. Sosyal ve teknik etkinliklerin baştan sona koordinasyonunu sağlar. Sponsorluk ve lojistik süreçlerini titizlikle yönetir. Yaratıcı konseptler geliştirerek unutulmaz deneyimler yaratmayı hedefler. Kriz yönetimi ve bütçe planlaması konularında uzmandır.",
        img: "https://via.placeholder.com/200",
        bio: "enes.ataman@infoseis.com"
    },
    {
        name: "Halil Bodur",
        role: "fund",
        department: "Makine Mühendisliği",
        email: "halil.bodur@infoseis.com",
        about: "Kulübün finansal sürdürülebilirliğini sağlamak için kaynak geliştirir. Sponsorluk ilişkilerini yönetir ve yeni ortaklıklar kurar. Bütçe yönetimi ve finansal raporlama konularında sorumluluk alır. Stratejik ortaklıklar aracılığıyla projelerimize değer katar. Girişimci ruhuyla yeni fon kaynakları yaratma konusunda başarılıdır.",
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
        setSelectedMember(member);
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
