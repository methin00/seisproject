import React from "react";
import { useLanguage } from "../context/LanguageContext";


export default function Footer() {
    const { t, language } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <p>© {currentYear} SEIS. {language === 'en' ? 'All rights reserved.' : 'Tüm hakları saklıdır.'}</p>
            <p>Powered by <a href="https://mecacore.studio/" target="_blank" rel="noopener noreferrer" style={{ color: '#93c5fd', textDecoration: 'none', fontWeight: '500' }}>mecacore.studio</a></p>
        </footer>
    );
}