import { useEffect } from "react";


export default function useRevealOnScroll(selector = "[data-reveal], .card, section h2, section p", options = { threshold: 0.2 }) {
    useEffect(() => {
        const targets = document.querySelectorAll(selector);
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // perform once
                }
            });
        }, options);


        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [selector, options]);
}