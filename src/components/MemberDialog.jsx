import React from "react";
import { FaTimes } from "react-icons/fa";

export default function MemberDialog({ member, isOpen, onClose }) {
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
                <button className="modal-close-btn" onClick={onClose} aria-label="Kapat">
                    <FaTimes />
                </button>

                <div className="modal-body">
                    <div className="modal-header">
                        <div className="modal-avatar">
                            {member.name.charAt(0)}
                        </div>
                        <div className="modal-title">
                            <h2>{member.name}</h2>
                            <p>{member.role}</p>
                        </div>
                    </div>

                    <div className="modal-info">
                        <div className="info-item">
                            <h4>E-posta</h4>
                            <p style={{ color: 'var(--primary-color)', fontWeight: '500' }}>{member.email || member.bio || "Belirtilmedi"}</p>
                        </div>
                        <div className="info-item">
                            <h4>Bölüm</h4>
                            <p>{member.department || "Belirtilmedi"}</p>
                        </div>
                        <div className="info-item">
                            <h4>Hakkında</h4>
                            <p>{member.about || "Hakkında bilgi bulunmamaktadır."}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
