import React from 'react';
import { SectionProps } from '../types';
import { GraduationCapIcon } from './TechIcons';
import ruhunaLogo from '../assets/education/University_of_Ruhuna_logo.png';
import colomboLogo from '../assets/education/University_of_Colombo_Logo.png';
import schoolLogo from '../assets/education/Dhammissara_logo.jfif';

export const EducationSection: React.FC<SectionProps> = ({ id, sectionRef }) => {
  return (
    <section className="education-section-wrapper" id={id} ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="education-header-block">
          <div className="education-badge-pill">
            <GraduationCapIcon size={16} />
            <span>EDUCATION</span>
          </div>

          <h2 className="education-heading">
            Education &amp; <span className="education-heading-accent">Academic Journey</span>
          </h2>

          <p className="education-subheading">
            A strong academic foundation in computing, mathematics, and analytical thinking, shaping my journey in technology and data.
          </p>
        </div>

        {/* Academic Profile Dashboard Layout (Non-Timeline) */}
        <div className="education-dashboard-layout">
          {/* 1. Left Column: Primary Featured Education Card */}
          <div className="education-featured-col">
            <article className="featured-degree-card">
              <div className="featured-card-glow-bar" aria-hidden="true"></div>

              <div className="featured-card-top">
                <div className="featured-meta-badges">
                  <span className="edu-tag-featured">Undergraduate Degree</span>
                  <span className="edu-status-badge status-completed">
                    <span className="status-dot"></span> Completed
                  </span>
                  <span className="edu-period-badge">2023 – 2026</span>
                </div>
                <img className="education-institution-logo featured-institution-logo" src={ruhunaLogo} alt="University of Ruhuna" />
              </div>

              <div className="featured-card-main">
                <h3 className="featured-degree-title">BSc in Physical Science</h3>
                <h4 className="featured-degree-institution">University of Ruhuna</h4>

                <div className="featured-spec-box">
                  <span className="spec-label">Specialization:</span>
                  <span className="spec-val">
                    Computer Science, Mathematics, and Applied Mathematics
                  </span>
                </div>

                <p className="featured-degree-description">
                  A comprehensive undergraduate program combining theoretical computer science,
                  advanced mathematics, and applied mathematics. Developed strong analytical,
                  problem-solving, and algorithmic thinking skills, with practical exposure to
                  software development, data analysis, and mathematical modelling.
                </p>

                {/* Key Focus Disciplines / Pillars */}
                <div className="featured-pillars-block">
                  <span className="pillars-label">Key Academic Areas</span>
                  <div className="pillars-grid">
                    <div className="pillar-item">
                      <span className="pillar-bullet">✓</span>
                      <span>Data Structures &amp; Algorithms</span>
                    </div>
                    <div className="pillar-item">
                      <span className="pillar-bullet">✓</span>
                      <span>Database Systems</span>
                    </div>
                    <div className="pillar-item">
                      <span className="pillar-bullet">✓</span>
                      <span>Applied Mathematics &amp; Modelling</span>
                    </div>
                    <div className="pillar-item">
                      <span className="pillar-bullet">✓</span>
                      <span>Statistics &amp; Numerical Methods</span>
                    </div>
                    <div className="pillar-item"><span className="pillar-bullet">✓</span><span>Computer Science Fundamentals</span></div>
                    <div className="pillar-item"><span className="pillar-bullet">✓</span><span>Probability &amp; Mathematical Analysis</span></div>
                    <div className="pillar-item"><span className="pillar-bullet">✓</span><span>Discrete Mathematics</span></div>
                    <div className="pillar-item"><span className="pillar-bullet">✓</span><span>Software Engineering Concepts</span></div>
                  </div>
                </div>
              </div>

              {/* Featured Footer: GPA Badge */}
              <div className="featured-card-footer">
                <div className="featured-gpa-box">
                  <span className="featured-gpa-label">Cumulative GPA</span>
                  <span className="featured-gpa-val">3.28 / 4.00</span>
                </div>
                <div className="featured-verified-status">
                  <span className="check-icon">✓</span>
                  <span>Degree Completed</span>
                </div>
              </div>
            </article>
          </div>

          {/* 2. Right Column: Current Education & Secondary Milestone */}
          <div className="education-supporting-col">
            {/* 2. Current Education Card (Bachelor of Information Technology) */}
            <article className="supporting-academic-card card-current">
              <div className="supporting-card-top">
                <div className="supporting-meta-badges">
                  <span className="edu-tag-featured">Undergraduate Degree (Ongoing)</span>
                  <span className="edu-status-badge status-ongoing"><span className="status-dot pulse"></span> Ongoing</span>
                  <span className="edu-period-badge">2025 – 2028</span>
                </div>
                <img className="education-institution-logo" src={colomboLogo} alt="University of Colombo" />
              </div>

              <div className="supporting-card-main">
                <h3 className="supporting-degree-title">Bachelor of Information Technology</h3>
                <h4 className="supporting-institution-name">University of Colombo</h4>

                <div className="supporting-spec-box">
                  <span className="spec-label">Focus Area:</span>
                  <span className="spec-val">
                    Information Technology &amp; Software Development
                  </span>
                </div>

                <p className="supporting-degree-desc">
                  Focused on modern enterprise IT, software engineering, database systems, networking,
                  web applications, and systems analysis. Building practical skills to apply technology
                  for real-world problem solving and future career growth.
                </p>

                <div className="supporting-chips-row">
                  <span className="edu-mini-chip">Software Engineering</span>
                  <span className="edu-mini-chip">Database Systems</span>
                  <span className="edu-mini-chip">Web Technologies</span>
                  <span className="edu-mini-chip">Information Systems</span>
                </div>
              </div>

              <div className="supporting-card-footer">
                <div className="supporting-gpa-badge">
                  <span className="mini-gpa-label">Current GPA:</span>
                  <span className="mini-gpa-val">3.35 / 4.00</span>
                </div>
                <span className="supporting-status-sub">Second Year Undergraduate</span>
              </div>
            </article>

            {/* 3. Previous Academic Qualification (G.C.E. Advanced Level) */}
            <article className="supporting-academic-card card-al">
              <div className="supporting-card-top">
                <div className="supporting-meta-badges">
                  <span className="edu-tag-milestone">Secondary Education</span>
                  <span className="edu-status-badge status-completed">
                    <span className="status-dot"></span> Completed
                  </span>
                </div>
                <div className="education-al-logo-year"><span className="edu-period-badge">2021</span><img className="education-institution-logo" src={schoolLogo} alt="Dhammissara National College" /></div>
              </div>

              <div className="supporting-card-main">
                <h3 className="supporting-degree-title">G.C.E. Advanced Level</h3>
                <h4 className="supporting-institution-name">Dammissara National College, Nattandiya</h4>

                <div className="al-stream-badge-row">
                  <span className="al-stream-pill">Physical Science Stream</span>
                </div>

                <p className="supporting-degree-desc">
                  Completed advanced level studies in Physical Science, building a strong foundation
                  in mathematics, physics, and chemistry, and developing analytical and logical
                  problem-solving skills.
                </p>

                <div className="supporting-chips-row">
                  <span className="edu-mini-chip">Combined Mathematics</span>
                  <span className="edu-mini-chip">Physics</span>
                  <span className="edu-mini-chip">Chemistry</span>
                </div>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
};
