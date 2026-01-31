import React from "react";

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-container">
                {/* LOGO ALANI */}
                <a href="#" className="site-logo">
                    <img src="/seis.svg" alt="SEIS Logo" />
                    SEIS
                </a>

                {/* NAVIGASYON */}
                <nav className="site-nav">
                    <a href="#hakkinda">Hakkında</a>
                    <a href="#misyon-vizyon">Misyon</a>
                    <a href="#etkinlikler">Etkinlikler</a>
                    <a href="#iletisim">İletişim</a>
                    <a href="#uye-ol" className="nav-btn">Üye Ol</a>
                </nav>
            </div>
        </header>
    );
}