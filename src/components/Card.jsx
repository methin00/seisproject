import React from "react";


export default function Card({ title, text }) {
    return (
        <div className="card" data-reveal>
            {title && <h3>{title}</h3>}
            {text && <p>{text}</p>}
        </div>
    );
}