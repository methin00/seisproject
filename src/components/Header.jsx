import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/seis.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

                {/* HAMBURGER BUTTON */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>

                {/* NAVIGASYON */}
                <nav className={`site-nav ${isMenuOpen ? "active" : ""}`}>
                    <Link to="/hakkimizda" onClick={closeMenu}>Hakkımızda</Link>
                    <Link to="/misyon-vizyon" onClick={closeMenu}>Misyon & Vizyon</Link>
                    <Link to="/etkinlikler" onClick={closeMenu}>Etkinlikler</Link>
                    <Link to="/ekibimiz" onClick={closeMenu}>Ekibimiz</Link>
                    <Link to="/sponsorlarimiz" onClick={closeMenu}>Sponsorlarımız</Link>
                    <Link to="/iletisim" onClick={closeMenu}>İletişim</Link>
                    <Link to="/basvuru" className="nav-btn" onClick={closeMenu}>Başvuru Yap</Link>
                </nav>
            </div>
        </header>
    );
}