import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import CardGrid from "../components/CardGrid";
import useRevealOnScroll from "../hooks/useRevealOnScroll";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Home() {
    useRevealOnScroll();
    useDocumentTitle("Ana Sayfa");

    return (
        <div>
            <Hero />

            <Section id="welcome" title="Hoşgeldiniz" lead="Geleceğin mühendislerini bir araya getiren topluluk.">
                <CardGrid>
                    <div className="card" data-reveal>
                        <h3>Hakkımızda</h3>
                        <p>SEIS'in geçmişi ve amacı hakkında daha fazla bilgi edinin.</p>
                        <Link to="/hakkimizda" className="btn btn-secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>Devamını Oku</Link>
                    </div>
                    <div className="card" data-reveal>
                        <h3>Etkinlikler</h3>
                        <p>Yıl boyunca düzenlediğimiz etkinliklere göz atın.</p>
                        <Link to="/etkinlikler" className="btn btn-secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>İncele</Link>
                    </div>
                    <div className="card" data-reveal>
                        <h3>Ailemize Katılın</h3>
                        <p>Siz de bu dinamik ekibin bir parçası olmak ister misiniz?</p>
                        <Link to="/basvuru" className="btn btn-secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>Başvuru Yap</Link>
                    </div>
                </CardGrid>
            </Section>
        </div>
    );
}
