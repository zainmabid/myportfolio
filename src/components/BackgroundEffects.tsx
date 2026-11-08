import React, { useEffect, useState } from 'react';

export const BackgroundEffects: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    let animationFrameId: number;
    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const loop = () => {
      // Smooth lerp follow
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      setMousePos({ x: Math.round(currentX), y: Math.round(currentY) });
      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
      {/* 1. Subtle Interactive Mouse Spotlight Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full transition-opacity duration-300 pointer-events-none opacity-40 dark:opacity-60 blur-[80px]"
        style={{
          transform: `translate3d(${mousePos.x - 300}px, ${mousePos.y - 300}px, 0)`,
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
          willChange: 'transform'
        }}
      />

      {/* 2. Floating Ambient Glow Orb 1 (Top-Right drifting) */}
      <div className="animate-float-1 absolute -top-40 -right-40 w-[550px] h-[550px] rounded-full bg-[var(--accent)]/15 dark:bg-[var(--accent)]/20 blur-[130px] will-change-transform" />

      {/* 3. Floating Ambient Glow Orb 2 (Mid-Left drifting) */}
      <div className="animate-float-2 absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--secondary)]/15 dark:bg-[var(--accent)]/15 blur-[120px] will-change-transform" />

      {/* 4. Bottom Ambient Orb */}
      <div className="animate-float-1 absolute -bottom-40 right-1/4 w-[450px] h-[450px] rounded-full bg-[var(--accent)]/10 dark:bg-[var(--accent)]/15 blur-[110px] will-change-transform" />

      {/* 5. Precision Technical Grid / Dot Matrix Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.055]"
        style={{
          backgroundImage: `
            radial-gradient(var(--ink) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px'
        }}
      />
    </div>
  );
};
