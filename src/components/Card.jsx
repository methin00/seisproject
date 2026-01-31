import React from "react";

export default function Card({ title, text }) {
    return (
        <article className="card" data-reveal>
            {title && <h3>{title}</h3>}
            {text && <p>{text}</p>}
        </article>
    );
}