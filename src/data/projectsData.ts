import React from 'react';
import exploreCeylonImg from '../assets/projects/explore-ceylon.png';
import smartInventoryImg from '../assets/projects/smart-inventory.png';
import senethHealingImg from '../assets/projects/seneth-healing.png';
import stayeaseImg from '../assets/projects/stayease.png';
import voyagoImg from '../assets/projects/voyago.png';
import portfolioImg from '../assets/projects/portfolio.png';

import {
  JavaIcon,
  SpringBootIcon,
  ReactIcon,
  PostgreSqlIcon,
  FastApiIcon,
  PythonIcon,
  DockerIcon,
  AwsIcon,
  SqlIcon,
  ApachePoiIcon,
  PhpIcon,
  MySqlIcon,
  JavaScriptIcon,
  BootstrapIcon,
  CPanelIcon,
  MongoDbIcon,
  ExpressIcon,
  NodeJsIcon,
  CloudinaryIcon,
  HtmlIcon,
  CssIcon,
  TailwindIcon,
  EmailJsIcon,
} from '../components/TechIcons';

export interface ProjectTech {
  name: string;
  icon: React.FC<{ size?: number; className?: string }>;
}

export interface CaseStudyData {
  categoryTags: string;
  teamContext: string;
  tagline: string;
  problem: string;
  solution: string;
  myRole: string;
  keyFeatures: string[];
  architecture: string;
  analyticsInsights: string;
  techStackDetailed: string[];
  challengesDecisions: string;
  outcomeStatus: string;
  nextProjectSlug: string;
  nextProjectTitle: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  badge: string;
  badgeType: 'academic' | 'personal' | 'client';
  shortDescription: string;
  previewImage: string;
  technologies: ProjectTech[];
  githubUrl: string;
  caseStudy: CaseStudyData;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'explore-ceylon',
    slug: 'explore-ceylon',
    title: 'ExploreCeylon',
    badge: 'Academic · Final Year Project',
    badgeType: 'academic',
    shortDescription:
      'An intelligent Sri Lankan tourism platform with AI-generated itineraries, destination ranking, booking workflows, and analytics.',
    previewImage: exploreCeylonImg,
    technologies: [
      { name: 'Java', icon: JavaIcon },
      { name: 'Spring Boot', icon: SpringBootIcon },
      { name: 'React', icon: ReactIcon },
      { name: 'PostgreSQL', icon: PostgreSqlIcon },
      { name: 'FastAPI', icon: FastApiIcon },
      { name: 'Python', icon: PythonIcon },
      { name: 'Docker', icon: DockerIcon },
      { name: 'AWS', icon: AwsIcon },
    ],
    githubUrl: 'https://github.com/ExploreCeylon-V1',
    caseStudy: {
      categoryTags: 'AI Tourism · Full-Stack · Data & Analytics · Cloud',
      teamContext: '5-person group project · Team Lead',
      tagline:
        'A Sri Lankan tourism platform combining destination discovery, geographically feasible multi-day itineraries, local services, and data-informed travel decisions.',
      problem:
        'Planning a multi-day trip across Sri Lanka means combining information from multiple sources. Generic AI itinerary generators can also suggest geographically inefficient routes or unrealistic destination sequences.',
      solution:
        'Built a full-stack platform that plans routes deterministically first: backend algorithms filter, rank, sequence, and schedule destinations by geography and travel time. AI then enriches the finalized itinerary with descriptions, themes, and travel guidance.',
      myRole:
        'Team Lead & Full-Stack Developer on a five-person group project. I led the team and built the full backend, full administration panel, and AWS deployment, alongside the itinerary-planning, analytics, AI, real-time communication, and cloud integrations.',
      keyFeatures: [
        'Destination discovery with search, categories, and faceted filters',
        'AI-assisted dynamic itinerary generator and trip planner',
        'Analytics-driven destination ranking and popularity scoring',
        'Geographic route and detour filtering using OSRM',
        'Travel progression and daily schedule optimization',
        'User verified reviews, photo uploads, and community ratings',
        'Interactive map view with route distance and transit time calculations',
        'Tour guide and vehicle service management',
        'Real-time traveler–admin chat using WebSocket/STOMP',
        'Identity verification with secure cloud document storage',
        'Booking and payment-related workflows',
        'PostgreSQL relational data model ensuring transactional integrity',
        'Admin KPI dashboard for tourist behavior telemetry and engagement',
        'AWS cloud deployment with containerized services and S3 media storage',
      ],
      architecture:
        'A decoupled system with React traveler and administration interfaces, a Spring Boot backend, PostgreSQL, and a dedicated FastAPI AI service. The backend handles authentication, transactions, business rules, itinerary calculations, bookings, and real-time communication; AWS S3 stores protected media and verification documents. Docker services are deployed on AWS.',
      analyticsInsights:
        'Destination recommendations use a 100-point composite score combining review popularity, travel-style preferences, seasonality, featured/UNESCO weighting, proximity, route corridors, OSRM road distance, schedule constraints, and trip budget. Deterministic route decisions are completed before AI generates itinerary narrative.',
      techStackDetailed: [
        'React 19', 'Vite', 'Tailwind CSS', 'React Router', 'Leaflet', 'Recharts',
        'Java 17', 'Spring Boot 3.5', 'Spring Security', 'Spring Data JPA',
        'PostgreSQL',
        'Python', 'FastAPI', 'Groq API', 'OSRM', 'Haversine',
        'WebSocket / STOMP / SockJS', 'AWS EC2', 'AWS S3', 'Docker Compose',
      ],
      challengesDecisions:
        'Route feasibility and destination sequencing are handled deterministically before generative AI adds narrative content. The ranking balances multiple independent objectives; transactional and AI services are separated; private verification documents use temporary pre-signed S3 URLs.',
      outcomeStatus:
        'An end-to-end tourism platform demonstrating full-stack engineering, data modeling, AI integration, real-time communication, and AWS deployment. The project implementation includes 42 PostgreSQL tables, 207 API endpoints, and 275 automated tests.',
      nextProjectSlug: 'smart-inventory',
      nextProjectTitle: 'Smart Inventory Management System',
    },
  },
  {
    id: 'smart-inventory',
    slug: 'smart-inventory',
    title: 'Smart Inventory Management System',
    badge: 'Personal Project',
    badgeType: 'personal',
    shortDescription:
      'A full-stack inventory and procurement system with stock visibility, inventory valuation, supplier spend monitoring, and operational analytics.',
    previewImage: smartInventoryImg,
    technologies: [
      { name: 'Java', icon: JavaIcon },
      { name: 'Spring Boot', icon: SpringBootIcon },
      { name: 'React', icon: ReactIcon },
      { name: 'PostgreSQL', icon: PostgreSqlIcon },
      { name: 'SQL', icon: SqlIcon },
      { name: 'Apache POI', icon: ApachePoiIcon },
      { name: 'Docker', icon: DockerIcon },
    ],
    githubUrl: 'https://github.com/Smart-Inventory-Managment-System',
    caseStudy: {
      categoryTags: 'Enterprise Software · Supply Chain · Analytics',
      teamContext: 'Personal project · Independently developed',
      tagline:
        'A full-stack inventory and procurement system for stock visibility, valuation, supplier monitoring, operational KPIs, and reporting.',
      problem:
        'Inventory operations need accurate visibility into stock levels, product values, purchasing activity, suppliers, and low-stock conditions. Without centralized data, managers can miss anomalies and struggle to maintain accurate records.',
      solution:
        'Built a Spring Boot, PostgreSQL, and React platform that combines transactional inventory operations with dashboard KPIs, supplier analysis, sales and purchase trends, stock alerts, and Excel reporting.',
      myRole:
        'Full-Stack Developer — independently designed the relational model, backend services, REST APIs, inventory logic, analytics queries, dashboard integration, security, and Excel reporting.',
      keyFeatures: [
        'Product, category, supplier, purchase order, and sales order management',
        'Real-time inventory tracking, valuation, and low/safety-stock monitoring',
        'Supplier spend analysis and monthly sales/purchase trends',
        'Inventory movement audit ledger and operational KPI dashboard',
        'Role-based access control and REST API integration',
        'Automated Excel report generation with Apache POI',
      ],
      architecture:
        'Layered architecture with a React frontend, Spring Boot REST services, Spring Data JPA, and PostgreSQL. Database transactions and business-rule validation protect stock-changing operations from invalid states.',
      analyticsInsights:
        'Analytics include quantity × unit-cost inventory valuation, monthly sales and procurement aggregation, supplier purchase volume and spend, low/safety-stock detection, movement tracking, and seven dashboard KPIs: products, categories, suppliers, today’s sales, inventory value, low-stock count, and low-stock items.',
      techStackDetailed: [
        'Java 21', 'Spring Boot 4.1', 'Spring Data JPA',
        'React 19', 'Vite', 'Tailwind CSS', 'Recharts',
        'PostgreSQL',
        'Spring Security', 'JWT / RBAC', 'Apache POI', 'Maven',
      ],
      challengesDecisions:
        'Stock mutations are atomic to prevent invalid states such as negative stock. JPQL/PostgreSQL aggregation turns operational transactions into trends and KPIs, while a movement ledger preserves auditability and Excel exports support offline reporting.',
      outcomeStatus:
        'A functional inventory and procurement platform demonstrating SQL analytics, KPI reporting, transactional data integrity, relational modeling, REST APIs, and Java development.',
      nextProjectSlug: 'seneth-healing-foods',
      nextProjectTitle: 'Seneth Healing Foods',
    },
  },
  {
    id: 'seneth-healing-foods',
    slug: 'seneth-healing-foods',
    title: 'Seneth Healing Foods',
    badge: 'Real Client · Production',
    badgeType: 'client',
    shortDescription:
      'A production web and business data management system for Seneth Exports (Pvt) Ltd, with product platform and admin portal.',
    previewImage: senethHealingImg,
    technologies: [
      { name: 'PHP', icon: PhpIcon },
      { name: 'MySQL', icon: MySqlIcon },
      { name: 'JavaScript', icon: JavaScriptIcon },
      { name: 'Bootstrap', icon: BootstrapIcon },
      { name: 'cPanel', icon: CPanelIcon },
    ],
    githubUrl: 'https://github.com/dhanesh-lakshan/seneth-healing-foods',
    caseStudy: {
      categoryTags: 'Commercial Client · E-Commerce & CMS · Production',
      teamContext: '2-person group project · Frontend + Backend',
      tagline:
        'A production product showcase, customer enquiry system, and administration portal for Seneth Exports (Pvt) Ltd.',
      problem:
        'The business needed a professional online presence for its plant-based product portfolio and a structured way to collect and manage enquiries from international customers.',
      solution:
        'Developed and deployed a responsive PHP/MySQL platform with a public product catalogue and protected administration system for managing products, images, enquiries, and administrator accounts.',
      myRole:
        'Worked in a two-person group and handled frontend and backend development across the public website and admin portal, including database integration, deployment, domain configuration, and technical setup.',
      keyFeatures: [
        'Five structured product categories with listing, detail, and specification pages',
        'International enquiry form with country and dial-code selection',
        'Protected admin authentication and product CRUD/image management',
        'Customer enquiry management, live KPI metrics, and CSV export',
        'SEO-friendly public pages and responsive Bootstrap interface',
        'Production deployment on cPanel',
      ],
      architecture:
        'PHP/MySQL architecture with a public-facing website and protected admin portal. MySQL stores product and enquiry records; the admin interface provides day-to-day management capabilities.',
      analyticsInsights:
        'The admin dashboard presents four operational KPIs. SQL aggregation combines product metrics and categories, tracks enquiry counts and last-24-hour activity, and supports CSV export via fputcsv().',
      techStackDetailed: [
        'PHP / MySQLi', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript',
        'Apache / cPanel', 'Production hosting and domain/DNS',
      ],
      challengesDecisions:
        'Structured relational product and enquiry data, prepared statements and input validation for database operations, an admin portal usable without code changes, and CSV export for business follow-up.',
      outcomeStatus:
        'Delivered the client production system from development through database configuration, domain setup, and live cPanel deployment.',
      nextProjectSlug: 'stayease',
      nextProjectTitle: 'StayEase',
    },
  },
  {
    id: 'stayease',
    slug: 'stayease',
    title: 'StayEase',
    badge: 'Personal Project',
    badgeType: 'personal',
    shortDescription:
      'A containerized MERN hotel management platform with booking, room management, and role-based access control.',
    previewImage: stayeaseImg,
    technologies: [
      { name: 'MongoDB', icon: MongoDbIcon },
      { name: 'Express.js', icon: ExpressIcon },
      { name: 'React', icon: ReactIcon },
      { name: 'Node.js', icon: NodeJsIcon },
      { name: 'Docker', icon: DockerIcon },
      { name: 'Cloudinary', icon: CloudinaryIcon },
    ],
    githubUrl: 'https://github.com/dhanesh-lakshan/StayEase-Hotel-Room-Booking-Management-System',
    caseStudy: {
      categoryTags: 'Full-Stack MERN · Cloud · Hospitality',
      teamContext: 'Personal project · Independently developed',
      tagline:
        'A containerized MERN hotel management platform for hotels, rooms, reservations, users, reviews, and operational metrics.',
      problem:
        'Hotel operators need one system for rooms, reservations, customers, and operational performance while maintaining consistent bookings.',
      solution:
        'Built a MERN platform combining customer booking workflows with role-based administration, operational analytics, Cloudinary media, and Docker Compose deployment.',
      myRole:
        'Independently designed the architecture, REST APIs, database models, authentication, booking workflows, dashboard analytics, media integration, and Docker deployment.',
      keyFeatures: [
        'Hotel and room management with availability and reservation workflows',
        'Booking validation, customer management, reviews, and JWT authentication',
        'Role-based customer, hotel manager, and administrator functionality',
        'Cloud image management and operational dashboards',
        'Revenue monitoring, occupancy analysis, and REST API documentation',
        'Docker Compose services for database, backend, and frontend',
      ],
      architecture:
        'MERN architecture with React, Express/Node.js, and MongoDB/Mongoose. Docker Compose separates the database, backend API, and frontend; Cloudinary handles hotel and room media.',
      analyticsInsights:
        'Booking and room records provide occupancy percentage, gross booking revenue, user/role distribution, booking activity, and hotel-level statistics. Date-range queries detect reservation overlaps.',
      techStackDetailed: [
        'React 19', 'Node.js', 'Express.js', 'MongoDB 7', 'Mongoose',
        'JWT / RBAC', 'Cloudinary', 'Swagger / OpenAPI', 'Docker Compose',
      ],
      challengesDecisions:
        'Date-range validation prevents overlapping room reservations. Role-based access separates customer, hotel manager, and administrator workflows; Cloudinary and Docker Compose provide managed media and consistent service orchestration.',
      outcomeStatus:
        'A working MERN hotel system demonstrating NoSQL modeling, REST APIs, authentication, booking logic, operational analytics, cloud media, and containerized architecture.',
      nextProjectSlug: 'voyago',
      nextProjectTitle: 'Voyago',
    },
  },
  {
    id: 'voyago',
    slug: 'voyago',
    title: 'Voyago',
    badge: 'Personal Project',
    badgeType: 'personal',
    shortDescription:
      'A modern travel agency website with destination packages, dynamic content management, and responsive design.',
    previewImage: voyagoImg,
    technologies: [
      { name: 'HTML', icon: HtmlIcon },
      { name: 'CSS', icon: CssIcon },
      { name: 'JavaScript', icon: JavaScriptIcon },
      { name: 'PHP', icon: PhpIcon },
      { name: 'MySQL', icon: MySqlIcon },
    ],
    githubUrl: 'https://github.com/dhanesh-lakshan/VoyaGo-Hotel-Booking-Website',
    caseStudy: {
      categoryTags: 'Travel & Tourism · Web Design · CMS',
      teamContext: 'Personal project · Independently developed',
      tagline:
        'A PHP/MySQL travel platform combining destination discovery, hotel browsing and booking, authentication, and a travel-equipment storefront.',
      problem:
        'Destination discovery, accommodation, user accounts, and travel-product shopping are often separate experiences for travellers.',
      solution:
        'Built a responsive platform with three modules: travel and destination showcase, hotel room browsing/booking, and a travel and camping equipment shop.',
      myRole:
        'Independently implemented the public interface, authentication, hotel browsing and booking, database integration, product storefront, and responsive UI components.',
      keyFeatures: [
        'Sri Lankan destination showcase and travel package presentation',
        'Hotel room catalogue with date, guest-count, and facility filters',
        'Registration/login with password hashing and session-based authentication',
        'Travel equipment catalogue, product details, and shopping cart interface',
        'Responsive layouts, animated sections, and destination/product carousels',
      ],
      architecture:
        'PHP/MySQL backend functionality with Bootstrap interfaces. MySQL stores user data, while travel and booking interfaces support structured browsing and filtering.',
      analyticsInsights:
        'The project focuses on web engineering and practical data handling: user records, booking information, room filters by dates/capacity/facilities, product catalog organization, server-side validation, and prepared statements.',
      techStackDetailed: [
        'PHP / MySQLi', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript',
        'Bootstrap Icons', 'Swiper.js', 'Apache / XAMPP',
      ],
      challengesDecisions:
        'Password hashing and verification support secure authentication; reusable Bootstrap components provide responsive layouts; Swiper.js powers destination, testimonial, and product carousels.',
      outcomeStatus:
        'A multi-module travel platform demonstrating PHP/MySQL, authentication, database integration, responsive UI, booking interfaces, and e-commerce-oriented frontend development.',
      nextProjectSlug: 'portfolio-website',
      nextProjectTitle: 'Portfolio Website',
    },
  },
  {
    id: 'portfolio-website',
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    badge: 'Personal Project',
    badgeType: 'personal',
    shortDescription:
      'A personal portfolio website to showcase my skills, projects, and professional journey.',
    previewImage: portfolioImg,
    technologies: [
      { name: 'React', icon: ReactIcon },
      { name: 'Tailwind CSS', icon: TailwindIcon },
      { name: 'JavaScript', icon: JavaScriptIcon },
      { name: 'EmailJS', icon: EmailJsIcon },
    ],
    githubUrl: 'https://github.com/dhanesh-lakshan/dhanesh-portfolio',
    caseStudy: {
      categoryTags: 'Personal Brand · Modern Frontend · Interactive UI',
      teamContext: 'Personal project · Independently developed',
      tagline:
        'A responsive portfolio presenting professional experience, education, skills, certifications, projects, and career direction.',
      problem:
        'A traditional CV has limited space to show the technical depth, interfaces, architecture, and practical projects behind a developer’s experience.',
      solution:
        'Built an interactive portfolio combining professional information with project case studies, technical skills, education, certifications, experience, and direct contact functionality.',
      myRole:
        'Independently designed and implemented the visual system, navigation, project and case-study views, animations, responsive layouts, and contact experience.',
      keyFeatures: [
        'Responsive single-page portfolio with experience, education, certifications, and skills',
        'Project showcase and detailed case-study pages',
        'Interactive navigation, smooth section scrolling, and active-section tracking',
        'Contact form with validation and anti-spam protection',
        'Downloadable CV and responsive mobile layout',
        'Interactive visual elements and animations',
      ],
      architecture:
        'React component architecture with structured project and case-study data. Native CSS custom properties/design tokens provide styling; hash-based navigation and IntersectionObserver track the active section.',
      analyticsInsights:
        'Reusable project data separates metadata, technology stacks, case-study content, features, engineering decisions, and outcomes so project cards and detail pages share consistent information.',
      techStackDetailed: [
        'React', 'TypeScript', 'Native CSS / CSS Custom Properties', 'JavaScript',
        'IntersectionObserver', 'FormSubmit', 'Hash-based navigation',
      ],
      challengesDecisions:
        'Reusable case-study data and design tokens keep the portfolio maintainable. Responsive-first styling supports multiple screen sizes, and the contact form uses validation and honeypot anti-spam protection.',
      outcomeStatus:
        'A professional portfolio bringing together software engineering, data/analytics interests, cloud experience, academics, work experience, and project work.',
      nextProjectSlug: 'explore-ceylon',
      nextProjectTitle: 'ExploreCeylon',
    },
  },
];
