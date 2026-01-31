import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div className="language-switcher" onClick={toggleLanguage} role="button" aria-label="Toggle Language">
            <div className={`switcher-track ${language}`}>
                <span className="switcher-label tr">TR</span>
                <span className="switcher-label en">EN</span>
                <div className="switcher-thumb"></div>
            </div>
        </div>
    );
}
