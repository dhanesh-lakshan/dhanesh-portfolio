import React from 'react';
import navLogo from '../assets/navlogo.png';
import cvPdf from '../assets/Dhanesh_Ganearachchi_CV.pdf';
import { HeaderProps, NavLinkItem } from '../types';
import { SOCIAL_LINKS } from '../data/contactLinks';
export { SOCIAL_LINKS } from '../data/contactLinks';

export const NAV_ITEMS: NavLinkItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  isScrolled,
  isMobileMenuOpen,
  onToggleMobileMenu,
  onNavigate,
}) => {
  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        {/* Brand / Logo */}
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="brand"
          aria-label="Dhanesh Ganearachchi Home"
        >
          <img src={navLogo} alt="DG Logo" className="brand-logo-img" height="45" />
        </button>

        {/* Desktop Navigation Menu */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-menu">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} className="nav-item">
                <button
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Header Actions (Download CV + Social Links) */}
        <div className="nav-actions">
          <a
            href={cvPdf}
            download="Dhanesh_Ganearachchi_CV.pdf"
            className="btn-nav-cv"
            aria-label="Download Curriculum Vitae"
          >
            <span>Download CV</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>

          <div className="social-links">
            {SOCIAL_LINKS.filter((social) =>
              social.label !== 'Chat on WhatsApp' && social.label !== 'Send an email'
            ).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className={`social-icon-btn ${social.isStroke ? 'stroke-icon' : ''}`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`hamburger-btn ${isMobileMenuOpen ? 'is-active' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobileDrawer"
          onClick={onToggleMobileMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};
