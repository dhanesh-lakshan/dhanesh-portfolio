import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  opacity: number;
};

const COLORS = ['#059669', '#0284c7', '#0f766e'];
const PARTICLE_LINK_DISTANCE = 140;
const MOUSE_DISTANCE = 160;
const MIN_PARTICLE_SPEED = 0.17;
const MAX_PARTICLE_SPEED = 0.72;

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);

export const FullPageParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let pixelRatio = Math.max(1, window.devicePixelRatio || 1);
    let particles: Particle[] = [];
    let animationFrame = 0;
    let running = false;
    let pointer = { x: -1_000, y: -1_000, active: false };

    const createParticles = () => {
      const count = window.matchMedia('(max-width: 767px)').matches ? 30 : 65;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: randomBetween(-0.38, 0.38),
        vy: randomBetween(-0.38, 0.38),
        radius: randomBetween(1.5, 3),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: randomBetween(0.25, 0.5),
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles();
    };

    const onMouseMove = (event: MouseEvent) => {
      pointer = { x: event.clientX, y: event.clientY, active: true };
    };
    const onMouseLeave = () => {
      pointer.active = false;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i];

        if (pointer.active) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance > 0 && distance < MOUSE_DISTANCE) {
            // A small, distance-weighted force gives nearby nodes a gentle magnetic response.
            const force = (1 - distance / MOUSE_DISTANCE) * 0.018;
            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;

            const alpha = (1 - distance / MOUSE_DISTANCE) * 0.35;
            context.beginPath();
            context.moveTo(pointer.x, pointer.y);
            context.lineTo(particle.x, particle.y);
            context.strokeStyle = `rgba(4, 120, 87, ${alpha})`;
            context.lineWidth = 0.8;
            context.stroke();
          }
        }

        // Keep movement calm and bounded after the pointer nudges a particle.
        particle.vx *= 0.995;
        particle.vy *= 0.995;
        particle.vx = Math.max(-MAX_PARTICLE_SPEED, Math.min(MAX_PARTICLE_SPEED, particle.vx));
        particle.vy = Math.max(-MAX_PARTICLE_SPEED, Math.min(MAX_PARTICLE_SPEED, particle.vy));
        const speed = Math.hypot(particle.vx, particle.vy);
        if (speed < MIN_PARTICLE_SPEED) {
          const angle = Math.random() * Math.PI * 2;
          particle.vx = Math.cos(angle) * MIN_PARTICLE_SPEED;
          particle.vy = Math.sin(angle) * MIN_PARTICLE_SPEED;
        }
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
        particle.x = Math.max(0, Math.min(width, particle.x));
        particle.y = Math.max(0, Math.min(height, particle.y));

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = particle.color;
        context.globalAlpha = particle.opacity;
        context.fill();
        context.globalAlpha = 1;

        for (let j = i + 1; j < particles.length; j += 1) {
          const other = particles[j];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (distance < PARTICLE_LINK_DISTANCE) {
            const alpha = (1 - distance / PARTICLE_LINK_DISTANCE) * 0.18;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(3, 105, 161, ${alpha})`;
            context.lineWidth = 0.8;
            context.stroke();
          }
        }
      }

      animationFrame = window.requestAnimationFrame(draw);
    };

    const start = () => {
      if (running || document.hidden) return;
      running = true;
      animationFrame = window.requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      window.cancelAnimationFrame(animationFrame);
    };
    const onVisibilityChange = () => (document.hidden ? stop() : start());

    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('visibilitychange', onVisibilityChange);
    start();

    return () => {
      stop();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <>
      <div className="particle-aura-background" aria-hidden="true" />
      <canvas
        ref={canvasRef}
        className="full-page-particle-background fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />
    </>
  );
};

export default FullPageParticleBackground;
