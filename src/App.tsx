import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { MobileDrawer } from './components/MobileDrawer';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CaseStudyView } from './components/CaseStudyView';
import { projectsData } from './data/projectsData';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FullPageParticleBackground } from './components/FullPageParticleBackground';

export const App: React.FC = () => {
  // State
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeCaseStudySlug, setActiveCaseStudySlug] = useState<string | null>(null);

  // Section Refs for IntersectionObserver
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const certificationsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Check URL on mount and handle back/forward navigation
  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#\/?projects\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        setActiveCaseStudySlug(match[1]);
      } else {
        setActiveCaseStudySlug(null);
      }
    };

    handleUrlChange();
    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);


  // 1. Header scroll shadow listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // 3. Active Nav Link on Scroll via IntersectionObserver
  useEffect(() => {
    const sectionElements = [
      homeRef.current,
      aboutRef.current,
      skillsRef.current,
      projectsRef.current,
      experienceRef.current,
      educationRef.current,
      certificationsRef.current,
      contactRef.current,
    ].filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // 4. Reusable smooth scroll helper with navbar offset
  const scrollToSection = (id: string) => {
    // If inside case study, exit case study first
    if (activeCaseStudySlug) {
      setActiveCaseStudySlug(null);
    }

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const navHeight = 84;
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        // Update URL hash without standard jumping
        window.history.pushState(null, '', `#${id}`);
        setActiveSection(id);
      }
    }, activeCaseStudySlug ? 50 : 0);
  };

  // Case Study Navigation Handlers
  const handleOpenCaseStudy = (slug: string) => {
    setActiveCaseStudySlug(slug);
    window.history.pushState(null, '', `#/projects/${slug}`);
  };

  const handleBackToProjects = () => {
    setActiveCaseStudySlug(null);
    window.history.pushState(null, '', '#projects');
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        const navHeight = 84;
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
        setActiveSection('projects');
      }
    }, 50);
  };

  const activeProject = activeCaseStudySlug
    ? projectsData.find((p) => p.slug === activeCaseStudySlug)
    : null;

  return (
    <>
      <FullPageParticleBackground />
      {/* Navigation Header */}
      <Header
        activeSection={activeCaseStudySlug ? 'projects' : activeSection}
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
        onNavigate={scrollToSection}
      />

      {/* Mobile Drawer Overlay */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        activeSection={activeCaseStudySlug ? 'projects' : activeSection}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={scrollToSection}
      />

      {/* Main Page Content or Case Study View */}
      {activeProject ? (
        <main>
          <CaseStudyView
            project={activeProject}
            onBack={handleBackToProjects}
            onSelectProject={handleOpenCaseStudy}
          />
        </main>
      ) : (
        <main>
          <Hero id="home" sectionRef={homeRef} onNavigate={scrollToSection} />
          <AboutSection id="about" sectionRef={aboutRef} />
          <SkillsSection id="skills" sectionRef={skillsRef} />
          <ProjectsSection
            id="projects"
            sectionRef={projectsRef}
            onOpenCaseStudy={handleOpenCaseStudy}
          />
          <ExperienceSection id="experience" sectionRef={experienceRef} />
          <EducationSection id="education" sectionRef={educationRef} />
          <CertificationsSection id="certifications" sectionRef={certificationsRef} />
          <ContactSection id="contact" sectionRef={contactRef} />
        </main>
      )}

      {/* Site Footer */}
      <Footer onNavigate={scrollToSection} />
    </>
  );
};

export default App;
