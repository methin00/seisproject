import React from "react";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Sakarya Engineering Innovation Society</h1>
                <p>
                    Teknoloji, inovasyon ve mühendislikte yeni ufuklar açmak için bir araya gelen
                    Sakarya Üniversitesi öğrencileri topluluğu.
                </p>
                <div className="hero-buttons">
                    <a href="/hakkimizda" className="btn btn-primary">Daha Fazla Keşfet</a>
                </div>
            </div>
        </section>
    );
}