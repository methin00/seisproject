import React from "react";
import { useLanguage } from "../context/LanguageContext";


export default function Footer() {
    const { t, language } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <p>© {currentYear} SEIS. {language === 'en' ? 'All rights reserved.' : 'Tüm hakları saklıdır.'}</p>
            <p>{t('footer.powered')}</p>
        </footer>
    );
}