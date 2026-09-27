import { FaWhatsapp } from 'react-icons/fa6';
import type { SocialLinkItem } from '../types';
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/TechIcons';

// Shared destinations for every social/contact icon across the portfolio.
export const CONTACT_LINKS = {
  github: 'https://github.com/dhanesh-lakshan',
  linkedin: 'https://www.linkedin.com/in/dhanesh-ganearachchi',
  whatsapp: 'https://wa.me/94773937391',
  email: 'mailto:dhanesh.lakshan.it@gmail.com',
} as const;

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    label: 'GitHub Profile',
    href: CONTACT_LINKS.github,
    icon: <GitHubIcon size={20} />,
  },
  {
    label: 'LinkedIn Profile',
    href: CONTACT_LINKS.linkedin,
    icon: <LinkedInIcon size={20} />,
  },
  {
    label: 'Chat on WhatsApp',
    href: CONTACT_LINKS.whatsapp,
    icon: <FaWhatsapp size={20} aria-hidden="true" />,
  },
  {
    label: 'Send an email',
    href: CONTACT_LINKS.email,
    icon: <MailIcon size={20} />,
  },
];
