import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { SectionProps } from '../types';
import pythonCertificate from '../assets/cetificates/Python for Beginners.png';
import excelCertificate from '../assets/cetificates/Excel for Industry Readiness.png';
import powerBiCertificate from '../assets/cetificates/Microsoft Power BI for Beginners.png';
import cloudCertificate from '../assets/cetificates/CloudPath Pro.png';
import reactCertificate from '../assets/cetificates/React Native Full-Stack Developer Training.png';
import englishCertificate from '../assets/cetificates/Diploma in English Language and Literature.png';
import {
  CertificateRibbonIcon,
  DocumentCheckIcon,
  AwsIcon,
  DockerIcon,
  TerraformIcon,
  CiCdIcon,
  PythonIcon,
  ExcelIcon,
  PowerBiIcon,
  ReactIcon,
  BookOpenIcon,
} from './TechIcons';

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  status: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  icon?: React.ReactNode;
}

export const CertificationsSection: React.FC<SectionProps> = ({ id, sectionRef }) => {
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const certificates: CertificateItem[] = [
    {
      id: 'python-uom',
      title: 'Python for Beginners',
      issuer: 'University of Moratuwa',
      year: '2026',
      status: 'Completed',
      description:
        'Built a foundation in programming logic, functions, data structures, and problem-solving.',
      tags: ['Python', 'Data Structures', 'Algorithms'],
      link: 'https://open.uom.lk/',
      image: pythonCertificate,
      icon: <PythonIcon size={18} />,
    },
    {
      id: 'excel-ruhuna',
      title: 'Excel for Industry Readiness',
      issuer: 'INTECH, Faculty of Science, University of Ruhuna',
      year: '2026',
      status: 'Completed',
      description:
        'Mastered data cleaning, lookup functions, pivot tables, and operational financial analysis.',
      tags: ['MS Excel', 'Data Cleaning', 'Pivot Tables'],
      link: 'https://www.sci.ruh.ac.lk/',
      image: excelCertificate,
      icon: <ExcelIcon size={18} />,
    },
    {
      id: 'powerbi-simplilearn',
      title: 'Microsoft Power BI for Beginners',
      issuer: 'Simplilearn',
      year: '2026',
      status: 'Completed',
      description:
        'Created interactive dashboards, DAX queries, and data models for executive reporting.',
      tags: ['Power BI', 'DAX Measures', 'Dashboards'],
      link: 'https://www.simplilearn.com/',
      image: powerBiCertificate,
      icon: <PowerBiIcon size={18} />,
    },
    {
      id: 'cloudpath-devops',
      title: 'CloudPath Pro: From Zero to DevOps Professional',
      issuer: 'learnfi',
      year: '2026',
      status: 'Completed',
      description:
        'Hands-on experience in AWS infrastructure, Docker containers, Terraform IaC, and CI/CD pipelines.',
      tags: ['AWS', 'Docker', 'Terraform', 'CI/CD'],
      link: 'https://learnfi.lk/',
      image: cloudCertificate,
      icon: <AwsIcon size={18} />,
    },
    {
      id: 'react-native-guru',
      title: 'React Native Full-Stack Developer Training',
      issuer: 'Coding Guru',
      year: '2026',
      status: 'Completed',
      description:
        'Engineered cross-platform mobile interfaces, component architecture, state management, and REST APIs.',
      tags: ['React Native', 'Mobile Dev', 'REST APIs'],
      link: 'https://codingguru.lk/',
      image: reactCertificate,
      icon: <ReactIcon size={18} />,
    },
    {
      id: 'english-aquinas',
      title: 'Diploma in English Language and Literature',
      issuer: 'Aquinas College of Higher Studies',
      year: '2022–2023',
      status: 'Completed',
      description:
        'Enhanced advanced professional communication, technical documentation, and academic presentation skills.',
      tags: ['Technical Writing', 'Professional Communication'],
      link: 'https://www.aquinas.lk/',
      image: englishCertificate,
      icon: <BookOpenIcon size={18} />,
    },
  ];

  useEffect(() => {
    if (!selectedCertificate) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedCertificate(null);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('certificate-viewer-open');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('certificate-viewer-open');
    };
  }, [selectedCertificate]);

  return (
    <section className="certifications-section-wrapper" id={id} ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="certifications-header-block">
          <div className="certifications-badge-pill">
            <CertificateRibbonIcon size={16} />
            <span>CERTIFICATIONS</span>
          </div>

          <h2 className="certifications-heading">
            Certifications & <span className="certifications-heading-accent">Professional Learning</span>
          </h2>

          <p className="certifications-subheading">
            Continuously learning and building practical skills for the future.
          </p>
        </div>

        {/* 3-Column Unified Certifications Grid */}
        <div className="cert-cards-grid">
          {certificates.map((cert) => (
            <article key={cert.id} className="cert-item-card">
              <div className="cert-card-top-row">
                <div className="cert-icon-wrapper">{cert.icon ?? <DocumentCheckIcon size={20} />}</div>
                <div className="cert-status-group">
                  <span className="cert-status-pill">{cert.status}</span>
                  <span className="cert-year-tag">{cert.year}</span>
                </div>
              </div>

              <div className="cert-card-body">
                <h3 className="cert-card-title">{cert.title}</h3>
                <p className="cert-card-issuer">{cert.issuer}</p>
                <p className="cert-card-description">{cert.description}</p>
              </div>

              {/* Tags / Skills Row */}
              <div className="cert-tags-row">
                {cert.tags.map((tag, idx) => (
                  <span key={idx} className="cert-tech-tag">
                    {tag === 'AWS' && <AwsIcon size={12} />}
                    {tag === 'Docker' && <DockerIcon size={12} />}
                    {tag === 'Terraform' && <TerraformIcon size={12} />}
                    {tag === 'CI/CD' && <CiCdIcon size={12} />}
                    {tag === 'Python' && <PythonIcon size={12} />}
                    {tag === 'MS Excel' && <ExcelIcon size={12} />}
                    {tag === 'Power BI' && <PowerBiIcon size={12} />}
                    {tag === 'React Native' && <ReactIcon size={12} />}
                    <span>{tag}</span>
                  </span>
                ))}
              </div>

              {/* Card Footer with View Certificate Button */}
              <div className="cert-card-footer">
                <button
                  type="button"
                  className="btn-view-certificate"
                  aria-label={`View certificate for ${cert.title}`}
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <span>View Certificate</span>
                  <span className="cert-btn-arrow" aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selectedCertificate && createPortal(
        <div className="certificate-viewer-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setSelectedCertificate(null);
        }}>
          <section className="certificate-viewer" role="dialog" aria-modal="true" aria-label={`${selectedCertificate.title} certificate`}>
            <div className="certificate-viewer-header">
              <div><h3>{selectedCertificate.title}</h3><p>{selectedCertificate.issuer}</p></div>
              <button type="button" className="certificate-viewer-close" onClick={() => setSelectedCertificate(null)} aria-label="Close certificate">×</button>
            </div>
            <img src={selectedCertificate.image} alt={`${selectedCertificate.title} certificate`} />
          </section>
        </div>,
        document.body,
      )}
    </section>
  );
};
