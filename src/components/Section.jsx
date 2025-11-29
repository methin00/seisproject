import React from "react";


export default function Section({ id, title, lead, children }) {
    return (
        <section id={id} className="section">
            {title && (
                <h2 className="section__title" data-reveal>
                    {title}
                </h2>
            )}
            {lead && (
                <p className="section__lead" data-reveal>
                    {lead}
                </p>
            )}
            {children}
        </section>
    );
}