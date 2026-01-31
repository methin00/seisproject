import React from 'react';
import { motion } from 'framer-motion';
import useDocumentTitle from '../hooks/useDocumentTitle';
import '../styles/seis.css'; // Ensure styles are available

export default function PageHeader({ title, description }) {
    useDocumentTitle(title);
    return (
        <section className="page-header" style={{
            backgroundColor: '#f0f8ff', // AliceBlue, nice and light
            padding: '4rem 1rem 2rem',
            textAlign: 'center',
            marginBottom: '2rem'
        }}>
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ color: '#0056b3', fontSize: '2.5rem', marginBottom: '0.5rem' }}
                >
                    {title}
                </motion.h1>
                {description && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        style={{ color: '#555', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}
                    >
                        {description}
                    </motion.p>
                )}
                <div style={{ width: '60px', height: '4px', backgroundColor: '#00ccff', margin: '1rem auto 0' }}></div>
            </div>
        </section>
    );
}
