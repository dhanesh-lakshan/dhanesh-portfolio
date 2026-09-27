import React from 'react';

export interface NavLinkItem {
  label: string;
  href: string;
  id: string;
}

export interface SocialLinkItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  isStroke?: boolean;
}

export interface SectionProps {
  id: string;
  sectionRef?: React.Ref<HTMLElement>;
}

export interface HeaderProps {
  activeSection: string;
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  onNavigate: (id: string) => void;
}

export interface MobileDrawerProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
  onNavigate: (id: string) => void;
}

export interface HeroProps {
  id: string;
  sectionRef?: React.Ref<HTMLElement>;
  onNavigate: (id: string) => void;
}
