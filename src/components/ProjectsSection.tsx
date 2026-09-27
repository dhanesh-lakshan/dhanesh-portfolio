import React from 'react';
import {
  SiBootstrap, SiChartdotjs, SiCss, SiDocker, SiExpress, SiFastapi,
  SiHtml5, SiJavascript, SiMongodb, SiMysql, SiPhp, SiPostgresql,
  SiPython, SiReact, SiSpringboot, SiTailwindcss, SiNodedotjs,
} from 'react-icons/si';
import { SectionProps } from '../types';
import { projectsData } from '../data/projectsData';
import { FolderWorkIcon, GitHubIcon } from './TechIcons';

const technologyBrands: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  'Spring Boot': SiSpringboot, React: SiReact, PostgreSQL: SiPostgresql,
  FastAPI: SiFastapi, Python: SiPython, Docker: SiDocker,
  SQL: SiMysql, MySQL: SiMysql, PHP: SiPhp, JavaScript: SiJavascript,
  Bootstrap: SiBootstrap, MongoDB: SiMongodb, Express: SiExpress, 'Node.js': SiNodedotjs,
  HTML: SiHtml5, CSS: SiCss, 'Tailwind CSS': SiTailwindcss, 'Chart.js': SiChartdotjs,
  'React Native': SiReact,
};

export interface ProjectsSectionProps extends SectionProps {
  onOpenCaseStudy: (slug: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  id,
  sectionRef,
  onOpenCaseStudy,
}) => {
  return (
    <section className="projects-section-wrapper" id={id} ref={sectionRef}>
      <div className="container">
        {/* Section Header matching visual reference */}
        <div className="projects-header-block">
          <div className="projects-badge-pill">
            <FolderWorkIcon size={16} />
            <span>PROJECTS</span>
          </div>

          <h2 className="projects-heading">
            Projects That Turn <span className="projects-heading-accent">Ideas Into Real Systems</span>
          </h2>

          <p className="projects-subheading">
            A selection of academic, personal, and client-based projects combining data,
            software engineering, and cloud technologies.
          </p>
        </div>

        {/* 6 Project Cards Grid */}
        <div className="projects-grid">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card-item">
              {/* Mockup Preview Box */}
              <div
                className="project-mockup-container"
                onClick={() => onOpenCaseStudy(project.slug)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onOpenCaseStudy(project.slug);
                  }
                }}
              >
                <img
                  src={project.previewImage}
                  alt={`${project.title} Preview`}
                  className="project-mockup-img"
                  loading="lazy"
                />
              </div>

              {/* Title & Badge Row */}
              <div className="project-meta-row">
                <h3
                  className="project-title-text"
                  onClick={() => onOpenCaseStudy(project.slug)}
                >
                  {project.title}
                </h3>
                <span className={`project-tag-pill tag-${project.badgeType}`}>
                  {project.badge}
                </span>
              </div>

              {/* Short Description */}
              <p className="project-summary-text">{project.shortDescription}</p>

              {/* Technology Badges / Pills */}
              <div className="project-tech-row">
                {project.technologies.map((t, idx) => {
                  const Icon = technologyBrands[t.name] ?? t.icon;
                  return (
                    <span key={idx} className="project-tech-badge">
                      <Icon size={14} />
                      <span className="tech-badge-name">{t.name}</span>
                    </span>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="project-card-footer-btns">
                <button
                  type="button"
                  className="project-btn-case-study"
                  onClick={() => onOpenCaseStudy(project.slug)}
                >
                  <span>View Case Study</span>
                  <span className="btn-arrow-icon">→</span>
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn-repo"
                >
                  <GitHubIcon size={16} />
                  <span>GitHub</span>
                  <span className="btn-ext-icon">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
