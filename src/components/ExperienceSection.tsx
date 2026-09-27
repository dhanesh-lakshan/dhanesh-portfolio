import React from 'react';
import { SectionProps } from '../types';
import { BriefcaseIcon, BankIcon } from './TechIcons';

export const ExperienceSection: React.FC<SectionProps> = ({ id, sectionRef }) => {
  const experiences = [
    {
      period: '2023',
      role: 'Full Stack Developer',
      company: 'Seneth Healing Foods (Pvt) Ltd',
      type: 'Client / Production',
      typeVariant: 'emerald',
      icon: BriefcaseIcon,
      description:
        'Developed a production e-commerce platform for Seneth Healing Foods, contributing to the development of a client-facing digital system and implementing payment integration.',
      tags: [
        'Full Stack Development',
        'Web Development',
        'Database Integration',
        'Payment Integration',
      ],
    },
    {
      period: '2022–2023',
      role: 'Chief Cashier (Trainee)',
      company: "People's Bank, Marawila",
      type: 'Banking Operations',
      typeVariant: 'blue',
      icon: BankIcon,
      description:
        'Managed daily cash transactions and branch operations with accuracy, ensuring compliance with banking procedures while delivering efficient customer service.',
      tags: ['Operations', 'Accuracy', 'Customer Service', 'Responsibility'],
    },
  ];

  return (
    <section className="experience-section-wrapper" id={id} ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="experience-header-block">
          <div className="experience-badge-pill">
            <BriefcaseIcon size={16} />
            <span>EXPERIENCE</span>
          </div>

          <h2 className="experience-heading">
            Experience That Shaped{' '}
            <span className="experience-heading-accent">How I Work</span>
          </h2>

          <p className="experience-subheading">
            Professional experience across client-focused software development and banking operations.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="timeline-container">
          <div className="timeline-rail" aria-hidden="true"></div>

          <div className="timeline-items-wrapper">
            {experiences.map((exp, idx) => {
              const ExpIcon = exp.icon;
              return (
                <div key={idx} className={`timeline-item-row ${idx % 2 === 0 ? 'left' : 'right'}`}>
                  {/* Center Node on Rail */}
                  <div className="timeline-center-node">
                    <div className="timeline-node-dot">
                      <ExpIcon size={16} />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <div className="timeline-meta-top">
                        <span className="timeline-period-badge">{exp.period}</span>
                        <span className={`timeline-type-pill type-${exp.typeVariant}`}>
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="timeline-role-title">{exp.role}</h3>
                      <h4 className="timeline-company-name">{exp.company}</h4>
                    </div>

                    <p className="timeline-desc">{exp.description}</p>

                    <div className="timeline-tags-flow">
                      {exp.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="timeline-cap-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <blockquote className="experience-quote">
          <span aria-hidden="true">“</span>
          <p>Each experience has strengthened my technical skills, professional discipline, and problem-solving mindset.</p>
        </blockquote>
      </div>
    </section>
  );
};
