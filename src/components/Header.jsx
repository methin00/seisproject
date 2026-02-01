import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/seis.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="site-header">
            <div className="header-container">
                {/* LOGO ALANI */}
                <Link to="/" className="site-logo" onClick={closeMenu}>
                    <img src="/seis.svg" alt="SEIS Logo" />
                    SEIS
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {/* MOBILE MENU OVERLAY */}
                    <div
                        className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}
                        onClick={closeMenu}
                    />

                    {/* NAVIGASYON */}
                    <nav className={`site-nav ${isMenuOpen ? "active" : ""}`}>
                        <Link to="/hakkimizda" onClick={closeMenu}>{t('nav.about')}</Link>
                        <Link to="/misyon-vizyon" onClick={closeMenu}>{t('nav.mission')}</Link>
                        <Link to="/etkinlikler" onClick={closeMenu}>{t('nav.events')}</Link>
                        <Link to="/yonetim-kurulu" onClick={closeMenu}>{t('nav.board')}</Link>
                        <Link to="/ekibimiz" onClick={closeMenu}>{t('nav.team')}</Link>
                        <Link to="/sponsorlarimiz" onClick={closeMenu}>{t('nav.sponsors')}</Link>
                        <Link to="/iletisim" onClick={closeMenu}>{t('nav.contact')}</Link>
                        <Link to="/basvuru" className="nav-btn" onClick={closeMenu}>{t('nav.apply')}</Link>
                    </nav>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <LanguageSwitcher />

                        {/* HAMBURGER BUTTON */}
                        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
