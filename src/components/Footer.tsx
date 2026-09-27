import React from 'react';
import navLogo from '../assets/navlogo.png';
import { FaWhatsapp } from 'react-icons/fa6';
import { GitHubIcon, LinkedInIcon, MailIcon } from './TechIcons';
import { CONTACT_LINKS } from '../data/contactLinks';
interface FooterProps { onNavigate?: (id: string) => void }

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-content-wrap">
        <div className="footer-main-grid">
          <div className="footer-brand-col">
            <div className="footer-logo-row">
              <span className="footer-logo-frame"><img src={navLogo} alt="" className="footer-logo-img" /></span>
              <span className="footer-brand-title">Dhanesh Ganearachchi</span>
            </div>
          </div>
          <p className="footer-tagline-text">Building data-driven products and thoughtful software for real-world needs.</p>
          <div className="footer-social-col" aria-label="Social and contact links">
            <a href={CONTACT_LINKS.github} target="_blank" rel="noopener noreferrer" className="footer-social-icon-btn" aria-label="GitHub Profile"><GitHubIcon size={19} /></a>
            <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="footer-social-icon-btn" aria-label="LinkedIn Profile"><LinkedInIcon size={19} /></a>
            <a href={CONTACT_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="footer-social-icon-btn footer-whatsapp" aria-label="WhatsApp"><FaWhatsapp size={20} /></a>
            <a href={CONTACT_LINKS.email} className="footer-social-icon-btn footer-email" aria-label="Email Dhanesh"><MailIcon size={19} /></a>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Dhanesh Ganearachchi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
