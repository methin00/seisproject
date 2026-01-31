import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

export default function SEO({ title, description, keywords, type = 'website', image }) {
    const { language } = useLanguage();

    // Base keywords inclusion for SEO optimization
    const baseKeywords = [
        "Sakarya Üniversitesi",
        "SEIS",
        "Engineering Innovation Society",
        "SAÜ Kulüpler",
        "SAÜ Öğrenci Kulüpleri",
        "SAÜ Topluluklar",
        "Saü topluluk",
        "Sakarya üniversitesi kulüpleri",
        "Mühendislik",
        "İnovasyon",
        "Teknoloji",
        "Kariyer",
        "Sakarya Teknokent",
        "Girişimcilik"
    ].join(", ");

    const siteTitle = "SEIS - Sakarya Engineering Innovation Society";
    const metaTitle = title ? `${title} | SEIS` : siteTitle;
    const metaDescription = description || (language === 'tr'
        ? "Sakarya Üniversitesi'nin en aktif mühendislik ve inovasyon topluluğu SEIS. Teknoloji, kariyer, network ve girişimcilik odaklı etkinliklerimizi keşfedin."
        : "Sakarya University's most active engineering and innovation society SEIS. Discover our technology, career, networking and entrepreneurship focused events.");

    const metaKeywords = keywords ? `${keywords}, ${baseKeywords}` : baseKeywords;
    const currentUrl = window.location.href;
    const defaultImage = "/seis-share-image.jpg"; // Placeholder, assuming one exists or browsers will pick one
    const metaImage = image || defaultImage;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sakarya Engineering Innovation Society",
        "alternateName": "SEIS",
        "url": "https://seis.sakarya.edu.tr",
        "logo": "https://seis.sakarya.edu.tr/seis.svg",
        "description": metaDescription,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Sakarya Üniversitesi Esentepe Kampüsü",
            "addressLocality": "Serdivan",
            "addressRegion": "Sakarya",
            "addressCountry": "TR"
        },
        "parentOrganization": {
            "@type": "CollegeOrUniversity",
            "name": "Sakarya University",
            "url": "https://www.sakarya.edu.tr"
        }
    };

    return (
        <Helmet>
            <html lang={language} />
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:site_name" content="SEIS" />
            <meta property="og:locale" content={language === 'tr' ? 'tr_TR' : 'en_US'} />
            {/* <meta property="og:image" content={metaImage} /> */}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            {/* <meta name="twitter:image" content={metaImage} /> */}

            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
}
