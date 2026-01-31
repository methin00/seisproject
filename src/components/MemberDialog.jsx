import React from "react";
import { FaTimes } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function MemberDialog({ member, isOpen, onClose }) {
    const { t } = useLanguage();

    if (!isOpen || !member) return null;

    // Handle overlay click to close
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="modal-close-btn" onClick={onClose} aria-label="Close">
                    <FaTimes />
                </button>

                <div className="modal-body">
                    <div className="modal-header">
                        <div className="modal-avatar">
                            {member.name.charAt(0)}
                        </div>
                        <div className="modal-title">
                            <h2>{member.name}</h2>
                            <p>{t(`board.roles.${member.role}`) || member.role}</p>
                        </div>
                    </div>

                    <div className="modal-info">
                        <div className="info-item">
                            <h4>{t('dialog.email')}</h4>
                            <p style={{ color: 'var(--primary-color)', fontWeight: '500' }}>{member.email || member.bio || t('dialog.notSpecified')}</p>
                        </div>
                        <div className="info-item">
                            <h4>{t('dialog.department')}</h4>
                            <p>{member.department || t('dialog.notSpecified')}</p>
                        </div>
                        <div className="info-item">
                            <h4>{t('dialog.about')}</h4>
                            <p>{member.about || t('dialog.noInfo')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
