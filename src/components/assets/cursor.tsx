'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTheme } from 'next-themes';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        scale: 1.2,
        duration: 0.2,
        ease: 'power3.out',
      });
    };

    const click = () => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        scale: 0.8,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
      });
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', click);

    // Hide the default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', click);
      document.body.style.cursor = 'none';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-5 h-5 rounded-full pointer-events-none z-50 transition-colors duration-300 
        ${resolvedTheme === 'dark' ? 'bg-white/80' : 'bg-black/80'}`}
    />
  );
};

export default Cursor;
