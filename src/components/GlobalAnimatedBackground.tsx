import React from 'react';

const PARTICLE_COUNT = 10;

const particles = Array.from({ length: PARTICLE_COUNT }, (_, index) => ({
  left: `${(index * 47 + 11) % 97}%`,
  top: `${(index * 61 + 7) % 94}%`,
  size: `${2 + (index % 3)}px`,
  delay: `${-((index * 7) % 35)}s`,
  duration: `${20 + ((index * 11) % 17)}s`,
}));

export const GlobalAnimatedBackground: React.FC = () => (
  <div className="global-animated-background" aria-hidden="true">
    <div className="global-bg-wash" />
    <div className="global-bg-blob global-bg-blob-blue" />
    <div className="global-bg-blob global-bg-blob-cyan" />
    <div className="global-bg-blob global-bg-blob-teal" />
    <div className="global-bg-blob global-bg-blob-mist" />
    <div className="global-bg-ambient global-bg-ambient-top" />
    <div className="global-bg-ambient global-bg-ambient-bottom" />

    <div className="global-bg-particles">
      {particles.map((particle, index) => (
        <span
          className="global-bg-particle"
          key={index}
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  </div>
);
