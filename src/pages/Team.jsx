import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import MemberDialog from "../components/MemberDialog";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { useLanguage } from "../context/LanguageContext";

const teamMembers = [
    {
        name: "Berat Kaan Aydın",
        role: "Discipline & Internal Relations Executive",
        department: "Elektrik Elektronik Mühendisliği",
        email: "berat.aydin@infoseis.com",
        about: "Ekip içi disiplin ve iç ilişkiler süreçlerinden sorumlu yöneticimiz. Üyeler arası iletişimi düzenlemekte ve kulüp içi kuralların işleyişini takip etmektedir. Adil ve şeffaf bir yönetim anlayışını benimser. Ekip ruhunu korumak ve geliştirmek için sosyal etkinlikler organize eder. Çözüm odaklı yaklaşımıyla iç huzuru sağlar."
    },
    {
        name: "Metin Çakmak",
        role: "IT Coordinator",
        department: "Yazılım Mühendisliği",
        email: "metin-cakmak2005@hotmail.com",
        about: "İstanbul doğumlu bir yazılım tutkunu olan Metin Çakmak, çocukluk yıllarından gelen teknoloji merakını zamanla profesyonel bir vizyona dönüştürmüştür. Web Geliştirme ve Veri Bilimi disiplinleri arasında güçlü bir köprü kuran Çakmak, SEIS IT Takım Lideri olarak ekibinin teknik kapasitesini dijital geleceğe yönelik projelerle yönetmektedir. Temel hedefi, teknik yetkinliklerini doğru liderlik stratejileriyle birleştirerek fark yaratan dijital deneyimler sunmaktır."
    },
    {
        name: "Esad Bal",
        role: "Innovation & Project Development Specialist",
        department: "Elektrik Elektronik Mühendisliği",
        email: "esad.bal@infoseis.com",
        about: "Sıradışı fikirlerin gerçeğe dönüşmesi için stratejiler geliştiren uzmanımız. Yenilikçi proje konseptleri tasarlar ve teknik fizibilite çalışmalarunu yürütür. Disiplinlerarası projelerde köprü görevi görür. Geleceğin teknolojilerine odaklanarak kulübümüzün Ar-Ge kapasitesini artırır. Yaratıcı düşünme metodolojilerini projelerimize uygular."
    },
    {
        name: "Mehmet Zahid Görgeç",
        role: "UI/UX & Digital Experience Specialist",
        department: "Bilgisayar Mühendisliği",
        email: "mehmet.gorgec@infoseis.com",
        about: "Kullanıcı deneyimi ve arayüz tasarımı konusundaki estetik vizyonuyla projelerimize değer katar. Kullanıcı dostu ve modern tasarımlar geliştirerek dijital etkileşimlerimizi güçlendirir. Marka kimliğimizin görsel dilini oluşturur. Piksellerin ötesinde, kullanıcıyı merkezine alan tasarım süreçlerini yönetir."
    },
    {
        name: "Zeynep Cenik",
        role: "PR Coordinator",
        department: "Kimya",
        email: "zeynep.cenik@infoseis.com",
        about: "Kulübümüzün dış dünyayla olan iletişim köprüsünü kuran koordinatörümüz. Marka bilinirliğini artırmak için stratejik iletişim planları hazırlar. Medya ilişkilerini yönetir ve kurumsal kimliğimizi temsil eder. Ağ kurma konusundaki yeteneğiyle kulübümüze yeni fırsatlar yaratır. Etkili iletişim teknikleriyle SEIS'i en iyi şekilde tanıtır."
    },
    {
        name: "Yağmur Karakaya",
        role: "Social Media Executive",
        department: "Kimya",
        email: "yagmur.karakaya@infoseis.com",
        about: "Sosyal medya platformlarımızdaki varlığımızı dinamik tutan yöneticimiz. İçerik ve etkileşim stratejileri geliştirerek topluluğumuzla sürekli bağ kurar. Güncel trendleri takip ederek yaratıcı paylaşımlar hazırlar. Analiz ve raporlama yaparak sosyal medya performansımızı optimize eder. Görsel ve metinsel uyumu yakalayarak marka algımızı güçlendirir."
    },
    {
        name: "Aleyna Kaya",
        role: "Design & Copywriting Executive",
        department: "Yeni Medya ve İletişim",
        email: "aleyna.kaya@infoseis.com",
        about: "Kelimelerin gücünü görsel tasarımla birleştiren yöneticimiz. İçerik üretimi ve metin yazarlığı süreçlerini yöneterek mesajımızı etkili kılar. Görsel tasarım ekibiyle koordineli çalışarak bütünsel bir iletişim dili oluşturur. Hikaye anlatıcılığı teknikleriyle markamıza ruh katar. Dilin estetiğini tasarımlarımıza yansıtır."
    },
    {
        name: "Emre Türk",
        role: "Operations & Coordination Executive",
        department: "Bilgisayar Mühendisliği",
        email: "emre.turk@infoseis.com",
        about: "Saha operasyonları ve lojistik koordinasyonunun kilit ismidir. Etkinliklerin operasyonel planlamasını yaparak kusursuz işleyişi sağlar. Kaynakların verimli kullanılması için planlamalar yapar. Kriz durumlarında hızlı aksiyon alma yeteneğiyle operasyonel riskleri minimize eder. Süreç yönetiminde titiz bir çalışma sergiler."
    },
    {
        name: "Senanur Bektaş",
        role: "External Relations & Corporate Communications Coordinator",
        department: "İngilizce Mütercim ve Tercümanlık",
        email: "senanur.bektas@infoseis.com",
        about: "Kurumsal kapasite ve dış ilişkiler koordinasyonunu yürütmektedir. İş birliği ağlarımızı genişleterek ortak projeler geliştirilmesi için çalışır. Stratejik ortaklıkların sürdürülebilirliğini sağlar. Kulübümüzün ekosistemdeki konumunu güçlendirecek adımlar atar. Profesyonel ağ yönetimi konusunda deneyimlidir."
    },
    {
        name: "Yağmur Aktaş",
        role: "Event Documentation & Coordination",
        department: "İngilizce Mütercim ve Tercümanlık",
        email: "yagmur.aktas@infoseis.com",
        about: "Etkinliklerimizin belgelenmesi ve koordinasyonunda aktif görev alır. Görsel ve işitsel arşivimizi oluşturarak tarihçemizi kayıt altına alır. Organizasyon anında akışı yöneterek ekibe destek olur. Prodüksiyon süreçlerini yöneterek etkinliklerimizin etkisini kalıcı kılar. Anı ölümsüzleştiren kareleri ve videoları yakalar."
    },
];

export default function Team() {
    useRevealOnScroll();
    useDocumentTitle("Ekibimiz");
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
