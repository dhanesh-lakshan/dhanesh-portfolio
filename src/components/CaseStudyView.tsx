import React, { useEffect } from 'react';
import { ProjectItem, projectsData } from '../data/projectsData';
import { GitHubIcon } from './TechIcons';

interface CaseStudyViewProps {
  project: ProjectItem;
  onBack: () => void;
  onSelectProject: (slug: string) => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  project,
  onBack,
  onSelectProject,
}) => {
  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.slug]);

  // Find next project
  const nextProject = projectsData.find(
    (p) => p.slug === project.caseStudy.nextProjectSlug
  ) || projectsData[0];

  return (
    <div className="case-study-page">
      {/* Top Header / Back Bar */}
      <div className="case-study-topbar">
        <div className="case-study-container">
          <button
            type="button"
            className="case-study-back-btn"
            onClick={onBack}
            aria-label="Back to projects"
          >
            <span className="back-arrow">←</span>
            <span>Back to projects</span>
          </button>
        </div>
      </div>

      <article className="case-study-container case-study-content">
        {/* Header Hero */}
        <header className="case-study-header">
          <div className="case-study-tags-row">
            <span className="case-study-cat-pill">
              {project.caseStudy.categoryTags}
            </span>
            <span className={`case-study-badge badge-${project.badgeType}`}>
              {project.badge}
            </span>
            <span className="case-study-team-pill">{project.caseStudy.teamContext}</span>
          </div>

          <h1 className="case-study-title">{project.title}</h1>
          <p className="case-study-tagline">{project.caseStudy.tagline}</p>

          <div className="case-study-actions">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-github-btn"
            >
              <GitHubIcon size={18} />
              <span>View Source on GitHub</span>
              <span className="ext-icon">↗</span>
            </a>
          </div>
        </header>

        {/* Hero Mockup Preview */}
        <div className="case-study-hero-visual">
          <div className="case-study-visual-wrapper">
            <img
              src={project.previewImage}
              alt={`${project.title} Interface Preview`}
              className="case-study-hero-img"
            />
          </div>
        </div>

        {/* 2-Column Problem & Solution */}
        <section className="case-study-grid-2">
          <div className="case-study-card problem-card">
            <div className="card-pill red-pill">
              <span className="dot"></span>
              <span>The Problem</span>
            </div>
            <p className="card-text">{project.caseStudy.problem}</p>
          </div>

          <div className="case-study-card solution-card">
            <div className="card-pill green-pill">
              <span className="dot"></span>
              <span>The Solution</span>
            </div>
            <p className="card-text">{project.caseStudy.solution}</p>
          </div>
        </section>

        {/* My Role */}
        <section className="case-study-section-card role-card">
          <div className="section-card-header">
            <div className="card-pill blue-pill">
              <span>My Role</span>
            </div>
            <h3>Responsibilities & Ownership</h3>
          </div>
          <p className="card-text">{project.caseStudy.myRole}</p>
        </section>

        {/* Key Features */}
        <section className="case-study-section-card">
          <div className="section-card-header">
            <div className="card-pill cyan-pill">
              <span>Highlights</span>
            </div>
            <h3>Key Features</h3>
          </div>
          <div className="case-study-features-grid">
            {project.caseStudy.keyFeatures.map((feature, idx) => (
              <div key={idx} className="case-study-feature-item">
                <span className="feature-check">✓</span>
                <span className="feature-text">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture & Data Insights */}
        <section className="case-study-grid-2">
          <div className="case-study-card tech-card">
            <div className="card-pill blue-pill">
              <span>System Design</span>
            </div>
            <h4>Architecture & System Overview</h4>
            <p className="card-text">{project.caseStudy.architecture}</p>
          </div>

          <div className="case-study-card tech-card">
            <div className="card-pill cyan-pill">
              <span>Intelligence</span>
            </div>
            <h4>Data & Analytics Insights</h4>
            <p className="card-text">{project.caseStudy.analyticsInsights}</p>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="case-study-section-card">
          <div className="section-card-header">
            <div className="card-pill gray-pill">
              <span>Tools & Frameworks</span>
            </div>
            <h3>Technology Stack</h3>
          </div>
          <div className="case-study-tech-pills">
            {project.technologies.map((t, idx) => {
              const IconComp = t.icon;
              return (
                <div key={idx} className="case-study-tech-pill">
                  <IconComp size={18} />
                  <span>{t.name}</span>
                </div>
              );
            })}
          </div>
          <div className="case-study-detailed-tech-list">
            <span className="detailed-tech-label">All components:</span>
            {project.caseStudy.techStackDetailed.map((item, idx) => (
              <span key={idx} className="detailed-tech-item">
                {item}
                {idx < project.caseStudy.techStackDetailed.length - 1 && ' · '}
              </span>
            ))}
          </div>
        </section>

        {/* Challenges & Decisions */}
        <section className="case-study-section-card">
          <div className="section-card-header">
            <div className="card-pill amber-pill">
              <span>Engineering Decisions</span>
            </div>
            <h3>Challenges & Architectural Decisions</h3>
          </div>
          <p className="card-text">{project.caseStudy.challengesDecisions}</p>
        </section>

        {/* Outcome & Status */}
        <section className="case-study-section-card outcome-card">
          <div className="section-card-header">
            <div className="card-pill green-pill">
              <span>Results</span>
            </div>
            <h3>Outcome & Current Status</h3>
          </div>
          <p className="card-text">{project.caseStudy.outcomeStatus}</p>
        </section>

        {/* Next Project Footer Link */}
        <nav className="case-study-nav-footer">
          <button
            type="button"
            className="case-study-nav-next-btn"
            onClick={() => onSelectProject(nextProject.slug)}
          >
            <div className="next-label">Next Project</div>
            <div className="next-title">
              <span>{nextProject.title}</span>
              <span className="next-arrow">→</span>
            </div>
          </button>
        </nav>
      </article>
    </div>
  );
};
