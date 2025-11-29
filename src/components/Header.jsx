import React from "react";
// Logonu src/assets klasörüne koyup buradan import edebilirsin veya public klasöründen çekebilirsin.
// Şimdilik placeholder bir yazı/resim alanı bıraktım.

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                {/* LOGO ALANI */}
                <div className="site-logo">
                    <img src="/seis.png" alt="SEIS Logo"/>
                    <span className="logo-text">SEIS</span>
                </div>

                {/* NAVIGASYON */}
                <nav className="site-nav">
                    <a href="#hakkinda">Hakkında</a>
                    <a href="#misyon-vizyon">Misyon & Vizyon</a>
                    <a href="#best">BEST</a>
                    <a href="#etkinlikler">Etkinlikler</a>
                    <a href="#iletisim">İletişim</a>
                    <a href="#uye-ol" className="nav-btn">Üye Ol</a>
                </nav>
            </div>
        </header>
    );
}