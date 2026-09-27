import React, { useState, useEffect, useRef } from "react";
import { SectionProps } from "../types";

export const AboutSection: React.FC<SectionProps> = ({ id, sectionRef }) => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const internalRef = useRef<HTMLElement | null>(null);

  // Synchronize internal ref with passed sectionRef (for scroll spy & navigation)
  const setCombinedRefs = (node: HTMLElement | null) => {
    internalRef.current = node;
    if (typeof sectionRef === "function") {
      sectionRef(node);
    } else if (sectionRef && "current" in sectionRef) {
      (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
    }
  };

  // Entrance animation trigger when scrolling into view
  useEffect(() => {
    const el = internalRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={setCombinedRefs}
      className={`about-section ${isInView ? "is-in-view" : ""}`}
      aria-labelledby="about-main-heading"
    >
      <div className="container about-container">
        <div className="about-main-layout">
          {/* Left Column: 4 Information Cards Stacked Vertically */}
          <div
            className="about-cards-column about-animate delay-2"
            role="region"
            aria-label="Academic background and key focus areas"
          >
            {/* Card 1: BSc in Physical Science */}
            <div className="about-info-card">
              <div className="about-info-icon-box icon-blue">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="22"
                  height="22"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className="about-info-details">
                <h3 className="about-info-title">BSc in Physical Science</h3>
                <p className="about-info-subtitle">
                  Completed
                  <br />
                  (University of Ruhuna)
                </p>
              </div>
            </div>

            {/* Card 2: BIT Degree */}
            <div className="about-info-card">
              <div className="about-info-icon-box icon-blue">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="22"
                  height="22"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div className="about-info-details">
                <h3 className="about-info-title">BIT</h3>
                <p className="about-info-subtitle">
                  Ongoing
                  <br />
                  (University of Colombo)
                </p>
              </div>
            </div>

            {/* Card 3: Key Interests */}
            <div className="about-info-card">
              <div className="about-info-icon-box icon-blue">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="22"
                  height="22"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <div className="about-info-details">
                <h3 className="about-info-title">Data × Software × Cloud</h3>
                <p className="about-info-subtitle">Key Interests</p>
              </div>
            </div>

            {/* Card 4: Purpose & Impact */}
            <div className="about-info-card">
              <div className="about-info-icon-box icon-green">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="22"
                  height="22"
                >
                  <line x1="9" y1="18" x2="15" y2="18" />
                  <line x1="10" y1="22" x2="14" y2="22" />
                  <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
                </svg>
              </div>
              <div className="about-info-details">
                <h3 className="about-info-title">Real-World Impact</h3>
                <p className="about-info-subtitle">What I Aim For</p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="about-content-column">
            {/* Top Section Badge with subtle teal accent line */}
            <div className="about-badge-row about-animate delay-1">
              <span className="about-accent-dash" aria-hidden="true" />
              <div className="about-badge">
                <span className="about-badge-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="13"
                    height="13"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </span>
                <span className="about-badge-text">ABOUT ME</span>
              </div>
            </div>

            {/* Main Heading */}
            <h2
              id="about-main-heading"
              className="about-heading about-animate delay-2"
            >
              <span className="about-heading-line1">Building with Data.</span>
              <span className="about-heading-line2">
                Engineering with Purpose.
              </span>
            </h2>

            {/* About Narrative Paragraphs */}
            <div className="about-text-content">
              <p className="about-paragraph about-animate delay-3">
                I’m Dhanesh Ganearachchi, a Computer Science and Mathematics
                graduate with a strong interest in Data Analytics, Data Science,
                Software Engineering, and Cloud Technologies. I hold a BSc in
                Physical Science from the University of Ruhuna, specializing in
                Computer Science, Mathematics, and Applied Mathematics. I’m
                currently pursuing a Bachelor of Information Technology at the
                University of Colombo.
              </p>
              <p className="about-paragraph about-animate delay-4">
                My academic journey has helped me build a strong foundation in
                analytical thinking, statistics, mathematical modelling,
                programming, databases, and software engineering. I enjoy
                working with data to identify patterns, generate meaningful
                insights, and solve real-world problems through practical and
                reliable solutions.
              </p>
              <p className="about-paragraph about-animate delay-5">
                I’m currently focused on starting my career in Data Analytics
                and gradually progressing toward Data Science. I’m continuously
                developing my skills in Python, data processing, visualization,
                machine learning, software engineering, and cloud technologies
                to create impactful, data-driven products and intelligent
                systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
