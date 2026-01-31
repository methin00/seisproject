import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>{t('hero.title')}</h1>
                <p>
                    {t('hero.subtitle')}
                </p>
                <div className="hero-buttons">
                    <Link to="/hakkimizda" className="btn btn-primary">
                        {t('hero.discover')}
                    </Link>
                </div>
            </div>
        </section>
    );
}