import React from 'react';
import { SectionProps } from '../types';
import {
  ExcelIcon,
  SqlIcon,
  MySqlIcon,
  PostgreSqlIcon,
  PowerBiIcon,
  TableauIcon,
  DataVisIcon,
  DataModelingIcon,
  KpiReportingIcon,
  TimeSeriesIcon,
  PythonIcon,
  PandasIcon,
  RIcon,
  StatisticsIcon,
  AppliedStatsIcon,
  MathModelIcon,
  DataProcessingIcon,
  EdaIcon,
  JavaIcon,
  SpringBootIcon,
  JavaScriptIcon,
  ReactIcon,
  PhpIcon,
  RestApiIcon,
  OopIcon,
  DatabaseMgmtIcon,
  AwsIcon,
  AzureIcon,
  DatabricksIcon,
  DockerIcon,
  GitIcon,
  GitHubIcon,
  AnalyticsCategoryIcon,
  DataScienceCategoryIcon,
  SoftwareCategoryIcon,
  CloudCategoryIcon,
  CogIcon,
} from './TechIcons';

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

const ChevronRight: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#94A3B8"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="skill-card-chevron"
    aria-hidden="true"
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'analytics',
    title: 'Data & Analytics',
    icon: <AnalyticsCategoryIcon size={24} />,
    skills: [
      { name: 'Excel', icon: <ExcelIcon size={20} /> },
      { name: 'SQL', icon: <SqlIcon size={20} /> },
      { name: 'MySQL', icon: <MySqlIcon size={24} /> },
      { name: 'PostgreSQL', icon: <PostgreSqlIcon size={20} /> },
      { name: 'Power BI', icon: <PowerBiIcon size={20} /> },
      { name: 'Tableau', icon: <TableauIcon size={20} /> },
      { name: 'Data Visualization', icon: <DataVisIcon size={20} /> },
      { name: 'Data Modeling', icon: <DataModelingIcon size={20} /> },
      { name: 'KPI Reporting', icon: <KpiReportingIcon size={20} /> },
      { name: 'Time-Series Analysis', icon: <TimeSeriesIcon size={20} /> },
    ],
  },
  {
    id: 'datascience',
    title: 'Data Science',
    icon: <DataScienceCategoryIcon size={24} />,
    skills: [
      { name: 'Python', icon: <PythonIcon size={20} /> },
      { name: 'Pandas', icon: <PandasIcon size={20} /> },
      { name: 'R', icon: <RIcon size={20} /> },
      { name: 'Statistics', icon: <StatisticsIcon size={20} /> },
      { name: 'Applied Statistics', icon: <AppliedStatsIcon size={20} /> },
      { name: 'Mathematical Modeling', icon: <MathModelIcon size={20} /> },
      { name: 'Data Processing', icon: <DataProcessingIcon size={20} /> },
      { name: 'Exploratory Data Analysis', icon: <EdaIcon size={20} /> },
    ],
  },
  {
    id: 'software',
    title: 'Software Engineering',
    icon: <SoftwareCategoryIcon size={24} />,
    skills: [
      { name: 'Java', icon: <JavaIcon size={20} /> },
      { name: 'Spring Boot', icon: <SpringBootIcon size={20} /> },
      { name: 'JavaScript', icon: <JavaScriptIcon size={20} /> },
      { name: 'React', icon: <ReactIcon size={20} /> },
      { name: 'PHP', icon: <PhpIcon size={21} /> },
      { name: 'REST APIs', icon: <RestApiIcon size={20} /> },
      { name: 'Object-Oriented Programming', icon: <OopIcon size={20} /> },
      { name: 'Database Management', icon: <DatabaseMgmtIcon size={20} /> },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Data Platforms',
    icon: <CloudCategoryIcon size={24} />,
    skills: [
      { name: 'AWS', icon: <AwsIcon size={22} /> },
      { name: 'Microsoft Azure', icon: <AzureIcon size={20} /> },
      { name: 'Databricks', icon: <DatabricksIcon size={20} /> },
      { name: 'Docker', icon: <DockerIcon size={20} /> },
      { name: 'Git', icon: <GitIcon size={20} /> },
      { name: 'GitHub', icon: <GitHubIcon size={20} /> },
    ],
  },
];

export const SkillsSection: React.FC<SectionProps> = ({ id, sectionRef }) => {
  return (
    <section className="skills-section" id={id} ref={sectionRef} aria-labelledby="skills-heading">
      <div className="container skills-container">
        {/* Section Header */}
        <div className="skills-header">
          {/* Badge Row with Connecting Line */}
          <div className="skills-badge-row">
            <span className="skills-badge-line" aria-hidden="true" />
            <div className="skills-badge">
              <span className="skills-badge-icon" aria-hidden="true">
                <CogIcon size={16} />
              </span>
              <span className="skills-badge-text">TECHNICAL SKILLS</span>
            </div>
          </div>

          {/* Dual-Line Main Heading */}
          <h2 className="skills-heading" id="skills-heading">
            <span className="skills-heading-line1">Tools I Use to</span>
            <span className="skills-heading-line2">
              <span className="gradient-blue">Build, Analyze</span>
              <span className="ampersand"> &amp; </span>
              <span className="gradient-teal">Deliver.</span>
            </span>
          </h2>

          {/* Subtitle / Narrative summary */}
          <p className="skills-subtitle">
            A growing technical toolkit across data analytics, data science, software engineering, and cloud technologies.
          </p>
        </div>

        {/* 2x2 Grid of Frosted Glass Cards */}
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div className="skill-card" key={category.id}>
              {/* Card Header */}
              <div className="skill-card-header">
                <div className="skill-card-title-group">
                  <div className="skill-card-icon-box" aria-hidden="true">
                    {category.icon}
                  </div>
                  <h3 className="skill-card-title">{category.title}</h3>
                </div>
                <ChevronRight />
              </div>

              {/* Skill Pills Flow */}
              <div className="skill-pills-list">
                {category.skills.map((skill) => (
                  <div className="skill-pill" key={skill.name}>
                    <span className="skill-pill-icon" aria-hidden="true">
                      {skill.icon}
                    </span>
                    <span className="skill-pill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
