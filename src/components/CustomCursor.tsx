'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Disable custom cursor on mobile touch screens
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const label = labelRef.current;
    if (!cursor || !label) return;

    // Set initial custom cursor location
    gsap.set(cursor, { 
      xPercent: -50, 
      yPercent: -50, 
      x: window.innerWidth / 2, 
      y: window.innerHeight / 2 
    });

    // Use gsap.quickTo for ultra-smooth GPU hardware-accelerated rendering
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3.out" });

    const moveCursor = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    const handleProjectHover = () => {
      gsap.to(cursor, {
        width: 100,
        height: 100,
        backgroundColor: '#111111',
        borderColor: '#111111',
        duration: 0.25,
        ease: 'power2.out',
      });
      gsap.to(label, {
        opacity: 1,
        color: '#FAF9F6',
        scale: 1,
        duration: 0.25,
      });
    };

    const handleProjectLeave = () => {
      gsap.to(cursor, {
        width: 8,
        height: 8,
        backgroundColor: 'transparent',
        borderColor: '#111111',
        duration: 0.25,
        ease: 'power2.out',
      });
      gsap.to(label, {
        opacity: 0,
        scale: 0.5,
        duration: 0.25,
      });
    };

    const updateListeners = () => {
      const targets = document.querySelectorAll('.project-hover-target');
      targets.forEach((target) => {
        target.addEventListener('mouseenter', handleProjectHover);
        target.addEventListener('mouseleave', handleProjectLeave);
      });
    };

    updateListeners();

    const observer = new MutationObserver(updateListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
      const targets = document.querySelectorAll('.project-hover-target');
      targets.forEach((target) => {
        target.removeEventListener('mouseenter', handleProjectHover);
        target.removeEventListener('mouseleave', handleProjectLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 rounded-full border border-[#111111] bg-transparent flex items-center justify-center -translate-x-1/2 -translate-y-1/2 hidden md:flex"
      style={{
        width: '8px',
        height: '8px',
        top: 0,
        left: 0,
        willChange: 'transform, width, height, background-color, border-color',
        transform: 'translate3d(0, 0, 0)'
      }}
    >
      <span
        ref={labelRef}
        className="text-[9px] tracking-widest uppercase font-semibold text-[#FAF9F6] opacity-0 scale-50 select-none"
      >
        View
      </span>
    </div>
  );
}
