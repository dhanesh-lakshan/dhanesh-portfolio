import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

// ============================================================================
// 1. DATA & ANALYTICS ICONS
// ============================================================================

// 1.1 Excel (Official Microsoft 365 / Fluent App Icon)
export const ExcelIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Background green folder sheet */}
    <rect x="6" y="3.5" width="15" height="17" rx="2" fill="#107C41" />
    <path d="M12 7.5H18.5V11H12V7.5Z" fill="#21A366" opacity="0.8" />
    <path d="M12 13H18.5V16.5H12V13Z" fill="#21A366" opacity="0.8" />
    {/* Front 3D tile with X */}
    <rect x="3" y="6" width="10.5" height="12" rx="1.8" fill="#107C41" />
    <rect x="3" y="6" width="10.5" height="12" rx="1.8" fill="url(#excelGrad)" />
    <path
      d="M5.6 8.5L7.4 12L5.5 15.5H7L8.2 13.1L9.4 15.5H10.9L9 12L10.8 8.5H9.3L8.2 10.8L7.1 8.5H5.6Z"
      fill="#FFFFFF"
    />
    <defs>
      <linearGradient id="excelGrad" x1="3" y1="6" x2="13.5" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1E8E4F" />
        <stop offset="1" stopColor="#0B5C2E" />
      </linearGradient>
    </defs>
  </svg>
);

// 1.2 SQL (Official Database Stack Icon)
export const SqlIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" fill="#0075FF" />
    <path d="M4.5 5.5V9.5C4.5 10.9 7.9 12 12 12C16.1 12 19.5 10.9 19.5 9.5V5.5" stroke="#0075FF" strokeWidth="1.8" />
    <ellipse cx="12" cy="9.5" rx="7.5" ry="2.2" fill="#E1EFFF" stroke="#0075FF" strokeWidth="1.2" />
    <path d="M4.5 9.5V13.5C4.5 14.9 7.9 16 12 16C16.1 16 19.5 14.9 19.5 13.5V9.5" stroke="#0075FF" strokeWidth="1.8" />
    <ellipse cx="12" cy="13.5" rx="7.5" ry="2.2" fill="#E1EFFF" stroke="#0075FF" strokeWidth="1.2" />
    <path d="M4.5 13.5V17.5C4.5 18.9 7.9 20 12 20C16.1 20 19.5 18.9 19.5 17.5V13.5" stroke="#0075FF" strokeWidth="1.8" />
    <ellipse cx="12" cy="17.5" rx="7.5" ry="2.2" fill="#E1EFFF" stroke="#0075FF" strokeWidth="1.2" />
  </svg>
);

// 1.3 MySQL (Official Dolphin + Typography Logo)
export const MySqlIcon: React.FC<IconProps> = ({ size = 22, className }) => (
  <svg width={size} height={size} viewBox="0 0 32 24" fill="none" className={className}>
    {/* Sakila dolphin leaping */}
    <path
      d="M19.5 3C18 3.5 16.5 4.8 16 6.2C15.2 5.5 14 5.2 12.8 5.6C11.5 6 10.8 7.2 11 8.5C9.8 8.8 8.8 9.6 8.2 10.6C7.2 12.2 6.8 14.2 7.2 16.1C7.8 15.6 8.5 15.2 9.2 15C10 14.8 11.2 15 12 15.4C13.2 14.2 15 12.5 16.8 10C17.5 9 18.2 7.8 18.8 6.5C19.2 5.6 19.8 4.2 19.5 3Z"
      fill="#00758F"
    />
    <path
      d="M16.8 10C17.8 11.5 19.2 12.5 21 12.8C20.2 13.6 19.2 14.2 18.2 14.5L16.8 10Z"
      fill="#F29111"
    />
    {/* MySQL stylized text */}
    <text x="2" y="21.5" fontFamily="system-ui, sans-serif" fontSize="7.5" fontWeight="800" fill="#00758F" letterSpacing="-0.3px">
      My<tspan fill="#F29111">SQL</tspan>
    </text>
  </svg>
);

// 1.4 PostgreSQL (Official Slonik Elephant Head Logo)
export const PostgreSqlIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M17.8 8.6C17.4 7.2 16.5 6.1 15.2 5.4C14 4.7 12.5 4.5 11.1 4.7C9.7 4.9 8.4 5.6 7.4 6.6C6.4 7.6 5.8 8.9 5.6 10.3C5.4 11.7 5.7 13.1 6.4 14.3C6.7 14.9 7.1 15.4 7.6 15.8V19H9.4V16.8C9.9 17 10.5 17.1 11.1 17.1C12.3 17.1 13.5 16.7 14.4 16C15.4 15.2 16.1 14.1 16.4 12.9H18.2V11.2H16.6C16.8 10.3 17.2 9.5 17.8 8.6Z"
      fill="#336791"
    />
    {/* Slonik white ear and eye accents */}
    <path d="M10.8 7.5C11.5 7.5 12.2 7.8 12.6 8.3C13 8.8 13.2 9.5 13.1 10.2C13 10.9 12.6 11.5 12 11.8C11.4 12.2 10.7 12.2 10 12" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" />
    <circle cx="8.5" cy="9.2" r="0.8" fill="#FFFFFF" />
    {/* Trunk downward curve */}
    <path d="M6.2 14.2C5.5 15 5.2 16.1 5.4 17.2C5.6 18.2 6.5 19 7.5 19.2C8 19.3 8.5 19 8.6 18.5C8.7 18 8.4 17.5 7.9 17.4C7.4 17.3 7 16.9 6.9 16.4C6.8 15.9 7 15.4 7.4 15.1L6.2 14.2Z" fill="#336791" />
  </svg>
);

// 1.5 Power BI (Official Microsoft Power BI 3-Bar Logo)
export const PowerBiIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Left Bar (Short, Amber) */}
    <rect x="3.5" y="11" width="4.5" height="10" rx="1.8" fill="#E6AD10" />
    {/* Middle Bar (Medium, Gold) */}
    <rect x="9.75" y="6.5" width="4.5" height="14.5" rx="1.8" fill="#F2C811" />
    {/* Right Bar (Tall, Yellow Bright) */}
    <rect x="16" y="2.5" width="4.5" height="18.5" rx="1.8" fill="#FADB36" />
  </svg>
);

// 1.6 Tableau (Official Multi-Color Cross Cluster Logo)
export const TableauIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Center Red Cross */}
    <rect x="10.8" y="8" width="2.4" height="8" fill="#D62728" />
    <rect x="8" y="10.8" width="8" height="2.4" fill="#D62728" />
    {/* Top Orange Cross */}
    <rect x="11.2" y="2" width="1.6" height="5" fill="#E97627" />
    <rect x="9.5" y="3.7" width="5" height="1.6" fill="#E97627" />
    {/* Bottom Orange Cross */}
    <rect x="11.2" y="17" width="1.6" height="5" fill="#E97627" />
    <rect x="9.5" y="18.7" width="5" height="1.6" fill="#E97627" />
    {/* Left Blue Cross */}
    <rect x="2" y="11.2" width="5" height="1.6" fill="#1F77B4" />
    <rect x="3.7" y="9.5" width="1.6" height="5" fill="#1F77B4" />
    {/* Right Teal/Slate Cross */}
    <rect x="17" y="11.2" width="5" height="1.6" fill="#4B698B" />
    <rect x="18.7" y="9.5" width="1.6" height="5" fill="#4B698B" />
    {/* Corner micro pluses */}
    <rect x="5.5" y="5.5" width="1.2" height="3" fill="#3399CC" />
    <rect x="4.6" y="6.4" width="3" height="1.2" fill="#3399CC" />
    <rect x="17.3" y="5.5" width="1.2" height="3" fill="#D62728" />
    <rect x="16.4" y="6.4" width="3" height="1.2" fill="#D62728" />
    <rect x="5.5" y="15.5" width="1.2" height="3" fill="#E97627" />
    <rect x="4.6" y="16.4" width="3" height="1.2" fill="#E97627" />
    <rect x="17.3" y="15.5" width="1.2" height="3" fill="#1F77B4" />
    <rect x="16.4" y="16.4" width="3" height="1.2" fill="#1F77B4" />
  </svg>
);

// 1.7 Data Visualization (Exact Line Graph with Arrow)
export const DataVisIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Chart axes */}
    <path d="M3 3V19C3 19.6 3.4 20 4 20H20" stroke="#0072F5" strokeWidth="2.2" strokeLinecap="round" />
    {/* Upward zigzag trendline */}
    <path
      d="M4.5 15.5L9.5 10.5L13.5 13.5L18.5 7"
      stroke="#0072F5"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Arrow head */}
    <path d="M15 7H18.5V10.5" stroke="#0072F5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 1.8 Data Modeling (Database Cylinder Stack)
export const DataModelingIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="5" rx="7.5" ry="2.5" fill="#0072F5" />
    <path d="M4.5 5V9C4.5 10.4 7.9 11.5 12 11.5C16.1 11.5 19.5 10.4 19.5 9V5" stroke="#0072F5" strokeWidth="1.8" />
    <ellipse cx="12" cy="9" rx="7.5" ry="2.2" fill="#E1EFFF" stroke="#0072F5" strokeWidth="1.2" />
    <path d="M4.5 9V13C4.5 14.4 7.9 15.5 12 15.5C16.1 15.5 19.5 14.4 19.5 13V9" stroke="#0072F5" strokeWidth="1.8" />
    <ellipse cx="12" cy="13" rx="7.5" ry="2.2" fill="#E1EFFF" stroke="#0072F5" strokeWidth="1.2" />
    <path d="M4.5 13V17C4.5 18.4 7.9 19.5 12 19.5C16.1 19.5 19.5 18.4 19.5 17V13" stroke="#0072F5" strokeWidth="1.8" />
    <ellipse cx="12" cy="17" rx="7.5" ry="2.2" fill="#E1EFFF" stroke="#0072F5" strokeWidth="1.2" />
  </svg>
);

// 1.9 KPI Reporting (Clipboard with Checkmarks and Badge)
export const KpiReportingIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="4" width="14" height="17" rx="2" stroke="#0072F5" strokeWidth="1.8" />
    <path d="M8 3V5H14V3" stroke="#0072F5" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M7.5 9H14.5M7.5 13H12" stroke="#0072F5" strokeWidth="1.8" strokeLinecap="round" />
    {/* KPI checkmark / gear badge at bottom right */}
    <circle cx="16.5" cy="16.5" r="3.5" fill="#0072F5" />
    <path d="M15 16.5L16 17.5L18 15.5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 1.10 Time-Series Analysis (Line Graph with Trend Arrow)
export const TimeSeriesIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 4V19C3 19.6 3.4 20 4 20H20" stroke="#0072F5" strokeWidth="2.2" strokeLinecap="round" />
    <path
      d="M4.5 15L9.5 10L13.5 13L18.5 7"
      stroke="#0072F5"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M15 7H18.5V10.5" stroke="#0072F5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ============================================================================
// 2. DATA SCIENCE ICONS
// ============================================================================

// 2.1 Python (Official Dual-Snake Logo)
export const PythonIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Top Blue Snake */}
    <path
      d="M11.9 2C8.6 2 8.8 3.4 8.8 3.4L8.8 4.9H12.1V5.4H5.3C5.3 5.4 2 5 2 8.4C2 11.8 4.8 11.6 4.8 11.6H6.3V9.8C6.3 7.8 8.1 7.8 8.1 7.8H12.1C13.8 7.8 14.1 6.8 14.1 6.8V3.4C14.1 3.4 14.3 2 11.9 2ZM10.5 3.3C10.9 3.3 11.2 3.6 11.2 4C11.2 4.4 10.9 4.7 10.5 4.7C10.1 4.7 9.8 4.4 9.8 4C9.8 3.6 10.1 3.3 10.5 3.3Z"
      fill="#3776AB"
    />
    {/* Bottom Yellow Snake */}
    <path
      d="M12.1 22C15.4 22 15.2 20.6 15.2 20.6L15.2 19.1H11.9V18.6H18.7C18.7 18.6 22 19 22 15.6C22 12.2 19.2 12.4 19.2 12.4H17.7V14.2C17.7 16.2 15.9 16.2 15.9 16.2H11.9C10.2 16.2 9.9 17.2 9.9 17.2V20.6C9.9 20.6 9.7 22 12.1 22ZM13.5 20.7C13.1 20.7 12.8 20.4 12.8 20C12.8 19.6 13.1 19.3 13.5 19.3C13.9 19.3 14.2 19.6 14.2 20C14.2 20.4 13.9 20.7 13.5 20.7Z"
      fill="#FFD43B"
    />
  </svg>
);

// 2.2 Pandas (Official 4-Bar PyData Logo)
export const PandasIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Left Navy Bar */}
    <rect x="4.5" y="4.5" width="3" height="15" rx="1.2" fill="#150458" />
    {/* Second Yellow Bar with ticks */}
    <rect x="9" y="8" width="3" height="11.5" rx="1.2" fill="#FFD43B" />
    {/* Third Magenta Bar */}
    <rect x="13.5" y="4.5" width="3" height="11" rx="1.2" fill="#E70488" />
    {/* Fourth Navy Bar */}
    <rect x="18" y="9.5" width="3" height="10" rx="1.2" fill="#150458" />
  </svg>
);

// 2.3 R (Official R-Project Logo)
export const RIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Gray Outer Oval */}
    <ellipse cx="13" cy="12" rx="8" ry="6.5" fill="#CBDBE8" />
    <ellipse cx="13.5" cy="12" rx="5.5" ry="4.5" fill="#FFFFFF" />
    {/* Blue R */}
    <path
      d="M7 6.5H13.2C15.8 6.5 17.5 7.8 17.5 10C17.5 11.8 16.2 12.8 14.5 13.2L18 17.5H15L12 13.5H9.5V17.5H7V6.5ZM9.5 11.5H12.8C14.2 11.5 15 10.9 15 10C15 9.1 14.2 8.5 12.8 8.5H9.5V11.5Z"
      fill="#276DC3"
    />
  </svg>
);

// 2.4 Statistics (Official Sigma Symbol)
export const StatisticsIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M5 4.5H19V8L12.5 12L19 16V19.5H5V16.5L13 12L5 7.5V4.5Z"
      fill="#0072F5"
    />
  </svg>
);

// 2.5 Applied Statistics (Ascending Bar Graph)
export const AppliedStatsIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Baseline */}
    <path d="M3 20H21" stroke="#0072F5" strokeWidth="2" strokeLinecap="round" />
    {/* Bars */}
    <rect x="4.5" y="13" width="3.5" height="7" fill="#0072F5" />
    <rect x="10.25" y="9" width="3.5" height="11" fill="#0072F5" />
    <rect x="16" y="5" width="3.5" height="15" fill="#0072F5" />
  </svg>
);

// 2.6 Mathematical Modeling (Isometric 3D Cube)
export const MathModelIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Top Face */}
    <path d="M12 2.5L20 7L12 11.5L4 7L12 2.5Z" fill="#3B82F6" />
    {/* Left Face */}
    <path d="M4 7V17L12 21.5V11.5L4 7Z" fill="#1D4ED8" />
    {/* Right Face */}
    <path d="M12 11.5V21.5L20 17V7L12 11.5Z" fill="#2563EB" />
  </svg>
);

// 2.7 Data Processing (Database Cylinder with Processing Discs)
export const DataProcessingIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="5" rx="7.5" ry="2.5" fill="#0072F5" />
    <path d="M4.5 5V9C4.5 10.4 7.9 11.5 12 11.5C16.1 11.5 19.5 10.4 19.5 9V5" stroke="#0072F5" strokeWidth="1.8" />
    <ellipse cx="12" cy="9" rx="7.5" ry="2.2" fill="#E1EFFF" stroke="#0072F5" strokeWidth="1.2" />
    <path d="M4.5 9V13C4.5 14.4 7.9 15.5 12 15.5C16.1 15.5 19.5 14.4 19.5 13V9" stroke="#0072F5" strokeWidth="1.8" />
    <ellipse cx="12" cy="13" rx="7.5" ry="2.2" fill="#E1EFFF" stroke="#0072F5" strokeWidth="1.2" />
    <path d="M4.5 13V17C4.5 18.4 7.9 19.5 12 19.5C16.1 19.5 19.5 18.4 19.5 17V13" stroke="#0072F5" strokeWidth="1.8" />
    <ellipse cx="12" cy="17" rx="7.5" ry="2.2" fill="#E1EFFF" stroke="#0072F5" strokeWidth="1.2" />
  </svg>
);

// 2.8 Exploratory Data Analysis (Magnifying Glass)
export const EdaIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="10.5" cy="10.5" r="6.5" stroke="#0072F5" strokeWidth="2.4" />
    <path d="M15.5 15.5L20.5 20.5" stroke="#0072F5" strokeWidth="2.8" strokeLinecap="round" />
  </svg>
);

// ============================================================================
// 3. SOFTWARE ENGINEERING ICONS
// ============================================================================

// 3.1 Java (Official Coffee Cup Logo)
export const JavaIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Blue Cup Base & Saucer */}
    <path d="M5 16.5C8 17.5 14 17.5 17 16.5C17.5 17.5 16 19 13.5 19.5C8.5 20 5.5 18.5 5 16.5Z" fill="#5382A1" />
    <path d="M6 14C8 14.8 14 14.8 16 14C15.5 16 12 16.5 9 16.5C7 16.5 6.2 15.5 6 14Z" fill="#5382A1" />
    {/* Red / Orange Steam */}
    <path
      d="M13.8 2C13.8 2 15.5 4 13.2 6C11 8 12.5 9.5 12.5 9.5C12.5 9.5 10.5 7.8 12.2 6.2C13.8 4.5 13.8 2 13.8 2Z"
      fill="#E76F00"
    />
    <path
      d="M10.5 3C10.5 3 12 4.5 10.2 6.5C8.5 8.2 9.8 10 9.8 10C9.8 10 8 8.2 9.5 6.8C10.8 5.2 10.5 3 10.5 3Z"
      fill="#E76F00"
    />
    <path
      d="M16.5 4.5C16.5 4.5 18 6 16.2 8C14.8 9.5 15.8 11.5 15.8 11.5C15.8 11.5 14.2 9.8 15.2 8.2C16.2 6.8 16.5 4.5 16.5 4.5Z"
      fill="#E76F00"
    />
  </svg>
);

// 3.2 Spring Boot (Official Green Leaf Logo)
export const SpringBootIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Green Leaf Outline & Body */}
    <path
      d="M21 3C21 3 14 3.5 9.5 8C5 12.5 4.5 19.5 4.5 19.5C4.5 19.5 11.5 19 16 14.5C20.5 10 21 3 21 3Z"
      fill="#6DB33F"
    />
    {/* White Central Vein */}
    <path d="M5 19L14.5 9.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 3.3 JavaScript (Official Yellow Square JS Logo)
export const JavaScriptIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="3.5" fill="#F7DF1E" />
    <path
      d="M7.5 18.2C8.3 18.7 9.3 19 10.3 19C11.8 19 12.6 18.3 12.6 17.2V11.2H10.5V17.1C10.5 17.5 10.2 17.7 9.7 17.7C9 17.7 8.4 17.4 7.9 16.9L7.5 18.2ZM13.8 18.5C14.9 19 16.2 19.2 17.3 19.2C19.8 19.2 21.2 18 21.2 16.1C21.2 14.5 20.3 13.7 18.6 13L17.9 12.7C16.9 12.3 16.5 11.9 16.5 11.3C16.5 10.6 17.1 10.1 18.2 10.1C19 10.1 19.9 10.4 20.5 10.8L21.1 9.4C20.4 8.9 19.3 8.6 18.2 8.6C15.9 8.6 14.5 9.9 14.5 11.6C14.5 13.2 15.5 14.1 17.1 14.7L17.8 15C18.9 15.4 19.4 15.9 19.4 16.6C19.4 17.5 18.6 18 17.4 18C16.2 18 15.1 17.6 14.4 17L13.8 18.5Z"
      fill="#000000"
    />
  </svg>
);

// 3.4 React (Official Cyan Atomic Logo)
export const ReactIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#00D8FF" strokeWidth="1.6" />
    <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#00D8FF" strokeWidth="1.6" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="#00D8FF" strokeWidth="1.6" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.8" fill="#00D8FF" />
  </svg>
);

// 3.5 PHP (Official Purple Oval Logo)
export const PhpIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 26 20" fill="none" className={className}>
    <ellipse cx="13" cy="10" rx="12" ry="7.5" fill="#777BB4" />
    {/* Stylized interconnected white italic php */}
    <text
      x="13"
      y="13"
      fontFamily="Impact, sans-serif"
      fontSize="9"
      fontStyle="italic"
      fontWeight="bold"
      fill="#FFFFFF"
      textAnchor="middle"
      letterSpacing="0.5px"
    >
      php
    </text>
  </svg>
);

// 3.6 REST APIs (Network Nodes & Gear)
export const RestApiIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="3.2" stroke="#0072F5" strokeWidth="2" />
    <path d="M12 3V6M12 18V21M3 12H6M18 12H21" stroke="#0072F5" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="3" r="1.5" fill="#0072F5" />
    <circle cx="12" cy="21" r="1.5" fill="#0072F5" />
    <circle cx="3" cy="12" r="1.5" fill="#0072F5" />
    <circle cx="21" cy="12" r="1.5" fill="#0072F5" />
  </svg>
);

// 3.7 Object-Oriented Programming (3 Stacked Isometric Layers)
export const OopIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 3L20 7.5L12 12L4 7.5L12 3Z" fill="#3B82F6" stroke="#0072F5" strokeWidth="1.6" />
    <path d="M4 12L12 16.5L20 12" stroke="#0072F5" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M4 16.5L12 21L20 16.5" stroke="#0072F5" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 3.8 Database Management (Database Stack)
export const DatabaseMgmtIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" fill="#0072F5" />
    <path d="M4.5 5.5V10C4.5 11.4 7.9 12.5 12 12.5C16.1 12.5 19.5 11.4 19.5 10V5.5" stroke="#0072F5" strokeWidth="1.8" />
    <ellipse cx="12" cy="10" rx="7.5" ry="2.2" fill="#E1EFFF" stroke="#0072F5" strokeWidth="1.2" />
    <path d="M4.5 10V14.5C4.5 15.9 7.9 17 12 17C16.1 17 19.5 15.9 19.5 14.5V10" stroke="#0072F5" strokeWidth="1.8" />
    <ellipse cx="12" cy="14.5" rx="7.5" ry="2.2" fill="#E1EFFF" stroke="#0072F5" strokeWidth="1.2" />
    <path d="M4.5 14.5V19C4.5 20.4 7.9 21.5 12 21.5C16.1 21.5 19.5 20.4 19.5 19V14.5" stroke="#0072F5" strokeWidth="1.8" />
    <ellipse cx="12" cy="19" rx="7.5" ry="2.2" fill="#E1EFFF" stroke="#0072F5" strokeWidth="1.2" />
  </svg>
);

// ============================================================================
// 4. CLOUD & DATA PLATFORMS ICONS
// ============================================================================

// 4.1 AWS (Official Amazon Web Services Logo with Smile Arrow)
export const AwsIcon: React.FC<IconProps> = ({ size = 22, className }) => (
  <svg width={size} height={size} viewBox="0 0 26 20" fill="none" className={className}>
    {/* aws text */}
    <text x="1" y="11.5" fontFamily="system-ui, sans-serif" fontSize="10.5" fontWeight="900" fill="#232F3E" letterSpacing="-0.5px">
      aws
    </text>
    {/* Orange Smile Curve Arrow */}
    <path
      d="M2.5 14.5C7.5 17.5 15 17.5 21 13.8"
      stroke="#FF9900"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path d="M21.5 12.8L22 15L19.5 14.5L21.5 12.8Z" fill="#FF9900" />
  </svg>
);

// 4.2 Microsoft Azure (Official Folded Origami A Logo)
export const AzureIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Left Deep Blue Wing */}
    <path d="M13.5 3L5.5 17.5H11L13.5 3Z" fill="#0078D4" />
    {/* Right Light Blue / Cyan Wing */}
    <path d="M11.5 17.5L14 12.5L16.5 17.5H11.5Z" fill="#005A9E" />
    <path d="M15.5 3L9.5 14L13.8 21H19.5L15.5 3Z" fill="#50E6FF" />
  </svg>
);

// 4.3 Databricks (Official 4-Rhombus Stack Logo)
export const DatabricksIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* 4 Stacked Red Parallelograms */}
    <path d="M12 2.5L3 7L12 11.5L21 7L12 2.5Z" fill="#FF3621" />
    <path d="M3 10.5L12 15L21 10.5L18.5 9.2L12 12.5L5.5 9.2L3 10.5Z" fill="#FF3621" />
    <path d="M3 14L12 18.5L21 14L18.5 12.7L12 16L5.5 12.7L3 14Z" fill="#FF3621" />
    <path d="M3 17.5L12 22L21 17.5L18.5 16.2L12 19.5L5.5 16.2L3 17.5Z" fill="#FF3621" />
  </svg>
);

// 4.4 Docker (Official Whale Logo)
export const DockerIcon: React.FC<IconProps> = ({ size = 22, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    {/* Container blocks */}
    <rect x="6.5" y="7" width="2" height="2" fill="#0DB7ED" />
    <rect x="9" y="7" width="2" height="2" fill="#0DB7ED" />
    <rect x="11.5" y="7" width="2" height="2" fill="#0DB7ED" />
    <rect x="4" y="9.5" width="2" height="2" fill="#0DB7ED" />
    <rect x="6.5" y="9.5" width="2" height="2" fill="#0DB7ED" />
    <rect x="9" y="9.5" width="2" height="2" fill="#0DB7ED" />
    <rect x="11.5" y="9.5" width="2" height="2" fill="#0DB7ED" />
    <rect x="14" y="9.5" width="2" height="2" fill="#0DB7ED" />
    {/* Whale body and tail */}
    <path
      d="M21.5 11.5C21 11.5 19.8 11.7 19.2 12.3C18.6 11.5 17.5 11.8 17 12C16.8 11.2 16.2 11 16 11H3.5C2.5 13.5 2.5 16 6 17.5C11 19.5 18 18 20.5 15C21.8 15 22.5 13.8 22.5 13.2C22.2 13.2 21.6 13.2 21.2 12.8C21.7 12.3 22.1 11.8 21.5 11.5Z"
      fill="#0DB7ED"
    />
  </svg>
);

// 4.5 Git (Official Orange Diamond with Commit Tree)
export const GitIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M21.6 10.9L13.1 2.4C12.5 1.8 11.5 1.8 10.9 2.4L2.4 10.9C1.8 11.5 1.8 12.5 2.4 13.1L10.9 21.6C11.5 22.2 12.5 22.2 13.1 21.6L21.6 13.1C22.2 12.5 22.2 11.5 21.6 10.9Z"
      fill="#F05032"
    />
    <circle cx="10" cy="8.5" r="1.7" fill="#FFFFFF" />
    <circle cx="15.5" cy="13.5" r="1.7" fill="#FFFFFF" />
    <circle cx="10" cy="16.5" r="1.7" fill="#FFFFFF" />
    <path d="M10 8.5V16.5M10 12.5C11.5 12.5 13.5 12.5 15.5 13.5" stroke="#FFFFFF" strokeWidth="1.8" />
  </svg>
);

// 4.6 GitHub (Official Octocat Silhouette Logo)
export const GitHubIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017C2 16.444 4.867 20.198 8.839 21.524C9.339 21.616 9.521 21.308 9.521 21.042C9.521 20.803 9.512 20.015 9.508 19.176C6.726 19.782 6.139 17.834 6.139 17.834C5.685 16.677 5.029 16.37 5.029 16.37C4.122 15.748 5.098 15.761 5.098 15.761C6.102 15.831 6.631 16.793 6.631 16.793C7.522 18.324 8.966 17.882 9.536 17.627C9.626 16.979 9.885 16.537 10.171 16.286C7.951 16.033 5.617 15.174 5.617 11.339C5.617 10.246 6.007 9.353 6.647 8.653C6.544 8.399 6.201 7.38 6.745 6.009C6.745 6.009 7.584 5.739 9.493 7.035C10.291 6.812 11.146 6.701 12 6.697C12.854 6.701 13.71 6.812 14.509 7.035C16.417 5.739 17.254 6.009 17.254 6.009C17.799 7.38 17.457 8.399 17.354 8.653C17.996 9.353 18.382 10.246 18.382 11.339C18.382 15.185 16.043 16.03 13.816 16.278C14.175 16.588 14.496 17.199 14.496 18.134C14.496 19.475 14.484 20.558 14.484 20.887C14.484 21.157 14.663 21.469 15.172 21.369C19.141 20.038 22 16.288 22 12.017C22 6.484 17.523 2 12 2Z"
      fill="currentColor"
    />
  </svg>
);

// ============================================================================
// 5. CATEGORY HEADER ICONS
// ============================================================================

export const AnalyticsCategoryIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="13" width="4.5" height="8" rx="1.5" fill="#1A73E8" />
    <rect x="9.5" y="8" width="4.5" height="13" rx="1.5" fill="#1A73E8" />
    <rect x="16" y="3" width="4.5" height="18" rx="1.5" fill="#1A73E8" />
  </svg>
);

export const DataScienceCategoryIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M9.5 4C8.2 4 7 4.8 6.4 6C5 6.3 4 7.5 4 9C4 9.7 4.2 10.3 4.6 10.8C4.2 11.4 4 12.2 4 13C4 14.5 5 15.7 6.4 16C7 17.2 8.2 18 9.5 18H10V4H9.5ZM14.5 4C15.8 4 17 4.8 17.6 6C19 6.3 20 7.5 20 9C20 9.7 19.8 10.3 19.4 10.8C19.8 11.4 20 12.2 20 13C20 14.5 19 15.7 17.6 16C17 17.2 15.8 18 14.5 18H14V4H14.5ZM10 19.5C8.6 19.5 7.5 18.4 7.5 17H10V19.5ZM14 19.5V17H16.5C16.5 18.4 15.4 19.5 14 19.5Z"
      fill="#1A73E8"
    />
  </svg>
);

export const SoftwareCategoryIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M8.5 7.5L4 12L8.5 16.5M15.5 7.5L20 12L15.5 16.5M13.5 5.5L10.5 18.5"
      stroke="#1A73E8"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloudCategoryIcon: React.FC<IconProps> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M19.5 18.5H6.5C4 18.5 2 16.5 2 14C2 11.8 3.6 10 5.7 9.6C6.4 6.4 9.2 4 12.5 4C16.3 4 19.4 7 19.5 10.7C21 11.2 22 12.7 22 14.5C22 16.7 20.9 18.5 19.5 18.5Z"
      fill="#1A73E8"
    />
  </svg>
);

export const CogIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="#00A99D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.4 15A1.65 1.65 0 0 0 19.73 16.82L20 17.15A2 2 0 1 1 17.17 19.98L16.84 19.71A1.65 1.65 0 0 0 15 19.4A1.65 1.65 0 0 0 14 20.93V21.5A2 2 0 1 1 10 21.5V20.93A1.65 1.65 0 0 0 9 19.4A1.65 1.65 0 0 0 7.18 19.73L6.85 20A2 2 0 1 1 4.02 17.17L4.29 16.84A1.65 1.65 0 0 0 4.6 15A1.65 1.65 0 0 0 3.07 14H2.5A2 2 0 1 1 2.5 10H3.07A1.65 1.65 0 0 0 4.6 9A1.65 1.65 0 0 0 4.27 7.18L4 6.85A2 2 0 1 1 6.83 4.02L7.16 4.29A1.65 1.65 0 0 0 9 4.6A1.65 1.65 0 0 0 10 3.07V2.5A2 2 0 1 1 14 2.5V3.07A1.65 1.65 0 0 0 15 4.6A1.65 1.65 0 0 0 16.82 4.27L17.15 4A2 2 0 1 1 19.98 6.83L19.71 7.16A1.65 1.65 0 0 0 19.4 9A1.65 1.65 0 0 0 20.93 10H21.5A2 2 0 1 1 21.5 14H20.93A1.65 1.65 0 0 0 19.4 15Z"
      stroke="#00A99D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ============================================================================
// 6. ADDITIONAL PROJECT-SPECIFIC BRAND ICONS
// ============================================================================

// 6.1 FastAPI
export const FastApiIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" fill="#009688" />
    <path d="M12.5 4.5L6.5 13H11.5L10.5 19.5L17.5 11H12.5L13.5 4.5H12.5Z" fill="#FFFFFF" />
  </svg>
);

// 6.2 Apache POI / Apache Feather
export const ApachePoiIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M17.5 3C15.8 4.8 14.5 7.2 13.8 9.8C13.2 8.5 12 7.5 10.5 7.2C8.8 6.8 6.8 7.5 5.5 9.2C4.2 10.9 4 13.2 4.8 15.2C3.8 16.2 3.2 17.8 3.5 19.2C3.8 20.2 4.5 21 5.5 21.2C6.8 21.5 8.2 20.8 9 19.8C10.5 18 11.8 15.8 12.8 13.5C14.5 16 16.8 18.5 19.8 19.8L20.5 18C18.2 16.8 16.2 14.8 14.8 12.2C16.2 9.5 18 6.8 20.2 4.5L17.5 3Z"
      fill="#D22128"
    />
    <path
      d="M12.8 13.5C11.8 15.8 10.5 18 9 19.8C8.2 20.8 6.8 21.5 5.5 21.2C5.2 19.8 5.8 18.2 6.8 17.2C7.5 16.5 8.5 16.2 9.5 16.5L12.8 13.5Z"
      fill="#29ABE2"
      opacity="0.8"
    />
    <path
      d="M10.5 7.2C12 7.5 13.2 8.5 13.8 9.8C12.8 11.2 11.8 12.8 11 14.5L8.5 12.5C8 10.8 8.8 8.8 10.5 7.2Z"
      fill="#F15A24"
    />
    <path
      d="M13.8 9.8C14.5 7.2 15.8 4.8 17.5 3L16 4.8C14.8 7 13.8 9.5 13.2 12L12 11C12.5 10.5 13.2 10.2 13.8 9.8Z"
      fill="#28A745"
    />
  </svg>
);

// 6.3 Bootstrap
export const BootstrapIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect width="24" height="24" rx="5" fill="#7952B3" />
    <path
      d="M7 6.5H12.2C14.1 6.5 15.4 7.4 15.4 9C15.4 10.1 14.6 11 13.4 11.3C15 11.6 16 12.7 16 14.1C16 16 14.5 17.5 12.2 17.5H7V6.5ZM9.8 8.8V10.8H12C12.8 10.8 13.3 10.3 13.3 9.8C13.3 9.2 12.8 8.8 12 8.8H9.8ZM9.8 12.8V15.2H12.4C13.2 15.2 13.8 14.7 13.8 14C13.8 13.3 13.2 12.8 12.4 12.8H9.8Z"
      fill="#FFFFFF"
    />
  </svg>
);

// 6.4 cPanel
export const CPanelIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 28 20" fill="none" className={className}>
    <rect width="28" height="20" rx="3.5" fill="#FF6C2C" />
    <text x="14" y="14.5" fontFamily="system-ui, sans-serif" fontSize="11" fontWeight="900" fill="#FFFFFF" textAnchor="middle" letterSpacing="-0.5px">
      cP
    </text>
  </svg>
);

// 6.5 MongoDB
export const MongoDbIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2C11.5 3.5 7.5 8.5 7.5 13C7.5 16.5 9.5 20 12 22C14.5 20 16.5 16.5 16.5 13C16.5 8.5 12.5 3.5 12 2Z"
      fill="#13AA52"
    />
    <path
      d="M12 2V22C14.5 20 16.5 16.5 16.5 13C16.5 8.5 12.5 3.5 12 2Z"
      fill="#10AA50"
    />
    <path
      d="M12 2V21.5C11.7 21.3 11.2 20.8 10.8 20.2C10.5 19.8 11.5 14 11.5 13C11.5 10 11.8 5 12 2Z"
      fill="#FFFFFF"
      opacity="0.3"
    />
  </svg>
);

// 6.6 Express.js
export const ExpressIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10.5" fill="#000000" />
    <text x="12" y="15" fontFamily="system-ui, sans-serif" fontSize="8.5" fontWeight="800" fill="#FFFFFF" textAnchor="middle">
      ex
    </text>
  </svg>
);

// 6.7 Node.js
export const NodeJsIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z"
      stroke="#539E43"
      strokeWidth="2"
      fill="#FFFFFF"
    />
    <path
      d="M12 6L17.5 9.2V15.6L12 18.8L6.5 15.6V9.2L12 6Z"
      fill="#539E43"
    />
    <path
      d="M9.5 15V9L14.5 15V9"
      stroke="#FFFFFF"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 6.8 Cloudinary
export const CloudinaryIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M18.5 16.5H6.5C4.6 16.5 3 14.9 3 13C3 11.3 4.2 9.8 5.8 9.5C6.4 6.8 8.9 4.8 11.8 4.8C15.1 4.8 17.8 7.3 18.1 10.5C19.7 10.9 21 12.3 21 14C21 15.4 19.9 16.5 18.5 16.5Z"
      fill="#3448C5"
    />
    <circle cx="12" cy="11.5" r="3" fill="#FFFFFF" opacity="0.9" />
    <path d="M10 11.5L11.5 13L14.5 10" stroke="#3448C5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 6.9 HTML5
export const HtmlIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 2L5.8 20L12 22L18.2 20L20 2H4Z" fill="#E34F26" />
    <path d="M12 3.8V20.1L16.8 18.6L18.2 3.8H12Z" fill="#EF652A" />
    <path d="M12 7.6H8.2L8.5 10.6H12V7.6ZM12 13.6H8.8L9.1 16.6L12 17.4V15.2L10.9 14.9L10.8 13.6H12V13.6Z" fill="#FFFFFF" />
    <path d="M12 7.6V10.6H15.5L15.2 13.6H12V15.2L14.9 14.4L15.1 12.1H16.8L16.4 16.6L12 17.8V17.8Z" fill="#EBEBEB" />
  </svg>
);

// 6.10 CSS3
export const CssIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 2L5.8 20L12 22L18.2 20L20 2H4Z" fill="#1572B6" />
    <path d="M12 3.8V20.1L16.8 18.6L18.2 3.8H12Z" fill="#33A9DC" />
    <path d="M12 7.6H8.2L8.5 10.6H12V7.6ZM12 13.6H8.8L9.1 16.6L12 17.4V15.2L10.9 14.9L10.8 13.6H12V13.6Z" fill="#FFFFFF" />
    <path d="M12 7.6V10.6H15.5L15.2 13.6H12V15.2L14.9 14.4L15.1 12.1H16.8L16.4 16.6L12 17.8V17.8Z" fill="#EBEBEB" />
  </svg>
);

// 6.11 Tailwind CSS
export const TailwindIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 6C9 6 7.2 7.5 6.6 10.5C7.8 8.7 9.3 8.1 11.1 8.7C12.3 9.1 13.1 9.9 14.1 10.9C15.6 12.5 17.4 14.4 21.6 14.4C24.6 14.4 26.4 12.9 27 9.9C25.8 11.7 24.3 12.3 22.5 11.7C21.3 11.3 20.5 10.5 19.5 9.5C18 7.9 16.2 6 12 6ZM2.4 13.2C-0.6 13.2 -2.4 14.7 -3 17.7C-1.8 15.9 -0.3 15.3 1.5 15.9C2.7 16.3 3.5 17.1 4.5 18.1C6 19.7 7.8 21.6 12 21.6C15 21.6 16.8 20.1 17.4 17.1C16.2 18.9 14.7 19.5 12.9 18.9C11.7 18.5 10.9 17.7 9.9 16.7C8.4 15.1 6.6 13.2 2.4 13.2Z"
      transform="scale(0.8) translate(2, 2)"
      fill="#38BDF8"
    />
  </svg>
);

// 6.12 EmailJS
export const EmailJsIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="3" fill="#EA4335" />
    <path d="M4 6L12 12.5L20 6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 6.13 Selected Work Folder Icon
export const FolderWorkIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M3 6.5C3 5.4 3.9 4.5 5 4.5H9.2C9.8 4.5 10.4 4.8 10.8 5.2L12.5 7H19C20.1 7 21 7.9 21 9V17.5C21 18.6 20.1 19.5 19 19.5H5C3.9 19.5 3 18.6 3 17.5V6.5Z"
      fill="#00B4D8"
      opacity="0.25"
    />
    <path
      d="M3 9.5C3 8.4 3.9 7.5 5 7.5H19C20.1 7.5 21 8.4 21 9.5V17.5C21 18.6 20.1 19.5 19 19.5H5C3.9 19.5 3 18.6 3 17.5V9.5Z"
      stroke="#00A99D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 9.5L7.2 5.3C7.6 4.9 8.2 4.6 8.8 4.6H11.5L13.5 7.5H19C19.8 7.5 20.6 8.1 20.9 8.9"
      stroke="#00A99D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ============================================================================
// 7. EXPERIENCE, EDUCATION, WORKFLOW & CONTACT HELPER ICONS
// ============================================================================

// 7.1 Graduation Cap
export const GraduationCapIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 3L1 9L12 15L23 9L12 3Z" fill="#1D74D8" />
    <path d="M5 11.2V16.5C5 19.5 8.1 22 12 22C15.9 22 19 19.5 19 16.5V11.2" stroke="#1D74D8" strokeWidth="2" strokeLinecap="round" />
    <path d="M23 9V17" stroke="#0FAF9A" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// 7.2 Book / Academic Foundation
export const BookOpenIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M2 3H8C10.2 3 12 4.8 12 7V21C12 19.3 10.2 18 8 18H2V3Z" stroke="#0075FF" strokeWidth="2" strokeLinejoin="round" />
    <path d="M22 3H16C13.8 3 12 4.8 12 7V21C12 19.3 13.8 18 16 18H22V3Z" stroke="#0075FF" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

// 7.3 Briefcase / Experience
export const BriefcaseIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="7" width="20" height="14" rx="3" stroke="#0FAF9A" strokeWidth="2" />
    <path d="M16 7V5C16 3.9 15.1 3 14 3H10C8.9 3 8 3.9 8 5V7" stroke="#0FAF9A" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 12V14M2 12H22" stroke="#0FAF9A" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// 7.4 Bank / Financial Institution
export const BankIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M2 9L12 4L22 9V10H2V9Z" fill="#1D74D8" />
    <rect x="4" y="10" width="3" height="8" fill="#1D74D8" opacity="0.8" />
    <rect x="10.5" y="10" width="3" height="8" fill="#1D74D8" opacity="0.8" />
    <rect x="17" y="10" width="3" height="8" fill="#1D74D8" opacity="0.8" />
    <rect x="2" y="18" width="20" height="3" rx="1" fill="#0B1F3A" />
  </svg>
);

// 7.5 Phone
export const PhoneIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M22 16.92V19.92C22 20.48 21.54 20.93 20.98 20.92C10.5 20.73 3.27 13.5 3.08 3.02C3.07 2.46 3.52 2 4.08 2H7.08C7.58 2 8 2.37 8.08 2.86C8.21 3.73 8.46 4.57 8.81 5.36C8.96 5.69 8.87 6.08 8.6 6.32L6.87 7.82C8.28 10.74 10.66 13.12 13.58 14.53L15.08 12.8C15.32 12.53 15.71 12.44 16.04 12.59C16.83 12.94 17.67 13.19 18.54 13.32C19.03 13.4 19.4 13.82 19.4 14.32V16.92H22Z"
      fill="currentColor"
    />
  </svg>
);

// 7.6 Mail
export const MailIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
    <path d="M2 7L12 13L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 7.7 MapPin
export const MapPinIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
      fill="currentColor"
    />
  </svg>
);

// 7.8 LinkedIn
export const LinkedInIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
      fill="currentColor"
    />
  </svg>
);

// 7.9 Send Paper Plane
export const SendIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 7.10 Terraform
export const TerraformIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M14.7 7.7V14.3L9 11V4.4L14.7 7.7Z" fill="#7B42BC" />
    <path d="M15.3 14.7V21.3L21 18V11.4L15.3 14.7Z" fill="#844FBA" />
    <path d="M8.7 11.4V18L3 14.7V8.1L8.7 11.4Z" fill="#5C4EE5" />
    <path d="M15.3 7.3V0.7L21 4V10.6L15.3 7.3Z" fill="#5C4EE5" />
  </svg>
);

// 7.11 CI / CD
export const CiCdIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="6" cy="12" r="3.5" stroke="#0072F5" strokeWidth="2" />
    <circle cx="18" cy="12" r="3.5" stroke="#0FAF9A" strokeWidth="2" />
    <path d="M9.5 12H14.5M13 9.5L15.5 12L13 14.5" stroke="#0FAF9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 7.12 Analytics Workflow Icons
export const WorkflowDataIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="6" rx="7" ry="2.5" fill="#1D74D8" />
    <path d="M5 6V12C5 13.4 8.1 14.5 12 14.5C15.9 14.5 19 13.4 19 12V6" stroke="#1D74D8" strokeWidth="1.8" />
    <path d="M5 12V18C5 19.4 8.1 20.5 12 20.5C15.9 20.5 19 19.4 19 18V12" stroke="#1D74D8" strokeWidth="1.8" />
  </svg>
);

export const WorkflowCleanIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 14L10 8L14 12L20 6" stroke="#0FAF9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 6H20V12" stroke="#0FAF9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 21H21" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const WorkflowExploreIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="11" cy="11" r="7" stroke="#1D74D8" strokeWidth="2.2" />
    <path d="M16 16L21 21" stroke="#1D74D8" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="11" cy="11" r="2.5" fill="#0FAF9A" />
  </svg>
);

export const WorkflowAnalyzeIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 3V21M6 21H21" stroke="#0B1F3A" strokeWidth="2" strokeLinecap="round" />
    <rect x="9" y="13" width="3" height="8" rx="1" fill="#1D74D8" />
    <rect x="14" y="8" width="3" height="13" rx="1" fill="#0FAF9A" />
    <rect x="19" y="4" width="3" height="17" rx="1" fill="#18C98B" />
  </svg>
);

export const WorkflowVisualizeIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="#1D74D8" strokeWidth="2" />
    <circle cx="9" cy="10" r="3" stroke="#0FAF9A" strokeWidth="2" />
    <path d="M15 15L19 11" stroke="#18C98B" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const WorkflowInsightIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2Z" fill="#F59E0B" />
    <path d="M9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21Z" fill="#D97706" />
  </svg>
);

// 7.13 Certificate & Document Icons
export const CertificateRibbonIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="8.5" r="5.5" stroke="#1D74D8" strokeWidth="2" fill="#EBF3FD" />
    <circle cx="12" cy="8.5" r="2.5" fill="#0FAF9A" />
    <path d="M9 13.5L7 21L12 18.5L17 21L15 13.5" stroke="#1D74D8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="#EBF3FD" />
  </svg>
);

export const DocumentCheckIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="#0B1F3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="#FFFFFF" />
    <path d="M14 2V8H20" stroke="#0B1F3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 14.5L11 16.5L15 12" stroke="#0FAF9A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Form Icons
export const UserIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const FileTextIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 13H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 17H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 9H8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MessageSquareIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="12" cy="10" r="1" fill="currentColor" />
    <circle cx="15" cy="10" r="1" fill="currentColor" />
  </svg>
);

export const LockIcon: React.FC<IconProps> = ({ size = 14, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);




