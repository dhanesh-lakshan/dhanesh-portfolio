import React from "react";
import heroImage from "../assets/heroimage1.png";
import cvPdf from "../assets/Dhanesh_Ganearachchi_CV.pdf";
import { HeroProps } from "../types";

export const Hero: React.FC<HeroProps> = ({ id, sectionRef, onNavigate }) => {
  return (
    <section
      className="hero-section"
      id={id}
      ref={sectionRef}
      aria-label="Hero Section"
    >
      <div className="container hero-container">
        {/* Left Content Area (40–45% Desktop) */}
        <div className="hero-content">
          {/* Small Status Badge */}
          <div
            className="status-badge animate-fade-up delay-1"
            role="status"
            aria-label="Current status"
          >
            <span className="status-dot" aria-hidden="true"></span>
            <span className="status-text">OPEN TO OPPORTUNITIES</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero-heading animate-fade-up delay-2">
            <span className="greeting">Hi, I'm</span>
            <span className="name-gradient">Dhanesh</span>
          </h1>

          {/* Main Professional Role */}
          <h2 className="hero-role animate-fade-up delay-3">
            <span className="role-line">
              Data Analytics <span className="role-divider">|</span> Data
              Science <span className="role-divider">|</span>
            </span>
            <span className="role-line">
              Software Engineering <span className="role-divider">|</span> Cloud
            </span>
          </h2>

          {/* Description */}
          <p className="hero-description animate-fade-up delay-4">
            Computer Science and Mathematics graduate passionate about building
            data-driven solutions, full-stack applications and cloud-based
            systems that create real-world impact.
          </p>

          {/* Interactive Action Buttons */}
          <div className="hero-cta-group animate-fade-up delay-5">
            {/* Primary Button: View My Projects */}
            <button
              type="button"
              className="btn btn-primary"
              id="btnViewProjects"
              onClick={() => onNavigate("projects")}
            >
              <span>View My Projects</span>
              <svg
                className="arrow-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            {/* Secondary Button: Download CV */}
            <a
              href={cvPdf}
              download="Dhanesh_Ganearachchi_CV.pdf"
              className="btn btn-secondary"
              id="btnDownloadCV"
              aria-label="Download Dhanesh's Curriculum Vitae"
            >
              <svg
                className="download-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Right Visual Area (55–60% Desktop) */}
        <div className="hero-visual animate-fade-scale delay-visual">
          <div className="hero-visual-wrapper">
            <img
              src={heroImage}
              alt="Dhanesh Ganearachchi — Data Analytics, Data Science and Software Engineering"
              className="hero-image"
              fetchPriority="high"
              decoding="async"
              width="1024"
              height="1536"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
