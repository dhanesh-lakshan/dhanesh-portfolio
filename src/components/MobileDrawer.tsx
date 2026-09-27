import React, { useEffect } from 'react';
import cvPdf from '../assets/Dhanesh_Ganearachchi_CV.pdf';
import { MobileDrawerProps } from '../types';
import { NAV_ITEMS, SOCIAL_LINKS } from './Header';

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  activeSection,
  onClose,
  onNavigate,
}) => {
  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <aside
      className={`mobile-drawer ${isOpen ? 'is-open' : ''}`}
      id="mobileDrawer"
      aria-label="Mobile Navigation"
      onClick={(e) => {
        // Close if backdrop itself is clicked
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <ul className="mobile-nav-list">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => {
                onNavigate(item.id);
                onClose();
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="mobile-drawer-footer">
        <a
          href={cvPdf}
          download="Dhanesh_Ganearachchi_CV.pdf"
          className="mobile-cv-btn"
          aria-label="Download Curriculum Vitae"
          onClick={onClose}
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>Download CV</span>
        </a>

        <div className="mobile-socials">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className={`social-icon-btn ${social.isStroke ? 'stroke-icon' : ''}`}
              aria-label={social.label}
              onClick={onClose}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};
