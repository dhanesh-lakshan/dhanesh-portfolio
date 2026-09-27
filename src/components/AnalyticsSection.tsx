import React, { useState } from 'react';
import { SectionProps } from '../types';
import {
  ExcelIcon,
  SqlIcon,
  MySqlIcon,
  PostgreSqlIcon,
  PowerBiIcon,
  TableauIcon,
  PythonIcon,
  PandasIcon,
  RIcon,
  StatisticsIcon,
  DataVisIcon,
  DataModelingIcon,
  WorkflowDataIcon,
  WorkflowCleanIcon,
  WorkflowExploreIcon,
  WorkflowAnalyzeIcon,
  WorkflowVisualizeIcon,
  WorkflowInsightIcon,
} from './TechIcons';

export interface AnalyticsSectionProps extends SectionProps {
  onOpenCaseStudy?: (slug: string) => void;
}

export const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({
  id,
  sectionRef,
  onOpenCaseStudy,
}) => {
  const [activeCapability, setActiveCapability] = useState<number | null>(null);

  const capabilities = [
    {
      id: 1,
      title: 'Data Exploration',
      subtitle: 'Pattern & Distribution Analysis',
      desc: 'Understand datasets deeply, assess variable distributions, identify hidden patterns, and explore correlations across dimensional data.',
      level: 'Practical experience',
      icon: WorkflowExploreIcon,
    },
    {
      id: 2,
      title: 'Data Cleaning',
      subtitle: 'Preprocessing & Structuring',
      desc: 'Prepare, normalize, handle missing values, and structure raw tabular datasets for consistent, reliable downstream analysis.',
      level: 'Hands-on knowledge',
      icon: WorkflowCleanIcon,
    },
    {
      id: 3,
      title: 'SQL Analysis',
      subtitle: 'Relational Querying & Aggregation',
      desc: 'Query, filter, join, aggregate, and analyze multi-table relational databases to extract targeted operational metrics.',
      level: 'Strong foundation',
      icon: SqlIcon,
    },
    {
      id: 4,
      title: 'KPI & Business Reporting',
      subtitle: 'Executive Decision Metrics',
      desc: 'Translate raw operational numbers into meaningful performance indicators, financial summaries, and automated executive reports.',
      level: 'Growing capability',
      icon: DataModelingIcon,
    },
    {
      id: 5,
      title: 'Data Visualization',
      subtitle: 'Dashboards & Trend Storytelling',
      desc: 'Present historical trends, distributions, and actionable insights through clear, intuitive charts and interactive BI dashboards.',
      level: 'Hands-on knowledge',
      icon: DataVisIcon,
    },
    {
      id: 6,
      title: 'Statistical Thinking',
      subtitle: 'Mathematical Rigor & Inference',
      desc: 'Leverage university foundations in probability, mathematical modeling, and hypothesis testing to validate analytical findings.',
      level: 'Academic foundation',
      icon: StatisticsIcon,
    },
  ];

  const workflowSteps = [
    { label: 'DATA', subtitle: 'Raw Ingestion', icon: WorkflowDataIcon },
    { label: 'CLEAN', subtitle: 'Structuring', icon: WorkflowCleanIcon },
    { label: 'EXPLORE', subtitle: 'Discovery', icon: WorkflowExploreIcon },
    { label: 'ANALYZE', subtitle: 'SQL & Stats', icon: WorkflowAnalyzeIcon },
    { label: 'VISUALIZE', subtitle: 'Dashboards', icon: WorkflowVisualizeIcon },
    { label: 'INSIGHT', subtitle: 'Actionable Value', icon: WorkflowInsightIcon },
  ];

  const toolkit = [
    { name: 'Excel', icon: ExcelIcon },
    { name: 'SQL', icon: SqlIcon },
    { name: 'MySQL', icon: MySqlIcon },
    { name: 'PostgreSQL', icon: PostgreSqlIcon },
    { name: 'Power BI', icon: PowerBiIcon },
    { name: 'Tableau', icon: TableauIcon },
    { name: 'Python', icon: PythonIcon },
    { name: 'Pandas', icon: PandasIcon },
    { name: 'R', icon: RIcon },
    { name: 'Statistics', icon: StatisticsIcon },
    { name: 'Data Visualization', icon: DataVisIcon },
    { name: 'Data Modeling', icon: DataModelingIcon },
  ];

  const analyticsEvidence = [
    {
      projectSlug: 'explore-ceylon',
      projectName: 'ExploreCeylon',
      badge: 'Relational Analytics',
      focus: 'SQL & JPQL Relational Analytics',
      points: [
        'Tourism booking volume & revenue calculations',
        'Multi-factor destination ranking algorithm',
        'User review scoring & operational metrics',
      ],
    },
    {
      projectSlug: 'smart-inventory',
      projectName: 'Smart Inventory',
      badge: 'Procurement Telemetry',
      focus: 'Inventory Valuation & Spend Trends',
      points: [
        'FIFO / moving average valuation metrics',
        'Supplier procurement spend monitoring',
        'Low-stock threshold triggers & POI export',
      ],
    },
    {
      projectSlug: 'seneth-healing-foods',
      projectName: 'Seneth Healing Foods',
      badge: 'Business Operations',
      focus: 'MySQL Operational Data Management',
      points: [
        'Global export inquiry volume tracking',
        'Regional market interest distribution',
        'Production inquiries reporting & CSV export',
      ],
    },
  ];

  return (
    <section className="analytics-section-wrapper" id={id} ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="analytics-header-block">
          <div className="analytics-badge-pill">
            <DataVisIcon size={16} />
            <span>DATA & ANALYTICS</span>
          </div>

          <h2 className="analytics-heading">
            Turning Data Into <span className="analytics-heading-accent">Meaningful Insights</span>
          </h2>

          <p className="analytics-subheading">
            A growing focus on using data, analytical thinking, and visualization to understand
            patterns, support decisions, and solve practical business problems.
          </p>
        </div>

        {/* 1. Visually Prominent Career Direction Card */}
        <div className="career-direction-card">
          <div className="career-direction-header">
            <div className="career-pathway-badge">
              <span className="pathway-step start">DATA ANALYTICS</span>
              <span className="pathway-arrow">→</span>
              <span className="pathway-step target">DATA SCIENCE</span>
            </div>
            <span className="career-stage-tag">Career Roadmap</span>
          </div>

          <div className="career-direction-body">
            <div className="career-direction-text-col">
              <h3 className="career-direction-title">
                Building Rigorous Foundations for Applied Data Science
              </h3>
              <p className="career-direction-desc">
                Building strong foundations in SQL, Excel, Power BI, Python, statistics, data
                processing, and data visualization, with a long-term goal of progressing from
                Data Analytics into Data Science.
              </p>
              <div className="career-direction-checklist">
                <span className="career-check-item">✓ Mathematical & Statistical Rigor</span>
                <span className="career-check-item">✓ Business Telemetry & Reporting</span>
                <span className="career-check-item">✓ Relational Data Modeling</span>
              </div>
            </div>

            {/* Illustrative Dashboard Preview Card */}
            <div className="career-preview-widget">
              <div className="widget-header">
                <div className="widget-dots">
                  <span className="w-dot red"></span>
                  <span className="w-dot yellow"></span>
                  <span className="w-dot green"></span>
                </div>
                <span className="widget-title">Telemetry & SQL Visualizer</span>
                <span className="sample-badge">Sample visualization</span>
              </div>
              <div className="widget-content">
                <div className="widget-kpi-row">
                  <div className="mini-kpi-box">
                    <span className="mini-kpi-label">QUERY RUNTIME</span>
                    <span className="mini-kpi-val text-blue">14ms</span>
                  </div>
                  <div className="mini-kpi-box">
                    <span className="mini-kpi-label">INDEX SCAN</span>
                    <span className="mini-kpi-val text-teal">Optimized</span>
                  </div>
                  <div className="mini-kpi-box">
                    <span className="mini-kpi-label">ACCURACY</span>
                    <span className="mini-kpi-val text-green">100%</span>
                  </div>
                </div>
                <div className="widget-chart-placeholder">
                  {/* Stylized vector trend curve */}
                  <svg className="trend-curve-svg" viewBox="0 0 280 60" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0FAF9A" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#0FAF9A" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,45 Q40,38 70,28 T140,32 T210,14 T280,8 L280,60 L0,60 Z"
                      fill="url(#chartGrad)"
                    />
                    <path
                      d="M0,45 Q40,38 70,28 T140,32 T210,14 T280,8"
                      fill="none"
                      stroke="#0FAF9A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="210" cy="14" r="3.5" fill="#1D74D8" />
                    <circle cx="280" cy="8" r="4" fill="#0FAF9A" />
                  </svg>
                  <div className="chart-legend-row">
                    <span>Q1 Ingestion</span>
                    <span>Q2 Transformation</span>
                    <span>Q3 Insight</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Analytics Workflow Visual */}
        <div className="analytics-workflow-block">
          <div className="workflow-title-row">
            <span className="sub-section-tag">METHODOLOGY</span>
            <h3 className="sub-section-heading">How I Approach Analytical Problems</h3>
          </div>

          <div className="workflow-pipeline">
            {workflowSteps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <React.Fragment key={idx}>
                  <div className="workflow-node">
                    <div className="node-icon-box">
                      <StepIcon size={20} />
                    </div>
                    <span className="node-title">{step.label}</span>
                    <span className="node-sub">{step.subtitle}</span>
                  </div>
                  {idx < workflowSteps.length - 1 && (
                    <div className="workflow-connector">
                      <span className="connector-line"></span>
                      <span className="connector-arrow">›</span>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* 3. Analytics Capabilities (6 Interactive Cards) */}
        <div className="capabilities-block">
          <div className="workflow-title-row">
            <span className="sub-section-tag">CORE CAPABILITIES</span>
            <h3 className="sub-section-heading">Practical Analytics Competencies</h3>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((c) => {
              const CapIcon = c.icon;
              const isHovered = activeCapability === c.id;
              return (
                <div
                  key={c.id}
                  className={`capability-card ${isHovered ? 'active' : ''}`}
                  onMouseEnter={() => setActiveCapability(c.id)}
                  onMouseLeave={() => setActiveCapability(null)}
                >
                  <div className="cap-card-top">
                    <div className="cap-icon-box">
                      <CapIcon size={22} />
                    </div>
                    <span className="cap-level-pill">{c.level}</span>
                  </div>
                  <h4 className="cap-title">{c.title}</h4>
                  <span className="cap-subtitle">{c.subtitle}</span>
                  <p className="cap-desc">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Analytics Toolkit (Compact Badges) */}
        <div className="analytics-toolkit-block">
          <div className="toolkit-label">Relevant Analytical Toolkit:</div>
          <div className="analytics-toolkit-pills">
            {toolkit.map((item, idx) => {
              const ToolIcon = item.icon;
              return (
                <div key={idx} className="analytics-tool-pill">
                  <ToolIcon size={16} />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Project-Based Analytics Proof (3 Evidence Cards) */}
        <div className="analytics-proof-block">
          <div className="workflow-title-row">
            <span className="sub-section-tag">APPLIED EVIDENCE</span>
            <h3 className="sub-section-heading">Project-Based Analytics Proof</h3>
            <p className="sub-section-desc">
              Demonstrated application of relational data structures, reporting workflows,
              and operational metrics in developed systems.
            </p>
          </div>

          <div className="proof-cards-grid">
            {analyticsEvidence.map((proof, idx) => (
              <div key={idx} className="proof-card">
                <div className="proof-card-header">
                  <span className="proof-project-name">{proof.projectName}</span>
                  <span className="proof-badge">{proof.badge}</span>
                </div>
                <h4 className="proof-focus-title">{proof.focus}</h4>
                <ul className="proof-points-list">
                  {proof.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <span className="proof-bullet">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="proof-card-footer">
                  <button
                    type="button"
                    className="proof-link-btn"
                    onClick={() => onOpenCaseStudy && onOpenCaseStudy(proof.projectSlug)}
                  >
                    <span>View Project Case Study</span>
                    <span className="proof-arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
